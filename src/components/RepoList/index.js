import React from 'react';

// styles
import { Container } from './styles';

// components
import RepoItem from './components/RepoItem';


const RepoList = ({ repositories, getIssues }) => (
  <Container>
    { repositories.map(repo => <RepoItem key={repo.id} repo={repo} getIssues={getIssues} />) }
  </Container>
);

export default RepoList;
