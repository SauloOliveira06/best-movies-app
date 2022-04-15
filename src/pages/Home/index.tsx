import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from '../../services/api'
import '../styles.scss'

export const Home: React.FC = () => {
    const [filmes, setFilmes] = useState<any[]>([])

    useEffect(() => {
        const loadFilmes = async () => {
            const response = await api.get('r-api/?api=filmes')
            setFilmes(response.data);
        }
        loadFilmes();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="lista-filmes">
                    {filmes.map((filme) => {
                        return (
                            <article key={filme.id}>
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt={filme.nome} />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}