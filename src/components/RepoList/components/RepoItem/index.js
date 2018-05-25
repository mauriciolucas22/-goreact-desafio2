import React from 'react';

import { Container, Content, Avatar } from './styles';

const RepoItem = ({ repo, getIssues }) => (
  <Container>
    <Avatar>
      <img src={repo.avatar_url} alt={repo.login} />
    </Avatar>
    <Content>
      <strong>{repo.name}</strong>
      <small>{repo.login}</small>
    </Content>
    <button onClick={(e) => { getIssues(e, `${repo.login}/${repo.name}`, 'open'); }} >
      <i className="fa fa-chevron-right" />
    </button>
  </Container>
);

export default RepoItem;
