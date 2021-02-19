import React, { useState, useEffect, useContext } from "react";
import MyContext from "../Redux/Context";
import axios from 'axios'
import './Quiz.css';
const Quiz = (props) => {
    const context = useContext(MyContext)
    const [answer, setAnswer] = useState([])

    useEffect(() => {
        const url = context.map === 'any' ? `https://opentdb.com/api.php?amount=${context.car}&difficulty=${context.cake.toLowerCase()}` : `https://opentdb.com/api.php?amount=${context.car}&difficulty=${context.cake.toLowerCase()}&category=${context.map}`;
        axios.get(url)
            .then(response => {
                console.log(response.data.results)
                props.setQuestions(response.data.results)
            })


    }, [])

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {

            // Generate random number  
            var j = Math.floor(Math.random() * (i + 1));

            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    useEffect(() => {

        console.log(props?.value?.correct_answer)
        console.log(answer)
        if (props?.value?.incorrect_answers) {
            const allAnswers = [props?.value?.correct_answer, ...props?.value?.incorrect_answers]
            const shuffledArray = shuffleArray(allAnswers)
            setAnswer(shuffledArray)
        }

    }, [props.value])


    const clickHandler = (element) => {
        if (props?.value?.correct_answer === element) {
            context.increment()
        }
        else {
            context.decrement()
        }
        // alert(element)
        // props?.setIndex((prev) => {
        //     return prev + 1
        // })
        props.setIndex(props.index + 1)
    }



    return (
        <div>
            <div className="a1">
                <h3 className="a2">
                    QUESTION {props.index + 1}
                </h3>
                <h2 className="a3" > {props?.value?.question}
                </h2>
                {/* <button className="but">{   }</button>
                <button className="but">6</button><br></br>
                <button className="but">10</button>
                <button className="but">8</button><br></br> */}
                {answer.map((element) => (
                    <button className="but" onClick={() => clickHandler(element)}>{element}</button>
                ))}
                <br></br>
                {/* <button className="but">Skip</button> */}


            </div>
        </div>
    )
}
export default Quiz;