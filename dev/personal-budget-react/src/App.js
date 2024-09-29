// import React from 'react';
// import './App.css';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// import Menu from './Menu/Menu';
// import Hero from './Hero/Hero';
// import HomePage from './HomePage/HomePage';
// import Footer from './Footer/Footer';

// import AboutPage from './AboutPage/AboutPage';
// import LoginPage from './LoginPage/LoginPage';


// function App() {
//   return (
//     <Router>
//       <Menu/>
//       <Hero/>

//       <div className="mainContainer">
//         <Switch>
//           <Route path="/about">
//             <AboutPage/>
//           </Route>
//           <Route path="/login">
//             <LoginPage/>
//           </Route>
//           <Route path="/">
//             <HomePage/>
//           </Route>
//         </Switch>
//       </div>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes, // Replaced Switch with Routes
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';

import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu />
      <Hero />

      <div className="mainContainer">
        <Routes>
          {/* Updated Route to use 'element' prop */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
