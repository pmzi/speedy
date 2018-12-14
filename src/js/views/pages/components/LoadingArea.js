const React = require('react');

class LoadingArea extends React.Component{

    constructor(props){
        super(props);

        /*
            Status 0 -> BeingLoaded
            Status 1 -> Loaded
        */
        
    }

    get statusText(){
        switch(this.props.status){
            case 0:
                return `${this.props.text}...`;
            case 1:
                return 'Done'
        }
    }

    get statusClass(){
        switch(this.props.status){
            case 0:
                return 'loadingArea--being';
            case 1:
                return 'loadingArea--done';
        }
    }

    render(){
        return  (
            <div className={`loadingArea ${this.statusClass}`}>
                <div className='loadingArea__text'>
                    {this.statusText}
                </div>
                <div className='loadingArea__wave'>

                </div>
                <div className='loadingArea__wave'>

                </div>
                <div className='loadingArea__wave'>

                </div>
            </div>
        );
    }

}

module.exports = LoadingArea;