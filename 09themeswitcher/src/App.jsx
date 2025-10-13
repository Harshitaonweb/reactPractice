import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          {/*theme button*/}

          <div className="w-full max-w-sm mx-auto"></div>
          {/*Card*/}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
