import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { BsCloudDownloadFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
function ImageCard({ image, searchTag, onClick }) {
  const [tag, setTag] = React.useState("");
  const tags = image.tags.split(",");
  const [image1, setimage1] = React.useState();
  const [style, setstyle] = React.useState("");

  return (
    <div className="rounded-md hover:scale-110 hover:duration-200 duration-200 hover:ease-linear		hover:transition  max-w-sm overflow-hidden shadow-lg">
      <img
        onClick={() => onClick(image)}
        src={image.webformatURL}
        alt=""
        className="w-full waza:cursor-text cursor-pointer"
      />
      <div className="px-6 py-4">
        <div className="font-bold active:text-green-600 text-red text-xl mb-6 cursor-pointer">
          Photo By {image.user}
        </div>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center bg-red p-2 gap-2 text-white">
            <BsEyeFill /> Views: {image.views}
          </li>
          <li className="flex items-center bg-red p-2 gap-2 text-white">
            <BsCloudDownloadFill /> Download: {image.downloads}
          </li>
          <li className="flex items-center bg-red p-2 gap-2 text-white">
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
            className="inline-block cursor-pointer my-1   bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-2"
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
