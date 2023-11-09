import "./ImageLinkForm.css";
import PropTypes from "prop-types";

function ImageLinkForm({ onInputChange, onBtnSubmit, onClear }) {
  return (
    <div>
      <p className="phrase color-white-40">
        This magic brain can recognize faces! Give it a try!
      </p>
      <div>
        <div className="LinkUrl-container center">
          <input
            type="text w70"
            className="input"
            onChange={onInputChange}
            id="textInput"
          ></input>
          <button className="btn-detect grow" onClick={onBtnSubmit}>
            Detect!
          </button>
          <button className="btn-detect grow" onClick={onClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
ImageLinkForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onBtnSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
export default ImageLinkForm;
