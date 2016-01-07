import React from 'react';

class CommentFormComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {author: '', email: '', website: '', text: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthorChange= this.handleAuthorChange.bind(this);
    this.handleEmailChange= this.handleEmailChange.bind(this);
    this.handleWebsiteChange= this.handleWebsiteChange.bind(this);
    this.handleTextChange= this.handleTextChange.bind(this);
  }

  render() {
    return (
        <div className="comment-form-component" ref="form">
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <p><input type="text" placeholder="Name" ref="author" onChange={this.handleAuthorChange} /></p>
            <p><input type="email" placeholder="Email (will not be published)" ref="email" onChange={this.handleEmailChange} /></p>
            <p><input type="text" placeholder="Website" ref="website" onChange={this.handleWebsiteChange} /></p>
            <p><textarea type="text" placeholder="Say something..." ref="text" onChange={this.handleTextChange} /></p>
            <p><input type="submit" value="Post"/></p>
          </form>
        </div>
    );
  }


  handleSubmit(e) {
    e.preventDefault();

    var author = this.state.author;
    var email = this.state.email;
    var website = this.state.website;
    var text = this.state.text;

    console.log(
      '--comment submission--\n' +
      'author: ' + author + '\n' +
      'email: ' + email + '\n' +
      'website: ' + website + '\n' +
      'text: ' + text + '\n'
    );

    this.setState({author: '', email: '', website: '', text: ''});
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handleWebsiteChange(e) {
    this.setState({website: e.target.value});
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
}

export default CommentFormComponent;
