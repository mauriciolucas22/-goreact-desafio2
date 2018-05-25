import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, List, Description, Avatar, Content, Repo } from './styles';

import IssueItem from './components/IssueItem';

class IssuesList extends React.Component {
  static propTypes = {
    issues: PropTypes.arrayOf(PropTypes.shape).isRequired,
    loading: PropTypes.bool.isRequired,
    currentRepoID: PropTypes.number,
    currentRepoOBJ: PropTypes.shape({
      login: PropTypes.string,
      name: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    getIssues: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentRepoID: null,
    currentRepoOBJ: null,
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const {
      issues, loading, currentRepoID, currentRepoOBJ, getIssues,
    } = this.props;

    return (
      <Container>
        <Header>
          {currentRepoID && (
            <Description>
              <Repo>
                <Avatar>
                  <img src={currentRepoOBJ.avatar_url} alt={currentRepoOBJ.login} />
                </Avatar>
                <Content>
                  <strong>{currentRepoOBJ.name}</strong>
                  <small>{currentRepoOBJ.login}</small>
                </Content>
              </Repo>
              <select onChange={(e) => { getIssues(e, e.target.value, currentRepoID); }}>
                <option value="all">Todas</option>
                <option value="open">Abertas</option>
                <option value="closed">Fechadas</option>
              </select>
            </Description>
          )}
        </Header>
        <List>
          { issues.map(i => <IssueItem key={i.id} issue={i} />) }
          { loading && <i className="fa fa-spinner fa-pulse" /> }
        </List>
      </Container>
    );
  }
}

export default IssuesList;
