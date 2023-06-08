import styles from '../styles/Page.module.css';

export default function FourOhFour() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>
          {'**@@@@----404----@@@@**'}
          <br></br>
          <br></br>
          {'page not found'}
          <br></br>
          <br></br>
          {'++####----404----####++'}
        </h3>
      </div>
    </div>
  )
}