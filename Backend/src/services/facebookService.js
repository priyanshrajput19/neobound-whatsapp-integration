const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

export const getAccessToken = async (tempCode, businessData) => {
  const url = "https://graph.facebook.com/v22.0/oauth/access_token";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      client_id: client_id,
      client_secret: client_secret,
      code: tempCode,
      grant_type: "authorization_code",
    }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data.access_token;
};

export const fetchBusinessName = async (accessToken, businessData) => {
  const fields = ["name"];
  const url = `https://graph.facebook.com/v22.0/${businessData.waba_id}?fields=${fields.join(",")}&access_token=${accessToken}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
};

export const fetchMessageTemplates = async (waba_id, access_token) => {
  const fields = ["language", "name", "rejected_reason", "status", "category", "sub_category", "last_updated_time", "components", "quality_score"];
  const url = `https://graph.facebook.com/v22.0/${waba_id}/message_templates?fields=${fields.join(",")}&limit=50&access_token=${access_token}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
};

export const makeTemplate = async (waba_id, access_token) => {
  const url = `https://graph.facebook.com/v23.0/${waba_id}/message_templates`;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${access_token}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: "august_sale",
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

  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log("Template created", data);
  return data;
};

export const fetchTemplatesLibrary = async (access_token) => {
  const url = `https://graph.facebook.com/v23.0/message_template_library?language=en_US&limit=50&access_token=${access_token}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const responseData = await response.json();
  return responseData;
};
