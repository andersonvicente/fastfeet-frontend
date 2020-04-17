import React, { useState, useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import { Content } from './styles';

export default function Modal({ showModal, delivery, handleModalClose }) {
  const startDateFormatted = useMemo(
    () =>
      delivery && delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
        : '--/--/----',
    [delivery]
  );

  const endDateFormatted = useMemo(
    () =>
      delivery && delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
        : '--/--/----',
    [delivery]
  );

  return (
    <Content show={showModal} onClick={handleModalClose}>
      <div>
        {delivery && (
          <>
            <h6>Informações da encomenda</h6>
            <text>{`${delivery.recipient.address_street}, ${delivery.recipient.address_number} - ${delivery.recipient.address_complement}`}</text>
            <text>{`${delivery.recipient.city}, ${delivery.recipient.state}`}</text>
            <text>{delivery.recipient.zip_code}</text>
            <hr />
            <h6>Datas</h6>
            <text>
              <strong>Retirada:</strong>
              {startDateFormatted}
            </text>
            <text>
              <strong>Entrega:</strong>
              {endDateFormatted}
            </text>
            <hr />
            <h6>Assinatura do destinatário</h6>
            {delivery.signature && <img src={delivery.signature.url} />}
          </>
        )}
      </div>
    </Content>
  );
}
