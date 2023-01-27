import ButtonRules from "./components/ButtonRules";
import GameToken from "./components/GameToken";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative flex flex-col h-screen w-screen max-w-5xl items-center">
      <Header />
      <GameToken variant="scissors"/>
      <ButtonRules />
    </div>
  );
}

export default App;
