import Link from "next/link";
import Image from "next/image";
import LogoPokem from "@/public/images/logo.jpeg"
import stylesNavbar from "@/styles/Navbar.module.css"

export default function Navbar(){
    return(
        <nav className={stylesNavbar.navbar} >
            <div className={stylesNavbar.logo}>
                <Image src={LogoPokem} alt="Logo Pokémon" width={30} height={30}/>
                <h1>PokemSim</h1>
            </div>
            <ul className={stylesNavbar.linkItems}>
                <li>
                    <Link href="/"><span>Home</span></Link>
                </li>
                <li>
                    <Link href="/about"><span>Sobre</span></Link>
                </li>
            </ul>
        </nav>
    )

}