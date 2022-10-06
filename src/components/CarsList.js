import { useEffect, useState } from "react";
import Car from "./Car";

export default function CarsList() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            .then((res) => res.json())
            .then((data) => {
                setCars(data)
            })
    }, [])

    return (
        <div>
            { cars.map((car) => <Car car={car} preview={true} key={car.id} />) }
        </div>
    )
}