import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import About from './pages/About/About.jsx';
import Store from './pages/Store/Store.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import Contact from './pages/Contact/Contact.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About style={{ marginTop: '150px' }} aboutText={true} />} />
        <Route path="/store" element={<Store style={{ marginTop: '150px' }} />} />
        <Route path="/contact" element={<Contact style={{ marginTop: '150px' }} />} />

        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
