const Header = () => {
  return (
    <header className='bg-gradient-to-r from-purple-800 to-indigo-600 text-white text-center py-16'>
      <div className='container mx-auto px-6'>
        <h1 className='text-5xl font-extrabold mb-4'>Juegos Florales</h1>
        <p className='text-xl mb-6'>
          Celebrando la creatividad y la excelencia en las artes.
        </p>
        <a
          href='#events'
          className='bg-yellow-500 hover:bg-yellow-600 text-purple-900 py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105'
        >
          Ver Eventos
        </a>
      </div>
    </header>
  )
}


export default Header
