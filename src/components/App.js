import { BrowserRouter, Routes, Route } from "react-router-dom";
import WalletProvider from "../context/WalletProvider";
import { Content } from "./Content";
import { Main } from "./Main";
import { About } from "./About";
import { UpdateGeneList } from "./UpdateGeneList";
import { GetGeneList } from "./GetGeneList";

function App() {

  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Content />} />
            <Route path="about" element={<About/>} />
            <Route path="getGeneList" element={<GetGeneList />} />
            <Route path="updateGeneList" element={<UpdateGeneList />} />
            <Route path="*" element={<Content />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;