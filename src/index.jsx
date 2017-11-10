import React from 'react';
import PropTypes from 'prop-types';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const propTypes = {
  // eslint-disable-next-line
  mapProps: PropTypes.string.object,
  mapRef: PropTypes.func,
};

const defaultProps = {
  mapRef: () => {},
};

export default class ParseQueryMap extends React.Component {
  render() {
    return (
      /* withScriptjs(withGoogleMap(
        <GoogleMap
        {...this.props.mapProps}  
        />
      ))*/
      <div>Hello world</div>
    );
  }
}

ParseQueryMap.propTypes = propTypes;
ParseQueryMap.defaultProps = defaultProps;
