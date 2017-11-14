import React, { Component } from "react";
import Jumbotron from "./../components/Jumbotron";
import DeleteBtn from "./../components/DeleteBtn";
import { Col, Row, Container } from "./../components/Grid";
import { SavedArticleList, SavedArticleListItem } from "./../components/List";
import { Input, TextArea, FormBtn } from "./../components/Form";
import API from "./../utils/API";
import Main from "./../components/Main";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount = () => {
    API.getArticles();
  }

  handleArticleDelete = id => {
    API.deleteArticle(id).then(res => API.getArticles()).catch(err => console.log(err));
  };

  render() {
    
    return(
      <Container fluid>
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            <Jumbotron>
              <h2 className="text-center">(ReactJS) New York Times Article Scraper</h2>
              <h3 className="text-center">Search for and save articles of interest.</h3>
            </Jumbotron>
          </Col>
          <Col size="md-1"></Col>
        </Row>
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            {!this.state.articles.length ? (
              <SavedArticleList>
                <ul className="list-group"></ul>
              </SavedArticleList>
            ) : (
              <SavedArticleList length={this.state.articles.length}>
                {this.state.articles.map(article => {
                  return (
                    <SavedArticleListItem
                      key={article._id}
                      id={article._id}
                      title={article.headline.main}
                      pub_date={article.pub_date}
                      web_url={article.web_url}
                      author={article.byline.original}
                      handleArticleDelete = {this.handleArticleDelete}
                    />
                  );
                })}
              </SavedArticleList>
            )}
          </Col>
          <Col size="md-1"></Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
