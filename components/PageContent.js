import styles from '../styles/Page.module.css';

function PageContent({content}) {
  return (
    <div className={styles.content}>
      <p>{content.description}</p>
    </div>
  )
}

export default PageContent;

