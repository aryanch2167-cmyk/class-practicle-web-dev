import ChildComponent from "./Component/childcomponent";

function App() {
  const name = "Aryan Choudhary";
  const age = 19;
  const hobby = ["Reading", "Gaming", "Playing"];

  return (
    <ChildComponent name={name} age={age} hobby={hobby} />
  );
}

export default App;