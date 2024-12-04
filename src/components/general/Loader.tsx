import { TailSpin } from 'react-loader-spinner'
interface LoaderProps{
    size?: number,
}


export default function Loader({size = 50}:LoaderProps){
    return(
        <TailSpin 
            visible={true}
            height={size}
            width={size}
            color="#FF5931"
            ariaLabel="tail-spin-loading"
            radius="1"
            
        />
    )    
}