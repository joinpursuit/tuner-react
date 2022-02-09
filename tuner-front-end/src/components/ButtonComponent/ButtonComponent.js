import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ButtonComponent.css"

const API = process.env.REACT_APP_API_URL;

const ButtonComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const handleEdit = () => {
    navigate(`/songs/${id}/edit`)
  };


  const handleDelete = () => {
    const deletePost = async () => {
      await axios.delete(API + "/songs/" + id);
    };
    deletePost();
    navigate("/songs/");
    
  };

  
  const handleBack = () => {
    navigate("/songs");
  };
  return (
    <div className="button-control">
      <button  onClick={handleBack} className="btn-back">
        Back
      </button>
      <button onClick={handleEdit} className="btn-edit">
        Edit
      </button>
      <button onClick={handleDelete} className="btn-delete">
        Delete
      </button>
    </div>
  );
};

export default ButtonComponent;
