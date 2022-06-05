import React, { useState } from "react";
import {
  Button,
  Stack,
  Divider,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { Delete, Edit, Add, Details } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import Backdrop from "components/Backdrop";
import Snackbar from "components/Snackbar";
import Confirmation from "components/Confirmation";
import Form from "./form";
import Show from "./show";
import rows from "data/customer.json";

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 400 },
  { field: "address", headerName: "Address", width: 400 },
];

export default function Index() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openShowDialog, setOpenShowDialog] = useState(false);
  const [actionDialog, setActionDialog] = useState("");
  const [titleDialog, setTitleDialog] = useState("");
  const [submitTitleDialog, setSubmitTitleDialog] = useState("");
  const [messageSnackbar, setMessageSnackbar] = useState("");
  const [dataDialog, setDataDialog] = useState({});
  const [selection, setSelection] = useState([]);
  const handleAdd = () => {
    setDataDialog({});
    setOpenDialog(true);
    setTitleDialog("Add Customer");
    setSubmitTitleDialog("Save");
    setActionDialog("save");
  };
  const handleEdit = () => {
    if (selection.length === 1) {
      const index = selection[0] - 1;
      setOpenDialog(true);
      setTitleDialog("Edit Customer");
      setSubmitTitleDialog("Update");
      setDataDialog(rows[index]);
      setActionDialog("edit");
    } else if (selection.length > 1) {
      setMessageSnackbar("Please select only one data for edit");
      setShowSnackbar(true);
    } else {
      setMessageSnackbar("Please select data customer");
      setShowSnackbar(true);
    }
  };
  const handleDelete = () => {
    if (selection.length > 0) {
      setShowConfirmation(true);
    } else {
      setMessageSnackbar("Please select data customer");
      setShowSnackbar(true);
    }
  };
  const handleCancelDialog = () => {
    setOpenDialog(!openDialog);
    setTitleDialog("");
    setActionDialog("");
    setSubmitTitleDialog("");
  };
  const handleSubmitDialog = (action, data) => {
    setShowBackdrop(true);
    setTimeout(() => {
      setShowBackdrop(false);
      handleCancelDialog();
    }, 5000);
  };
  const handleSelection = (values) => {
    setSelection(values);
  };
  const handleCloseSnackbar = (value) => setShowSnackbar(value);
  const handleCancelConfirmation = () => setShowConfirmation(false);
  const handleSubmitConfirmation = () => {
    setShowBackdrop(true);
    setTimeout(() => {
      setShowBackdrop(false);
      handleCancelConfirmation();
    }, 5000);
  };
  const handleDetail = () => {
    if (selection.length === 1) {
      const index = selection[0] - 1;
      setOpenShowDialog(true);
      setDataDialog(rows[index]);
    } else if (selection.length > 1) {
      setMessageSnackbar("Please select only one data for show detail");
      setShowSnackbar(true);
    } else {
      setMessageSnackbar("Please select data customer");
      setShowSnackbar(true);
    }
  };
  const handleCloseShowDialog = () => setOpenShowDialog(!openShowDialog);
  return (
    <>
      <Card>
        <CardHeader title="Customers" />
        <Divider />
        <CardContent>
          <Stack direction="row" spacing={1} mb={1}>
            <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
              Add
            </Button>
            <Button
              variant="contained"
              startIcon={<Edit />}
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              startIcon={<Delete />}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              startIcon={<Details />}
              onClick={handleDetail}
            >
              Detail
            </Button>
          </Stack>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            autoHeight
            onSelectionModelChange={handleSelection}
          />
        </CardContent>
      </Card>
      <Form
        open={openDialog}
        title={titleDialog}
        onCancel={handleCancelDialog}
        onSubmit={handleSubmitDialog}
        submitTitle={submitTitleDialog}
        action={actionDialog}
        data={dataDialog}
      />
      <Show
        open={openShowDialog}
        data={dataDialog}
        onClose={handleCloseShowDialog}
      />
      <Snackbar
        show={showSnackbar}
        message={messageSnackbar}
        onClose={handleCloseSnackbar}
      />
      <Backdrop show={showBackdrop} />
      <Confirmation
        open={showConfirmation}
        title="Delete"
        description="You will not be able to recover this record"
        onCancel={handleCancelConfirmation}
        onSubmit={handleSubmitConfirmation}
      />
    </>
  );
}
