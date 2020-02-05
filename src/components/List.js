import React from "react";
import ListItem from "./ListItem";
import axios from "axios";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: []
    };
  }

  componentDidMount = () => {
    //TODO axios.get request goes here
    axios
      .get("/api/list")
      .then(res => this.setState({ list: res.data }))
      .catch(err => console.log("get request error:" + err));
    console.log(this.state.list);
  };

  handleEdit = (index, text) => {
    //TODO axios.put
    axios
      .put(`/api/list/${index}`, text)
      .then(res => this.setState({ list: res.data }))
      .catch(err => console.log("put request error:" + err));
  };

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    let text = e.target.children[0].value;
    console.log(e.target.children[0].value, text);
    //TODO axios.post request goes here
    axios
      .post(`/api/list`, { text })
      .then(res => this.setState({ list: res.data }));
    this.setState({ input: "" });
  };

  handleDelete = index => {
    //TODO axios.delete request goes here
    axios
      .delete(`/api/list/${index}`)
      .then(res => this.setState({ list: res.data }));
  };

  render() {
    const array = this.state.list.map((element, index) => (
      <ListItem
        key={element + index}
        index={index}
        element={element}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
    ));
    console.log(this.state.list);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
          />
        </form>
        <ul style={{ listStyle: "none" }}>{array}</ul>
      </div>
    );
  }
}

export default List;
