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
      <DialogTitle>Detail Order</DialogTitle>
      <Divider />
      <DialogContent>
        <List>
          <ListItem>
            <ListItemText
              primary="Order No"
              secondary={data.order_no ? data.order_no : ""}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Order Date"
              secondary={data.order_date ? data.order_date : ""}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Customer"
              secondary={data.customer_name ? data.customer_name : ""}
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
