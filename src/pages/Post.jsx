import { useParams, useNavigate } from 'react-router-dom';

export default function Post() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(-1)}>Назад</button>
            <h2>Вы открыли пост № {id}</h2>
        </>
    );
}
