import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>My Blog</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="/">Home</a></li>
        <li className={styles.navItem}><a href="/courses">Courses</a></li>
        <li className={styles.navItem}><a href="/blog">Blog</a></li>
        <li className={styles.navItem}><a href="/login-register">Login</a></li>
        <li className={styles.navItem}><a href="/about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
