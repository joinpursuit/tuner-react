import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
//we need params to get to a specific anime review/s
import { useParams } from "react-router-dom";
import Album from "../Album/Album";
import "./Albums.css";

const API = process.env.REACT_APP_API_URL;

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      //REpresentational State Transfer (REST) API grammar
      //GET to http://localhost:3003/anime/:id/reviews
      try {
        const albumsData = await axios.get(API + "/songs/" + id + "/albums");
        setAlbums(albumsData.data);
      } catch (error) {
        return error.message;
      }
    };
    fetchData();
  }, []);

  return (
    <section className="albums">
      <table>
        <thead>
          <tr>
            <th>Album Name</th>
            <th>Album ID </th>
            <th>Release Date</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <Album key={album.id} album={album} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Albums;
