import { count } from 'console';
import { TIMEOUT } from 'dns';
import React,{ useState, useEffect } from 'react';
import { ImportsNotUsedAsValues } from 'typescript';

const Mtimer:React.FC =()  => {

    const [counter, setCounter] = useState<number>(60);
    const [dec, setDec] = useState<number>(1);
    
    useEffect(() => {
        let timerHandle: ReturnType<typeof setTimeout>;
        timerHandle = setTimeout(() => {
            
            console.log('in timer', counter,  dec);
            setCounter(counter - dec)

        } , 1000);
        // clear on component unmount
        return () => {
            console.log('clear interval');
            clearInterval(timerHandle);
        };
    }, [counter,dec]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void  => {
        setCounter(
            parseInt(e.target.value)
        )
    }

    const handleStop = () => {
        setDec(0);
        console.log('handleStop', counter, dec);
    }
    const handleStart = () => {
        setDec(1);
        console.log('handleStart',  counter, dec);
    }

    return (
        <div className="Mtimer">
           <button onClick={ handleStart }  >Start</button>
           <button onClick={ handleStop }   >Stop</button>
           <button >Finish</button>

           <input type="number" onChange={  handleChange}  ></input>
           
           <div>Countdown: {counter}</div>
              
        </div>
    )

}

export default Mtimer