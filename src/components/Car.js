import { Link } from "react-router-dom"

export default function Car(props) {



    return (
        <div className="card">
            <div className="card-header">
                {
                    (!props.preview) ?
                    (
                        <h3>{props.car.Year} {props.car.Name}</h3>
                    )
                    :
                    <Link to={`/cars/${props.car.id}`}>{props.car.Year} {props.car.Name}</Link>
                }
            </div>
            {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p><strong>Selling Price:</strong> ${props.car['Selling Price']}</p>

                    </div>
                )
                :
                ''
            }
        </div>
    )
}