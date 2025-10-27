import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CardComponent from "../../components/CardComponent/CardComponent";
import { manageTemplatesStyles } from "./ManageTemplates.styles";
import { Box, Typography } from "@mui/material";
import Modal from "../../components/ModalComponent/Modal";
import Templates from "../Templates/templates";

const ManageTemplates = () => {
  const [templatesLibrary, setTemplatesLibrary] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [activeTab, setActiveTab] = useState("Explore");
  const waba_id = 1474335873705932; //useLocation().state;
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
    <>
      {/* Navigation Bar */}
      <Box sx={manageTemplatesStyles.navBar}>
        <Box sx={manageTemplatesStyles.navItem} onClick={() => setActiveTab("Explore")}>
          <Typography
            variant="body1"
            sx={{
              ...manageTemplatesStyles.navText,
              color: activeTab === "Explore" ? "#14b8a6" : "#666",
              borderBottom: activeTab === "Explore" ? "2px solid #14b8a6" : "none",
            }}
          >
            Explore
          </Typography>
        </Box>
        <Box sx={manageTemplatesStyles.navItem} onClick={() => setActiveTab("All")}>
          <Typography
            variant="body1"
            sx={{
              ...manageTemplatesStyles.navText,
              color: activeTab === "All" ? "#14b8a6" : "#666",
              borderBottom: activeTab === "All" ? "2px solid #14b8a6" : "none",
            }}
          >
            All
          </Typography>
        </Box>
      </Box>

      {/* Content based on active tab */}
      {activeTab === "Explore" ? (
        <Box className="OuterBox" sx={manageTemplatesStyles.mainContainer}>
          {templatesLibrary.map((item, index) => (
            <Box className="InnerBox" key={index} sx={manageTemplatesStyles.cardContainer} onClick={() => handleCardClick(item)}>
              <CardComponent cardData={item} />
            </Box>
          ))}
          <Box>{modalOpen && <Modal modalData={modalData} onClose={() => setModalOpen(false)} onSubmit={makeTemplate} />}</Box>
        </Box>
      ) : (
        <Templates />
      )}
    </>
  );
};

export default ManageTemplates;
