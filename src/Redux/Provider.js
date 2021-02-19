// import Context from './Context';
import React, { useState } from "react";
import MyContext from "./Context";


const Provider = (props) => {
    const [score, setScore] = useState()

    return (
        <MyContext.Provider
            value={{
                score: score,
                increment: () => {
                    setScore(score + 1)
                },
                decrement: () => {
                    setScore(score - 1)
                }


            }}

        >{props.children}</MyContext.Provider>
    )
}
export default Provider;