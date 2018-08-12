import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteDrill, getDrills} from '../actions/drills';
import './DrillShow.css'
class DrillShow extends Component {

  componentDidMount() {
    this.props.getDrills()
  }

  handleOnClick = event => {
    event.preventDefault()
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
  const drill = state.drills.find(drill => drill.id === parseInt(ownProps.match.params.id, 10))

  if(drill){
    return { drill }
  } else {
    return { drill: {} }
  }
}

export default connect(mapStateToProps, {deleteDrill, getDrills})(DrillShow);
