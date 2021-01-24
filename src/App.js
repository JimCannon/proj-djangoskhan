import React from 'react'
//import { Greeting } from './components/greeting/Greeting'
import { Routing } from './routes/Routing'
import { DesktopNavigation } from './components/navigation/desktopnavigation/DesktopNavigation'
import { UserProvider} from './shared/global/provider/UserProvider';
import './shared/global/Global.css';


function App() {
  return (
    <UserProvider>
      <Routing>
        <DesktopNavigation />
      </Routing>
    </UserProvider>
  );
}

export default App;