import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import '../styles.scss';

export const DetailsMovies: React.FC = () => {
    const [detailMovie, setDetailMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const history = useNavigate();

    useEffect(() => {
        const loadIdMovie = async () => {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if (response.data.length === 0) {
                history('/')
                return;
            }

            setDetailMovie(response.data);
            setLoading(false);
        }
        loadIdMovie();
    }, [history, id])

    if (loading) {
        return (
            <div className='container'>
                <p className='load-info'>Carregando informações...</p>
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <div className="details-title">DETALHES DO FILME</div>
                <div className="container-content">
                    <h2>{detailMovie.nome}</h2>
                    <img src={detailMovie.foto} alt={detailMovie.nome} />
                    <h3>Sinopse</h3>
                    <p>{detailMovie.sinopse}</p>

                    <div className='buttons'>
                        <button onClick={() => { }}>SALVAR</button>
                        <button>
                            <a href={`https://youtube.com/results?search_query=${detailMovie.nome} Trailer`}>
                                TRAILER
                            </a>
                        </button>
                        <button className='button-back' onClick={() => history('/')}>
                            VOLTAR
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}