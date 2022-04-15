import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import '../styles.scss';

export const DetailsMovies: React.FC = () => {
    const [detailMovie, setDetailMovie] = useState<any[]>([])
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        const loadIdMovie = async () => {
            const response = await api.get(`r-api/?api=filmes/${id}`)
            setDetailMovie(response.data);
            setLoading(false)
            console.log(response)
        }
        loadIdMovie();
    }, [id])

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
            </div>
        </>
    )
}