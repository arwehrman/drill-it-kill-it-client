import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteDrill, getDrills} from '../actions/drills'
import { withRouter } from "react-router-dom";
import './DrillShow.css'
class DrillShow extends Component {

  componentDidMount() {
    this.props.getDrills()
  }


  handleOnClick = event => {
    event.preventDefault()
    console.log(this.props.drill.id)
    this.props.deleteDrill(this.props.drill.id).then(this.props.history.push('/drills'))}

  render() {

    const { drill } = this.props

    return (
          <div className="drillshow">
          <h1>{drill.title}</h1>
          <p>Description: {drill.description}</p>
          <p>Category: {drill.category}</p>
          <p>Level: {drill.level}</p>
          <button onClick={this.handleOnClick}>Delete</button>
          </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const propsId = Number(ownProps.match.params.id)
  console.log(propsId)
  const drill = state.drills.find(drill => drill.id === propsId)

  if(drill){
    return { drill }
  } else {
    return { drill: {} }
  }
}

export default withRouter(connect(mapStateToProps, {deleteDrill, getDrills})(DrillShow));
