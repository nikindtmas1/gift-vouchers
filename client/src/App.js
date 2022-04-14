import CreatePage from "./components/CreatePage/CreatePage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navigation />
          <CreatePage />
      </header>
      <div><br /></div>
      <Footer />
    </div>
  );
}

export default App;
