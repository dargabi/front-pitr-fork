interface InputProps {
    type: string;
    label: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
}

export default function Input({type, label, name, onChange, error}: InputProps){
    return (
        <div className="relative flex justify-center flex-column">
            <input className="form-input z-10 text-xl" type={type} name={name} onChange={onChange} placeholder=""/>
            <label className="form-label absolute text-xl">{label}</label>
            <div className={`select-none text-sm text-red-100 ${error ? "opacity-100" : "opacity-0"}`}>
                {error === '' ? 'placeholder' : error}    
            </div>
        </div>
    );
}