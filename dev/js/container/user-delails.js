import React, { Component}  from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
    render() {
        const user = this.props.user;
        if (!user) {
            return (<h2>Select User...</h2>)
        }
        return (
           <div>
               <img src={user.thumbnail}/>
               <h2>{user.first} - {user.last}</h2>
               <h3>{user.age}</h3>
               <h3>{user.description}</h3>
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}


export default connect(mapStateToProps)(UserDetails);