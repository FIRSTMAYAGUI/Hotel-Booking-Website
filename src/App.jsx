/* eslint-disable no-unused-vars */

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <header className="bg-[url(./assets/header.jpg)] bg-cover bg-center h-screen relative before:absolute before:bg-[#0202204f] before:w-full before:h-full" id="home">
        <div className="h-[70px] bg-darkblue relative">
          <Navbar/>
        </div>
        <div className='h-screen flex items-center'>
          <Hero/>
        </div>
      </header>
      
      <main>
        <section className="h-screen flex flex-col items-center justify-center" id="about">
          <h1 className="text-7xl">About section here</h1>
        </section>

        <section className="h-screen flex flex-col items-center justify-center" id="room">
          <h1 className="text-7xl">Room section</h1>
        </section>

        <section className="h-screen flex flex-col items-center justify-center" id="features">
          <h1 className="text-7xl">Features section</h1>
        </section>

        <section className="h-screen flex flex-col items-center justify-center" id="menu">
          <h1 className="text-7xl">Menu section</h1>
        </section>

      </main>
    </>
  )
}

export default App
