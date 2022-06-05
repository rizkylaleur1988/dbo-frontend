import React, { useState, useEffect } from "react";
import { Backdrop as MuiBackdrop, CircularProgress } from "@mui/material";

export default function Backdrop({ show }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(show), [show]);
  return (
    <MuiBackdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.tooltip + 5,
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </MuiBackdrop>
  );
}
