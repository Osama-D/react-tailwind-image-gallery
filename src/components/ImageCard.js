import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { BsCloudDownloadFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
function ImageCard({ image, searchTag, onClick }) {
  const [tag, setTag] = React.useState("");
  const tags = image.tags.split(",");

  return (
    <div className="rounded-md hover:scale-[1.05] duration-200 ease-in-out max-w-sm overflow-hidden shadow-lg">
      <img
        onClick={() => onClick(image)}
        src={image.webformatURL}
        alt=""
        className="w-full waza:cursor-text cursor-pointer"
      />
      <div className="px-6 py-4">
        <div className="font-bold active:text-green-600 text-red text-[16px] md:text-xl mb-6 cursor-pointer">
          Photo By {image.user}
        </div>
        <ul className="flex flex-col gap-1 text-[14px] md:text-[16px]">
          <li className="rounded flex items-center bg-red p-2 gap-2 text-white">
            <BsEyeFill /> Views: {image.views}
          </li>
          <li className="rounded flex items-center bg-red p-2 gap-2 text-white">
            <BsCloudDownloadFill /> Download: {image.downloads}
          </li>
          <li className="rounded flex items-center bg-red p-2 gap-2 text-white">
            <AiFillLike /> Likes: {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            onClick={(e) =>
              setTag(e.target.getAttribute("name"), searchTag(tag))
            }
            name={tag}
            className="inline-block cursor-pointer my-1   bg-gray-200 rounded  px-4 py-2  text-[14px] md:text-[16px] font-semibold text-gray-700 mr-2"
          >
            <BiSearch className="inline mx-1 pointer-events-none		" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
