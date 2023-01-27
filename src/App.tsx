import ButtonRules from "./components/ButtonRules";
import GameToken from "./components/GameToken";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center bg-gradient-app">
      <Header />
      <GameToken variant="scissors"/>
      <ButtonRules />
    </div>
  );
}

export default App;
