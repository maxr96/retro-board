import type { Component } from "solid-js";
import Board from "./components/Board";

const App: Component = () => {
  return (
    <div class="flex flex-col flex-1 mt-5 self-stretch content-around p-2">
      <Board />
    </div>
  );
};

export default App;
