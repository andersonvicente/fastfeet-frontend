import React from 'react';
import { useLocation } from 'react-router-dom';

import RecipientForm from '~/components/RecipientForm';

export default function Edit() {
  const location = useLocation();
  const recipient = location.state;

  return <RecipientForm data={recipient} />;
}
