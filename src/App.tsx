import ButtonRules from "./components/ButtonRules";
import Header from "./components/Header";
import TokenPicker from "./components/TokenPicker";

function App() {
  return (
    <div className="relative flex flex-col h-screen w-screen max-w-5xl items-center">
      <Header />
      <TokenPicker />
      <ButtonRules />
    </div>
  );
}

export default App;
