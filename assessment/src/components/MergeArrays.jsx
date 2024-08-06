import React from 'react'

export default function MergeArrays() {

    const array1 = [1, 5, 9];
    const array2 = [4, 6, 8];
    // const

    const MergeSortArray = () => {
        return [...array1, ...array2].sort().join(', ');
    }

    return (
        <div>
            <div className='flex'>
                Array 1 : {array1.join(', ')}
                
            </div>
            <div className='flex'>Array 2 : {array2.join(', ')}</div>

            <div> Result: {MergeSortArray()}</div>

        </div>
    )
}
