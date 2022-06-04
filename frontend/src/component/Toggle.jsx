import React, { useState } from "react";
import image from "../images/image_icon.png";
import eye from "../images/eye.png";
import edit from "../images/edit.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Toggle = ({ obj, getData }) => {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/property`, obj, {
        withCredentials: true,
      });
      const path = obj._id;
      console.log(path);
      const response = await axios.put(
        `http://localhost:5000/property/` + path,
        obj,
        {
          withCredentials: true,
        }
      );
      getData();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const [state, setState] = useState(false);
  return (
    <tr>
      <td className="ppd ppdid">{obj.PPID}</td>
      <td className="image">
        <img src={image} alt="aj" />
      </td>
      <td className="plot">{obj.Property}</td>
      <td className="contact">{obj.Contact}</td>
      <td className="area">{obj.Area}</td>
      <td className="view">{obj.Views}</td>
      <td className="status">
        <button onClick={() => handleSubmit(obj)}>{obj.Status}</button>
      </td>
      <td className="days">{obj.Duration}</td>
      <td className="action">
        <img src={eye} alt="eye" /> <img src={edit} alt="edit" />
      </td>
    </tr>
  );
};

{
  /* <button onClick={() => {setState(true)}}>{state ? "Sold" : "Unsold"}</button> */
}
export default Toggle;
