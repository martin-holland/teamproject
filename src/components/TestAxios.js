import React, { Component } from "react";
import axios from "axios";

const startAPI =
  "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCTLjKtCFBd4wSJZW9qjKf8Hq0zmFjkRtA";

class testAxios extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get(startAPI).then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <div>
        <p>testAxios</p>
      </div>
    );
  }
}

export default testAxios;
