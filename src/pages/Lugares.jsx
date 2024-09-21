import { useEffect, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'
import { getLugares } from '../api/services/lugaresApi'

const Lugares = () => {
  const [lugares, setLugares] = useState([])

  useEffect(() => {
    const fetchLugares = async () => {
      const data = await getLugares()
      setLugares(data)
    }
    fetchLugares()
  }, [])

  return (
    <DefaultLayout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Lugares</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* {lugares.map(({ _id, nombre_lugar, descripcion }) => (
            <div
              key={_id}
              className='bg-white shadow-md rounded-lg p-4 transform transition duration-500 hover:scale-105'
            >
              <h3 className='text-lg font-semibold'>{nombre_lugar}</h3>
              <p className='text-gray-600'>{descripcion}</p>
            </div>
          ))} */}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Lugares
