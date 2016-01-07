import React from 'react';
import $ from 'jquery';

class VisualManagerComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

    }

    componentDidMount() {
      $.getJSON(this.props.source, this.handleNewCommentData.bind(this));
    }

    handleNewCommentData(data) {
        this.setState({
            data: data
        });
    }

    render() {


        return (
            <div className='visual-manager-component'>
              <div className="card">
                <img className="card-img-top" data-src="..." alt="Card image cap"/>
                <div className="card-block">
                  <h4 className="card-title">{this.state.data.full_name}</h4>
                  <p className="card-text">{this.state.data.description}</p>
                  <a href="#" className="btn btn-primary">Button</a>
                </div>
              </div>
              <div className='forks'><i className="fa fa-code-fork fa-5x"></i>{this.state.data.forks}</div>
              <div className='stars'><i className="fa fa-star fa-5x"></i>{this.state.data.watchers}</div>
            </div>
        );

    }
}

VisualManagerComponent.propTypes = {
    source: React.PropTypes.string.isRequired
}

export default VisualManagerComponent;
