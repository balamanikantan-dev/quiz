import React, { useContext } from "react";
import MyContext from "../Redux/Context";
import "./Result.css"

const Result = (props) => {
    const context = useContext(MyContext)
    return (
        < div>
            <div className="res">
                <span className="res1"><span className="re2">Your Score :</span>  {context.score}</span>

            </div>
            <button onClick={() => {
                props.setVisible(true)
                props.setIndex(0)
                context.reset()
            }} > Play Again </button>
        </div>
    )
}
export default Result