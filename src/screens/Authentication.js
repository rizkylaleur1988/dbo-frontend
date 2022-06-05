import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import me from "data/me.json";

export default function Authentication() {
  return (
    <>
      <Card>
        <CardHeader title="Authentication" />
        <Divider />
        <CardContent>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={me.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={me.email} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
}
