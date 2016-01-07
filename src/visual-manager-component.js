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
              <div className='name'>Name: {this.state.data.full_name} </div>
              <div className='forks'>Forks: {this.state.data.forks}</div>
              <div className='stars'>Stars: {this.state.data.watchers}</div>
            </div>
        );

    }
}

VisualManagerComponent.propTypes = {
    source: React.PropTypes.string.isRequired
}

export default VisualManagerComponent;
