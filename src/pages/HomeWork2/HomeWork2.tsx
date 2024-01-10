import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const HomeWork2 = () => {
  const [progress, setProgress] = useState<number>(50);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrolledBlock = ref.current;
    if (!scrolledBlock) return;
    const blockHeight = scrolledBlock.scrollHeight - scrolledBlock.clientHeight;

    const handleScroll = () => {
      const calcPercent = Math.round((scrolledBlock?.scrollTop / blockHeight) * 100);
      setProgress(calcPercent)
    }
    scrolledBlock.addEventListener('scroll', handleScroll);
  })

  return <div className={styles.container}>
      <h3>Решение домашнего задания №2</h3>
      <div className={styles.scrolledBlock} ref={ref}>
        <div className={styles.progress} style={{width: `${progress}%`}}></div>
        <div className={styles.height}></div>
        <div className={styles.percentOfProgress}>{progress}%</div>
      </div>
    </div>
};
