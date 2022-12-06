import Reviews from "./Reviews"
import AverageRating from "./AverageRating"
import Sentiment from "./Sentiment"

export default function CollectedData(props) {
    return (
        <>
            <Reviews title={props.title} number={props.number} />
            <AverageRating title={props.title} number={props.number} />
            <Sentiment title={props.title} number={props.number} />
        </>
    )
}