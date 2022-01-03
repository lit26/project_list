import React, { useEffect } from 'react';
import './Hashtag.scss';

const hashtags = [
    { key: 'all', text: 'All' },
    { key: 'ml/ds', text: 'Machine Learning/Data Science' },
    { key: 'web', text: 'Web Development' },
    { key: 'python_library', text: 'Python Library' },
    { key: 'data_viz', text: 'Data Visualization' },
    { key: 'quant', text: 'Quant' },
    { key: 'miscellaneous', text: 'Miscellaneous' },
];

function Hashtag({ selectItem, setSelectItem }) {
    useEffect(() => {
        let hashtag_item = document.getElementsByClassName(
            'projectItemCard__link',
        );
        for (let i = 0; i < hashtag_item.length; i++) {
            hashtag_item[i].classList.remove('active');
        }
        hashtag_item = document.getElementsByClassName(
            `projectItemCard__link ${selectItem}`,
        );
        for (let i = 0; i < hashtag_item.length; i++) {
            hashtag_item[i].classList.add('active');
        }
    }, [selectItem]);

    return (
        <div className="hashtag">
            {hashtags.map((hashtag, index) => (
                <div
                    key={`hashtag_${index}`}
                    className={`hashtag_item ${
                        selectItem === hashtag.key ? 'active' : ''
                    }`}
                    onClick={() => setSelectItem(hashtag.key)}>
                    {hashtag.text}
                </div>
            ))}
        </div>
    );
}
export default Hashtag;
