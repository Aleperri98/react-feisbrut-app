import styles from './Post.module.scss';

const Post = (props) => {
    const data = props.data || {
        author: 'User',
        text: 'Oggi ho mangiato bene',
        date: newDate(),
        photo: "https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",

    };

    const createDate= (date) => new Date(date);

    return (
        <article className={styles.post}>
            <h3>{data.author}</h3>
            <p>
                <small>
                    {formatDistance(new Date(data.date), new Date(), {
                        addSuffix: true,
                        locale: it,
                    })}
                </small>
            </p>
            <p>{data.text}</p>

            { data.photo ? <img src={data.photo} alt={data.author}/> : <></> }
        </article>
    );
};

export { Post };