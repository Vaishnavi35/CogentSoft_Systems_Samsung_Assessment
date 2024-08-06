import React from 'react'

export default function CurryFun() {

    const sum = (a) =>{
        return (b) => {
            return (c) => {
                return a + b + c;
            }
        }
    }

  return (
    <div>
        <div>
            Inputs : 1, 2, 3
        </div>
        <div>
            Result : {sum(1)(2)(3)}
        </div>
    </div>
  )
}
