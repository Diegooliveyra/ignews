import styles from './styles.module.scss';
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

export function SignInButton(){
  const isUserLoggedIn = false

  return isUserLoggedIn ? (
    <button type='button' className={styles.signInButton}>
      <FaGithub color='#04D301'/>
      <span>Diego de Oliveira</span>
      <FiX className={styles.closeIcon}/>
    </button>
  ) : (
    <button type='button' className={styles.signInButton}>
      <FaGithub color='#EBA417'/>
      <span>Sign in with Github</span>
    </button>
  )
}