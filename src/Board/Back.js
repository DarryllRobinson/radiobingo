import React, { Component } from 'react';

class Back extends Component {

  render() {
    return this.props.back.map((element, index) => {
      return (
        <div className="back"
          key={index}
        >
          {element}
        </div>
      )
    })
  }

}

export default Back;
