import React, { useMemo } from 'react';
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
            <span>{`${delivery.recipient.address_street}, ${delivery.recipient.address_number} - ${delivery.recipient.address_complement}`}</span>
            <span>{`${delivery.recipient.city}, ${delivery.recipient.state}`}</span>
            <span>{delivery.recipient.zip_code}</span>
            <hr />
            <h6>Datas</h6>
            <span>
              <strong>Retirada:</strong>
              {startDateFormatted}
            </span>
            <span>
              <strong>Entrega:</strong>
              {endDateFormatted}
            </span>
            <hr />
            <h6>Assinatura do destinatário</h6>
            {delivery.signature && <img src={delivery.signature.url} alt="" />}
          </>
        )}
      </div>
    </Content>
  );
}
