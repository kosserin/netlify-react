import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  return (
    <div>PAGE YOU ARE LOOKING FOR DOES NOT EXIST! PLEASE <button onClick={() => { navigate(-1)}}>GO BACK</button></div>
  )
}

export default NotFound