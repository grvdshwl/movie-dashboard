import React from "react";
import './App.css';
import ErrorBoundry from "./Components/ErrorBoundry/ErrorBoundry.js";
import {Route,Switch} from "react-router";
import Nav from "./Components/Nav/Nav.js";
import LogIn from "./pages/log-in/log-in.component";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action"

import {auth,createUserProfileDocument} from "./firebase/firebase.utils"
import Display from "./Components/display/display.component";

class App extends React.Component{

 

    unsubscribeFromAuth = null;

  componentDidMount(){
    auth.signOut()
    const {setUser} = this.props
   this.unsubscribeFromAuth =  auth.onAuthStateChanged( async (userAuth)=>{
    if(userAuth){
      const userRef =  await createUserProfileDocument(userAuth);

      userRef.onSnapshot((snapShot)=>{
         setUser({
          id:snapShot.id,
          ...snapShot.data()
        }
      
      )
        
      })


    }else{
      setUser(userAuth)
    }  
    
      
      
    })

    


  }

  componentWillUnmount(){
    
    this.unsubscribeFromAuth();
  }


  render(){
    const {currentUser} =this.props
    return (
      <div className="App"> 
      <Switch>
        <ErrorBoundry>

        
        {currentUser ? <Display/> : <LogIn/>}
        </ErrorBoundry>
      </Switch>
        
      </div>
    );
  }

 
}

const mapStateToProps = ({user:{currentUser}} )=>({
  currentUser:currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setUser:(user)=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
