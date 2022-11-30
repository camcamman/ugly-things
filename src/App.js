import React, {useContext} from "react";
import UglyForm from "./AddUglyForm";
import { UglyFormProvider } from "./Context";
import UglyListItem from "./UglyListItem";
import {uglyList} from "./Context";

export default function App (props) {

    // console.log(uglyList.uglyListState)
    // const renderedList = uglyList.uglyListState.map((listItem) => {
    //     return(
    //         <div>
    //             <div>{listItem.title}</div>
    //             <div>{listItem.description}</div>
    //             <div>{listItem.imgUrl}</div>
    //         </div>
    //     )
    // })
    // console.log(renderedList)
    return(
        <div>
            <UglyFormProvider>
                <UglyForm />
                <UglyListItem />
            </UglyFormProvider>
            {/* <div>{renderedList}</div> */}
        </div>
    )
}