import React, { Component } from 'react';
import './Category.scss';

class Category extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      category: props.categoryObject
    }
  }

  selectCategory (stuff) {
    console.log(stuff);
    // this should update the sidebar, not sure how to send it to that component
  }

  render() {
      return(
        <div className="category-item" onClick={() => this.selectCategory(this.state.category.name)}>
          <div className="category-title">{this.state.category.name}</div>
          <div className="category-budgeted">{this.state.category.budgeted}</div>
          <div className="category-activity">{this.state.category.activity}</div>
          <div className="category-available">{this.state.category.available}</div>
        </div>
      )
  }
}

export default Category;