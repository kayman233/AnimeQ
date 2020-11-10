import React from 'react'
import styles from './index.module.css'

export default function Input({name, type, placeholder, onChange, value}) {
  return (
    <input className={styles.input} name={name} type={type}
           placeholder={placeholder} onChange={onChange} value={value}/>
  )
}
