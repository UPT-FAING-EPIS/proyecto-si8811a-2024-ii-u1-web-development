import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../hooks/useAuthStore'
import About from '../pages/About'
import Equipos from '../pages/Equipos'
import Eventos from '../pages/Eventos'
import Home from '../pages/Home'
import Lugares from '../pages/Lugares'
import Participantes from '../pages/Participantes'

function AppRouter() {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return <h3>Cargando...</h3>
  }

  return (
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/eventos' element={<Eventos />} />
          <Route path='/equipos' element={<Equipos />} />
          <Route path='/participantes' element={<Participantes />} />
          <Route path='/lugares' element={<Lugares />} />
          <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default AppRouter
