import React, {useContext, useState, useEffect} from "react";
import {uglyList} from "./Context";
import axios from "axios";

export default function AddUglyForm () {

    const theList = useContext(uglyList)
    // console.log(theList)

    const [uglyFormState, setUglyFormState] = useState({
        title:"",
        imgUrl:"",
        description:"",
        comment: []
    })

    const api = axios.create({
        baseURL: `https://api.vschool.io/CameronFord/thing`
    })



    function handleChange (e) {
        const {name, value} = e.target
        setUglyFormState((prevState => {
            return{
                ...prevState,
                [name]: value
            }
        }))
    }
    
    function handleSubmit (e) {
        e.preventDefault()
        // theList.listFunction.updateUglyListFunction(uglyFormState)
        theList.listFunction.addApiFunction(uglyFormState)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="mainUglyFormDiv">
                <input
                type="text"
                placeholder="Title"
                name="title"
                value={uglyFormState.title}
                onChange={handleChange}
                className="mainUglyTitle mainuglyform"
                />

                <input
                type="text"
                placeholder="Img URL"
                name="imgUrl"
                onChange={handleChange}
                value={uglyFormState.imgUrl}
                className="mainUglyimgUrl mainuglyform"
                />

                <input
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={uglyFormState.description}
                className="mainUglyDescription mainuglyform"
                />

                <input 
                type="submit"
                name="sumbitButton"
                className="mainUglySubmit mainuglyform"
                />
            </form>
        </div>
    )
}