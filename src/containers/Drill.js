import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillCard from '../components/DrillCard';
import { likeDrill, deleteDrill, getDrills } from '../actions/drills'

class Drill extends Component {
  constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete = () => {
      const { drill } = this.props
      this.props.deleteDrill(drill.id)
    }

  render(){
     const { drill } = this.props;
    return (
      <div>
        <DrillCard  drill={drill}/>
        <button  onClick={this.handleDelete}>Delete</button>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    drills: state.drills
  })
}

export default connect(mapStateToProps, { likeDrill, deleteDrill, getDrills})(Drill);
