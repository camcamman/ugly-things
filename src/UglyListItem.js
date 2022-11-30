import React, {useContext} from "react";
import { uglyList } from "./Context";

export default function UglyListItem () {

    const theList = useContext(uglyList)
    let keyCountTitle = 0
    let keyCountDis = 1
    let keyCountImg = 2

    const mappedList = theList.uglyListState.map(listItem => {
        // keyCount++
        return(
            <div className="mainUglyListItemDiv">
                <div key={listItem.title + ++keyCountTitle}>{listItem.title}</div>
                <div key={listItem.description + ++keyCountDis}>{listItem.description}</div>
                <img className="UglyImg" key={listItem.imgUrl + ++keyCountImg} src={listItem.imgUrl}/>
                <button>edit</button>
                <button>delete</button>
            </div>
        )
    })
    return(
        <div>{mappedList}</div>
    )
}