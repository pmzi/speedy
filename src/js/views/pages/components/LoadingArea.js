const React = require('react');

class LoadingArea extends React.Component{

    constructor(props){
        super(props);

        /*
            Status 0 -> BeingLoaded
            Status 1 -> Loaded
        */

        this.state = {
            status: 0
        }

        let statusClass = this.statusClass;
        let statusText = this.statusText;

        this.state = {
            status: 0,
            class: statusClass,
            text: statusText
        }
        
    }

    get statusClass(){
        switch(this.state.status){
            case 0:
                return 'loadingArea--being';
            case 1:
                return 'loadingArea--done';
        }
    }

    get statusText(){
        switch(this.state.status){
            case 1:
                return 'Calculated';
            default: 
                return 'Calculating...';
        }
    }

    render(){
        return  (
            <div className={`loadingArea ${this.state.class}`}>
                <div className='loadingArea__text'>
                    {this.state.text}
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