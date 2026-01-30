import { Link } from 'react-router-dom';

import styles from './nav.module.scss';

export function Nav() {
  return (
    <nav>
      <ul className={styles.links}>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
    </nav>
  );
}
