import React from "react";
import { CategoryProvider } from "./api/CategoryContext";
import List from "./components/List/List";



function App() {
  return (
    <div className="app">
      <CategoryProvider>
        <List />
      </CategoryProvider>
    </div>
  );
}

export default App;
