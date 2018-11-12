import React, {PropTypes} from 'react';
import Header from './common/header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        {/* these will be passed in from React Router */}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
