import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Add, Remove } from './reducer/action';
import List from './components/list';
import TextList from './components/textList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          <List add={(text) => {
            this.props.dispatch(Add(text))
          }}/>
          <TextList
           list={this.props.list}
           remove={(index) => {
             this.props.dispatch(Remove(index))
           }}/>
      </div>
    );
  }
}
function select (data) {
  return {
    list: data
  }
}
export default connect(select)(App);
