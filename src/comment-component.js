import React from 'react';
import CommentActionComponent from './comment-action-component';

class CommentComponent extends React.Component {

    constructor(props) {
        super(props);
        this.setModerated = this.setModerated.bind(this);
    }

    render() {


      var buttons = this.props.endpoints.map((endpoint, i) => {
        var props = {
          key: i,
          endpoint: endpoint.endpoint,
          label: endpoint.label,
          name: endpoint.name,
          type: endpoint.type,
          setModerated: this.setModerated
        };
        if(!this.props.comment.isModerated){
          return (
            <CommentActionComponent {...props} />
          );
        }
      });

      return (
          <div className='comment-component col-sm-12'>
            <div className="panel panel-default">
                <div className="panel-heading">
                <strong>{this.props.comment.name}</strong> <span className="text-muted">{this.props.comment.date}</span>
                </div>

                <div className="panel-body">
                {this.props.comment.comment}
                </div>

            </div>
            {buttons}
          </div>
      );
    }

    setModerated(){
      console.log("setModerated()");
      var comment = this.props.comment;
      comment.isModerated = true;
      this.setState({
        comment: comment
      });
    }
}

export default CommentComponent;
