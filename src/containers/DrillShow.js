import React, { Component } from 'react';
import { connect } from 'react-redux';
import {likeDrill } from '../actions/drills'
import {fetchDrill} from '../actions/drills'
import {deleteDrill} from '../actions/drills'

class DrillShow extends Component {

  componentDidMount() {
    this.props.fetchDrill(this.props.match.params.drillId)
  }

  render() {
    let drill = this.props.drill[0]
    const { deleteDrill, likeDrill, history} = this.props
    return (
      <div>
        {drill ? (
          <div key={drill.id}>
          <h1>{drill.title}</h1>
          <p>Description: {drill.description}</p>
          <p>Category: {drill.category}</p>
          <p>Likes: {drill.likes}</p>
          <button onClick={() => deleteDrill(drill.id, history.push('/drills'))}>Delete</button>
          <button onClick={() => likeDrill(drill)}>Like</button>
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



export default connect(mapStateToProps, {fetchDrill, deleteDrill, likeDrill})(DrillShow);
