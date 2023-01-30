import { Link } from 'react-router-dom';
import './Navbar.css';
export const Navbar = () => {
    return (
        <div>
            <h1>sirius</h1>
            <hr/>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/entrar">Entrar</Link>
            </nav>
        </div>
    )
}