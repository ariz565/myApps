import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";

export default function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png?20230723002237"
              alt="India Flag"
            />
            <span>India / INR</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>Help</li>
          <li>
            <BsSuitHeart />
            <span>Wishlist</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
