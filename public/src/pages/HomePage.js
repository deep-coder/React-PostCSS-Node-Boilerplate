/**
 * Created by deepcoder on 21/12/16.
 */
import React from 'react';
import HomePageComponent from '../components/HomePage';
import HeaderContainer from '../containers/HeaderContainer.js';

const HomePage = () => {
  return (
    <div>
      <HeaderContainer/>
      <HomePageComponent/>
    </div>
  );
}

export default HomePage;