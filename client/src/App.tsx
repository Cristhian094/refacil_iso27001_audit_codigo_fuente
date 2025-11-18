import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Principios from "./pages/Principios";
import Roles from "./pages/Roles";
import Politicas from "./pages/Politicas";
import Riesgos from "./pages/Riesgos";
import Auditoria from "./pages/Auditoria";
import Recursos from "./pages/Recursos";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/principios" component={Principios} />
      <Route path="/roles" component={Roles} />
      <Route path="/politicas" component={Politicas} />
      <Route path="/riesgos" component={Riesgos} />
      <Route path="/auditoria" component={Auditoria} />
      <Route path="/recursos" component={Recursos} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
