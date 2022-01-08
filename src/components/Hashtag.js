import React from 'react';
import './Hashtag.scss';
import { useProject } from '../context/ProjectContext';

const hashtags = [
    { key: 'all', text: 'All' },
    { key: 'ml/ds', text: 'Machine Learning/Data Science' },
    { key: 'web', text: 'Web Development' },
    { key: 'python_library', text: 'Python Library' },
    { key: 'data_viz', text: 'Data Visualization' },
    { key: 'quant', text: 'Quant' },
    { key: 'miscellaneous', text: 'Miscellaneous' },
];

function Hashtag() {
    const { selectCategory, setSelectCategory, count, total } = useProject();

    return (
        <>
            <div className="hashtag">
                {hashtags.map((hashtag, index) => (
                    <div
                        key={`hashtag_${index}`}
                        className={`hashtag_item ${
                            selectCategory === hashtag.key ? 'active' : ''
                        }`}
                        onClick={() => setSelectCategory(hashtag.key)}>
                        {hashtag.text}
                    </div>
                ))}
            </div>
            <div className="stat">{`Project count: ${count}/${total}`}</div>
        </>
    );
}
export default Hashtag;
