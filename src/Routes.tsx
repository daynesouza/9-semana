import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Cadastro />} />
                </Route>
            </Routes>
        </Router>
    )
}