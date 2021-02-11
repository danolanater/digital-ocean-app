import React from 'react'
import Header from './Header'
import Winners from './Winners'
import Home from './Home'
import PastWinners from './PastWinners'
import Footer from './Footer'

function App() {
    return (
        <div>
            <Header />
            <Home />
            <Winners />
            <PastWinners />
            <Footer />
        </div>
    )
}

export default App