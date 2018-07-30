import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchDrill} from '../actions/drills'
import {deleteDrill} from '../actions/drills'

class DrillShow extends Component {

  componentDidMount() {
    this.props.fetchDrill(this.props.match.params.drillId)
  }

  render() {

    let drill = this.props.drill[0]
    const { deleteDrill, history} = this.props

    return (
      <div>
        {drill ? (
          <div key={drill.id}>
          <h1>{drill.title}</h1>
          <p>Description: {drill.description}</p>
          <p>Category: {drill.category}</p>
          <p>Level: {drill.level}</p>
          <button onClick={() => deleteDrill(drill.id, history)}>Delete</button>
          </div>
      ) : null }
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    drill: state.drills
  })
}

export default connect(mapStateToProps, {fetchDrill, deleteDrill})(DrillShow);
