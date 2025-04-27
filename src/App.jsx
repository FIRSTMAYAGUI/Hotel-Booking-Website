/* eslint-disable no-unused-vars */

import BookingSection from "./components/BookingSection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <header className="bg-[url(./assets/images/header.jpg)] bg-cover bg-center h-screen relative before:absolute before:bg-[#0202204f] before:w-full before:h-full" id="home">
        <div className="h-[70px] bg-darkblue relative">
          <Navbar/>
        </div>
        <div className='h-screen flex items-center'>
          <Hero/>
        </div>
      </header>
      
      <div className="flex justify-center items-center w-full bg-darkblue text-white h-[12rem]">
        <BookingSection/>
      </div>
      <main>
        <section className="h-screen" id="about">
          <h1 className="text-7xl text-center">About section here</h1>
        </section>

        <section className="h-screen" id="room">
          <h1 className="text-7xl text-center">Room section</h1>
        </section>

        <section className="h-screen" id="features">
          <h1 className="text-7xl text-center">Features section</h1>
        </section>

        <section className="h-screen" id="menu">
          <h1 className="text-7xl text-center">Menu section</h1>
        </section>

      </main>
    </>
  )
}

export default App
