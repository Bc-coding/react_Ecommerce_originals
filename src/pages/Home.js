import React from "react";
import {
  BrowseCollections,
  Hero,
  Services,
  Contact,
  NewInStoreProducts,
  SocialMedia,
} from "../components";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <BrowseCollections />
      <NewInStoreProducts />
      <SocialMedia />
      <Contact />
    </main>
  );
}

export default Home;
