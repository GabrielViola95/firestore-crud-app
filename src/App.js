import { Links } from "./components/Links";
import { LinkForm } from "./components/LinkForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Links />} />
          <Route path="add" element={<LinkForm />} />
          <Route path="edit/:id" element={<LinkForm />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;