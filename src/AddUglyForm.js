import React, {useContext, useState} from "react";
import {uglyList} from "./Context";

export default function AddUglyForm () {

    const theList = useContext(uglyList)
    // console.log(theList)

    const [uglyFormState, setUglyFormState] = useState({
        title:"",
        imgUrl:"",
        description:""
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
        theList.listFunction.theFunction(uglyFormState)
        // console.log(theList.uglyListState)
    }

    const mappedList = theList.uglyListState.map(listItem => {
        return(
            <div>
                <div>{listItem.title}</div>
                <div>{listItem.description}</div>
                <img src={listItem.imgUrl}/>
            </div>
        )
    })

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
        <div>
            {mappedList}
        </div>
        </div>
    )
}