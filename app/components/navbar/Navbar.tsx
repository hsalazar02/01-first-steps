import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { text } from "stream/consumers"

//variable que tiene como arreglo las direcciones de las paginas junto con su nombre path representa la ruta del enlace
const navItems = [
  {path: '/about', text: 'About'},
  {path: '/contact', text: 'Contact'},
  {path: '/pricing', text: 'pricing'},
]





//map recorre el arreglo, navItem es la variable que almacena cada dato del arreglo
export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-50 p-2 m-2 rounded">

      <Link href={"/"} className="flex items-center"> 
        <HomeIcon className="mr-2"/>
        <span>Home</span>
       </Link>    
        
        <div className="flex flex-1"></div>
      
        {navItems.map(navItem => (
          <Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.text} </Link>
          ))
          }


    </nav>
  )
}