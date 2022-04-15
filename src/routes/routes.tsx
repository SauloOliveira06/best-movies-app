import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header';
import { Home } from '../pages/Home'
import { DetailsMovies } from '../pages/DetailsMovies'

const RoutesApp: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:id' element={<DetailsMovies />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;