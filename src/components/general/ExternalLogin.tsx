interface ExternalLoginProps {
    company: string;
}

export default function ExternalLogin({ company }: ExternalLoginProps){
    return(
        <button className="w-full p-1 bg-red-primary rounded uppercase">{`Login with ${company}`}</button>
    )
}