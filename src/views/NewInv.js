import { useState, useEffect } from "react";

export default function NewInv() {
    const [car, setCar] = useState({})
    const [carState, setCarState] = useState('Loading')
    const [carId, setCarId] = useState(1)

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${carId}/`)
            .then((res) => res.json())
            .then((data) => {
                setCar(data)
                setCarState("LOADED")
            })
    }, [carId])

    return (
        <div>
            <h1>Inventory</h1>
            {
                (carState === "LOADED") ?
                    (
                        <div>
                            <h2> {car.year} {car.name}</h2>       
                            <h3>Selling price : ${car.selling_price}</h3>
                        </div>
                    ) :
                    ""
            }             
            <button onClick={() => setCarId(carId + 1)}>Next Car</button>
        </div>
    )
}