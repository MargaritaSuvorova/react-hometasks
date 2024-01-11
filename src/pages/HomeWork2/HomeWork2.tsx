import styles from './styles.module.css';
import ScrolledProgress from './ScrolledProgress/ScrolledProgress';

export const HomeWork2 = () => {
  const titles = [];

  for (let i = 0; i < 10; i++) {
    titles.push(`title ${i+1}`)
  }

  return  <div className={styles.container}>
      <h3 style={{marginBottom: '15px'}}>Решение домашнего задания №2</h3>

      <div className={styles.scrolledBlock}>
            <ScrolledProgress progressBar percent />
        <div className={styles.height}>
          {titles.map((el, index) => {
            return (
              <h4 key={index} style={{marginBottom: '1000px'}}>{el}</h4>
            )
          })}
        </div>
      </div>
    </div>

};
