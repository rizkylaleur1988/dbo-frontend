import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { NavLink, Link as RRDLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <RRDLink to="/">Depoguna Bangunan Online</RRDLink>
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
            component={NavLink}
            to="/"
          >
            Home
          </Link>
          <Link
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
            component={NavLink}
            to="/customers"
          >
            Customers
          </Link>
          <Link
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
            component={NavLink}
            to="/orders"
          >
            Orders
          </Link>
          <Link
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
            underline="none"
            component={NavLink}
            to="/authentication"
          >
            Authentication
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
