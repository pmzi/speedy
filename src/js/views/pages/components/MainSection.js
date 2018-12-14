const React = require('react');

const Button = require('./Button');
const MonacoEditor = require('./MonacoEditor');

const Speedy = require('../helpers/Speedy');

const {connect} = require('react-redux');
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
                            <Button onClick={this.calculate.bind(this)} value='<Calculate />' />
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
                            <Button onClick={this.compare.bind(this)} value='<Compare />' />
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

    compare(){
        
        this.showLoading('Comparing');

        setTimeout(()=>{
            this.doneLoading();
        },1000)

    }

    calculate(){
     
        this.showLoading('Calculating');

        Speedy.calculate(window.monacoSingleEditor.getValue()).then((result)=>{
            
            result = result.replace(/\$\$/g,'');
            this.hideLoading();
            this.props.dispatch({
                type:'SHOW_RESULT',
                functions:[result]
            })
        })

    }

    showLoading(text){
        this.props.dispatch({
            type: 'LOADING_SHOW',
            text
        });
    }

    hideLoading(){
        this.props.dispatch({
            type: 'LOADING_HIDE'
        });
    }

    doneLoading(){
        this.props.dispatch({
            type: 'LOADING_DONE'
        });
    }

}

module.exports = connect((state)=>{
    return state.general;
})(MainSection);