import React from 'react';
import { useLocation, useNavigate, useParams , matchPath} from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    let match = matchPath(
      { path: "/users/:id" },
      "/users/123",
    );
    return (
      <Component
        {...props}
        {...{ navigate, location, params,match}}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;