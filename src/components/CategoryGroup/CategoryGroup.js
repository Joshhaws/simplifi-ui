import React, { Component } from 'react';
import './CategoryGroup.scss';

class CategoryGroup extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      categoryGroup: props.group
    }
  }

  createCategoryDisplay = () => {
    return this.state.categoryGroup.categories.map(category => 
      <div className="category-item" onClick={() => this.props.selectCategory(category)}>
        <div className="category-title">{category.name}</div>
        <div className="category-budgeted">{category.budgeted}</div>
        <div className="category-activity">{category.activity}</div>
        <div className="category-available">{category.available}</div>
      </div>
    )
  }

  render() {
    let createCategoryDisplay = this.createCategoryDisplay();
      return(
          <div>
            <div className="category-group-title-container" onClick={() => this.props.selectCategory(this.state.categoryGroup)}>
                <div className="category-group-title">{this.state.categoryGroup.name}</div>
                <div className="category-group-budgeted">{this.state.categoryGroup.budgeted}</div>
                <div className="category-group-activity">{this.state.categoryGroup.activity}</div>
                <div className="category-group-available">{this.state.categoryGroup.available}</div>
            </div>
            { createCategoryDisplay }
          </div>
      )
  }
}

export default CategoryGroup;