import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginAsHafeez } from '../../actions/LoginAsHafeez';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageName: 'Home',
    };
  }

  componentDidMount() {
    const body = {
      login: 'hafeez1042@gmail.com',
      password: 'password',
    };
  }
  
  render() {
    return (
      <div>
        <h1>This is {this.state.PageName} page</h1>
        <Link to="/test1" >Test 1</Link>
        <Link to="/test2" >Test 2</Link>

        {/* <button onClick={() => { this.props.LoginAsHafeez(); }} >Login as Hafeez</button> */}
      </div>
    );
  }
}

export default connect(null, { LoginAsHafeez })(Home);
