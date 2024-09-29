import React from 'react';

import {
  Link // You can still use Link the same way
} from "react-router-dom";

function Menu() {
  return (
    <nav 
    role="navigation"
    aria-label="Main menu"
    itemScope
    itemType="https://schema.org/SiteNavigationElement"
    >
      <ul>
        <li><Link itemProp="url" to ="/">Home</Link></li>
        <li><Link itemProp="url" to ="/about">About</Link></li>
        <li><Link itemProp="url" to ="/login">Login</Link></li>
    </ul>
</nav>
  );
}

export default Menu;
