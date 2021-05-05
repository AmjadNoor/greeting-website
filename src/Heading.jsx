import React, {
  Component
} from 'react';
import Greets from './Greet';

class Heading extends Component {
  render() {
    return (
      <>
      <h1>Hello user, website is still on development.{Greets()}</h1> < />
    );
  }
}

export default Heading;