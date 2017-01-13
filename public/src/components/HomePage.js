/**
 * Created by deepcoder on 21/12/16.
 */
import React, { Component,PropTypes } from 'react';
import styles from '../../style/components/HomePage.pcss';
import Carousel from 'nuka-carousel';

/*Todo Put Carousel Everything in Map*/


class HomePageComponent extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div className={styles['home-page-container']}>
        HomePage
      </div>
    );
  }
}

export default HomePageComponent;

