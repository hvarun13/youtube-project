import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { TfiSearch } from "react-icons/tfi";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="menu"
          src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-11.jpg"
        />
        <a href="/youtube-project">
          <img
            className="h-6 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div className="  pl-48 flex">
          <input
            placeholder="Search"
            className="w-1/2 border border-gray-400 p-1 pl-5 rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-1 px-6 rounded-r-full bg-gray-100">
            <TfiSearch />
          </button>
        </div>

        {showSuggestions && (
          <div
            className="absolute bg-white ml-48 py-2 px-1 w-[30rem] shadow-lg 
          rounded-lg border border-gray-100"
          >
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="flex items-center py-2 px-2 shadow-sm hover:bg-gray-100"
                >
                  <TfiSearch size={15} /> <span className="pl-3">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-6"
          alt="user"
          src="https://freesvg.org/img/abstract-user-flat-1.png"
        />
      </div>
    </div>
  );
};

export default Head;
