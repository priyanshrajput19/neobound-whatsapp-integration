export const checkJSONString = (str) => {
    if (typeof str !== "string") return false;
    const trimmed = str.trim();
    // Quick structural check
    if (!(trimmed.startsWith("{") && trimmed.endsWith("}")) && !(trimmed.startsWith("[") && trimmed.endsWith("]"))) {
      return false;
    }
    // Validate JSON syntax
    try {
      JSON.parse(trimmed);
      return true;
    } catch (error) {
      console.log("Error in checkJSONString: ", error);
      return false;
    }
  };
