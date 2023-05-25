import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { getUser } from '././utilities/users-service';

import OrderHistoryPage from "./Pages/OrderHistoryPage/OrderHistoryPage";
import NewOrderPage from "./Pages/NewOrderPage/NewOrderPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
// import Navbar from "./Components/Navbar";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? 
      <div>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/orders' element={<OrderHistoryPage/>}/>
          <Route path="/orders/new" element={<NewOrderPage />} />
        </Routes>
        </div>
       : 
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
export default App;
