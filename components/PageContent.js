import styles from '../styles/Page.module.css';

function PageContent({content}) {
  return (
    <div className={styles.content}>
      <p>
        {content.description}
        <br></br>
        <br></br>
        <a href={content.link2} target='_blank'>@itsgalo</a>
        <br></br>
        <a href={content.link1} target='_blank'>@galoandstuff</a>
      </p>
    </div>
  )
}

export default PageContent;

