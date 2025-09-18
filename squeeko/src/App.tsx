import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>Header</div>
      <div>
        <ModeToggle />
      </div>
      <div>Footer</div>
    </ThemeProvider>
  );
}

export default App;
