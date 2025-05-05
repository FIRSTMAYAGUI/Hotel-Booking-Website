/* eslint-disable no-unused-vars */

import AboutImages from "./components/AboutImages"
import AboutText from "./components/AboutText"
import BookingSection from "./components/BookingSection"
import CardPrice from "./components/CardPrice"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import RoomOne from "./assets/images/room-1.jpg"
import RoomTwo from "./assets/images/room-2.jpg"
import RoomThree from "./assets/images/room-3.jpg"


function App() {

  return (
    <>
      <header className="bg-[url('./assets/images/header.jpg')] bg-cover bg-center h-screen relative before:absolute before:bg-[#0202204f] before:w-full before:h-full" id="home">
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
        <section className="flex justify-end h-screen pt-24 px-1 relative" id="about">
          <AboutImages/>
          <AboutText/>
        </section>

        <section className="h-screen mt-24" id="room">
          <h1 className="text-2xl text-center">Rooms</h1>
          <h2 className="text-4xl font-bold text-center">Hand Picked Rooms</h2>
          <div className="mt-12 flex items-center justify-evenly">
            <CardPrice
              img={RoomOne}
              title="Deluxe suite"
              description="Well-appointed rooms designed for guests who desire a more."
              price="$399/night"
            />
            <CardPrice
              img={RoomTwo}
              title="Family Suite"
              description="Consist of multiple rooms and a common living area."
              price="$599/night"
            />
            <CardPrice
              img={RoomThree}
              title="Luxury Penthouse"
              description="Top-tier accommodations usually on the highest floors of a
                hotel."
              price="$799/night"
            />
          </div>

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
