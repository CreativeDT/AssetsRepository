import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-4 text-center text-white text-sm">
      <p>
        &copy; {currentYear} Creative Synergies Group. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;