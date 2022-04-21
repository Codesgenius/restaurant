import React from 'react'
import Header from '../sections/Home/Header'
import About from '../sections/Home/About'
import Products from '../sections/Home/Products'
import Footer from '../sections/Home/Footer'

const Home = () => {
    return (
        <div className='main'>
            <Header />
            <About />
            <Products />
            <Footer />
        </div>
    )
}

export default Home