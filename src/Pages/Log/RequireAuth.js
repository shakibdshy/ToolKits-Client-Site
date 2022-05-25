import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../utils/firebase.init";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  const override = css`
  position: absolute;
  inset: 0;
  margin: auto;
`;

  if (loading) {
    return (
      <HashLoader color={"#7432ff"} loading={loading} css={override} size={80} />
    );
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
