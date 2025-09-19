import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";

const Home = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex-1">
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default Home;
