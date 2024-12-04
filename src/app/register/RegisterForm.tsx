'use client'
import { useState } from 'react';
import signup from '../signup.module.css';

import ExternalLogin from "@/components/general/ExternalLogin";
import Input from "@/components/general/Input";
import Link from "next/link";

export default function RegisterForm(){
    const [step, setStep] = useState(0);

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [errors, setErrors] = useState({username: '', email: '', password: '', confPassword: ''});
    const [terms, setTerms] = useState(false);

    //Index signature that allows to use the setters dynamically as strings or functions
    const setters: { [key: string]: React.Dispatch<React.SetStateAction<string>> } = {
        username: setUsername,
        email: setEmail,
        password: setPassword,
        confPassword: setConfPassword,
    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target;    
        const setter = setters[name];
        if (setter) {
            if (!(name === 'username' && value === ' ')) {
                setter(value);
            }else{
                
            }
            if(setter === setConfPassword && value !== password){
                setErrors({...errors, confPassword: 'Passwords do not match'});
            }else if(setter === setConfPassword && value === password){
                setErrors({...errors, confPassword: ''});
            }
        } else {
            console.warn(`No setter found for variable "${name}"`);
        }
    }

    async function handleClick(e: React.MouseEvent){
        e.preventDefault();
        let errors = {username: '', email: '', password: '', confPassword: ''};
        if(step === 0){
            if(username === '') errors.username = 'Username is required';
            else if(/\S+@\S+\.\S+/.test(username)) errors.username = 'Username can not be an email';
            if(email === '') errors.email = 'Email is required';
            else if(!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
        } else if(step === 1){
            if(password === '') errors.password = 'Password is required';
            else if(password !== confPassword) errors.confPassword = 'Passwords do not match';
        }
        //checks if there are no errors
        if(Object.values(errors).every(x => x === '')){
            if(step === 0) setStep(step + 1);
            else if(step === 1 && terms){
                const response = await fetch(`api/auth/register`, {
                    method: 'POST',
                    body: JSON.stringify({username, email, password, confPassword}),    
                });
                console.log(response);
                setStep(step + 1)
            }
            else alert("You have to accept the terms of service")
        } else {
            setErrors(errors);
        }
    }

    function handleClickBack(e: React.MouseEvent){
        e.preventDefault();
        if(step > 0){
            setStep(step - 1);
        }
    }
    return(
        <form className={`border-secondary-100 border-2 border-solid p-9 text-3xl ${signup.container} bg-primary`}
        onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            handleClick(e as React.MouseEvent);
        }}
        >
            <div className='flex justify-between'>    
                <h2>SIGN UP</h2>  
                {/* si estamos en el primer paso o en el último no se renderiza el boton back */}
                { step === 1 ? <button onClick={handleClickBack}>back</button> : <div></div>}          
            </div>
            <div className={step === 0 ? '' : 'hidden'}>
                <Input type="text" label="Username" name='username' onChange={handleChange} error={errors.username}/>
                <Input type="email" label="Email" name='email' onChange={handleChange} error={errors.email}/>                      
            </div>
            <div className={step === 1 ? '' : 'hidden'}>
                <Input type="password" label="Password" name='password' onChange={handleChange} error={errors.password}/>
                <Input type="password" label="Confirm Password" name='confPassword' onChange={handleChange} error={errors.confPassword}/>
                <div className="flex align-center">
                    <input type="checkbox" name='terms' onClick={() => setTerms(!terms)}/>
                    <div className="text-xs">
                        <span>I accept the </span>
                        <Link className="text-orange-100" href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <div className={step === 2 ? '' : 'hidden'}>
                <h3>Congrats! Your account has been created succesfully!</h3>
                <p>Wait! You still have to link your Riot Accout.</p>
                <p>Don&apos;t worry, you&apos;ll be able to do it later too.</p>
                <ExternalLogin company="Riot"/>
            </div>
            <button onClick={handleClick} className={`w-full p-1 bg-accent-100 rounded uppercase ${step === 1 && !terms ? 'cursor-not-allowed' : ''}`}>
                {step === 0 && 'Continue'}
                {step === 1 && 'Register'}
                {step === 2 && 'Continue Without Linking'}
            </button>    
            <div className="flex align-center">
                <hr className="grow-1"/>
                <span className="text-center">or</span>
                <hr className="grow-1"/>
            </div>
            <ExternalLogin company="Riot"/>
            {/* if the user is already registered we don't show the login option */}
            {
                step < 2 ?                 
                <div className="text-xs">
                    <span>Already have an account? </span>
                    <Link className="text-orange-100" href={'/login'}>
                        Log In
                    </Link>
                </div>  : 
                <div></div>
            }

        </form>
    )
}