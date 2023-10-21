import logoImage from '../Images/Logo.svg';
import React from 'react';
import styles from './Logo.module.css'
export const Logo = () => {
    return(
        <div className={styles.container}>
            <img className={styles.logo} src={logoImage} alt="MoneyMastersLogo"/>
            <p className={styles.header}>Money Masters</p>
        </div>
    )
}
