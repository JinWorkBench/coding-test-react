import React from "react";
import type { UserStats } from "./types";
import styles from "../UserProfile.module.css";

interface ProfileStatsProps {
  stats: UserStats;
}

interface StatItemProps {
  value: number;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className={styles.statItem}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

export const ProfileStats: React.FC<ProfileStatsProps> = ({ stats }) => {
  return (
    <section className={styles.statsSection}>
      <StatItem value={stats.posts} label="게시물" />
      <StatItem value={stats.followers} label="팔로워" />
      <StatItem value={stats.following} label="팔로잉" />
    </section>
  );
};
