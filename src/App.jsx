import './App.css';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    );
}

export default App;
