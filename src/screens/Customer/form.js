import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Slide,
  Divider,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Form({
  open,
  title,
  onCancel,
  onSubmit,
  submitTitle,
  data,
  action,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState({
    name: false,
    email: false,
    address: false,
  });
  const [messageHelper, setMessageHelper] = useState({
    name: "",
    email: "",
    address: "",
  });
  useEffect(() => {
    setError({ name: false, email: false, address: false });
    setMessageHelper({ name: "", email: "", address: "" });
    setName(action === "edit" ? data.name : "");
    setEmail(action === "edit" ? data.email : "");
    setAddress(action === "edit" ? data.address : "");
  }, [data, action]);
  const handleCancel = () => onCancel();
  const handleSubmit = () => {
    setError((prevState) => ({
      ...prevState,
      name: name ? false : true,
      email: email ? false : true,
      address: address ? false : true,
    }));
    setMessageHelper((prevState) => ({
      ...prevState,
      name: name ? "" : "Fullname is required",
      email: email ? "" : "Email is required",
      address: address ? "" : "Address is required",
    }));
    if (name && email && address) {
      const params = { name, email, address };
      onSubmit(action, params);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Fullname"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(event) => setName(event.target.value)}
          error={error.name}
          helperText={messageHelper.name}
          required
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={error.email}
          helperText={messageHelper.email}
          required
        />
        <TextField
          margin="dense"
          id="address"
          label="Address"
          type="text"
          fullWidth
          variant="standard"
          multiline
          rows={4}
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          error={error.address}
          helperText={messageHelper.address}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>{submitTitle}</Button>
      </DialogActions>
    </Dialog>
  );
}
