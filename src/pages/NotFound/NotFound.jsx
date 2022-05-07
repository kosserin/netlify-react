import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './NotFound.module.css';

const NotFound = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className={styles['not-found']}>
      <h2>PAGE YOU ARE LOOKING FOR DOES NOT EXIST!</h2>
      <button onClick={() => { navigate(-1)}}>GO BACK</button>
    </div>
  )
}

export default NotFound