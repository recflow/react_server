import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: [],
    };
  }
  componentDidMount() {
    this._getDatabase();
  }
  _getDatabase = async () => {
    const res = await axios.get("/api/test");
    this.setState({ data : res.data });
    console.log(this.state.data);
  };
  render() {
    return (
      <>
        <h3>get DB data(브라우저 개발모드 콘솔확인)</h3>
      </>
    );
  }
}
export default App;
