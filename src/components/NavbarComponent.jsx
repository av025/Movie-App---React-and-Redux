import styles from "../style/navbar.module.css"
function NavbarComponent() {
    return <div className={styles.navbarWrapper}>
     <div>Movie Base</div>
     <div className={styles.searchBar}>
        <input type="text" placeholder="What Movie Your are Thinking about...."  />
     </div>
     <div>
        Theme
     </div>
    </div>
}

export default NavbarComponent; 