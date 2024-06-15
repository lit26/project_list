import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import ProjectItems from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-5xl m-auto">
      <div>
        <Header />
        <Hashtag />
        <ProjectItems />
        <Footer />
      </div>
    </div>
  );
};

export default App;
