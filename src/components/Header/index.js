import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.auth.profile);

  function handleSignout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/delivery">
            <strong>ENCOMENDAS</strong>
          </Link>
          <Link to="/deliveryman">ENTREGADORES</Link>
          <Link to="/recipient">DESTINATÁRIOS</Link>
          <Link to="/problem">PROBLEMAS</Link>
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
