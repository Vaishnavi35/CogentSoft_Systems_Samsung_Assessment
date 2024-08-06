import React from 'react'

export default function Intersection() {

    const array1 = [1, 4, 7, 10];
    const array2 = [1, 3, 5, 7, 9, 11];

    const Intersection = () => {
        return array1.filter(value => array2.includes(value)).join(', ');
    }

    return (
        <div>
            <div className='flex'>
                Array 1 : {array1.join(', ')}

            </div>
            <div className='flex'>Array 2 : {array2.join(', ')}</div>

            <div> Result: {Intersection()}</div>

        </div>
    )
}
