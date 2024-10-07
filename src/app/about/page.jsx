import Image from "next/image"
import ImageAbout from "@/public/images/about.jpeg"
import stylesAbout from "@/styles/About.module.css"

export default function About(){
    return(
        <div className={stylesAbout.aboutContainer}>
            <h1>Sobre nosso projeto</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptate similique maiores est quod mollitia ducimus ea, autem veniam sed culpa architecto porro blanditiis consequatur laboriosam enim repellendus quidem illum!</p>
            <Image src={ImageAbout} width={300} height={300} alt="Pokémon especial" />
        </div>
    )
}