import signup from '../signup.module.css';
import LoginForm from './LoginForm';

//form deberia ser async? 
export default function Page() {

    return (
    <main className="flex justify-end align-center grow-1">
        <div className={`absolute w-screen h-screen ${signup.bglogin}`}></div>
        <LoginForm />
    </main>
    )
}
