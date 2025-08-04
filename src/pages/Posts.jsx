import { Link, useSearchParams } from 'react-router-dom';

const postList = [
    {
        id: 1,
        title: 'Пост 1',
    },
    {
        id: 2,
        title: 'Пост 2',
    },
    {
        id: 3,
        title: 'Пост 3',
    },
];

export default function Posts() {
    const [searchParams] = useSearchParams();
    const filter = searchParams.get('filter');

    return (
        <div className="posts">
            <h1>Лента постов: </h1>
            <p>Фильтр: {filter}</p>
            <ol>
                {postList.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}
