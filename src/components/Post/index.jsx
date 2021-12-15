import styles from './Post.module.scss';

const Post = (props) => {
    const data = props.data || {
        author: 'User',
        text: 'Oggi ho mangiato bene',
        date: newDate(),
        photo: ""
    };

    return (
        <article className={styles.post}>
            <h3>{data.author}</h3>
            <p>
                <small>
                    {data.date.toLocaleDateString()} - {data.date.toLocaleTimeString()}
                </small>
            </p>
            <p>{data.text}</p>

            { data.photo ? <img src={data.photo}/> : <></> }
        </article>
    );
};

export { Post }