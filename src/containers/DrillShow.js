import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteDrill} from '../actions/drills'
import { withRouter } from "react-router-dom";
import './DrillShow.css'
class DrillShow extends Component {

  handleOnClick = event => {
    event.preventDefault()
    console.log(this.props.drill.id)
    this.props.deleteDrill(this.props.drill.id).then(this.props.history.push('/drills'))}

  render() {

    const { title, description, category, level } = this.props.drill

    return (
          <div className="drillshow">
          <h1>{title}</h1>
          <p>Description: {description}</p>
          <p>Category: {category}</p>
          <p>Level: {level}</p>
          <button onClick={this.handleOnClick}>Delete</button>
          </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const propsId = Number(ownProps.match.params.id)
  const drill = state.drills.find(drill => drill.id === propsId)

  if(drill){
    return { drill }
  } else {
    return { drill: {} }
  }
}

export default withRouter(connect(mapStateToProps, {deleteDrill})(DrillShow));
