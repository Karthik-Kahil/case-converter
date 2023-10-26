import { BrowserRouter, Route, Routes } from "react-router-dom";
import CaseConvert from "./Pages/Home/CaseConvert";
import AppLayout from "./AppLayoyt";
import GlobalStyles from "./Styles/GlobalStyles";
import BoldConvert from "./Pages/Bold/BoldConvert";
import DuplicateConvert from "./Pages/Duplicate/DuplicateConvert";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<CaseConvert />}></Route>
            <Route
              path="/bold-text-generater"
              element={<BoldConvert />}
            ></Route>
            <Route
              path="/duplicate-line-remover"
              element={<DuplicateConvert />}
            ></Route>
            <Route
              path="/mirror-text-converter"
              element={<CaseConvert />}
            ></Route>
            <Route
              path="/plain-text-converter"
              element={<CaseConvert />}
            ></Route>
            <Route
              path="/reverse-text-converter"
              element={<CaseConvert />}
            ></Route>
            <Route
              path="/sentense-text-converter"
              element={<CaseConvert />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
