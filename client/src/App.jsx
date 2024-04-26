// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/home';
// // import About from './components/About';
// // Import other components as needed
// import Footer from './pages/Footer/Footer'

// function App() {
//   // const queryClient = new QueryClient();
//   const Layout = () => {
//     return (
//       // <QueryClientProvider client={queryClient}>
//       <div>
//         <Footer />
//       </div>
//     );
//   };
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Add more routes here */}
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Footer from './pages/Footer/Footer';
import Navbar from './components/Navbar/navbar';
import "./App.scss";

function App() {
  // Define a layout component that includes the footer
  const Layout = ({ children }) => {
    return (
      <div>
      <Navbar />
        {children}
        
        <Footer />
      </div>
    );
  };

  return (
    <Router>
      {/* Wrap all routes with the Layout component */}
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;

