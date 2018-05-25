import React, { Component } from 'react';
import api from '../../services/api';

// styles
import { Container, Form, SideBar } from './styles';

// components
import RepoList from '../../components/RepoList';
import IssuesList from '../../components/IssuesList';

export default class Main extends Component {
  state = {
    repositoryInput: 'facebook/react',
    repositories: [],
    repositoryError: false,
    loading: false,
    issues: [],
    currentRepoID: null,
    currentRepoOBJ: null,
    loadingIssues: false,
    issuesError: false,
  };

  getIssues = async (e, state, id) => {
    e.preventDefault();
    let repoCurrent = '';
    this.setState({ loadingIssues: true });

    try {
      // pega o repo que foi selecionado
      repoCurrent = this.state.repositories.find(r => r.id === id);

      // faz request
      const { data: issues } = await api.get(`/repos/${repoCurrent.login}/${repoCurrent.name}/issues?state=${state}`);

      // get index do repo dessas issues
      const indexRepo = this.state.repositories.findIndex(r => r.id === id);
      // const { repositories } = this.state; // get repositories do state
      // repositories[indexRepo].issues = issues; // add issues ao repo

      this.setState({
        issues,
        issuesError: false,
        currentRepoID: repoCurrent.id,
        currentRepoOBJ: repoCurrent,
      });
    } catch (err) {
      this.setState({ issuesError: true });
    } finally {
      this.setState({ loadingIssues: false });
    }
  };

  handleAddRepo = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);
      const { id, name, owner: { login, avatar_url } } = repository;

      this.setState({
        repositoryInput: '',
        repositories: [
          ...this.state.repositories,
          {
            id,
            name,
            login,
            avatar_url,
          },
        ],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <Container>
        <SideBar>
          <Form onSubmit={this.handleAddRepo} withError={this.state.repositoryError}>
            <input
              type="text"
              placeholder="usuário/repositório"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              { this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }
            </button>
          </Form>

          <RepoList repositories={this.state.repositories} getIssues={this.getIssues} />
        </SideBar>

        <IssuesList
          issues={this.state.issues}
          currentRepoID={this.state.currentRepoID}
          currentRepoOBJ={this.state.currentRepoOBJ}
          loading={this.state.loadingIssues}
          getIssues={this.getIssues}
        />
      </Container>
    );
  }
}
