import React from 'react';
import Calendar from './Calendar';
import Timeline from './Timeline';
import Header from './Header';
import mapStateToProps from './../selectors';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
      console.log(this.props);
    return (
      <div>
        <Header />
        <div className="calendar-wrapper">
            <Calendar />
            <Timeline />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);
