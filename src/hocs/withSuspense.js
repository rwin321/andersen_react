import React from "react";
import Preloader from "../components/Preloader";

const WithSuspense = (Component) => (props) => {
  return (
    <React.Suspense fallback={<Preloader />}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default WithSuspense;
