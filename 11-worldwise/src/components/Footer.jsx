import styles from "./Sidebar.module.css";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
