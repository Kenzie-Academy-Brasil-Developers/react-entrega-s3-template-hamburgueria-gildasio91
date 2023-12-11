import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "../Header/style.module.scss";

export const Header = ({numberProductsHeader, setIsOpen}) => {
  const [value, setValue] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.div__logo}>
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <button onClick={() => setIsOpen(true)}>
          <MdShoppingCart className={styles.cartIcon} size={21} />
          <span>{numberProductsHeader}</span>
        </button>
      </div>
      <div className={styles.form__container}>
        <form >
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};
