import React, {useState, useEffect} from 'react'

export default function PromiseSeries() {
    const [promiseOne, setPromiseOne] = useState('');
    const [promiseTwo, setPromiseTwo] = useState('');
    const [promiseThree, setPromiseThree] = useState('');

    useEffect(() => {
      // Define promises
      const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'one'));
      const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'two'));
      const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'three'));
  
      promise1
        .then((result1) => {
            setPromiseOne(result1);
            return promise2;
        })
        .then((result2) => {
           setPromiseTwo(result2);
            return promise3;
        })
        .then((result3) => {
           setPromiseThree(result3);
        });
    }, []); 

  return (
    <>
        <div>Promise 1 result : {promiseOne ? promiseOne: 'Loading promise 1 ...'}</div>
        <div>Promise 2 result : {promiseTwo ? promiseTwo: 'Loading promise 2 ...'}</div>
        <div>Promise 3 result : {promiseThree ? promiseThree: 'Loading promise 3 ...'}</div>
    </>
    
  )
}
