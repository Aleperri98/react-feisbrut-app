import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";

const ViewDate = (props) => {
    const date = props.date;
    return(
        <p>
            <small>
                {formatDistance(new Date(date), new Date(), {
                    addSuffix: true,
                    locale:it,
                    })}
            </small>
        </p>
    )
}

export {ViewDate};