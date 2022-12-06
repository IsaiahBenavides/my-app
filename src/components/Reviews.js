import data from "../data"

export default function Reviews() {
    return (
        <div className="InfoSmall">
            <h4>{data[0].title}</h4>
            <h2>{data[0].number}</h2>
        </div>
    )
}