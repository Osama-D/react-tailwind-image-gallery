import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import svg1 from "./svgfiles/404 Error Page not Found with people connecting a plug-bro.svg";
import svg2 from "./svgfiles/Fast loading-bro.svg";
import { AiOutlineClose } from "react-icons/ai";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  const [isopen, setisopen] = React.useState(false);
  const [selectedimage, setslectedimage] = React.useState(null);

  function openModel(e) {
    setisopen(true);
    setslectedimage(e);
  }
  return (
    <>
      <div className=" w-full justify-center font-body selection:bg-red selection:text-white ">
        <ImageSearch searchTeext={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 ? (
          <img
            className="h-[700px] flex justify-center m-auto "
            src={svg1}
            alt="svg"
          />
        ) : (
          <h1 className="m-14 text-center relative px-10  text-4xl before:absolute  before:left-1/2 before:-translate-x-1/2 before:translate-y-14 tall1:before:translate-y-24 tall2:before:translate-y-32 before:h-1 before:w-[10%] before:justify-center before:border-b-2 before:border-red font-semibold flex justify-center ">
            See what’s trending
          </h1>
        )}
        {isLoading ? (
          <div>
            <div className="bg-white w-[100%] h-[100%] left-0 top-0 fixed"></div>
            <img
              className="h-[700px] absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
              src={svg2}
              alt="svg"
            />
          </div>
        ) : (
          <div className="">
            <div className="flex mx-auto gap-10 justify-center flex-wrap mt-16">
              {images.map((image) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  onClick={openModel}
                  searchTag={(tag) => setTerm(tag)}
                />
              ))}
            </div>
          </div>
        )}
        <div className=" justify-center m-20 mb-10">
          <h1 className="flex justify-center capitalize border-t-2 border-red pt-14">
            {" "}
            Made With love by Osama D. ❤️
          </h1>
        </div>
      </div>
      {isopen && (
        <div>
          <div className="fixed inset-0 bg-red bg-opacity-50 "></div>
          <div className="fixed  top-0 left-0 w-[100%] h-[100%] flex justify-center items-center ">
            <img
              src={selectedimage.webformatURL}
              alt="iamsd"
              className="max-h-[500px]"
            />
          </div>
          <div className="bottom-80 left-0 w-[100%] rounded-full h-[100%] flex justify-center items-center fixed text-red text-4xl">
            <AiOutlineClose
              onClick={() => setisopen(false)}
              className="cursor-pointer text-6xl p-2 bg-white rounded-full "
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
