import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography, Box } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";

function TabPostagem() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" style={{ backgroundColor: "#e6059a" }}>
          <Tabs centered style={{ color: "#0f053e" }} onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Me conheça um pouco mais" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "#0f053e" }}
            component="h5"
            align="center"
            className="titulo"
          >
            Me conheça um pouco mais
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ color: "#0f053e" }}
            align="justify"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ut eveniet natus totam et, voluptate dicta tempore
            alias, odio nobis non eius cupiditate minima inventore pariatur!
            Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
