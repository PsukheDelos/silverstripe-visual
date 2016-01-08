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
        console.log(this.state.data)
        console.log(this.state.data.owner.avatar_url);
    }

    render() {


      return (
          <div className='visual-manager-component'>

          <div className="container">
            	<div className="row">
            		<div className="col-lg-8 col-md-8 col-sm-6 col-lg-offset-2   col-md-offset-2">
                    <div className="card hovercard">
                      <img className="cardheader" src="https://avatars.githubusercontent.com/u/379348?v=3"/>
                      <div className="avatar">
                          <img alt="" src="https://avatars.githubusercontent.com/u/379348?v=3" />
                      </div>
                      <div className="info">
                          <div className="title">
                              <a>{this.state.data.full_name}</a>
                          </div>
                          <div className="desc">{this.state.data.description}</div>


                          <div className="fa-list-fa">
                            <i className="fa fa-star fa-5x blue "></i>
                          
                            <i className="fa fa-code-fork fa-5x fa-fw blue" ></i>

                            <p>{this.state.data.watchers}&nbsp; {this.state.data.forks}</p>

                            </div>



                        </div>

                    </div>
                </div>
            	</div>
            </div>



          </div>
      );

    }
}

VisualManagerComponent.propTypes = {
    source: React.PropTypes.string.isRequired
}

export default VisualManagerComponent;

// <div className="card">
//   <img className="card-img-top" data-src="..." alt="Card image cap"/>
//   <div className="card-block">
//     <h4 className="card-title">{this.state.data.full_name}</h4>
//     <p className="card-text">{this.state.data.description}</p>
//     <a href="#" className="btn btn-primary">Button</a>
//   </div>
// </div>
// <div className='forks'><i className="fa fa-code-fork fa-5x"></i>{this.state.data.forks}</div>
// <div className='stars'><i className="fa fa-star fa-5x"></i>{this.state.data.watchers}</div>
