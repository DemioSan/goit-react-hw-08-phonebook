import Header from 'components/Header/Header';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserAPI } from 'store/operations/authOpps';
import { isAuthSelector } from 'store/selectors';

function HomePage() {
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserAPI());
  }, [dispatch]);

  return (
    <>
      <Header />
      <h1>Explore your beloved contact hub!</h1>
      {isAuth ? (
        <h2>Thank you for using our services</h2>
      ) : (
        <p>Sign in or join us to uncover your saved contacts</p>
      )}
    </>
  );
}

export default HomePage;
