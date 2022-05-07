import React from 'react'
import { Link } from 'react-router-dom';
import data from '../../dummy_episodes';

import styles from './Episodes.module.css';

const Blog = () => {
  return (
    <div className={styles.episodes}>
        <h1>This page is blog on how to learn to play WoW.</h1>
        <ul style={{display: 'flex', flexDirection: 'column'}}>
        {data.map(ep => {
          return <Link key={ep.id} to={ep.id}>Episode {ep.name}</Link>
        })}
        </ul>
        <Link to='/'>Go home</Link>
    </div>
  )
}

export default Blog