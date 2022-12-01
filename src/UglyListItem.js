import React, {useContext, useState} from "react";
import { uglyList } from "./Context";

export default function UglyListItem () {
    const theList = useContext(uglyList)
    const getFunction = theList.listFunction
    const [editForm, setEditForm] = useState({
        title:"",
        imgUrl:"",
        description:""
    })
    // let editting = false
    const [editting, setEditting] = useState("")
    
    function handleChange (e) {
        const {name, value} = e.target
        setEditForm((prevState => {
            return{
                ...prevState,
                [name]: value
            }
        }))
    }

    
    const mappedList = theList.uglyListState.map(listItem => {

        function handleSubmit (e) {
            e.preventDefault()
            getFunction.editUglyItemApiFunction(listItem._id, editForm)
            listItem.title = editForm.title
            listItem.description = editForm.description
            listItem.imgUrl = editForm.imgUrl
            setEditting("")

        }

        function runDeleteFunction ()  {
            getFunction.deleteUglyItemFunction(listItem._id)

        }

        function runEditFunction () {
            setEditting(listItem._id)


            setEditForm(() => {
                return{
                    title: listItem.title,
                    description: listItem.description,
                    imgUrl: listItem.imgUrl
                }
            })
        }

        // console.log(listItem._id)
        return(
            <div className="mainUglyListItemDiv">
                <div>{listItem.title}</div>
                <div>{listItem.description}</div>
                <img src={listItem.imgUrl}/>
                <button onClick={runEditFunction}>edit</button>
                <button onClick={runDeleteFunction}>delete</button>

                <div>{editting === listItem._id && <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={editForm.title}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="Img URL"
                        name="imgUrl"
                        onChange={handleChange}
                        value={editForm.imgUrl}
                    />

                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                        value={editForm.description}
                    />
                    <input 
                        type="submit"
                        name="sumbitButton"
                    /> 

                </form>}
                </div>
            </div>
        )
    })
    return(
        <div>{mappedList}</div>
    )
}