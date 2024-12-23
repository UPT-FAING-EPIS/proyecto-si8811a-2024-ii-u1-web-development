import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useAuthStore } from '@/hooks/useAuthStore'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoJuegosFlorales from '../assets/logo-juegosflorales.png'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Navbar() {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const { isAdmin, isAuthenticated } = useAuthStore()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.includes(path)

  const handleLogout = () => {
    window.location.href = `${import.meta.env.VITE_SERVER_LOGIN}/logout`
  }
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center'>
        <Link to='/' className='flex items-center space-x-2 ml-10'>
          <img
            src={logoJuegosFlorales}
            alt='UPT Logo'
            width={40}
            height={40}
            className='rounded-full'
          />

          <span className='hidden text-xl font-bold sm:inline-block ml-10 transition duration-150 transform hover:text-purple-600 hover:scale-110'>
            Juegos Florales 2024
          </span>
        </Link>
        {/* Desktop Navigation */}
        <NavigationMenu className='hidden ml-auto lg:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              {!isAdmin ? (
                <NavigationMenuLink
                  href='/eventos'
                  className={`${
                    isActive('/eventos')
                      ? 'border-[1px] border-black/50 bg-accent '
                      : ''
                  } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                >
                  Eventos
                </NavigationMenuLink>
              ) : (
                <>
                  <NavigationMenuTrigger>
                    <Link
                      to='/eventos'
                      className={`${
                        isActive('/eventos') ? '' : ''
                      } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                    >
                      Eventos
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className='grid gap-3  w-[150px]'>
                      <Link
                        to='/eventos/agregar'
                        className='block px-4 py-2 hover:bg-accent rounded-md'
                      >
                        Agregar
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/about'
                className={`${
                  isActive('/about')
                    ? 'border-[1px] border-black/50 bg-accent'
                    : ''
                } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
              >
                Acerca de
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/equipos'
                className={`${
                  isActive('/equipos')
                    ? 'border-[1px] border-black/50 bg-accent'
                    : ''
                } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
              >
                Equipos
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/participantes'
                className={`${
                  isActive('/participantes')
                    ? 'border-[1px] border-black/50 bg-accent'
                    : ''
                }   group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
              >
                Participantes
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/lugares'
                className={`${
                  isActive('/lugares')
                    ? 'border-[1px] border-black/50 bg-accent'
                    : ''
                } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
              >
                Lugares
              </NavigationMenuLink>
            </NavigationMenuItem>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>
                      Usuario: {user?.name.split('')[0]}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Cuenta:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem disabled>
                    Usuario: {user?.name.split(' ')[0]}
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    Rol: {user?.roles.map((role) => role)}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleLogout()}
                    className='text-red-600 border-[1px] border-red-600 justify-center p-1 cursor-pointer'
                  >
                    Salir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavigationMenuItem>
                <Button className='ml-2' onClick={() => navigate('/login')}>
                  Login
                </Button>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='lg:hidden ml-auto'>
            <Button variant='ghost' size='icon'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side='right'>
            <SheetTitle>Menú Principal</SheetTitle>
            <SheetHeader>
              <SheetDescription>
                Selecciona una opción para continuar
              </SheetDescription>
            </SheetHeader>

            <nav className='flex flex-col gap-4'>
              <Link
                to='/about'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/about') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Acerca de
              </Link>
              <Link
                to='/eventos'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/eventos') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Eventos
              </Link>
              <Link
                to='/equipos'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/equipos') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Equipos
              </Link>
              <Link
                to='/participantes'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/participantes') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Participantes
              </Link>

              <Link
                to='/lugares'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/lugares') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Lugares
              </Link>

              {isAuthenticated ? (
                <>
                  Usuario: {user?.name}
                  <br />
                  Rol: {user?.roles.map((role) => role.toUpperCase())}
                  <Button className='ml-2' onClick={() => handleLogout()}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button className='ml-2' onClick={() => navigate('/login')}>
                  Login
                </Button>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
