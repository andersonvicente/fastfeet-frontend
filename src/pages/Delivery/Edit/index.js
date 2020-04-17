import React from 'react';
import { useLocation } from 'react-router-dom';

import DeliveryForm from '~/components/DeliveryForm';

export default function Edit() {
  const location = useLocation();
  const delivery = location.state;

  return <DeliveryForm data={delivery} />;
}
