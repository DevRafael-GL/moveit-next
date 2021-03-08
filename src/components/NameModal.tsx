import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/NameModal.module.css'

export function NameModal() {

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header> <p>Seja bem-vindo(a) ao <strong>ExerciseTime</strong>  </p> </header>
        <p>Digite seu nome</p>
        <input type="text" name="name" id="name"/>
        <button type='button' id="btn">Continuar</button>
      </div>
    </div>
  )
}