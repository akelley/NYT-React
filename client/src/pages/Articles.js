import React, { Component } from "react";
import Jumbotron from "./../components/Jumbotron";
import DeleteBtn from "./../components/DeleteBtn";
import { Col, Row, Container } from "./../components/Grid";
import { ArticleList, ArticleListItem } from "./../components/List";
import { Input, TextArea, FormBtn } from "./../components/Form";
import API from "./../utils/API";
import Main from "./../components/Main";

class Articles extends Component {
  state = {
    articles: [],
    topic: '',
    start_year: "",
    end_year: ""
  };

  loadArticles = () => {
    API.loadArticles(this.state.topic, this.state.start_year, this.state.end_year)
      .then(res => this.setState({
        articles: res.data.response.docs,
        topic: '',
        start_year: "",
        end_year: ""
      }))
      .catch(err => console.log(err));
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

  handleArticleSave = id => {
    const articleToSave = this.state.articles.filter(article => article.id === id)[0];
    const newArticles = this.state.articles.filter(article => article.id !== id);
    API.saveArticle(articleToSave)
      .then(() => this.setState({ articles: newArticles  }));
  };

  showArticles = () => {
    for(var i = 0; i < this.state.articles.length; i++){
      console.log(this.state.articles[i]);
    }
  };

  render() {
    //this.showArticles();
    return (
      <Container fluid>
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
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            {!this.state.articles.length ? (
              <li className="list-group-item">
                <h3><span><em>Enter search terms to begin...</em></span></h3>
              </li>
            ) : (
              <ArticleList length={this.state.articles.length}>
                {this.state.articles.map(article => {
                  return (
                    <ArticleListItem
                      key={article._id}
                      id={article._id}
                      title={article.headline.main}
                      pub_date={article.pub_date}
                      web_url={article.web_url}
                      author={article.byline.original}
                      handleArticleSave = {this.handleArticleSave}
                    />
                  );
                })}
              </ArticleList>
            )}
          </Col>
          <Col size="md-1"></Col>
        </Row>
      </Container>
    );
  };
}

export default Articles;
