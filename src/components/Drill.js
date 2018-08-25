import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Drill extends Component {

  constructor(props) {
    super(props);
    this.state = { like: 0 }
  }


  handleLike = () => {
    console.log(this.state)
    this.setState({
      like: this.state.like + 1
    })
  }


  render(){
    const { drill } = this.props;
    return (
      <div>
        <br />
        <div className="drillcard">
          <Link to={`/drills/${drill.id}`}>{drill.title}</Link>
          <p>Category: {drill.category}</p>
          <p>Skill Level: {drill.level}</p>
          <p>Like: {this.state.like} </p>
          <button onClick={this.handleLike}>Like</button>
        </div>
      </div>
    )
  }


}



export default Drill;
