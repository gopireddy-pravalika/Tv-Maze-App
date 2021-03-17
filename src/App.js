import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/navbar"

 const HomePage = React.lazy(() => import("./components/HomePage/homePage"));
 const ShowInfoPage = React.lazy(() => import("./components/ShowInfoPage/showInfoPage")); 
 const SearchResultPage = React.lazy(() => import("./components/SearchResult/searchResult"));
 const NotFoundPage =React.lazy(() =>import("./components/NotFoundPage/notFoundPage"));
 function App() {
  return (
    <Router>
        <Navbar /> 
    <React.Suspense fallback={"loading  ....."}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/:id" component={ShowInfoPage} />
           <Route path="/search/:value" component ={SearchResultPage}/>
           <Route path="" component={NotFoundPage}/>
        </Switch>
      </React.Suspense> 
    </Router>
  );
}

export default App;