import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/fastfeet-logo.png';
import { Container, LinkMenu, Content, Profile } from './styles';

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.auth.profile);

  const pathMain = useMemo(
    () => (location ? location.pathname.split('/')[1] : ''),
    [location]
  );

  function handleSignout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <LinkMenu to="/delivery" active={pathMain === 'delivery' ? 1 : 0}>
            ENCOMENDAS
          </LinkMenu>
          <LinkMenu
            to="/deliveryman"
            active={pathMain === 'deliveryman' ? 1 : 0}
          >
            ENTREGADORES
          </LinkMenu>
          <LinkMenu to="/recipient" active={pathMain === 'recipient' ? 1 : 0}>
            DESTINATÁRIOS
          </LinkMenu>
          <LinkMenu to="/problem" active={pathMain === 'problem' ? 1 : 0}>
            PROBLEMAS
          </LinkMenu>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignout}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
