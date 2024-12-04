import Image from 'next/image'

export default function Tournament(){
    return(
        <li className="flex">
            <Image src={'/hero_prueba.png'} alt='' width={300}
            height={150}/>
            <div>
                <h4>TOURNAMENT NAME</h4>
                <p>Tournament Info</p>
            </div>
        </li>
    )
}