import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

import Image from "../../Widgets/Image/Image";

const BookCard = ({ img, rating, description, rent }) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div
      className={`p-5 pb-3 bg-primary-main flex w-full items-stretch rounded-lg shadow-md cursor-pointer transform transition-all ha:hover:-translate-y-2  duration-200 ease-in ha:hover:shadow-lg`}
    >
      <Image
        src={img}
        containerClass="w-28 mr-4 bg-paper rounded-lg overflow-hidden"
        objectFit="cover"
        alt="book-img"
      />
      <div className="flex flex-col items-start justify-evenly flex-1">
        <p className="text-secondary-dark text-lg mb-2">
          <b>&#8377;{rent}</b>
        </p>
        <Rating value={rating} precision={0.5} readOnly size="medium" />
        <p className="text-secondary-dark text-base my-2 overflow-ellipsis">
          {description}
        </p>
        <div className="w-full flex justify-between items-center mt-1">
          <Button color="secondary" variant="contained" size="small">
            Rent
          </Button>
          <Tooltip
            title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            placement="left"
          >
            <IconButton
              className="self-end"
              size="medium"
              onClick={() => setWishlisted(!wishlisted)}
            >
              {wishlisted ? (
                <FavoriteIcon color="secondary" />
              ) : (
                <FavoriteBorderIcon color="secondary" />
              )}
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
