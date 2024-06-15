import React from "react";
import { useProject } from "../context/ProjectContext";
import { hashtags } from "../constants";

const Hashtag: React.FC = () => {
  const { selectCategory, setSelectCategory, count, total } = useProject();

  return (
    <>
      <div className="flex flex-wrap mx-10 my-3">
        {hashtags.map((hashtag, index) => (
          <div
            key={`hashtag_${index}`}
            className={`mr-2 rounded-full cursor-pointer px-3 mb-1 text-white ${
              selectCategory === hashtag.key ? "bg-primary" : "bg-lightBlue"
            }`}
            onClick={() => setSelectCategory(hashtag.key)}
          >
            {hashtag.text}
          </div>
        ))}
      </div>
      <div className="text-desc mx-10 my-3">{`Project count: ${count}/${total}`}</div>
    </>
  );
};
export default Hashtag;
