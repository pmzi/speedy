const React = require('react');

const {connect} = require('react-redux');

class Result extends React.Component{

    constructor(props){

        super(props);

    }

    render(){
        return  (
            <div className={`result ${this.props.show?'result--show':''}`}>
                <i className='material-icons result__closeBtn' onClick={this.close.bind(this)}>close</i>
                <header className='result__header'>
                    Result
                </header>
                <div className='result__columnWrapper'>
                    {this.columns}
                </div>
                <div className={`result__compareResult ${this.props.sign.trim()!=''?'result__compareResult--show':''}`}>
                    <h3>
                        Compare Result:
                    </h3>
                    <span>
                        (1) {this.props.sign != ''?this.props.sign:''} (2)
                    </span>
                </div>
            </div>
        );
    }

    get columns(){

        const columns = [];

        let i =0;

        for(let item of this.props.functions){

            columns.push(<div key={i} className='result__column'>
                <h3 className='result__column-header'>
                    Function
                </h3>
                <div className='result__column-function'>
                    {item}
                </div>
            </div>);

            i++;

        }
        
        return columns;
    }

    close(){
        this.props.dispatch({
            type:'HIDE_RESULT'
        });
    }

}

module.exports = connect((state)=>{
    return state.result;
})(Result);