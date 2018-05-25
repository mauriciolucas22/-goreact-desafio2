import React from 'react';

import { Container, Header, List, Description } from './styles';

import IssueItem from './components/IssueItem';

class IssuesList extends React.Component {
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
              <div>{currentRepoOBJ.login}</div>
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
