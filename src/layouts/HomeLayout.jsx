import React from 'react';
import PropTypes from 'prop-types';
import HomeNavbar from '../components/HomeNavbar/HomeNavbar';
import HomeHero from '../components/HomeHero/HomeHero';
import HomeProgenitor from '../components/HomeProgenitor/HomeProgenitor';
import HomeCalendar from '../components/HomeCalendar/HomeCalendar';
import FooterPrimary from '../components/FooterPrimary/FooterPrimary';

const HomeLayout = ({ children }) => {
  return (
      <div>
        <HomeNavbar />
        <HomeHero />
        <HomeProgenitor />
        <HomeCalendar />
        <main>{children}</main>
        <FooterPrimary />
      </div>
  );
};

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HomeLayout;

