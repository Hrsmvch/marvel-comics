import { MotionDiv } from "../Common/MotionDiv";
import styles from "./styles.module.scss";

export interface ComicsProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: ComicsProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function ComicsCard({ comics, index }: any) {
  return (
    <>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * 0.25,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        className={styles.card}
      >
        <img
          src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
          alt="Poster"
        />
        <div className={styles.content}>
          <h3>{comics.title}</h3>
          {comics.description ? <p className={styles.summary}>{comics.description}</p> : null}

          <div className={styles.info}>
            Pages: <span>{comics.pageCount}</span>
          </div>
          <div className={styles.info}>
            Stories: <span>{comics.stories.available}</span>
          </div>
          {comics.stories.items?.length ? (
            <ul className={styles.stories}>
              {comics.stories.items.map((item: any) => (
                <>
                  <li className={styles.story_item}>
                    {item.name}({item.type})
                  </li>
                </>
              ))}
            </ul>
          ) : null}
          <button>More</button>
        </div>
      </MotionDiv>
    </>
  );
}

export default ComicsCard;
