import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";

const Home = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>Home page Header</div>
      <div>
        <ModeToggle />
      </div>
      <div>Home Page Footer</div>
    </ThemeProvider>
  );
}

export default Home;
