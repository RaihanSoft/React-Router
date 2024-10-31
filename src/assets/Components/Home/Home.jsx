import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Header from "../Hearder/Header"

const Home = () => {
  const navigation = useNavigation()
  const loacation = useLocation()
  return (

    <div className="text-center font-bold text-xl">


      <Navbar />
      <Header />

      {
        navigation.state === "loading" ?
          <p>Loading.....</p> :
          <Outlet />
      }

      <Footer />


    </div>
  )
}

export default Home
