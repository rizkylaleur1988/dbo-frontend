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
import moment from "moment";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import customers from "data/customer.json";

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
  const [orderNo, setOrderNo] = useState();
  const [orderDate, setOrderDate] = useState();
  const [customerId, setCustomerId] = useState();
  const [error, setError] = useState({
    orderNo: false,
    orderDate: false,
    customerId: false,
  });
  const [messageHelper, setMessageHelper] = useState({
    orderNo: "",
    orderDate: "",
    customerId: "",
  });
  useEffect(() => {
    setError({ name: false, email: false, address: false });
    setMessageHelper({ name: "", email: "", address: "" });
    setOrderNo(action === "edit" ? data.order_no : "");
    setOrderDate(action === "edit" ? data.order_date : new Date());
    setCustomerId(action === "edit" ? data.customer_id : "");
  }, [data, action]);
  const handleCancel = () => onCancel();
  const handleSubmit = () => {
    setError((prevState) => ({
      ...prevState,
      orderNo: orderNo ? false : true,
      orderDate: orderDate ? false : true,
      customerId: customerId ? false : true,
    }));
    setMessageHelper((prevState) => ({
      ...prevState,
      orderNo: orderNo ? "" : "Order No is required",
      orderDate: orderDate ? "" : "Order Date is required",
      customerId: customerId ? "" : "Customer is required",
    }));
    if (orderNo && orderDate && customerId) {
      const params = {
        orderNo,
        orderDate: moment(orderDate).format("YYYY-MM-DD"),
        customerId: parseInt(customerId),
      };
      onSubmit(action, params);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            id="order_no"
            label="Order No"
            type="text"
            fullWidth
            variant="standard"
            value={orderNo}
            onChange={(event) => setOrderNo(event.target.value)}
            error={error.orderNo}
            helperText={messageHelper.orderNo}
            required
          />
          <DesktopDatePicker
            label="Order Date"
            inputFormat="yyyy-MM-dd"
            value={orderDate}
            onChange={(value) => setOrderDate(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                variant="standard"
                margin="dense"
                error={error.orderDate}
                helperText={messageHelper.orderDate}
                required
              />
            )}
          />
          <TextField
            margin="dense"
            fullWidth
            variant="standard"
            id="customer_id"
            select
            label="Customer"
            value={customerId}
            onChange={(event) => setCustomerId(event.target.value)}
            SelectProps={{
              native: true,
            }}
            error={error.customerId}
            helperText={messageHelper.customerId}
            required
          >
            <option key={0} value="" />
            {customers.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSubmit}>{submitTitle}</Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}
