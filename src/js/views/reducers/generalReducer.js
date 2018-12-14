module.exports = (state = {
    loading: {
        show: false,
        text: '',
        status: 0
    }
}, action)=>{
    switch(action.type){
        case 'LOADING_SHOW':
            state.loading = {text:action.text, show: true, status: 0}
            return Object.assign({},state);
        break;
        case 'LOADING_HIDE':
            state.loading = Object.assign({}, state.loading, {show:false});
            return Object.assign({},state);
        break;
        case 'LOADING_DONE':
        console.log("DONE")
            state.loading = Object.assign({}, state.loading, {status:1});
            return Object.assign({},state);
        break;
        default:
            return state;
    }
}