const React = require('react');
const LoadingSection = require('./components/LoadingSection');

class IndexPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <LoadingSection />
        <main className='indexPage'>
          
        </main>
      </React.Fragment>
    );
  }

}

module.exports = IndexPage;