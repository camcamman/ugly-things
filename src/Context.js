import React, {useState, createContext} from "react";

const uglyList = createContext()

function UglyFormProvider (props) {

    const [uglyListState, setUglyListState] = useState([])


    const listFunction = {theFunction:
        function updateUglyList (newObject) {
            setUglyListState((prevList => {
                return[
                    ...prevList,
                    newObject
                ]
            }))
        }
    }
    
    return(
        <uglyList.Provider
        value={{
            uglyListState,
            // updateUglyList
            listFunction
        }}>
            {props.children}
        </uglyList.Provider >
    )
}

export {uglyList, UglyFormProvider}