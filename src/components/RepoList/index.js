import React from 'react';

// styles
import { Container } from './styles';

// components
import RepoItem from './components/RepoItem';

const RepoList = ({ repositories }) => (
  <Container>
    { repositories.map(repo => <RepoItem repo={repo} />) }
  </Container>
);

export default RepoList;
