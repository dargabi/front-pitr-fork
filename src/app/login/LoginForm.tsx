"use client"
import React, { useState } from 'react';
import ExternalLogin from "@/components/general/ExternalLogin";
import Input from "@/components/general/Input";
import Link from "next/link";
import { signIn } from 'next-auth/react';

export default function LoginForm(){
    const [errors, setErrors] = useState({username: '', password: ''});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //Index signature that allows to use the setters dynamically as strings or functions
    const setters: { [key: string]: React.Dispatch<React.SetStateAction<string>> } = {
        username: setUsername,
        password: setPassword,
    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target;    
        const setter = setters[name];
        if (setter) {
            setter(value);
            console.log(username, password);
        } else {
            console.warn(`No setter found for variable "${name}"`);
        }
    }

    async function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        let errors = {username: '', password: ''};
        console.log(username, password);
        if(username === '') errors.username = 'Username or Email is required';
        if(password === '') errors.password = 'Password is required';

        if(Object.values(errors).every(x => x === '')){
            const response = await signIn('credentials',{
                username: username,
                password: password,
                redirect: false,
            })
        } else {
            setErrors(errors);
        }

    }
    return(
        <form className="border-secondary-100 border-2 border-solid p-9 text-3xl bg-primary-70"
        onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            handleClick(e as React.MouseEvent);
        }}
        >
            <h2>LOG IN</h2>
            <Input type="text" label="Username or email" name="username" onChange={handleChange} error={errors.username}/>
            <Input type="password" label="Password"  name="password" onChange={handleChange} error={errors.password}/>
            <div className="text-xs">
                <span>Forgot Password?</span>
                <Link className="text-orange-100" href={'/reset-password'}>
                    Reset
                </Link>
            </div>
            <button className="w-full p-1 bg-accent-100 rounded uppercase" onClick={handleClick}>login</button>
            <div className="flex align-center">
                <hr className="grow-1"/>
                <span className="text-center">or</span>
                <hr className="grow-1"/>
            </div>
            <ExternalLogin company="Riot"/>
            <div className="text-xs">
                <span>Don&apos;t have an account? </span>
                <Link className="text-orange-100" href={'/register'}>
                    Sign Up
                </Link>
            </div>
        </form>
    )
}