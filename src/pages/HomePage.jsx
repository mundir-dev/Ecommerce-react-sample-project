import React from 'react'
import Announcement from '../components/announcement/Announcement'
import Categories from '../components/category/Categories'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Newsletter from '../components/newsletter/Newsletter'
import Products from '../components/product/Products'
import Slider from '../components/slider/Slider'

const Homepage = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Homepage
