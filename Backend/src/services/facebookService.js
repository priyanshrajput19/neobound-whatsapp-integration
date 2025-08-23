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
