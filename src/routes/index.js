import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const Changelog = lazy(() => import('../pages/Changelog'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const Routes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/changelog" component={Changelog} />
        <Route component={(_) => <ErrorPage status={404} message="Page not found." />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
