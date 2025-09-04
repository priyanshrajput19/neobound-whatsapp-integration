import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CardComponent from "../../components/CardComponent/CardComponent";
import { templibraryStyles } from "./templibrary.styles";
import { Box } from "@mui/material";
import Modal from "../../components/ModalComponent/Modal";
const TemplatesLibrary = () => {
  const [templatesLibrary, setTemplatesLibrary] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { waba_id } = useLocation().state;
  const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
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

  const handleCardClick = (item) => {
    setModalData(item);
    setModalOpen(true);
  };

  const makeTemplate = async (templateName) => {
    console.log("In template library");
    console.log("Template name :", templateName);

    const response = await axios.post(`${apiUrl}/createTemplate`, {
      waba_id: waba_id,
      name: templateName,
      language: modalData.language,
      category: modalData.category,
      library_template_name: modalData.name,
      library_template_button_inputs: [],
    });
    if (response.status === 200) {
      console.log("Template created", response.data);
    } else {
      console.log("Error creating template", response.data);
    }
  };

  return (
    <Box className="OuterBox" sx={templibraryStyles.mainContainer}>
      {templatesLibrary.map((item, index) => (
        <Box className="InnerBox" key={index} sx={templibraryStyles.cardContainer} onClick={() => handleCardClick(item)}>
          <CardComponent cardData={item} />
        </Box>
      ))}
      <Box>{modalOpen && <Modal modalData={modalData} onClose={() => setModalOpen(false)} onSubmit={makeTemplate} />}</Box>
    </Box>
  );
};

export default TemplatesLibrary;
