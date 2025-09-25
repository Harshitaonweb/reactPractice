import App from "./App.css";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Cookie</h1>
    </UserContextProvider>
  );
}

export default App;
