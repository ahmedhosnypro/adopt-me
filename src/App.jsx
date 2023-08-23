import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParam from "./SearchParam";

const App = () => {
  return (
    <div>
      <h1>Adopt-me</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
      <SearchParam />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
