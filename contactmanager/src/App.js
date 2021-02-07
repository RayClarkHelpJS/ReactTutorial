import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" email="Jdoe@gmail.com" phone="555-555-5555" />
      <Contact name="Zach Gay" email="zgay@gmail.com" phone="555-555-5555" />
    </div>
  );
}

export default App;
