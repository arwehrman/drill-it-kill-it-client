import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillShow from './DrillShow';
import DrillCard from '../components/DrillCard'
import { getDrills} from '../actions/drills'
import { Switch, Route } from 'react-router-dom';

class Drills extends Component {
  componentDidMount() {
    this.props.getDrills()
  }

  render(){
     const { match, drills } = this.props;

    return (
      <div>
      <br />
      <Switch>
      <Route exact path={match.url}
        render={ () =>
          <div className="drills">
            <h2>List of Drills</h2>
            {drills.map(drill => <DrillCard key={drill.id} id={drill.id} drill={ drill } />)}
          </div>
        }
      />
      <Route path={`${match.url}/:drillId`} component={DrillShow} />

      </Switch>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    drills: state.drills
  })
}

export default connect(mapStateToProps, {getDrills})(Drills);
