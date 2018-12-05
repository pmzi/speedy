const React = require('react');

class Button extends React.Component{
    render(){
        return (
            <button
            onClick={this.props.onClick}
            className={`button${this.props.isUnderline?' button--underLine':''}${this.props.active?' button--active':''}`}>
                {this.props.value}
            </button>
        )
    }
}

module.exports = Button;