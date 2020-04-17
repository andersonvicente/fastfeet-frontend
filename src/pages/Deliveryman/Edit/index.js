import React from 'react';
import { useLocation } from 'react-router-dom';

import DeliverymanForm from '~/components/DeliverymanForm';

export default function Edit() {
  const location = useLocation();
  const deliveryman = location.state;

  return <DeliverymanForm data={deliveryman} />;
}
