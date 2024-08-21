import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import { albumsData, songsData } from "../assets/assets";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl"> Featured Charts</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((album, index) => (
            <AlbumItem
              key={index}
              name={album.name}
              desc={album.desc}
              image={album.image}
              id={album.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto ">
          {songsData.map((album, index) => (
            <SongItem
              key={index}
              name={album.name}
              desc={album.desc}
              image={album.image}
              id={album.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
