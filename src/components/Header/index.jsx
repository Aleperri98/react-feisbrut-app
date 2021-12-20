import styles from "./Header.module.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Header = (props) => {
  const name = props.name || "App";
  const links = props.links || [{ link: "/", label: "Link" }];

  const CheckActive = (link) => {
    const resolved = useResolvedPath(link);
    const match = useMatch({ path: resolved.pathname, end: true });

    return match ? styles.active : "";
  };

  return (
    <header className={styles.header}>
    <h1>{name}</h1>
    <nav>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <Link className={CheckActive(item.link)} to={item.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
};

export {Header};