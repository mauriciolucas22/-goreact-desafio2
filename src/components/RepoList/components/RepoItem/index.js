import React from 'react';

import { Container, infoContainer } from './styles';

const RepoItem = ({ repo }) => (
  <Container>
    <img src={repo.owner.avatar_url} alt={repo.owner.login} />
    <infoContainer>
      <strong>{repo.name}</strong>
      <small>{repo.owner.login}</small>
    </infoContainer>
  </Container>
);

export default RepoItem;
