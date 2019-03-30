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

  render() {
      return(
          <div>
            {/* <div className="category-group-title-container" onClick={() => this.selectCategory('monthly obligations')}> */}
            <div className="category-group-title-container">
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