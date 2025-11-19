export const customTemplateStyles = {
  titleContainer: {
    marginLeft: "240px",
    paddingTop: "16px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    margin: "10px",
    padding: "15px",
    color: "#acacac",
    border: "1px solid #404040",
    borderRadius: "6px",
    backgroundColor: "#27272a",
  },
  formControl: {
    width: "90%",
  },
  formControlLabel: {
    color: "#acacac",
    transform: "translate(14px, 9px) scale(1)",
    "&.MuiInputLabel-shrink": {
      transform: "translate(14px, -9px) scale(0.75)",
      color: "#17a34a", // on focus/value
    },
  },
  templateCategoryContainer: {
    color: "white",
    marginBottom: "20px",
  },
  templateLanguageContainer: {
    color: "white",
    marginBottom: "20px",
  },
  fullWidthTemplateContainer: {
    color: "white",
    marginTop: "20px",
    marginBottom: "10px",
  },
  description: {
    color: "#acacac",
    fontSize: "14px",
  },
  InputTextField: {
    width: "95%",
    "& .MuiInputBase-input::placeholder": {
      color: "#acacac",
      opacity: 1,
    },
    "& .MuiInputBase-input": {
      padding: "9px 14px",
    },
    "& .MuiInputBase-root": {
      borderRadius: "10px",
      "& fieldset": { borderColor: "#1a1a1d" },
      "&:hover fieldset": { borderColor: "#17a34a" },
      "&.Mui-focused fieldset": { borderColor: "#17a34a" },
    },
  },
  selectControl: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      color: "#acacac",
      borderRadius: "6px",
      "& fieldset": { borderColor: "#17a34a" },
    },
    "& .MuiSelect-icon": {
      color: "#f8fafc", // dropdown arrow
    },
    "& .MuiFormLabel-root": {
      color: "#b3b3b3", // floating label color
    },
    "& .MuiSelect-select": {
      padding: "10px",
      color: "#acacac",
    },
    "&.MuiInputBase-root": {
      borderRadius: "10px",
      borderColor: "#17a34a",
      "& fieldset": { borderColor: "#1a1a1d" },
      "&:hover fieldset": { borderColor: "#17a34a" },
      "&.Mui-focused fieldset": { borderColor: "#17a34a" },
    },
  },
  selectControlLabel: {
    color: "#acacac",
  },
  widthFull: {
    width: "95%",
  },
  fullWidthContainer: {
    gridColumn: "1 / -1",
  },
  buttonContainer: {
    paddingTop: "10px",
  },
  submitButton: {
    backgroundColor: "#17a34a ",
  },
};
