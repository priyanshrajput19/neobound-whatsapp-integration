import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CardComponent from "../../components/CardComponent/CardComponent";
import { templibraryStyles } from "./templibrary.styles";

const TemplatesLibrary = () => {
  const [templatesLibrary, setTemplatesLibrary] = useState([]);
  const { waba_id } = useLocation().state;

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    axios
      .get(`${apiUrl}/templatesLibrary`, { params: { waba_id: waba_id } })
      .then((res) => {
        setTemplatesLibrary(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={templibraryStyles.mainContainer}>
      {templatesLibrary.map((item, index) => (
        <CardComponent key={index} cardData={item} />
      ))}
    </div>
  );
};

export default TemplatesLibrary;
