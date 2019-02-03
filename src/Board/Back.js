import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Back extends Component {

  render() {
    return this.props.back.map((element, index) => {
      return (
        <div key={index}>
          <Button bsSize="large"
            block
          >
            {element}
          </Button>
        </div>
      )
    })
  }

}

export default Back;
