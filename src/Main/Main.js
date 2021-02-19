import React, { useState, useContext } from "react";
import MyContext from "../Redux/Context";
import "./Main.css"


const Main = (props) => {
    const context = useContext(MyContext)
    const categories = [
        "Any Category",
        "General Knowledge",
        "Entertainment: Books",
        "Entertainment: Film",
        "Entertainment: Music",
        "Entertainment: Musicals & Theatres",
        "Entertainment: Television",
        "Entertainment: Video Games",
        "Entertainment: Board Games",
        "Science & Nature",
        "Science: Computers",
        "Science: Mathematics",
        "Mythology",
        "Sports",
        "Geography",
        "History",
        "Politics",
        "Art"];


    const handleChange = (event) => {
        let { value, min, max } = event.target;
        console.log(value, min, max)
        if (!value) props.setCar("")
        if (value <= max && value >= min) props.setCar(value)

    }
    const ferrariChange = (event, value) => {
        props.setMap(event.target.value)
    }
    const cakeChange = (event, value) => {
        props.setCake(event.target.value)
    }
    return (
        <div>

            <div className="b">
            
                {/* <label htmlFor=" Questions">Number Of Questions</label>
            <select  name="Questions" id="Questions" onChange={handleChange}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>  </select>*/}
                <label for="fname" style={
                    {color:"white", fontSize:"20px",padding:"10px 20px"}
                }>Number Of Questions:</label><br></br>
                <input style={
                    { width: "70%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius:" 4px",
                        boxSizing:"border-box"}
                }type="number" value={context.car} min="1" max="30" id="fname" name="fname" onChange={handleChange}></input>
<br></br>

                <label htmlFor=" category"style={
                    {color:"white", fontSize:"20px"}
                }>Select Category</label><br></br>
                <select style={
                    { width: "70%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius:" 4px",
                        boxSizing:"border-box"}
                }name="category" id="category" onChange={ferrariChange}>
                    {/* <option value="General">General Knowledge</option>
                    <option value="Sports">Sports</option>
                    <option value="Animals">Animals</option> */}
                    {categories.map((element, index) => {
                        return <option value={index + 8}>{element}</option>

                    })}
                </select>
                <br></br>
                <label htmlFor=" meth" style={
                    {color:"white", fontSize:"20px"}
                }>Select Difficulty : </label><br></br>
                <select style={
                    { width: "70%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius:" 4px",
                        boxSizing:"border-box"}
                }name="meth" id="meth" onChange={cakeChange}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>

                </select>
                <br></br>
                <button style={
                     {
                        width: "20%",
                        backgroundColor: "pink",
                        color:"black",
                        padding: "14px 20px",
                        margin: "8px 0",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize:"30px"
                      }
                } onClick={() => {
                props.setVisible(false)
            }}>Play</button>
                {/* <h>{context.car}</h>
                <h>{context.map}</h>
                <h>{context.cake}</h> */}
            </div>
          
        </div >
    )


}
export default Main