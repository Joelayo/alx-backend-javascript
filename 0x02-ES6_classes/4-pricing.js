import Currency from './3-currency'; // import the Currency class

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for the amount attribute
  get amount() {
    return this._amount;
  }

  // Setter for the amount attribute
  set amount(value) {
    this._amount = value;
  }

  // Getter for the currency attribute
  get currency() {
    return this._currency;
  }

  // Setter for the currency attribute
  set currency(value) {
    this._currency = value;
  }

  // Method that returns a string with the pricing amount and currency name and code
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  // Static method that converts a price from one currency to another
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
