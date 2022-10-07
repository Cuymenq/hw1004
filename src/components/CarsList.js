import { useEffect, useState, useContext } from "react";
import Car from "./Car";
import { DataContext } from "../contexts/DataProvider";

export default function CarsList() {
    const { cars } = useContext(DataContext)

    return (
        <div>
            { cars.map((car) => <Car car={car} preview={true} key={car.id} />) }
        </div>
    )
}