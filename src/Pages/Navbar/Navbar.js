import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../Assets/white_logo.png';
import { Link} from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 

    // const handleOpenContactUs = () => {
    //   setIsContactUsVisible(true);
    // };
  
    // const handleCloseContactUs = () => {
    //   setIsContactUsVisible(false);
    // };
    const navLinks = [
        // { text: 'Solutions', href: '#' },
        // { text: 'Resources', href: '#' },
        // { text: 'Company', href: '#' },
    ];
    // const navigate = useNavigate();
    const handleContactClick = () => {
        const emailTo1 = 'anupam.srivastava@global-csg.com';
        const emailTo2 = 'deepak.kashyap@global-csg.com';
        const emailCc = 'amala.lizy@global-csg.com';
        
        const mailtoLink = `mailto:${emailTo1};${emailTo2}?cc=${emailCc}`;
        
        window.location.href = mailtoLink;
    };
    // const handleContactClick = () => {
    //     const emailTo1 = 'support@yourdomain.com'; // Replace with your primary support email
    //     const emailTo2 = 'sales@yourdomain.com';   // Replace with your sales email
    //     const emailCc = 'admin@yourdomain.com';    // Replace with your admin email for CC

    //     const mailtoLink = `mailto:${emailTo1};${emailTo2}?cc=${emailCc}`;
    //     window.location.href = mailtoLink;
    // };
    
    // const handleContactClick = () => {
    // //   navigate('/contact');
    //   setIsContactUsVisible(true)
    // };
    return (
        <nav className="navbar-container fixed top-0  pl-4 pr-4">
            {/* Logo */}
            <div className="logo">
            <img src={logo} alt="Logo" className="logo"   />
            </div>

            {/* Desktop Navigation */}
            <div className="nav-items">
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="nav-link">
                        {link.text}
                    </Link>
                ))}
                 <button onClick={handleContactClick} className="contact-btn">
                    CONTACT US
                </button>
                {/* {isContactUsVisible && <ContactUs onClose={handleCloseContactUs} />} */}
               
            </div>

            {/* Mobile Menu Button */}
            <button
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href} className="block nav-link">
                            {link.text}
                        </a>
                    ))}
                    <a href="#contact" className="block contact-btn mt-4">
                        CONTACT US
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;