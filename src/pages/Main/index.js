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
    loadingIssues: false,
    issuesError: false,
    repo: '',
  };

  getIssues = async (e, repo, state) => {
    e.preventDefault();

    this.setState({ loadingIssues: true });

    try {
      const { data: issues } = await api.get(`/repos/${repo}/issues?state=${state}`);

      this.setState({
        issues,
        issuesError: false,
        repo,
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
            issues: [],
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
          repo={this.state.repo}
          issues={this.state.issues}
          loading={this.state.loadingIssues}
        />
      </Container>
    );
  }
}
