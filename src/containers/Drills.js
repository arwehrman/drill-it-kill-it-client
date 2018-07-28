import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrillShow from './DrillShow';
import DrillForm from './DrillForm';
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
      <DrillForm />
      <Switch>
      <Route exact path={`drills/new`} component={DrillForm} />
      <Route path={`${match.url}/:drillId`} component={DrillShow} />
      <Route exact path={match.url}
        render={ () =>
          <div className="drills">
            <br />
            <h1>List of Drills</h1>
            <br/>
            {drills.map(drill => <DrillCard key={drill.id} drill={ drill } />)}
          </div>
        }
      />
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
