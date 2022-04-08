import { Link } from "react-router-dom";
import '../styles.scss';

const Header: React.FC = () => {
    return (
        <header>
            <Link className="logo" to="/#">Best Movies App</Link>
            <Link className="favoritos" to="/favoritos">Salvos</Link>
        </header>
    )
}

export default Header;