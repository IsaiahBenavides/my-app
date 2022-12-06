import data from "../data"

export default function InfoLarge() {
    return(
        <div id="InfoLarge">
            <div>
                <h4>{data[3].title}</h4>
                <h2>{data[3].number}</h2>
            </div>
            <div id="Graph">
                <p>Testing Grid</p>
            </div>
        </div>
    )
}