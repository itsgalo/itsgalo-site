import { getContent } from '../utils/localdata';
import PageContent from '../components/PageContent';
import Canvas from '../components/Canvas';
import styles from '../styles/Page.module.css';

export default function About({content}) {

  const draw = (ctx, frameCount) => {

    // if (frameCount % 1 === 0) {
    //   let x = Math.floor(Math.random()*ctx.canvas.width);
    //   let y = Math.floor(Math.random()*ctx.canvas.height);
    //   ctx.fillRect(x, y, 2, 2);
    //   //ctx.fillRect(x*2, y*2, 2, 4);
    // }

    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
    // for (let x = 0; x < ctx.canvas.width; x+=10) {
    //   for (let y = 0; y < ctx.canvas.height; y+=10) {
    //     let xx = Math.floor(Math.random()*ctx.canvas.width);
    //     let yy = Math.floor(Math.random()*ctx.canvas.height);
    //     ctx.fillRect(xx, yy, 1, 1);
    //   }
    // }

    // ctx.fillStyle = '#ff0000'
    // ctx.beginPath()
    // ctx.arc(mousePos.x, mousePos.y, 20, 0, 2*Math.PI)
    // ctx.fill()
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{'//*-- about @itsgalo --*//'}</h1>
      </div>
      <Canvas draw={draw} />
      <PageContent content={content[0]} />
    </div>
  )
}

export async function getStaticProps() {
  const content = await getContent("about")
  return {
      props: {
        content
      }
  }
}