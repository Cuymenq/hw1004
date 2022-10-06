import { Link } from "react-router-dom"

export default function Car(props) {



    return (
        <div className="card">
            <div className="card-header">
                {
                    (!props.preview) ?
                    (
                        <h3>{props.car.year} {props.car.name}</h3>
                    )
                    :
                    <Link to={`/cars/${props.car.id}`}>{props.car.name}</Link>
                }
            </div>
            {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p><strong>Selling Price:</strong> ${props.car.selling_price}</p>
                        <p><strong>Fuel:</strong> {props.car.fuel}</p>
                        <p><strong>Seats:</strong> {props.car.seats}</p>

                    </div>
                )
                :
                ''
            }
        </div>
    )
}