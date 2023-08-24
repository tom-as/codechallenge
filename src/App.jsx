



import { useEffect, useState } from 'react'
import Landing from './components/landing'

const CAR_IMAGE_ENDPOINT = `https://test-bucket-luciano.s3.amazonaws.com/`
const CAR_ENDPOINT = 'https://server.cocoche.com.ar/car_listing_presentation?list_length=100'


function App() {
  const [carList, setCarList] = useState([])
  
  useEffect(() => {
    fetch(CAR_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.carList.map((car) => ({
          title: car.modelDescription,
          cost: car.cost,
          description: car.description,
          url: `${CAR_IMAGE_ENDPOINT}${car.url}`,
        }));
        setCarList(formattedData);
      })
      .catch ((error) => {
        alert('Error durante la carga de coches. Intente nuevamente, o pruebe más tarde.', error);
      });
  }, []);

  console.log(carList)

  return (
    <>
      <Landing datos={carList}/>
    </>
  )
}

export default App
