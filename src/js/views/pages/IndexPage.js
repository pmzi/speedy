const React = require('react');
const LoadingSection = require('./components/LoadingSection');
const LanguageSelectSection = require('./components/LanguageSelectSection');
const MainSection = require('./components/MainSection');
const Result = require('./components/Result');
class IndexPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Result />
        <LoadingSection />
        <LanguageSelectSection />
        <main className='indexPage'>
          <MainSection />
        </main>
      </React.Fragment>
    );
  }

}

module.exports = IndexPage;