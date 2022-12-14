import React, {useState, createContext, useEffect} from "react";
import axios from "axios";

const uglyList = createContext()

function UglyFormProvider (props) {

    const [uglyListState, setUglyListState] = useState([])

    const api = axios.create({
        baseURL: `https://api.vschool.io/CameronFord/thing`
    })

    useEffect(() => {
        api.get(`https://api.vschool.io/CameronFord/thing`)
        .then(response => {
            setUglyListState(() => response.data)            
        })
        .catch((error) => console.log(error))
    }, [])

    const listFunction = {
        // updateUglyListFunction:
        // function updateUglyList (newObject) {
        //     setUglyListState((prevList => {
        //         return[
        //             ...prevList,
        //             newObject
        //         ]
        //     }))
        // }

        addApiFunction:
        function addUglyApi (newObject) {
        api.post('https://api.vschool.io/CameronFord/thing',{
            ...newObject
        })
        .then((response) => {
            setUglyListState((prevList => {
                return[
                    ...prevList,
                    response.data
                ]
            }))

        })
        .catch((error) => console.log(error))
        },

        deleteUglyItemFunction:
        function deleteUglyItme(theObjectWithId) {
            api.delete(`https://api.vschool.io/CameronFord/thing/${theObjectWithId}`)
            .then((response) => {
            const filteredList = uglyListState.filter((obj)=>  obj._id !== theObjectWithId)
            setUglyListState(filteredList)
            console.log(response.data)
            })
            .catch((error) => console.error(error))
        },

        editUglyItemApiFunction: 
        function editUglyItemApi (oldObjectId, newObject) {
            api.put(`https://api.vschool.io/CameronFord/thing/${oldObjectId}`, newObject)
            .then(() => console.log("worked"))
            .catch((error)=> console.error(error))
        },

        addCommentUglyFunction:
        function addCommentUgly (newObject) {
            setUglyListState((prevUgly) => {
                return{
                    ...prevUgly,
                    newObject
                }
            })
        }
    }
    
    return(
        <uglyList.Provider
        value={{
            uglyListState,
            listFunction
        }}>
            {props.children}
        </uglyList.Provider >
    )
}

export {uglyList, UglyFormProvider}