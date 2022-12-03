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
                <div className="uglyListItemTitle">{listItem.title}</div>
                <div className="uglyListIteDescriptionm">{listItem.description}</div>
                <img className="uglyListItemTitleImgUrl" src={listItem.imgUrl}/>
                <button className="uglyListItemTitleEditButton" onClick={runEditFunction}>edit</button>
                <button className="uglyListItemTitleDeleteButton" onClick={runDeleteFunction}>delete</button>

                <div>{editting === listItem._id && <form className="editUglyItemMainDiv" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={editForm.title}
                        onChange={handleChange}
                        className="editUglyItemTitle editUglyItem"
                    />

                    <input
                        type="text"
                        placeholder="Img URL"
                        name="imgUrl"
                        onChange={handleChange}
                        value={editForm.imgUrl}
                        className="editUglyItemImgUrl editUglyItem"
                    />

                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                        value={editForm.description}
                        className="editUglyItemDescription editUglyItem"
                    />
                    <input 
                        type="submit"
                        name="sumbitButton"
                        className="editUglyItemSubmitButton"
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