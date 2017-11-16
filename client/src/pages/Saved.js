import React, { Component } from "react";
import { Col, Row, Container } from "./../components/Grid";
import { SavedArticleList, SavedArticleListItem } from "./../components/List";
import API from "./../utils/API";

class Saved extends Component {
  state = {
    articles: [],
    joke: 'hellooo fren'
  };

  componentDidMount = () => {
    API.getArticles().then(res => this.setState({
        articles: res.data
      }))
      .catch(err => console.log(err));
  };

  handleCollectionDelete = () => {
    console.log("heop!!!");
    API.deleteAll();
  };

  handleArticleDelete = _id => {
    API.deleteArticle(_id).then(() => this.setState({ articles: newArticles }));
    const newArticles = this.state.articles.filter(article => article._id !== _id);
  };

  render() {
    return(
      <Container fluid>
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            {!this.state.articles.length ? (
              <SavedArticleList
                handleCollectionDelete={this.handleCollectionDelete}
              >
                <ul className="list-group"></ul>
              </SavedArticleList>
            ) : (
              <SavedArticleList length={this.state.articles.length}
                handleCollectionDelete={this.handleCollectionDelete}
              >
                {this.state.articles.map(article => {
                  return (
                    <SavedArticleListItem
                      key={article._id}
                      _id={article._id}
                      title={article.title}
                      pub_date={article.pub_date}
                      web_url={article.web_url}
                      author={article.author}
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
