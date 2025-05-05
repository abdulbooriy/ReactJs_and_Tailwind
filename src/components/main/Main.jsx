import React from "react";
import Hero from "../hero/Hero";
import CategoryTabs from "../category_tabs/CategoryTabs";
import FeaturePosts from "../feature_posts/FeaturePosts";
import MostRecent from "../most_recent/MostRecent";

const Main = () => {
  return (
    <main>
      <Hero />
      <CategoryTabs />
      <FeaturePosts />
      <MostRecent />
    </main>
  );
};

export default Main;
