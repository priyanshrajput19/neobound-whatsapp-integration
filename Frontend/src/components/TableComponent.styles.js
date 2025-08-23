// TableComponent Styles
export const tableStyles = {
  // Paper container styles
  paper: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#2a2a2a",
    border: "1px solid #3a3a3a",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    padding: "16px"
  },

  // Table container styles
  tableContainer: {
    maxHeight: 440,
    borderRadius: "8px",
    overflow: "hidden"
  },

  // Table styles
  table: {
    borderCollapse: "separate",
    borderSpacing: 0
  },

  // Header cell styles
  headerCell: {
    backgroundColor: "#1a1a1a",
    color: "white",
    fontWeight: "700",
    fontSize: "14px",
    borderBottom: "2px solid #17a34a",
    padding: "20px 16px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    "&:first-of-type": {
      borderTopLeftRadius: "8px",
    },
    "&:last-of-type": {
      borderTopRightRadius: "8px",
    },
    "&:hover": {
      backgroundColor: "#222222",
    }
  },

  // Row styles
  tableRow: {
    cursor: "pointer",
    backgroundColor: "#2a2a2a",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#323232",
      transform: "scale(1.01)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#2f2f2f",
      "&:hover": {
        backgroundColor: "#323232",
        transform: "scale(1.01)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }
    },
    "&:last-child": {
      "& .MuiTableCell-root": {
        borderBottom: "none",
      }
    }
  },

  // Default row styles (when no click handler)
  defaultRow: {
    cursor: "default",
    backgroundColor: "#2a2a2a",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#323232",
      transform: "scale(1.01)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#2f2f2f",
      "&:hover": {
        backgroundColor: "#323232",
        transform: "scale(1.01)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }
    },
    "&:last-child": {
      "& .MuiTableCell-root": {
        borderBottom: "none",
      }
    }
  },

  // Body cell styles
  bodyCell: {
    color: "#cccccc",
    fontSize: "14px",
    borderBottom: "1px solid #3a3a3a",
    padding: "18px 16px",
    transition: "all 0.2s ease",
    "&:first-of-type": {
      borderLeft: "3px solid transparent",
    },
    "&:hover": {
      borderLeft: "3px solid #17a34a",
      backgroundColor: "#2d2d2d",
    }
  },

  // Pagination styles
  pagination: {
    backgroundColor: "#2a2a2a",
    color: "#cccccc",
    borderTop: "1px solid #3a3a3a",
    marginTop: "16px",
    "& .MuiTablePagination-select": {
      color: "#cccccc",
    },
    "& .MuiTablePagination-selectIcon": {
      color: "#cccccc",
    },
    "& .MuiTablePagination-actions": {
      color: "#cccccc",
    },
    "& .MuiIconButton-root": {
      color: "#cccccc",
      "&:hover": {
        backgroundColor: "#323232",
      },
      "&.Mui-disabled": {
        color: "#666666",
      }
    }
  }
};
