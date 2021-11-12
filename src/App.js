import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop ";


function App() {
  const user = false;
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/products/:category">
          <ProductListPage/>
        </Route>
        <Route path="/product/:id">
          <ProductInfoPage/>
        </Route>
        <Route path="/cart">
          <CartPage/>
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> : <RegisterPage/>}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <LoginPage/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
