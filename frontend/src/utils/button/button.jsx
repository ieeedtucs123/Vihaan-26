import styles from './button.module.css';

export default function button({text , isVisible , setIsVisible}) {
  return (
     <div class={styles.centre}>
      <button type="button" className={styles.commonbutton} onClick={() => setIsVisible(!isVisible)}>
        <div class={styles.top}>{text}</div>
        <div class={styles.bottom}></div>
      </button>
    </div>
  )
}
