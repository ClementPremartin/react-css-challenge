import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius: '5px',
    width:'70vw',
    height:'40vw'
  },
  title: {
    color: '#0d1a26',
    fontWeight: 400,
  },

  image: {
    width:'50%',

  },
  texte: {
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    margin:'0'

  }
});

const AphroditeComponents = () => (
  <div>
    <div className={css(styles.container)}>
      <img className={css(styles.image)} src='https://m.media-amazon.com/images/I/61nFrdDXQeL._SL1207_.jpg' alt="album"></img>
      <div className={css(styles.texte)}>
        <h1 className={css(styles.title)}>Tohu-Bohu</h1>
        <h2>
          <p>
            Rone
          </p>
          <p>
            (2012)
          </p>
        </h2>
      </div>
      <div className='like'></div>
    </div>
  </div>
);

export default AphroditeComponents;