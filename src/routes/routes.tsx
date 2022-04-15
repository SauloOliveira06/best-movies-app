import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header';
import { Home } from '../pages/Home'
import { DetailsMovies } from '../pages/DetailsMovies'
import { Favoritos } from '../pages/Favoritos';

const RoutesApp: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:id' element={<DetailsMovies />} />
                <Route path='/favoritos' element={<Favoritos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;