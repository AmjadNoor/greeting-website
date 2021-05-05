import React, {
  Component
} from 'react';
import Greets from './Greet';

class Heading extends Component {
  render() {
    return (
      <>
      <h1>Hello user{Greets()}</h1> < />
    );
  }
}

export default Heading;