import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../../style/components/header.pcss';


class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps) {

  }


  render() {

    return (
      <div>
        Header
      </div>
    )
      ;
  }
}

export default Header