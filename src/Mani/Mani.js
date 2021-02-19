import React, { useContext } from "react";
import MyContext from "../Redux/Context";

const Mani = () => {
    const context = useContext(MyContext)
    console.log(context)
    return (
        <div>
            <section className="fle">
                <p className="fle2">THE AVERAGE GAME <span className="fle1">current score:{context.score}</span></p>
            </section>
        </div>
    )
}
export default Mani;