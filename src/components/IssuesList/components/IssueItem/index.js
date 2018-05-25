import React from 'react';

import { Container, Content } from './styles';

const IssueItem = ({ issue }) => (
  <Container>
    <img src={issue.user.avatar_url} alt={issue.user.login} />
    <Content>
      <strong>{issue.title}</strong>
      <small>{issue.user.login}</small>
      <a href={issue.html_url} target="_blank">Abrir issue</a>
    </Content>
  </Container>
);

export default IssueItem;
