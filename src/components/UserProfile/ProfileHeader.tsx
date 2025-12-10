import React from "react";
import styles from "../UserProfile.module.css";

interface ProfileHeaderProps {
  avatarUrl: string;
  username: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  avatarUrl,
  username,
}) => {
  return (
    <header className={styles.profileHeader}>
      <div className={styles.avatarContainer}>
        <img
          src={avatarUrl}
          alt={`${username}'s avatar`}
          className={styles.avatar}
        />
      </div>
      <div className={styles.userInfoContainer}>
        <h2 className={styles.username}>{username}</h2>
        <button className={styles.editProfileButton}>프로필 편집</button>
      </div>
    </header>
  );
};
