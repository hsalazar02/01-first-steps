import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-50 p-2 m-2 rounded">

      <Link href={"/"} className="flex items-center"> 
        <HomeIcon className="mr-2"/>
        <span>Home</span>
       </Link>    
        
        <div className="flex flex-1"></div>

        <Link className="mr-2" href="/about" >About</Link>
        <Link className="mr-2" href="/contact">Contact</Link>
        <Link className="mr-2" href="/pricing">Pricing</Link>

    </nav>
  )
}