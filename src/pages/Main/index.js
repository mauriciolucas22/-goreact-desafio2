import React, { Component } from 'react';
import api from '../../services/api';

// styles
import { Container, Form } from './styles';

// components
import RepoList from '../../components/RepoList';

export default class Main extends Component {
  state = {
    repositoryInput: 'facebook/react',
    repositories: [],
    repositoryError: false,
    loading: false,
  };

  handleAddRepo = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [
          ...this.state.repositories,
          repository,
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

        <RepoList repositories={this.state.repositories} />
      </Container>
    );
  }
}
