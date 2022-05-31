import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, useSession, signOut } from 'next-auth/react';

export function SignInButton(){
  const session = useSession();

  console.log(session.data);

  return session.status === 'authenticated' ? (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
      >
      <FaGithub color="#04D361"/>
      {session.data.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#EBA417"/>
      Sign in with GitHub
    </button>

  );
}