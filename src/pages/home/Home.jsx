import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedby/TrustedBy";
import Slide from "../../components/slide/Slide";
import cards from "../../components/catCard/data.js";
import CatCard from "../../components/catCard/CatCard";
import "./home.css";
import Features from "../../components/features/Features";
import Explore from "../../components/explore/Explore";
import projects from "../../components/projectCard/data";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = ({ slidesToShow, arrowsScroll }) => {
  return (
    <>
      <Navbar />
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={4}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <Features />
      <Slide slidesToShow={4} arrowsScroll={3}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
      <Explore />
      <Footer />
    </>
  );
};

export default Home;
