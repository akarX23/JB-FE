import React from "react";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";

import Auth from "../hoc/Auth";

import HorizontalScroll from "../Widgets/HorizontalScroll/HorizontalScroll";
import BookCard from "../Widgets/BookCard/BookCard";
import ImageAbstract from "../Widgets/Image/Image";

//IMAGES
import vrImage from "../assets/Images/virtual_walkthrough.jpg";
import primus from "../assets/Images/primus.png";
import primusMobile from "../assets/Images/primus-small.png";
import toddleImg from "../assets/Images/toddler-book.jpg";
import kidsImg from "../assets/Images/kidsBooks.jpg";
import fictionImg from "../assets/Images/fictionBooks.jpg";
import nonFictionImg from "../assets/Images/non-fiction.jpg";

const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: 12,
  },
  loadMore: {
    maxWidth: "fit-content",
    margin: "25px auto",
  },
}));

const Home = ({ user: details }) => {
  const classes = useStyles();
  let secondRowColors = ["#FEEEC8", "#CEEFFE", "#D4F8C4", "#D8DAFE"];
  let firstRowColors = ["#db904a", "#8F9CF1", "#6FBA6E"];
  let images = [vrImage, toddleImg, kidsImg, fictionImg, nonFictionImg];

  // Test Products
  const [items, setItems] = useState([3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5]);

  const loadMore = () => setItems([...items, 3, 4, 5, 3, 3, 4, 5, 3]);

  //Make the cards in the first row
  const getHorizontalListItem = (title, tagline, image) => (
    <div
      className="rounded-lg mx-2 sm:mx-5 flex justify-between items-center overflow-hidden shadow-lg"
      style={{
        backgroundColor:
          firstRowColors[Math.floor(Math.random() * firstRowColors.length)],
      }}
    >
      <div className="px-5 box-border min-w-min sm:w-56 w-48">
        <h1 className="sm:text-2xl text-lg font-bold text-fg ">{title}</h1>
        <Button variant="contained" color="primary" className={classes.btn}>
          {tagline}
        </Button>
      </div>
      <ImageAbstract
        src={image}
        containerClass="w-56 h-56"
        objectFit="cover"
        alt="first-row"
      />
    </div>
  );

  //SECOND ROW
  const getSecondRowItem = (avatar, title) => (
    <div className={`rounded-lg flex items-center md:py-3`}>
      <div
        className={`rounded-full md:w-14 md:h-14 w-12 h-12 text-xl justify-center p-4 flex items-center mr-4`}
        style={{ backgroundColor: secondRowColors[avatar - 1] }}
      >
        {avatar}
      </div>
      <h1 className="text-lg md:text-2xl text-fg-dark font-bold">{title}</h1>
    </div>
  );

  const categoryCard = (img, title) => (
    <div className="w-48 sm:w-56 mr-4 text-center pb-3 cursor-pointer add-transition transform hover:-translate-y-1 shadow-md hover:shadow-lg">
      <ImageAbstract
        containerClass="w-full h-36 sm:h-48"
        src={img}
        alt="category-card"
      />
      <h1 className="text-fg-dark text-base sm:text-lg font-bold m-0 mt-4">
        {title}
      </h1>
    </div>
  );

  return (
    <>
      <div className="w-full">
        <HorizontalScroll
          items={[
            getHorizontalListItem(
              "Culture Place",
              "Our sibling company",
              vrImage
            ),
            getHorizontalListItem(
              "Virtual Walkthrough",
              "Take a tour",
              vrImage
            ),

            getHorizontalListItem(
              "Enterprise Plans",
              "Our future ambitions",
              vrImage
            ),
            getHorizontalListItem("Bae Book Sharing", "Share books", vrImage),
            getHorizontalListItem("School Plans", "Coming to school", vrImage),
            getHorizontalListItem(
              "Apartment & Justbook",
              "Avail this offer",
              vrImage
            ),
            getHorizontalListItem(
              "Story reading sessions",
              "Join Session",
              vrImage
            ),
            getHorizontalListItem("Reviews", "People's Opinions", vrImage),
          ]}
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-7 items-center md:place-items-center p-3 margin-alignment bg-primary-main shadow-lg">
        {getSecondRowItem(1, `Sign Up`)}
        {getSecondRowItem(2, "Select a book")}
        {getSecondRowItem(3, "Receive, Read & Return")}
        {getSecondRowItem(4, "Receive, Read & Return")}
      </div>
      {/*Responsive image change, need to make a component rather than use image */}
      <div className="padding-alignment w-full sm:mt-12 mt-4">
        <ImageAbstract
          src={primus}
          alt="primus-banner"
          containerClass="w-full h-48 md:block hidden"
        />
        {/* <img
          src={primus}
          className="object-contain w-full max-h-48 md:block hidden"
        /> */}
        <ImageAbstract
          src={primusMobile}
          alt="primus-mobile-banner"
          containerClass="w-full h-64 md:hidden"
        />
        {/* <img src={primusMobile} className="object-contain w-full md:hidden" /> */}
      </div>
      <div className="margin-alignment">
        <HorizontalScroll
          // hidePadding
          items={[
            categoryCard(toddleImg, "Books for toddlers"),
            categoryCard(kidsImg, "Books for Kids"),
            categoryCard(kidsImg, "Books for Preteens"),
            categoryCard(fictionImg, "Fiction"),
            categoryCard(nonFictionImg, "Non Fiction"),
            categoryCard(toddleImg, "Books in Kannada"),
            categoryCard(kidsImg, "Books Buddies"),
            categoryCard(nonFictionImg, "Books for Adults"),
            categoryCard(fictionImg, "Books for all"),
          ]}
          disableAnimation
        />
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 margin-alignment">
        {items.map((rating, i) => (
          <Fade bottom duration={800} key={i}>
            <BookCard
              img={images[Math.floor(Math.random() * images.length)]}
              rating={rating}
              description={"Crazy stuff to buy"}
              rent={45}
            />
          </Fade>
        ))}
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={loadMore}
        className={classes.loadMore}
      >
        Load More
      </Button>
    </>
  );
};

export default Auth(Home);
