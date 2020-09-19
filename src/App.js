import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: '',
    };
    this.getGeolocation();
  }

  getGeolocation() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({
          latitude,
          longitude,
        }),
      ({ message }) => this.setState({ error: message })
    );
  }

  render() {
    const { latitude, longitude, error } = this.state;
    return (
      <div>
        {error ? (
          <p style={{ color: 'palevioletred' }}>Error: {error}</p>
        ) : (
          <div>
            {latitude && longitude ? (
              <>
                <p>Latitude: {latitude}</p>
                <p>Longtitude: {longitude}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
