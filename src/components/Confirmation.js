import React, { forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  Divider,
} from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Confirmation({
  open,
  title,
  description,
  onCancel,
  onSubmit,
}) {
  const handleCancel = () => onCancel();
  const handleSubmit = () => onSubmit();
  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      fullWidth
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>{description}</DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>No</Button>
        <Button onClick={handleSubmit}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
}
