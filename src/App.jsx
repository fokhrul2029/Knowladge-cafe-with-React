import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BlogContent from "./components/BlogContent/BlogContent";

function App() {
  return (
    <Fragment>
      <Header />
      <BlogContent></BlogContent>
      <Footer />
    </Fragment>
  );
}

export default App;
