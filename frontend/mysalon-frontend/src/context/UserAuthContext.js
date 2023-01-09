import React, {useEffect, useReducer} from 'react';


const UserAuthContext = React.createContext()

const UserAuthProvider = (props) => {

     const AuthReducer = (state, action) => {
        switch (action.type) {
            case "signout":
                return  {...state, user: null};
            default: 
                throw new Error(`Unhandled action type: ${action.type}`);
            
        }

     }
     const currUser = localStorage.getItem('auth_email') || ''

    const initial = {
        email : currUser
    }

    const [user, dispatch] = useReducer(AuthReducer, initial)
  

    const value = {
        user,
        dispatch
    }

    return  <UserAuthContext.Provider value={value} {...props} />
}

const UserAuthState = () => {
    const context = React.useContext(UserAuthContext);
    if (context === undefined) {
      throw new Error('useAuthState must be used within a AuthProvider');
    }
  
    return context;
  }

  export {UserAuthProvider, UserAuthState, UserAuthContext}

