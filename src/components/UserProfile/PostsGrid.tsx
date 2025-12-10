import React from "react";
import type { Post } from "./types";
import styles from "../UserProfile.module.css";

interface PostsGridProps {
  posts: Post[];
}

interface PostItemProps {
  imageUrl: string;
  caption: string;
}

const PostItem: React.FC<PostItemProps> = ({ imageUrl, caption }) => {
  return (
    <div className={styles.postItem}>
      <img src={imageUrl} alt={caption} className={styles.postImage} />
    </div>
  );
};

export const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  return (
    <main className={styles.postsGrid}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </main>
  );
};
