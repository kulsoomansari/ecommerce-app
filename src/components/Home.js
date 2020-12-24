import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import '../css/Home.css';

export default function Home() {
    return (
        <div className='wrapper'>
            <Navbar />
            <Products/>
        </div>
    )
}
