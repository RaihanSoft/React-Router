import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Header from "../Hearder/Header"

const Home = () => {
  return (
    <div className="text-center font-bold text-xl">


      <Navbar />
      <Header />
      <Outlet />
      <Footer />


    </div>
  )
}

export default Home
