import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../../../components/CardComponent/CardComponent";
import { templateLibraryStyles } from "./TemplateLibrary.styles";
import { Box, Typography } from "@mui/material";
import Modal from "../../../components/ModalComponent/Modal";

const TemplateLibrary = () => {
  const [templatesLibrary, setTemplatesLibrary] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const waba_id = 1474335873705932; //useLocation().state;
  const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}/templatesLibrary`, { params: { waba_id: waba_id } })
      .then((res) => {
        setTemplatesLibrary(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
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
    <Box className="OuterBox" sx={templateLibraryStyles.mainContainer}>
      {loading ? (
        <Typography variant="body1" sx={{ color: "#666", textAlign: "center", padding: "40px" }}>
          Loading Library...
        </Typography>
      ) : (
        <>
          {templatesLibrary.map((item, index) => (
            <Box className="InnerBox" key={index} sx={templateLibraryStyles.cardContainer} onClick={() => handleCardClick(item)}>
              <CardComponent cardData={item} />
            </Box>
          ))}
        </>
      )}
      <Box>{modalOpen && <Modal modalData={modalData} onClose={() => setModalOpen(false)} onSubmit={makeTemplate} />}</Box>
    </Box>
  );
};

export default TemplateLibrary;
