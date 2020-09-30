import React, { Component } from 'react';

const PictureContext = React.createContext();
// <PictureContext.Provider value={}

export default class PictureProvider extends Component {

  state={
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  render() {
    return (
      <PictureContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </PictureContext.Provider>
    )
  }
}

const PictureConsumer = PictureContext.Consumer;

export{ PictureProvider, PictureConsumer, PictureContext };