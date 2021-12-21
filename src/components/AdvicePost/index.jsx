import styles from "./AdvicePost.module.scss";

const AdvicePost = (text, color) => {
    <div className="AdvicePost" style={{background: color}}>
        <h1>Excellent!</h1>
        <p>{text}</p>
    </div>
}

export default AdvicePost;