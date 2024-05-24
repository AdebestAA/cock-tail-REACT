import Loading from "./Components/Loading";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Home from "./Pages.js/Home";
import Navbar from "./Pages.js/Navbar";
import About from "./Pages.js/About";
import { AppProvider } from "./Context";
import InfoPage from "./Pages.js/InfoPage";

import SharedLayout from "./Components/SharedLayout";

function App() {
  return (
   <BrowserRouter>
   <AppProvider>

   <Routes>
<Route path="/" element={<SharedLayout />}>
<Route index element ={<Home />}/>
<Route path="/:infoId" element ={<InfoPage />}/>
<Route path="about" element ={<About />}/>

</Route>

   </Routes>
   </AppProvider>
   </BrowserRouter>
  )
}

export default App;
