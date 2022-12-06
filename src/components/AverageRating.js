import data from "../data"

export default function AverageRating() {
    return (
        <div className="InfoSmall">
            <h4>{data[2].title}</h4>
            <h2>{data[2].number}</h2>
        </div>
    )
}