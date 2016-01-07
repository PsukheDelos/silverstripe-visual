import React from 'react';

class CommentActionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {

        return (
            <div className='comment-action-component'>
              <button className={"btn btn-" + this.props.type + " pull-left action-btn"} data-btn-label={this.props.label} type="button" onClick={this.handleClick}>{this.props.label}</button>
            </div>
        );
    }

    handleClick(event) {

      console.log("CommentActionComponent -> handleClick()");
      console.log('sending ajax request to: ' + this.props.endpoint);

      setTimeout(() => {
        alert('Update comment.');
        this.props.setModerated();
      }, 2000);
    }

}

export default CommentActionComponent;
