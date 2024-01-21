import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	return (

		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>MERN STACK</h1>
				<h1>USER DATA</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;



























