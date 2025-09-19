import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";

const Home = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex-1">
        <ModeToggle />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies posuere lorem eleifend venenatis. Aenean non leo in ex lobortis cursus. Sed odio libero, vehicula sed suscipit ut, ultrices fermentum ex. Cras consectetur volutpat metus, id porta ligula efficitur at. Aenean a mauris consequat, suscipit nibh a, commodo sem. In hac habitasse platea dictumst. Vestibulum sit amet scelerisque lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent bibendum in sapien nec viverra. Fusce ultrices pretium lacus, et sodales risus molestie quis.
      </p>
    </ThemeProvider>
  );
}

export default Home;
