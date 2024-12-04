import signup from '../signup.module.css';
import RegisterForm from './RegisterForm';

export default function Page(){
    return(
        <main className={`flex justify-end align-center grow-1`}>
            <div className={`absolute w-screen h-screen ${signup.bgregister}`}></div>
            <RegisterForm />
    </main>
    )
}