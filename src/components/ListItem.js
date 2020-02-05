import React, { Component } from 'react'
import axios from 'axios'
import './Listitem.css'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.element,
      canEdit: false
    }
  }

  toggleEdit = () => {
    this.setState({ canEdit: !this.state.canEdit })
  }

  saveEdit = () => {
    this.props.handleEdit(this.props.id, this.state.text)
    this.toggleEdit()
  }

  deletePost = () => {
    this.props.handleDelete(this.props.index)
  }

  render() {
    return (
      <div onDoubleClick={this.deletePost} className='ListItem'>
        {this.state.canEdit ? (
          <div>
            <input
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
            <button onClick={this.saveEdit}>Save</button>
          </div>
        ) : (
          <div>
            <li>{this.props.element}</li>
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
        )}
      </div>
    )
  }
}
