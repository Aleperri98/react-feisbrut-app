import styles from "./MessagePreview.module.scss";
import {ViewDate} from "../ViewDate";

const MessagePreview = (props) => {
    const data = props.data || {
        text:"lorem ipsum", date: new Date(), sender:"User"
    };

    return(
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <ViewDate date={data.date} />
            <p>{data.text}</p>
        </div>
    )
}

export {MessagePreview};