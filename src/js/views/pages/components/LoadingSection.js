const React = require('react');

const LoadingArea = require('./LoadingArea');

const {connect} = require('react-redux');

class LoadingSection extends React.Component{

    componentDidUpdate(){
        this.updateShowCase();
    }

    componentDidMount(){
        this.updateShowCase();
    }

    updateShowCase(){
        if(this.props.show){
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
                    <LoadingArea text={this.props.text} status={this.props.status} />
                </div>
            </div>
        );
    }

}

module.exports = connect((state)=>{
    return state.general.loading;
})(LoadingSection);