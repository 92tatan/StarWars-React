import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Film} from "./Components/Films/Films.js";
import {SectionShow} from "./Components/Others/OtherSection.js";

export const NavRoutes = () => {
    /*<Route exact path="/starships/" component={starships} />
      <Route exact path="/vehicles/" component={vehicles} />
      <Route exact path="/species/" component={species} />
      <Route exact path="/planets/" component={planets} />
      <Route exact path="/people/" component={people} />*/
  return (
    <Router>
      <Route exact path="/" component={Home} />,
      <Route exact path="/films/" component={Film} />
      <Route exact path="/starships/" component={SectionShow} />
      
    </Router>

  );
}
