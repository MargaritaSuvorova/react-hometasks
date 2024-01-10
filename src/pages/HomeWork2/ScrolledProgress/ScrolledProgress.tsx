import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

interface IProps {
    progressBar?: boolean;
    percent?: boolean;
}

const ScrolledProgress: React.FC<IProps> = ({progressBar, percent}) => {
    const [progress, setProgress] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const scrolledBlock = ref.current?.parentElement;
      if (!scrolledBlock) return;
        const blockHeight = scrolledBlock.scrollHeight - scrolledBlock.clientHeight;

        const handleScroll = () => {
            const calcPercent = Math.round((scrolledBlock?.scrollTop / blockHeight) * 100);
            setProgress(calcPercent);
        };
        scrolledBlock.addEventListener('scroll', handleScroll);
    });

    return (
      <>
            {progressBar && <div ref={ref} className={styles.progress} style={{width: `${progress}%`}} />}
            {percent && <div ref={ref} className={styles.percentOfProgress}>{progress}%</div>}
      </>
    );
};

export default ScrolledProgress;
