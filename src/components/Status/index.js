import React, { useState, useEffect } from 'react';

import { Container, Point, Text } from './styles';

export default function Status({ delivery }) {
  const [background, setBackground] = useState(null);
  const [color, setColor] = useState(null);
  const [text, setText] = useState(null);

  function verifyStatus() {
    if (delivery.canceled_at !== null) {
      setText('CANCELADA');
      setBackground('#FAB0B0');
      setColor('#DE3B3B');
    } else if (delivery.end_date !== null) {
      setText('ENTREGUE');
      setBackground('#DFF0DF');
      setColor('#2CA42B');
    } else if (delivery.start_date !== null) {
      setText('RETIRADA');
      setBackground('#BAD2FF');
      setColor('#4D85EE');
    } else {
      setText('PENDENTE');
      setBackground('#F0F0DF');
      setColor('#C1BC35');
    }
  }

  useEffect(() => {
    verifyStatus();
  }, []);

  return (
    <Container background={background}>
      <Point color={color} />
      <Text color={color}>{text}</Text>
    </Container>
  );
}
