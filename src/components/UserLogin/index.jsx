import styles from "./UserLogin.module.scss";

const UserLogin = () => {
    const rename = (event) => {
        
    }
    return (
    <form className={styles.formLogin}> 
        <input  value={user} name="user" id="user" type="text" placeholder="User" required></input>
        <input  name="password" id="password" type="text"  placeholder="Password" required></input>
        <button type="submit"  onClick={rename}>Login</button>
    </form>
    )};

export default user;
