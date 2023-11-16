import { Component } from "react";
import "tachyons";
import Navbar from "./components/Navigation/Navbar";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import BoxImage from "./components/BoxImage/BoxImage";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      imageUrl: "/svg.svg",
      boxData: {},
      route: "signin",
      isSignedIn: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000')
      .then((resp) => resp.json())
      .then(console.log)
  }

  calculateFaceLocation = (response) => {
    const clarifaiData =
      response.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById("imageElm");
    const imageWidth = Number(image.width);
    const imageHeight = Number(image.height);

    return {
      leftColumn: clarifaiData.left_col * imageWidth,
      topRow: clarifaiData.top_row * imageHeight,
      rightColumn: imageWidth - clarifaiData.right_col * imageWidth,
      bottomRow: imageHeight - clarifaiData.bottom_row * imageHeight,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ boxData: box });
  };

  onInputChange = (event) => {
    this.setState(
      {
        input: event.target.value,
      },
      () => console.log(this.state.input)
    );
  };

  onClear = () => {
    const imageContainer = document.getElementById("imageContainer");
    const logo = document.getElementById("logo");

    logo.classList.remove("hidden");
    imageContainer.classList.add("hidden");
    const textInput = document.getElementById("textInput");
    textInput.value = "";
  };

  onBtnSubmit = () => {
    if (this.state.input === "") {
      alert("URL cannot be an empty field");
      return 0;
    }
    const imageContainer = document.getElementById("imageContainer");
    const logo = document.getElementById("logo");

    logo.classList.add("hidden");
    imageContainer.classList.remove("hidden");
    this.setState(
      {
        imageUrl: this.state.input,
      },
      () => console.log("State", this.state.imageUrl)
    );

    const PAT = "7a94c12a9a704f59ba2e33b7e131051c";
    const USER_ID = "clarifai";
    const APP_ID = "main";
    const MODEL_ID = "face-detection";
    const IMAGE_URL = this.state.input;
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };
    fetch(
      "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.displayFaceBox(this.calculateFaceLocation(result));
      })
      .catch((error) => console.log("error", error));
  };

  onChangeRoute = (routes) => {
    if (routes === "signin") {
      this.setState({ isSignedIn: false });
    } else if (routes === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: routes }, () => {
      console.log(`State has been set to ${this.state.route}`);
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <Navbar
            onChangeRoute={this.onChangeRoute}
            isSignedIn={this.state.isSignedIn}
          />
          {this.state.route === "home" ? (
            <div>
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onBtnSubmit={this.onBtnSubmit}
                input={this.state.input}
                imageUrl={this.state.imageUrl}
                onClear={this.onClear}
              />
              <Logo />
              <BoxImage
                imageUrl={this.state.imageUrl}
                boxData={this.state.boxData}
              />
            </div>
          ) : this.state.route === "signin" ? (
            <SignIn onChangeRoute={this.onChangeRoute} />
          ) : (
            <Register onChangeRoute={this.onChangeRoute} />
          )}
        </div>
      </>
    );
  }
}

export default App;
