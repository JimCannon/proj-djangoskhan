import React from "react";
import { Routing } from "./routes/Routing";
import { UserProvider } from "./shared/provider/UserProvider";
import "./shared/global/Global.css";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <UserProvider>
      <Routing>
        <Navigation />
      </Routing>
    </UserProvider>
  );
}

export default App;
