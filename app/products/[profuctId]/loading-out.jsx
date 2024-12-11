import styles from "./page.module.css";

const ProductLoadPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.loading}>Fetching products...</p>
    </div>
  );
};

export default ProductLoadPage;
