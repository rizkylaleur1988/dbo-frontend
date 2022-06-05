import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthenticationScreen from "./screens/Authentication";
import CustomerScreen from "./screens/Customer";
import HomeScreen from "./screens/Home";
import OrderScreen from "./screens/Order";

function App() {
  return (
    <>
      <Navbar />
      <Container disableGutters component="main" sx={{ pt: 8, pb: 6 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="customers" element={<CustomerScreen />} />
          <Route path="orders" element={<OrderScreen />} />
          <Route path="authentication" element={<AuthenticationScreen />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
