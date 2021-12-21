import { ViewDate } from '../ViewDate';
import styles from './Post.module.scss';
import {httpDELETE} from "../../libs/http"

const Post = (props) => {
    const data = props.data || {
        author: "User",
        text: "text",
        date: new Date(),
        photo: "https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",

    };

    const handleDeletePost = () => {
        httpDELETE(`/posts/${props.data.id}`).then(() => {});
        alert(`Post by ${props.data.author} was deleted`);
        window.location.href="/";
    }

    return (
        <article className = {styles.post}>
            <button onClick={handleDeletePost} className={styles.deleteBtn}> X </button>
            <h3>{data.author}</h3>
            <ViewDate date = {data.date} />
            <p>{data.text}</p>
            { data.photo ? <img src={data.photo} alt={data.author}/> : <></> }
        </article>
    );
};

export { Post };