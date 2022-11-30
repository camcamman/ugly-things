import React, {useContext, useState, useEffect} from "react";
import {uglyList} from "./Context";
import axios from "axios";

export default function AddUglyForm () {

    let theCountNum = [0]

    const theList = useContext(uglyList)
    // console.log(theList)

    const [uglyFormState, setUglyFormState] = useState({
        title:"",
        imgUrl:"",
        description:""
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
        theList.listFunction.updateUglyListFunction(uglyFormState)
        theList.listFunction.addApiFunction(uglyFormState)
        theCountNum[0]++
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Title"
                name="title"
                value={uglyFormState.title}
                onChange={handleChange}
                />

                <input
                type="text"
                placeholder="Img URL"
                name="imgUrl"
                onChange={handleChange}
                value={uglyFormState.imgUrl}
                />

                <input
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={uglyFormState.description}
                />

                <input 
                type="submit"
                name="sumbitButton"
                />
            </form>
        </div>
    )
}