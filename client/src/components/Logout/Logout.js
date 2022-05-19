import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as authService from "../Services/data";
import AuthCtx from "../../contexts/AuthCtx";

const Logout = () => {
  let { onLogout } = useContext(AuthCtx);

  let history = useHistory();

  useEffect(() => {
    authService.logout().then(() => {
      onLogout();
      history.push("/");
    });
  }, []);
  return null;
};

export default Logout;
