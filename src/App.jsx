<<<<<<< HEAD
import { BrowserRouter,Routes,Route } from "react-router";
import "./App.css";
import Header from "./components/Header/Header"
import HomePage1 from "./components/Home/HomePage1/HomePage1";
import HomePage3 from "./components/Home/HomePage3/HomePage3";
import HomePage6 from "./components/Home/HomePage6/HomePage6";
import AboutUs2 from "./components/About/AboutUs2";
import AboutUs3 from "./components/About/AboutUs3";
// import HomePage8 from "./components/Home/HomePage8";
import HomePage2 from "./components/Home/HomePage2/HomePage2";
import HomePage9 from "./components/Home/HomePage9";
import AboutUs5 from "./components/About/AboutUs5";
import HomePage5 from "./components/Home/HomePage5";
import AboutUs1 from "./components/About/AboutUs1";
import HomePage4 from "./components/Home/HomePage4";
import AboutUs4 from "./components/About/AboutUs4";
import HomePgae78 from "./components/Home/HomePage8/HomePgae78";
=======
import "./App.css";

// TEMP: testing one homepage
import HomePage1 from "./components/home-page-1/HomePage1";
>>>>>>> 2a2fe4737b68e9e238683e7c321821895d8d991c

function App() {
  return (
    <div className="app">
<<<<<<< HEAD
      <Header/>
      <BrowserRouter>

      <Routes>
         <Route path="/" element={<><HomePage1/><HomePage2/><HomePage3/><HomePage4/><HomePage5/><HomePage6/><HomePgae78/><HomePage9/></>}/>
         <Route path="/about" element={<><AboutUs1/><AboutUs2/><AboutUs3/><AboutUs4/><AboutUs5/></>}/>
      </Routes>
          
      </BrowserRouter>
=======
      <HomePage1 />
>>>>>>> 2a2fe4737b68e9e238683e7c321821895d8d991c
    </div>
  );
}

export default App;
