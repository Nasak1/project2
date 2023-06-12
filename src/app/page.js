'use client'
import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  const ref = React.useRef(null);
  const [name, setName] = React.useState('???????')

  React.useEffect(() => {
    console.log('>>>>>>', name)
  }, [name]);

  const handleOnclick = () => {
    setName('HHHHHHHHH');
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Мой сайт !
      </div>
      <div className={styles.description}>
        <input type="text" ref={ref} value={name} onChange={handleChange}/> name = {name}
              </div>
      <div className={styles.description}>
        <button className={styles.btn01} onClick={handleOnclick}>Text</button>
      </div>
    </main>
  )
}
