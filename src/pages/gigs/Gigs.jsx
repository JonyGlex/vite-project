import React from "react";
import "./Gigs.css";
import gigs from "../gigs/data";
import { useState } from "react";
import { useRef } from "react";
import GigCard from "../../components/gigCard/GigCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <>
      <Navbar />
      <div className="gigs">
        <div className="containergigs">
          <span className="breadcrumbs">Liverr Graphics & Design </span>
          <h1>AI Artists</h1>
          <p className="gigsdesc">
            Explore the boundaries of art and technology with Liverr's AI
            artists
          </p>
          <div className="menugigs">
            <div className="leftgigs">
              <span>Budget</span>
              <input
                ref={minRef}
                type="number"
                placeholder="min"
                className="inputgigs"
              />
              <input
                ref={maxRef}
                type="number"
                placeholder="max"
                className="inputgigs"
              />
              <button onClick={apply} className="applybutton">
                Apply
              </button>
            </div>
            <div className="rightgigs">
              <span className="sortBy">Sort by</span>
              <span className="sortType">
                {sort === "sales" ? "Best Selling" : "Newest"}
              </span>
              <img
                src="./img/down.png"
                alt=""
                onClick={() => setOpen(!open)}
                className="gigsimg"
              />
              {open && (
                <div className="rightMenu">
                  {sort === "sales" ? (
                    <span
                      className="spangigs"
                      onClick={() => reSort("createdAt")}
                    >
                      Newest
                    </span>
                  ) : (
                    <span className="spangigs" onClick={() => reSort("sales")}>
                      Best Selling
                    </span>
                  )}
                  <span className="spangigs" onClick={() => reSort("sales")}>
                    Popular
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="cardsgigs">
            {gigs.map((gig) => (
              <GigCard key={gig.id} item={gig} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gigs;
