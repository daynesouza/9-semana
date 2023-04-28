import Home from 'pages/Home';
import PaginaPadrao from 'pages/PaginaPadrao';
import Sorteados from 'pages/Sorteados';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path='sorteados' element={<Sorteados />} />
                </Route>
            </Routes>
        </Router>
    )
}