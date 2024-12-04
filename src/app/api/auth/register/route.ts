import { NextResponse } from "next/server";
// import { hash } from 'bcrypt';

export async function POST(request: Request){
    try{
        const {username, email, password, confPassword} = await request.json();
        if(!username || !email || !password || !confPassword){
            return NextResponse.json({message: 'Please fill all fields'});
        }else if(password !== confPassword){
            return NextResponse.json({message: 'Password do not match'});
        }else{
            try {
                const response = await fetch(`https://urano.pitrivals.com/api-rivals/v1/users/register`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username, email: email, password: password, confPassword: confPassword
                    })
                });
                console.log('JSON', JSON.stringify({
                    username: username, email: email, password: password, confPassword: confPassword
                }));
                
                // if (!response.ok) {
                //     const errorData = await response.json();
                //     console.error('Error data:', errorData);
                //     throw new Error(`HTTP error! status: ${response.status}`);
                // }
                
                // const data = await response.json();
                // console.log('Datos:', data);
                
                // return NextResponse.json(data);
            } catch (error: any) {
                console.error('An error occurred:', error);
                return NextResponse.json({ message: 'An error occurred', error: error.toString() });
            }
        }
    }catch(e){
        console.log({e});        
    }
    return NextResponse.json({message: 'success'});
}