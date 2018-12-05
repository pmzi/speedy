const React = require('react');

const Button = require('./Button');
const MonacoEditor = require('./MonacoEditor');

class MainSection extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            isSingle: true,
            isCompare: false
        }
    }

    render(){
        return (<React.Fragment>
            
            <header className='header mainSection__header'>
                <Button onClick={this.showSingle.bind(this)} active={this.state.isSingle} isUnderline={true} value='Single' />
                <Button onClick={this.showCompare.bind(this)} active={this.state.isCompare} isUnderline={true} value='Compare' />
            </header>

            <div className='main mainSection__main'>
                <div className={`mainSection__slidesCont${this.state.isSingle?' mainSection__slidesCont--singleActive':' mainSection__slidesCont--compareActive'}`}>
                    <div className='mainSection__slide mainSection--active'>
                        
                        <div className='mainSection__slideCont'>
                            <h3>
                                Your Code:
                            </h3>


                            <MonacoEditor id='monacoSingleEditor' className='mainSection__editor' />
                        </div>

                        <div className='mainSection__slideAction'>
                            <Button  value='<Calculate />' />
                        </div>

                    </div>
                    <div className='mainSection__slide'>
                        
                        <div className='mainSection__slideCont'>
                            <div className='mainSection__compareSection'>
                                <h3>
                                    Your Code:
                                </h3>


                                <MonacoEditor id='monacoCompareEditor' className='mainSection__editor' />

                            </div>

                            <div className='mainSection__compareVS'>
                                VS
                            </div>

                            <div className='mainSection__compareSection'>
                                <h3>
                                    Your Code:
                                </h3>


                                <MonacoEditor id='monacoSingleEditorVS' className='mainSection__editor' />

                            </div>
                        </div>

                        <div className='mainSection__slideAction'>
                            <Button  value='<Compare />' />
                        </div>

                    </div>
                </div>
            </div>

            <footer className='footer mainSection__footer'>

            </footer>

        </React.Fragment>);
    }

    showSingle(){
        this.setState({
            isSingle: true,
            isCompare: false
        })
    }

    showCompare(){
        this.setState({
            isSingle: false,
            isCompare: true
        })
    }

}

module.exports = MainSection;