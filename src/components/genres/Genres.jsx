import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
const Genres = ({ data }) => {
  console.log(data, "genres");
  const { genres } = useSelector((state) => state.home);
  console.log(genres, "2 genres");
  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
