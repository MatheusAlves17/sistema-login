import {
    BrowserRouter,
    Routes as Switch,
    Route,
    Navigate
  } from "react-router-dom";
  import { Home, Login } from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/entrar" element={<Login />} />
            <Route path="*" element={<Navigate to="/"/>} />
            </Switch>
        </BrowserRouter>
    )
}