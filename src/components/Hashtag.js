import React, { useState, useEffect } from 'react'
import './Hashtag.css'

function Hashtag() {
    const [selectItem, setSelectItem] = useState('all')

    useEffect(() => {
        clickHandler(selectItem)
    }, [selectItem])

    const clickHandler = hashtag => {
        let hashtag_item = document.getElementsByClassName("hashtag_item")
        for (let i = 0; i < hashtag_item.length; i++) {
            hashtag_item[i].style.backgroundColor = "#c8d2e7";
        }
        hashtag_item = document.getElementsByClassName(hashtag)
        hashtag_item[0].style.backgroundColor = "rgb(50, 90, 180)";
        setSelectItem(hashtag)
    }

    useEffect(() => {
        let hashtag_item = document.getElementsByClassName("projectItemCard__link");
        for (let i = 0; i < hashtag_item.length; i++) {
            hashtag_item[i].classList.remove('active');
        }
        hashtag_item = document.getElementsByClassName(`projectItemCard__link ${selectItem}`)
        for (let i = 0; i < hashtag_item.length; i++) {
            hashtag_item[i].classList.add('active');
        }
    }, [selectItem])

    return (
        <div className="hashtag">
            <div className="hashtag_item all" onClick={() => clickHandler("all")}>
                All
            </div>
            <div className="hashtag_item ml/ds" onClick={() => clickHandler("ml/ds")}>
                Machine Learning/Data Science
            </div>
            <div className="hashtag_item web" onClick={() => clickHandler("web")}>
                Web Development
            </div>
            <div className="hashtag_item python_library" onClick={() => clickHandler("python_library")}>
                Python Library
            </div>
            <div className="hashtag_item miscellaneous" onClick={() => clickHandler("miscellaneous")}>
                Miscellaneous
            </div>
        </div>
    )
}
export default Hashtag
