"use client";
import { fetchComics } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from './styles.module.scss'

let page = 1;

export type ComicsCard = JSX.Element;

function ComicsList() {
  const { ref, inView } = useInView();

  const [data, setData] = useState<ComicsCard[]>([]);

  useEffect(() => {
    if (inView) {
      fetchComics(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className={styles.list}>{data}</section>
      <section>
        <div ref={ref} className={styles.loader}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

 

export default ComicsList;
