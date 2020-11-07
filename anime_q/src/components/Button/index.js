import React from 'react'
import styles from './index.module.css'

export default function Button({children, onClick}) {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}
