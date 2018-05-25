import React from 'react';

import { Container, Header } from './styles';

import IssueItem from './components/IssueItem';
import RepoItem from '../../components/RepoList/components/RepoItem';

const IssuesList = ({ issues, loading, repo }) => (
  <Container>
    <Header>
      { repo && <RepoItem repo={repo} /> }
    </Header>
    { issues.map(i => <IssueItem key={i.id} issue={i} />) }
  </Container>
);

export default IssuesList;
