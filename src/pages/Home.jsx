import { Link } from 'react-router-dom'
import '../../src/background.css'
import CountdownTimer from '../components/CountdownTimer';
const Home = () => {
  const targetDate = new Date("2024-09-24T00:00:00"); 
  return (
    <div className="background relative flex flex-col items-center justify-center min-h-screen " >
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  
    <div className="absolute top-4 left-4 flex items-center space-x-2 px-12">
     <div className='flex items-center'>
     <div className="p-2 rounded">
        <img src="https://seeklogo.com/images/U/universidad-privada-de-tacna-logo-3E1EE39EEA-seeklogo.com.png" alt="Logo Juegos Florales" className="h-16 w-16 bg-transparent rounded-xl bg-white p-1" />
      </div>
      <div>
        <h3 className="text-white text-lg font-bold">Juegos Florales 2024</h3>
      </div>  
     </div>
   
    </div>
    <div className="absolute top-4 right-4 flex items-center space-x-4 m-10 ">
      <div>
        <Link to="/about" className="text-white text-2xl font-semibold hover:underline transition duration-300">Acerca de</Link>
      </div>
      <div>
        <Link to="/eventos" className="text-white text-2xl font-semibold hover:underline transition duration-300">Eventos</Link>
      </div>
      <div>
        <Link to="/equipos" className="text-white text-2xl font-semibold hover:underline transition duration-300">Equipos</Link>
      </div>
      <div>
        <Link to="/lugares" className="text-white text-2xl font-semibold hover:underline transition duration-300">Lugares</Link>
      </div>
    </div>

    <div className="text-center">
      <h1 className="font-compact-black text-8xl font-bold text-white uppercase tracking-widest">
        Juegos Florales
      </h1>
      <p className="text-yellow-300 text-2xl mt-4">
        Universidad Privada de Tacna
      </p>
      <p className=" text-white text-lg mt-2">Creatividad y Talento</p>
    </div>

    <div className="flex space-x-6 mt-8">

      <Link to="/eventos" className="bg-white text-black px-6 py-3 rounded-full text-xl font-semibold shadow-lg hover:bg-gray-200 transition duration-300">   Enterate de los Eventos</Link>
      <Link to="/lugares" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition duration-300">
         Conoce las Ubicaciones
      </Link>

    </div>
    <div className='py-14'>
      <CountdownTimer targetDate={targetDate} />
    </div>
    <div className="absolute bottom-8 left-4 text-white px-12">
      <p className="text-3xl font-semibold">¿Cuándo?</p>
      <p className="text-2xl">24 de Setiembre 2024</p>
    </div>
    <div className="absolute bottom-7 right-1 text-white flex flex-col items-center text-center px-12">
     <div> <p className="text-3xl font-semibold">Conoce más:</p></div>
    <div>  <a 
        href="https://www.facebook.com/ObunUPT/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-2xl underline hover:text-yellow-300 transition duration-300"
      >
        Bienestar Universitario UPT
      </a></div>
    </div>
  </div>
  )
}

export default Home
