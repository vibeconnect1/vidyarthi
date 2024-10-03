import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./ConfigurationFile/routes";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
