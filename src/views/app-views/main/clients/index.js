import React, { lazy, Suspense } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import Loading from "components/shared-components/Loading"
import EditUser from "./edit-user"

const Clients = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route
        path={`${match.url}/clients-list`}
        component={lazy(() => import(`./clients-list`))}
      />
      <Route
        path={`${match.url}/clients-groups`}
        component={lazy(() => import(`./clients-groups`))}
      />
      <Route path={`${match.url}/:id`} component={EditUser} />
      <Redirect from={`${match.url}`} to={`${match.url}/default`} />
    </Switch>
  </Suspense>
)

export default Clients
