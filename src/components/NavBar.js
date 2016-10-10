/*
  ES6
*/

import React from 'react'
import AppBar from 'material-ui/AppBar'

const NavBar = () => (
  <AppBar
    title="User Directory"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default NavBar

/*
  ES5
*/

// var React = require('react');
// var AppBar = require('material-ui/AppBar');
//
// var NavBar = function() {
//   return (
//     <AppBar
//       title="User Directory"
//       iconClassNameRight="muidocs-icon-navigation-expand-more"
//     />
//   );
// }
//
// export default NavBar