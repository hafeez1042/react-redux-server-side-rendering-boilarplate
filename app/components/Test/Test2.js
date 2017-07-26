import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginAsHafeez } from '../../actions/LoginAsHafeez';
import { Link } from 'react-router';

class Test2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageName: 'Test2',
    };
  }

  componentDidMount() {
    console.log(this.props.dummy);

  }
  
  render() {
    return (
      <div>
        <h1>This is {this.state.PageName} page</h1>
        {/* <button onClick={() => { this.props.LoginAsHafeez(); }} >Login as Hafeez</button> */}
        <Link to="/test1">Test 1</Link>
        <Link to="/">Home</Link>

      </div>
    );
  }
}

const mapStateToProps = ({ dummy }) => {
  return { dummy };
};

export default connect(mapStateToProps)(Test2);
