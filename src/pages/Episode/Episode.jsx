import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../dummy_episodes';
import NotFound from '../NotFound/NotFound';

const Episode = () => {
  const navigate = useNavigate();
    const {episodeId} = useParams();
    let content =     <div>
    <p>Episode {episodeId}</p>
    <button onClick={() => {navigate(-1)}}>Go back</button>
  </div>
  const findId = data.find(ep => ep.id === episodeId);
  if(findId === undefined) {
    content = <NotFound />
  }
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}

export default Episode