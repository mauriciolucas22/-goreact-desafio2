import React from 'react';

import { Container, Header, List } from './styles';

import IssueItem from './components/IssueItem';

class IssuesList extends React.Component {

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const {
      issues, loading, currentRepo, getIssues,
    } = this.props;

    return (
      <Container>
        <Header>
          {currentRepo && (
            currentRepo.name,
              <select onChange={(e) => { getIssues(e, e.target.value, currentRepo); }}>
                <option value="all">Todas</option>
                <option value="open">Abertas</option>
                <option value="closed">Fechadas</option>
              </select>
          )}
        </Header>
        <List>
          { issues.map(i => <IssueItem key={i.id} issue={i} />) }
        </List>
      </Container>
    );
  }
}

export default IssuesList;
