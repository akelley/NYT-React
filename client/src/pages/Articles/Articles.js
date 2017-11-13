import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { ArticleList, ArticleListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import Main from "../../components/Main";

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    start_year: "",
    end_year: ""
  };

  loadArticles = () => {
    API.getArticles(this.state.topic, this.state.start_year, this.state.end_year)
      .then(res => this.setState({
        articles: res.data.response.docs,
        topic: "",
        start_year: "",
        end_year: ""
      }))
      .catch(err => console.log(err));

    console.log("Anything here: " + this.state.articles.length);
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadArticles();
  };

  handleArticleDelete = id => {
    console.log(id);
    API.deleteArticle(id).then(res => this.loadArticles()).catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
      console.log("Inside the render: " + this.state.articles)
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            <Jumbotron>
              <h2 className="text-center">(ReactJS) New York Times Article Scraper</h2>
              <h3 className="text-center">Search for and save articles of interest.</h3>
            </Jumbotron>
            <Main 
              topic={this.state.topic}
              start_year={this.state.start_year}
              end_year={this.state.end_year}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-1"></Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
