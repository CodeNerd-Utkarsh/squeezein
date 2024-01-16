import React from 'react'
import Navbar from './Navbar'
import HeroText from './HeroText'
import SearchBar from './SearchBar'

function HeroSection() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between  p-20  bg-slate-200">
            <Navbar />
            <HeroText />
            <SearchBar />
        </main>
    )
}

export default HeroSection