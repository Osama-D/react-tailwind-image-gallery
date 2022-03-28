import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

function ImageSearch({ searchTeext }) {
  const [text, setText] = useState("s");

  function onSubmit(e) {
    e.preventDefault();
    searchTeext(text);
  }
  function onClick() {}
  return (
    <div className="relative w-full bg-red h-[400px]  mt-6 text-white">
      <img
        alt="img"
        className="h-[100%] opacity-50  w-full object-cover"
        src="https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80"
      />
      <div className="absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-4xl tall:text-2xl px-14 font-semibold mb-4">
          Unleash your creativity with unrivaled images
        </h1>
        <h3 onClick={onClick} className="px-10 tall:text-sm font-medium">
          Add wonder to your stories with 400M+ photos, vectors, illustrations,
          and editorial images.
        </h3>
        <form
          onSubmit={onSubmit}
          className="flex my-6  justify-center relative items-center tall:w-9/12 w-6/12 m-auto	"
        >
          <input
            onChange={(e) => setText(e.target.value)}
            className="  w-full outline-0	p-4 pl-6 flex justify-center text-red	drop-shadow-2xl rounded       h-16"
            type="text"
            placeholder="Search for images..."
          />
          <button className="absolute  right-10" type="submit">
            <GoSearch className=" cursor-pointer  text-red  h-24 w-6" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ImageSearch;
