import React from "react";
import { useSelector } from "react-redux";
import { MdHomeFilled, MdLibraryAdd } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { BiTrendingUp, BiNews } from "react-icons/bi";
import { AiFillShopping, AiFillBulb } from "react-icons/ai";
import { RiClapperboardFill } from "react-icons/ri";
import { FiRadio } from "react-icons/fi";
import { SiYoutubegaming } from "react-icons/si";
import { GiTrophy, GiHanger } from "react-icons/gi";
import { BsMusicNote } from "react-icons/bs";
import youtubeShorts from "../assets/youtubeShorts.png";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="pb-5">
        <li className="flex items-center pb-2">
          <MdHomeFilled size={20} /> <span className="ml-1">Home</span>
        </li>

        <li className="flex items-center pb-2">
          <img alt="shortsLogo" src={youtubeShorts} className="h-4 mr-2"></img>
          <span>Shorts</span>
        </li>
        <li className="flex items-center">
          <MdSubscriptions />
          <span className="ml-1">Subscription</span>
        </li>
      </ul>
      <hr />
      <ul className="py-5">
        <li className="flex items-center pb-2">
          <MdLibraryAdd />
          <span className="ml-1">Library</span>
        </li>
        <li className="flex items-center">
          <RiHistoryFill />
          <span className="ml-1">History</span>
        </li>
      </ul>
      <hr />
      <h1 className="pt-5 font-bold">Explore</h1>
      <ul>
        <li className="flex items-center pt-2">
          <BiTrendingUp />
          <span className="ml-1">Trending</span>
        </li>
        <li className="flex items-center pt-2">
          <AiFillShopping />
          <span className="ml-1">Shopping</span>
        </li>
        <li className="flex items-center pt-2">
          <BsMusicNote />
          <span className="ml-1">Music</span>
        </li>
        <li className="flex items-center pt-2">
          <RiClapperboardFill />
          <span className="ml-1">Movies </span>
        </li>
        <li className="flex items-center pt-2">
          <FiRadio />
          <span className="ml-1">Live</span>
        </li>
        <li className="flex items-center pt-2">
          <SiYoutubegaming />
          <span className="ml-1">Gaming</span>
        </li>
        <li className="flex items-center pt-2">
          <BiNews />
          <span className="ml-1">News</span>
        </li>
        <li className="flex items-center pt-2">
          <GiTrophy />
          <span className="ml-1">Sports</span>
        </li>
        <li className="flex items-center pt-2">
          <AiFillBulb />
          <span className="ml-1">Learning</span>
        </li>
        <li className="flex items-center pt-2">
          <GiHanger />
          <span className="ml-1">Fashion </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
