interface AvatarProps {
    image: string;
    name?: string;
    size?: number;
}

//quizas size deberia ser solo entre unos parametros tipo large, medium y que sea mas responsiva
//si no recibe src poner algo por default
export default function Avatar({ image, name='Player', size = 50 }: AvatarProps) {
    return (
        <img className="rounded-full" src={image} alt={`${name}'s Avatar'`} style={{ width: size, height: size }} />
    );
}