import React from "react";
import styles from "../UserProfile.module.css";

interface ProfileInfoProps {
  name: string;
  bio: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, bio }) => {
  return (
    <section className={styles.userInfoSection}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.bio}>{bio}</p>
    </section>
  );
};
