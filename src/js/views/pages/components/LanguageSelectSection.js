const React = require('react');

const {connect} = require('react-redux');

class LanguageSelectSection extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            show: true
        };
    }

    render(){

        return (<div ref='wrapper' className={`languageSelectSection${this.state.show? '' : ' languageSelectSection--hidden none'}`}>

            <div className='languageSelectSection__box'>
                <h2 className='languageSelectSection__heading'>
                    Choose Your Language:
                </h2>
                <ul ref='languageList' className='languageSelectSection__languageList'>
                    <li data-value='JavaScript'>
                        JavaScript
                    </li>
                    <li data-value='C'>
                        C/C++
                    </li>
                    <li data-value='PHP'>
                        PHP
                    </li>
                </ul>
            </div>

        </div>);

    }

    componentDidMount(){
        this.refs.languageList.addEventListener('click', (e)=>{
            if(e.target.tagName == 'LI'){

                let language = e.target.dataset.value;

                // Dispatch language

                this.updateLanguage(language);

                // Let's hide the box

                this.hide();

            }
        })
    }

    updateLanguage(language){
        this.props.dispatch({
            type:'UPDATE_LANGUAGE',
            language
        });
    }

    hide(){

        this.setState({
            show: false
        });

        setTimeout(()=>{
            this.refs.wrapper.classList.add('none');
        },300);

    }

}

module.exports = connect((state)=>{
    return state.general;
})(LanguageSelectSection);