import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-brand">
                    <h2 className="footer-logo">LYEL</h2>
                    <p className="footer-desc">Redefining modern luxury through minimalist design, sustainable premium linen, and pure cotton fabrics.</p>
                </div>
                
                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Linen Shirts</a></li>
                            <li><a href="#">Cotton Tops</a></li>
                            <li><a href="#">Collections</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Journal</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                            <li><a href="#">Size Guide</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} LYEL. All Rights Reserved.</p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
