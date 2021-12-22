import React from 'react';
import styles from './index.module.scss';

const CreatorCard = ({ }) => {
    return (
        <div className={styles.container}>
            <div style={{ position: 'relative'}}>
                <img className={styles.coverImage} src={'/images/cover_fallback.jpg'} />
                <img className={styles.profileImage} src={'/images/profile_fallback.jpg'} />
            </div>
            <span className={styles.userName}>name</span>
            <span className={styles.bio}>bio...</span>
        </div>
    )
}

export default CreatorCard;