import React from 'react';
import styles from '../styles/logo.module.css'; // Doğru yolu yazın

const LogoInfo = () => {
  return (
    <div className={styles.infoContainer}>
      {/* Proje hakkında bilgilendirme */}
      <h1 className={styles.title}>Website Health Checker</h1>
      <p className={styles.description}>
        Check the health of your site. You will receive a report at the end of the test and be able to download the PDF. You will provide suggestions corresponding to each issue. Try now, see how it works! This is particularly needed for site admins. Example: https://example.com
      </p>

      {/* Main Features List */}
      <p className={styles.features}>Main Features:</p>
      <ul className={styles.featureList}>
        <li className={styles.featureItem}>Legal Term Analysis and Suggestions</li>
        <li className={styles.featureItem}>Etbis Registration Check</li>
        <li className={styles.featureItem}>Information</li>
        <li className={styles.featureItem}>Current Laws and Penalties of KVKK</li>
      </ul>
    </div>
  );
}

export default LogoInfo;
