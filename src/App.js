import { Route, Routes } from "react-router";
import { Login, Main, News, Users } from "./pages";
import "./App.css";
import { Layout } from "./shared";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/users" element={<Users />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
