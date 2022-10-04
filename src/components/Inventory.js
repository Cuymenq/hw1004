export default function Inventories(props) {
    return (
        <div className="card" onClick={() => props.clickHandler(props.car)}>
            <div className="card-body">
                <h2>{ props.car.name }</h2>
                <p><strong>{ props.car.jobTitle }</strong></p>
            </div>
        </div>
    )
}