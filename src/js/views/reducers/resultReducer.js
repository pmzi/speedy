module.exports = (state={
    show: false,
    functions: ['f(x) = x*2', 'g(x)= x*3'],
    sign: '>'
}, action)=>{
    switch(action.type){
        case 'SHOW_RESULT':
            return Object.assign({}, state, {show: true, functions: action.functions, sign: action.sign});
        break;
        case 'HIDE_RESSULT':
            return Object.assign({}, state, {show: false, functions: [], sign:''});
        break;
        default:
            return state;
        brek;
    }
}