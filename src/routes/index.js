import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import DeliveryList from '../pages/Delivery/List';
import DeliveryCreate from '../pages/Delivery/Create';
import DeliveryEdit from '../pages/Delivery/Edit';

import DeliverymanList from '../pages/Deliveryman/List';
import DeliverymanCreate from '../pages/Deliveryman/Create';
import DeliverymanEdit from '../pages/Deliveryman/Edit';

import RecipientList from '../pages/Recipient/List';
import ProblemList from '../pages/Problem/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/delivery" exact component={DeliveryList} isPrivate />
      <Route
        path="/delivery/create"
        exact
        component={DeliveryCreate}
        isPrivate
      />
      <Route path="/delivery/edit" exact component={DeliveryEdit} isPrivate />

      <Route path="/deliveryman" exact component={DeliverymanList} isPrivate />
      <Route
        path="/deliveryman/create"
        exact
        component={DeliverymanCreate}
        isPrivate
      />
      <Route
        path="/deliveryman/edit"
        exact
        component={DeliverymanEdit}
        isPrivate
      />

      <Route path="/recipient" exact component={RecipientList} isPrivate />
      <Route path="/problem" exact component={ProblemList} isPrivate />
    </Switch>
  );
}
