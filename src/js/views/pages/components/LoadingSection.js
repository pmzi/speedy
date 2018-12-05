const React = require('react');

const LoadingArea = require('./LoadingArea');

class LoadingSection extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            show: false
        }

    }

    componentDidUpdate(){
        if(this.state.show){
            this.refs.loadingSection.classList.remove('none');
            setTimeout(()=>{
                this.refs.loadingSection.classList.remove('loadingSection--hidden');
            },100)
        }else{
            this.refs.loadingSection.classList.add('loadingSection--hidden');
            setTimeout(()=>{
                this.refs.loadingSection.classList.add('none');
            },500)
        }
    }

    render(){
        return  (
            <div ref='loadingSection' className='loadingSection loadingSection--hidden none'>
                <div className='loadingSection__box'>
                    <LoadingArea />
                </div>
            </div>
        );
    }

}

module.exports = LoadingSection;