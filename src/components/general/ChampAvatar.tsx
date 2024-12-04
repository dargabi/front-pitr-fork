import Avatar from "./Avatar";

interface ChampAvatarProps {
    image: string;
    name: string;
    level: number;
    size?: number;
}

export default function ChampAvatar({ image, name, level, size = 50 }: ChampAvatarProps){
    return(
        <div className="relative inline-flex" style={{height: size, width: size}}>
            <Avatar image={image} name={name} size={size}/>
            {/* bottom and right props will be passed with prop */}
            <div className="absolute rounded-full bg-primary p-1 flex align-center justify-center text-xs text-secondary-100" 
            style={{bottom: '0', right: '0', width: size/2, height: size/2}}>
                {level}
            </div>
        </div>
    ) 
}