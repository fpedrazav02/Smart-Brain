import PropTypes from "prop-types";
import "./BoxImage.css";

const BoxImage = ({ imageUrl, boxData }) => {
  return (
    <div className="imageContainer center hidden" id="imageContainer">
      <div className="mt4 absolute">
        <img src={imageUrl} id="imageElm" width="450px" height="350px"></img>
        <div
          className="bounding-box"
          style={{
            top: boxData.topRow,
            right: boxData.rightColumn,
            left: boxData.leftColumn,
            bottom: boxData.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
};
BoxImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  boxData: PropTypes.object.isRequired,
};
export default BoxImage;
