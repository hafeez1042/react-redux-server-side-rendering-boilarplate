import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dummyData } from '../../actions/LoadDummyData';
import { Link } from 'react-router';

class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageName: 'Test1',
    };
  }

  componentDidMount() {
    console.log(this.props.dummy);
    // const body = {
    //   login: 'hafeez1042@gmail.com',
    //   password: 'password',
    // };
  }

  render() {
    return (
      <div>
        <h1>This is {this.state.PageName} page</h1>
        {/* <button onClick={() => { this.props.dummyData(); }} >Load Dummy Data</button>   */}
        <Link to="/test2">Test 2</Link>
        <Link to="/">Home</Link>

      </div>
    );
  }
}

const mapStateToProps = ({ dummy }) => {
  return { dummy };
};

export default connect(mapStateToProps)(Test1);
