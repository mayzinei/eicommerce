import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import Router from 'next/router';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          Router.push('/');
        }
      });

      return unsubscribe;
    }, []);

    if (user) {
      return <Component {...props} user={user} />;
    }

    return null;
  };

  return AuthenticatedComponent;
};

export default withAuth;