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
        updateUglyListFunction:
        function updateUglyList (newObject) {
            setUglyListState((prevList => {
                return[
                    ...prevList,
                    newObject
                ]
            }))
        },

        addApiFunction:
        function addUglyApi (newObject) {
        api.post('https://api.vschool.io/CameronFord/thing',{
            ...newObject
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => console.log(error))
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