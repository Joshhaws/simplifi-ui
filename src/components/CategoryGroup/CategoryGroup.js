import React, { Component } from 'react';
import './CategoryGroup.scss';
import CurrencyFormat from 'react-currency-format';

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
        <div className="category-budgeted"><CurrencyFormat value={category.budgeted} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></div>
        <div className="category-activity"><CurrencyFormat value={category.activity} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></div>
        <div className="category-available"><CurrencyFormat value={category.available} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></div>
      </div>
    )
  }

  render() {
    let createCategoryDisplay = this.createCategoryDisplay();
      return(
          <div>
            <div className="category-group-title-container" onClick={() => this.props.selectCategory(this.state.categoryGroup)}>
                <div className="category-group-title">{this.state.categoryGroup.name}</div>
                <div className="category-group-budgeted"><CurrencyFormat value={this.state.categoryGroup.budgeted} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></div>
                <div className="category-group-activity"><CurrencyFormat value={this.state.categoryGroup.activity} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></div>
                <div className="category-group-available"><CurrencyFormat value={this.state.categoryGroup.available} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} /></div>
            </div>
            { createCategoryDisplay }
          </div>
      )
  }
}

export default CategoryGroup;