import react from 'react'
// import sdg from '../sdg.png'
import Image from 'next/image'
// import { sdg } from '/assets/images/sdg.svg';
import sdg from '../public/assets/sdg.png'

export default function Sdg() {
    return (
        <>
        <div>
        <Image 
                src={sdg}
                alt="sdg"
                width={1200}
                height={800}
                layout="fill"
                className="absolute inset-0"
                objectFit='cover'        
                />
        </div>
        </>
    )

}