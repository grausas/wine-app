import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import { Header, Loading, Footer } from "./components";
import { AuthContext } from "./context/AuthContext";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const WineTypes = lazy(() => import("./pages/WineTypes/WineTypes"));
const AddWineTypes = lazy(() => import("./pages/AddWineType/AddWineType"));
const WineQuantity = lazy(() => import("./pages/WineQuantity/WineQuantity"));

function Routes() {
  const auth = useContext(AuthContext);

  return (
    <Router>
      <GlobalStyle />
      <Header
        isLoggedIn={!!auth.token}
        logOut={() => {
          auth.setToken();
          localStorage.removeItem("token");
        }}
      />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/about" component={AboutLazy} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/winetypes" component={WineTypes} />
          <Route exact path="/addwinetypes" component={AddWineTypes} />
          <Route exact path="/winequantity" component={WineQuantity} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
