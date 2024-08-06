import React, { useState, useEffect } from 'react'

export default function PromiseAll() {

    const [promiseAll, setPromiseAll] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      // Define promises
      const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'one'));
      const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'two'));
      const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'three'));
      setLoading(true);
      // Call Promise.all
      Promise.all([promise1, promise2, promise3])
        .then((values) => {
          console.log(values);
          setPromiseAll(values);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []); 

  return (
    <div>Promise All : {loading? 'Loading...' : promiseAll.join(', ')} </div>
  )
}
