import React from 'react';
import PropTypes from 'prop-types';

// styles
import { Container } from './styles';

// components
import RepoItem from './components/RepoItem';

const RepoList = ({ repositories, getIssues }) => (
  <Container>
    { repositories.map(repo => <RepoItem key={repo.id} repo={repo} getIssues={getIssues} />) }
  </Container>
);

RepoList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape).isRequired,
  getIssues: PropTypes.func.isRequired,
};

export default RepoList;
