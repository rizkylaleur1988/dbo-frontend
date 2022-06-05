import React, { useState, useEffect } from "react";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";

export default function Snackbar({ show, message, onClose }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(show);
  }, [show]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    onClose(false);
  };
  return (
    <MuiSnackbar
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        sx={{ width: "100%" }}
        variant="filled"
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
}
