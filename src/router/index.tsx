import { BrowserRouter, Route, Routes as RoutesRRD } from "react-router-dom";
import routes from "../constants/routes";
import Home from "../pages/home";
import NotFound from "../pages/notFound";

const Routes = () => (
  <BrowserRouter>
    <RoutesRRD>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path={routes.HOME} element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </RoutesRRD>
  </BrowserRouter>
);

export default Routes;
