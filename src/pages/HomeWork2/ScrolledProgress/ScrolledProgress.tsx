import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';
//это были страдания, но сделала поиск родителя со скроллом, хотела вынести цикл с поиском родителя в useMemo, но тогда не совсем корректно работало
interface IProps {
    progressBar?: boolean;
    percent?: boolean;
}

const ScrolledProgress: React.FC<IProps> = ({progressBar, percent}) => {
    const [progress, setProgress] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!ref) return;
      let scrolledBlock = ref.current;
      while (scrolledBlock?.parentElement) {
        scrolledBlock = scrolledBlock.parentElement as HTMLDivElement
        if (scrolledBlock.scrollHeight > scrolledBlock.clientHeight) {
          break;
        }
      }
      if (!scrolledBlock) return;
      const blockHeight = scrolledBlock.scrollHeight - scrolledBlock.clientHeight;

      scrolledBlock.addEventListener('scroll', () => {
          if (!scrolledBlock) return;
          const calcPercent = Math.round((scrolledBlock?.scrollTop / blockHeight) * 100);
              setProgress(calcPercent);
          });
    });

    return (
      <>
            {progressBar && <div ref={ref} className={styles.progress} style={{width: `${progress}%`}} />}
            {percent && <div ref={ref} className={styles.percentOfProgress}>{progress}%</div>}
      </>
    );
};

export default ScrolledProgress;
