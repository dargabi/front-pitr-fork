import Loader from "../general/Loader";

export default function QueuePlayerLoader({state}:{ state: boolean}){
    return (
        <>
            {state ? <div>READY</div> : <Loader />}
        </>
    );
}