import Inventories from '../components/Inventory';
import FeaturedCar from '../components/FeaturedCar';
import { useState } from 'react';

function Inventory() {
  const [cars, setcars] = useState([
    {
        "id": 1,
        "name": "XC40 T5 R-Design SUV",
        "year": "2021",
        "colors": {
            "color-1": "White",
            "color-2": "Black",
            "color-3": "Red",
            "color-4": "Blue"
        }
    },
    {
        "id": 2,
        "name": "Acura MDX",
        "year": "2023",
        "colors": {
            "color-1": "Red",
            "color-2": "Black",
            "color-3": "Silver",
            "color-4": "White"
        }
    },
    {
        "id": 3,
        "name": "Toyota Corolla",
        "year": "2023",
        "colors": {
            "color-1": "Silver",
            "color-2": "Black",
            "color-3": "Green",
            "color-4": "Red"
        }
    },
    {
        "id": 4,
        "name": "Honda Civic",
        "year": "1997",
        "colors": {
            "color-1": "Rusted Red",
            "color-2": "Blistered Black",
            "color-3": "Moldy Green",
            "color-4": "Stained Silver"
        }
    },
    {
        "id": 5,
        "name": "Buick Enclave",
        "year": "2023",
        "colors": {
            "color-1": "Red",
            "color-2": "Black",
            "color-3": "Green",
            "color-4": "Orange"
        }
    }
  ])

  const [featuredcar, setFeaturedcar] = useState(cars[0])


  return (
    <div className="App">
      <header className="App-header">
        <h2>Featured Car</h2>
        <FeaturedCar car={featuredcar} />
        <hr />
        { cars.map((car) => <Inventories clickHandler={setFeaturedcar} key={car.id} car={car} />) }
      </header>
    </div>
  );
}

export default Inventory;