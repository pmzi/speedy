const React = require('react');
const LoadingSection = require('./components/LoadingSection');
const LanguageSelectSection = require('./components/LanguageSelectSection');
const MainSection = require('./components/MainSection');

class IndexPage extends React.Component {

  render() {
    return (
      <React.Fragment>
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