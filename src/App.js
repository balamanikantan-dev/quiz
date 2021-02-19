import React, { useState, useEffect } from "react";
import Quiz from "./Quiz/Quiz";
import './App.css';
import Mani from "./Mani/Mani";
import axios from "axios";
import { Provider } from "react-redux";
import MyContext from "./Redux/Context";
import Result from "./Result/Result";
import Main from "./Main/Main"


function App() {
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [visible, setVisible] = useState(true)
  const [car, setCar] = useState(10)
  const [map, setMap] = useState("any")
  const [cake, setCake] = useState("Easy")

  return (
    <MyContext.Provider value={{
      score: score,
      increment: () => {
        setScore(score + 1)
      },
      decrement: () => {
        setScore(score - 1)
      },
      reset:()=>{
        setScore(0)
      },
      car: car,
      map: map,
      cake: cake



    }}>
      {visible ? <Main setCar={setCar} setMap={setMap} setCake={setCake} setVisible={setVisible} /> :
        index >= 10 ? <Result setVisible={setVisible} setIndex={setIndex}
        /> : <div>
            <Quiz value={questions[index]}
              setQuestions={setQuestions}
              setIndex={setIndex} index={index} />
            <Mani />
          </div>}


    </MyContext.Provider>
  )
}

export default App;
