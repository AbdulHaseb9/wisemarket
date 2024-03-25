import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Categorieslink } from "./components/Categorieslink";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login"
import { Account } from "./pages/Account";
import { Orders } from "./components/Account/Orders";
import { Accountdetails } from "./components/Account/Accountdetails";
import { Address } from "./components/Account/Address";
import { Notifications } from "./components/Account/Notifications";
import { Logout } from "./components/Account/Logout";

function App() {

  return (
    <>
      <Header />
      <Categorieslink />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Login">
            <Route index element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>
          <Route path="Account" element={<Account />} >
            <Route index element={<Orders />} />
            <Route path="address" element={<Address />} />
            <Route path="accountdetails" element={<Accountdetails />} />
            <Route path="notification" element={<Notifications />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;



// export const [user, setuser] = useState("user")
