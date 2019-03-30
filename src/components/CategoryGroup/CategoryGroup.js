import React, { Component } from 'react';
import './CategoryGroup.scss';
import Category from '../Category/Category';

class CategoryGroup extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      categoryGroup: props.group
    }
  }

  selectCategory (stuff) {
    console.log(stuff);
    // this should update the sidebar, not sure how to send it to that component
  }

  render() {
      return(
          <div>
            <div className="category-group-title-container" onClick={() => this.selectCategory(this.state.categoryGroup.name)}>
                <div className="category-group-title">{this.state.categoryGroup.name}</div>
                <div className="category-group-budgeted">{this.state.categoryGroup.budgeted}</div>
                <div className="category-group-activity">{this.state.categoryGroup.activity}</div>
                <div className="category-group-available">{this.state.categoryGroup.available}</div>
            </div>
            { this.state.categoryGroup.categories.map(category => <Category categoryObject={category} />) }
          </div>
      )
  }
}

export default CategoryGroup;