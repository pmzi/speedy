const React = require('react');

const {connect} = require('react-redux');

class MonacoEditor extends React.Component{

    constructor(props){
        super(props)

        this._editor;
    }

    componentDidMount() {      

        const path = require('path');

		const amdLoader = require('../../../../../node_modules/monaco-editor/min/vs/loader.js');
		const amdRequire = amdLoader.require;
		const amdDefine = amdLoader.require.define;
		function uriFromPath(_path) {
			var pathName = path.resolve(_path).replace(/\\/g, '/');
			if (pathName.length > 0 && pathName.charAt(0) !== '/') {
				pathName = '/' + pathName;
			}
			return encodeURI('file://' + pathName);
		}
		amdRequire.config({
			baseUrl: uriFromPath(path.join(__dirname, '../../../../../node_modules/monaco-editor/min'))
		});
		// workaround monaco-css not understanding the environment
        self.module = undefined;
        

        let selectedLanguage = this.props.language.toLowerCase() || 'javascript';

		amdRequire(['vs/editor/editor.main'], ()=>{
			this._editor = monaco.editor.create(document.getElementById(this.props.id), {
                value: ``,
                language: selectedLanguage,
                theme:'vs-dark'
            });

            window[this.props.id] = this._editor;

            window.addEventListener('resize',()=>{
                this._editor.layout();                
            }
        )
        });

    }

    componentDidUpdate(){
        // let selectedLanguage = this.props.selectedLanguage.latinName.toLowerCase();
        // monaco.editor.setModelLanguage(this._editor.getModel(), selectedLanguage)
        console.log('s')
        monaco.editor.setModelLanguage(this._editor.getModel(), this.props.language.toLowerCase() || 'javascript')

        this.editor.layout();
    }

    get editor(){
        return this._editor;
    }
    
    render(){
        return (
            <div id={this.props.id} className={this.props.className}></div>
        );
    }

}

module.exports = connect((state)=>{
    return state.general;
})(MonacoEditor);