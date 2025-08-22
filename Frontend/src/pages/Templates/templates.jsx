import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardContent, Stack, Collapse } from "@mui/material";
import axios from "axios";
import TableComponent from "../../components/TableComponent";
import { templatesStyles } from "./templates.styles";

const Templates = () => {
  const COLUMNS = [
    { id: "name", label: "Template Name" },
    { id: "category", label: "Category" },
    { id: "language", label: "Language" },
    { id: "status", label: "Status" },
    { id: "messages_sent", label: "Messages Sent" },
    { id: "messages_opened", label: "Messages Opened" },
    { id: "last_edited", label: "Last Edited" },
    { id: "top_block_reason", label: "Top Block Reason" },
  ];

  const [businessData, setBusinessData] = useState([]);
  const [businessTemplates, setBusinessTemplates] = useState({});
  const [expandedBusiness, setExpandedBusiness] = useState(null);

  useEffect(() => {
    // axios
    //   .get("http://localhost:3000/businessData")
    //   .then((res) => {
    //     setBusinessData(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // setBusinessData(_dummyData);
    // console.log("businessData", businessData);

    //ye code comment delete karna hai yah se start karna hai
    var _dummyData = [{
      business_name: "Test Business",
      business_id: "1234567890",
      waba_id: "1234567890",
      phone_number_id: "1234567890",
    }, {
      business_name: "Test Business 2",
      business_id: "1234567890",
      waba_id: "1234567890",
      phone_number_id: "1234567890",
    }]
    setBusinessData(_dummyData);
    console.log("businessData", businessData);
    //yah tak delete karna hai
  }, []);

  const viewTemplates = async (waba_id, businessIndex) => {
    try {
      // const params = {
      //   waba_id: waba_id,
      // };
      // const response = await axios.get("http://localhost:3000/viewTemplates", { params });
      // console.log("Template data", response.data.data);

      // // Store templates for this specific business
      // setBusinessTemplates((prev) => ({
      //   ...prev,
      //   [businessIndex]: response.data.data,
      // }));
      // setExpandedBusiness(expandedBusiness === businessIndex ? null : businessIndex);

      //Ye codee comment delete karna hai yah se start karna hai
      var _dummyData = [{
        businessIndex: 0,
        name: "seasonal_promotion",
        language: "en_US",
        category: "MARKETING",
        components: [
          {
            type: "HEADER",
            format: "TEXT",
            text: "Our {{1}} is on!",
            example: {
              header_text: ["Summer Sale"],
            },
          },
        ],
      }, {
        businessIndex: 1,
        name: "Test Template",
        language: "en_US",
        category: "MARKETING",
        components: [
          {
            type: "HEADER",
            format: "TEXT",
            text: "Our {{1}} is on!",
            example: {
              header_text: ["Summer Sale"],
            },
          },
        ],
      }]
      setBusinessTemplates((prev) => ({
        ...prev,
        [businessIndex]: _dummyData.filter((item) => item.businessIndex === businessIndex),
      }));
      setExpandedBusiness(expandedBusiness === businessIndex ? null : businessIndex);
      //yah tak delete karna hai

    } catch (error) {
      console.error("Error fetching templates:", error);
      setBusinessTemplates((prev) => ({
        ...prev,
        [businessIndex]: [],
      }));
    }
  };

  const createTemplate = () => {
    const url = "https://graph.facebook.com/v23.0/102290129340398/message_templates";

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer EAAJB...");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: "seasonal_promotion",
      language: "en_US",
      category: "MARKETING",
      components: [
        {
          type: "HEADER",
          format: "TEXT",
          text: "Our {{1}} is on!",
          example: {
            header_text: ["Summer Sale"],
          },
        },
        {
          type: "BODY",
          text: "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
          example: {
            body_text: [["the end of August", "25OFF", "25%"]],
          },
        },
        {
          type: "FOOTER",
          text: "Use the buttons below to manage your marketing subscriptions",
        },
        {
          type: "BUTTONS",
          buttons: [
            {
              type: "QUICK_REPLY",
              text: "Unsubscribe from Promos",
            },
            {
              type: "QUICK_REPLY",
              text: "Unsubscribe from All",
            },
          ],
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="header" style={templatesStyles.header}>
        <Typography variant="h6" color="#bfbfbf">
          Templates
        </Typography>
      </div>
      <div style={templatesStyles.mainContainer}>
        <div>
          {businessData.map((data, index) => (
            <Card key={index} sx={templatesStyles.card}>
              <CardContent sx={templatesStyles.cardContent}>
                <Box sx={templatesStyles.businessInfoContainer}>
                  <Stack direction="column" justifyContent="space-between">
                    <Typography variant="h6" sx={templatesStyles.businessName}>
                      {data.business_name}
                    </Typography>
                    <Typography variant="body2" sx={templatesStyles.businessId}>
                      {data.business_id}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Button
                      variant="contained"
                      sx={templatesStyles.primaryButton}
                      onClick={() => viewTemplates(data.waba_id, index)}
                    >
                      {expandedBusiness === index ? "Hide Templates" : "View Templates"}
                    </Button>
                    <Button
                      className="h-10"
                      variant="contained"
                      sx={templatesStyles.primaryButton}
                      onClick={createTemplate}
                    >
                      Create Template
                    </Button>
                  </Stack>
                </Box>

                {/* Expandable table section */}
                <Collapse in={expandedBusiness === index} timeout="auto" unmountOnExit>
                  <Box sx={templatesStyles.expandableSection}>
                    {businessTemplates[index] && businessTemplates[index].length > 0 ? (
                      <TableComponent columns={COLUMNS} data={businessTemplates[index]} />
                    ) : (
                      <Typography variant="body1" sx={templatesStyles.noTemplatesMessage}>
                        No templates found for this business
                      </Typography>
                    )}
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Templates;
