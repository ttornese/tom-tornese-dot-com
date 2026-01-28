import styles from './work.module.scss';

export function About() {
    return (
        <>
        <h1>About</h1>
        <div className={styles.bioWrapper}>
          <p>Small bio about me. blah blah blah blah blah.blah blah blah blah blah.blah blah blah blah blah.blah blah blah blah blah.</p>
          <div className={styles.pic}><p>picture of me</p></div>
        </div>
        </>
    )
}