import "./App.css";
import s from "./App.css";
import Header from "./components/Header/Header";
import Assignment from "./components/Assignment/Assignment";
import GetPage from "./components/GetPage/GetPage";
import PostPage from "./components/PostPage/PostPage";

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <Assignment />
      <GetPage />
      <PostPage />
    </div>
  );
};

export default App;
