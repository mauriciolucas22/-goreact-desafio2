import React from 'react';
import PropTypes from 'prop-types';

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
    <button onClick={(e) => { getIssues(e, 'open', repo.id); }} >
      <i className="fa fa-chevron-right" />
    </button>
  </Container>
);

RepoItem.propTypes = {
  repo: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
  getIssues: PropTypes.func.isRequired,
};

export default RepoItem;
