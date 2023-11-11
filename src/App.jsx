import { BrowserRouter, Route, Routes } from "react-router-dom";
import CaseConvert from "./Pages/Home/CaseConvert";
import AppLayout from "./AppLayoyt";
import GlobalStyles from "./Styles/GlobalStyles";
import BoldConvert from "./Pages/Bold/BoldConvert";
import DuplicateConvert from "./Pages/Duplicate/DuplicateConvert";
import MirrorConvert from "./Pages/Mirror/MirrorConvert";
import PlainConvert from "./Pages/Plain/PlainConvert";
import ReverseConvert from "./Pages/Reverse/ReverseConvert";
import BinaryTranslator from "./Pages/Binary/BinaryTranslator";
import CsvJson from "./Pages/CSV/CsvJson";
import AllTools from "./Pages/All/AllTools";
import CursedText from "./Pages/CursedText/CursedText";
import InvisibleGenerator from "./Pages/Invisible/InvisibleGenerator";
import TinyText from "./Pages/TinyText/TinyText";
import StrikeThroughConvert from "./Pages/Strikethrough/StrikeThroughConvert";

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
              element={<MirrorConvert />}
            ></Route>
            <Route
              path="/plain-text-converter"
              element={<PlainConvert />}
            ></Route>
            <Route
              path="/reverse-text-converter"
              element={<ReverseConvert />}
            ></Route>
            <Route path="/all-tools" element={<AllTools />}></Route>
            <Route
              path="/sentense-text-converter"
              element={<CaseConvert />}
            ></Route>
            <Route
              path="/binary-code-translator"
              element={<BinaryTranslator />}
            ></Route>
            <Route
              path="/invisible-text-generator"
              element={<InvisibleGenerator />}
            ></Route>
            <Route path="/cursed-text-tool" element={<CursedText />}></Route>
            <Route path="/csv-to-json" element={<CsvJson />}></Route>
            <Route path="/tiny-text-generator" element={<TinyText />}></Route>
            <Route
              path="/strikethrough-text-generator"
              element={<StrikeThroughConvert />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
