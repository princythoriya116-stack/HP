import React from 'react';
import Header from './Header';
import Footer from './Footer';
import heroLinen from '../assets/hero_linen.png';

export default function App() {
    return (
        <>
            <Header />
            <main>
                {/* NEW SPLIT HERO SECTION */}
                <section className="split-hero">
                    <div className="hero-text">
                        <h1 className="hero-title">Pure Linen.<span>Organic Cotton.</span></h1>
                        <p className="hero-desc">Discover effortless style with our new collection. Crafted from the finest sustainable
                            materials for unparalleled comfort and modern elegance.</p>
                        <a href="/shop" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Shop Now</a>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src={heroLinen} alt="Pure Linen Collection" className="hero-image" />
                    </div>
                </section>

                {/* ETHOS SECTION */}
                <section className="ethos-section">
                    <div className="ethos-content">
                        <h2 className="ethos-heading">Breathable Luxury</h2>
                        <p className="ethos-text">We believe in the power of natural fibers. Our garments are meticulously tailored from
                            100% pure European linen and GOTS-certified organic cotton, ensuring a lightweight feel that only gets
                            softer with time. Designed for the modern woman who values both aesthetics and sustainability.</p>
                    </div>
                </section>

                {/* PRODUCT GRID */}
                <section className="product-section">
                    <div className="product-grid">
                        {/* Product 1 */}
                        <div className="product-card">
                            <div className="product-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&q=80&w=600"
                                    alt="Classic White Linen Shirt" className="product-image" />
                            </div>
                            <div className="product-info">
                                <div>
                                    <h3 className="product-name">The Classic Linen</h3>
                                    <span className="product-category">Shirts</span>
                                </div>
                                <span className="product-price">$145</span>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="product-card">
                            <div className="product-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&q=80&w=600"
                                    alt="Organic Cotton Boxy Top" className="product-image" />
                            </div>
                            <div className="product-info">
                                <div>
                                    <h3 className="product-name">Cotton Boxy Top</h3>
                                    <span className="product-category">Tops</span>
                                </div>
                                <span className="product-price">$95</span>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="product-card">
                            <div className="product-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&q=80&w=600"
                                    alt="Oversized Linen Blouse" className="product-image" />
                            </div>
                            <div className="product-info">
                                <div>
                                    <h3 className="product-name">Oversized Blouse</h3>
                                    <span className="product-category">Shirts</span>
                                </div>
                                <span className="product-price">$160</span>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="product-card">
                            <div className="product-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?auto=format&fit=crop&q=80&w=600"
                                    alt="Textured Cotton Tunic" className="product-image" />
                            </div>
                            <div className="product-info">
                                <div>
                                    <h3 className="product-name">Cotton Tunic</h3>
                                    <span className="product-category">Tops</span>
                                </div>
                                <span className="product-price">$110</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CATEGORY BANNERS */}
                <section className="category-banners">
                    <a href="/shop-linen" className="cat-banner">
                        <img src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&q=80&w=1000"
                            alt="Shop Linen" />
                        <h2 className="cat-banner-title">Shop Linen</h2>
                    </a>
                    <a href="/shop-cotton" className="cat-banner">
                        <img src="https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&q=80&w=1000"
                            alt="Shop Cotton" />
                        <h2 className="cat-banner-title">Shop Cotton</h2>
                    </a>
                </section>
            </main>
            <Footer />
        </>
    );
}
