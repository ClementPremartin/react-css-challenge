import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  main: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius: '5px',
    width:'40rem',
    height:'20rem',
    display:'flex',
    alignItems:'center'

  },
  title: {
    color: '#0d1a28',
  },
  texte: {
    display: 'flex',
    flexDirection:'column',
    marginLeft:'50px'
  },

});

const AphroditeComponents = () => (
  <div className={css(styles.main)}>
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
    </div>
  </div>
);

export default AphroditeComponents;