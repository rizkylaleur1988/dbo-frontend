import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Form({ open, onClose, data }) {
  const handleClose = () => onClose();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle>Detail Customer</DialogTitle>
      <Divider />
      <DialogContent>
        <List>
          <ListItem>
            <ListItemText
              primary="Name"
              secondary={data.name ? data.name : ""}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Email"
              secondary={data.email ? data.email : ""}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Address"
              secondary={data.address ? data.address : ""}
            />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
