import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const AuthCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={AuthCtx.onLogout}>Logout</button>
    </Card>
  );
};

export default Home;
