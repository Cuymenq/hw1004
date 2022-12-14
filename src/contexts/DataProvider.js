import { useState, useEffect, useContext, createContext } from "react";
import { getFirestore, getDoc, getDocs, collection, doc,  } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cars, setCars] = useState([])
    const db = getFirestore()

    useEffect(() => {
        const getCars = async function() {
            const collectionRef = collection(db, 'cars')
            const collectionSnap = await getDocs(collectionRef)

            const carsArr = []
        
            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                carsArr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            
            setCars(carsArr)
        }   
        getCars() 
    }, [])

    const getCar = async function(id, callback) {
        const docRef = doc(db, "cars", id)
        const docSnap = await getDoc(docRef)
    
        const car ={
            ...docSnap.data(),
            id: docSnap.id
        }
        callback(car)
    }

    const value ={
        cars: cars,
        getCar: getCar
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}