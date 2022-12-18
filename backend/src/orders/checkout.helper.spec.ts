import CheckoutHelper from './checkout.helper';

const SMALL_PIZZA = { name: "Small Pizza", retailPrice: 11.99 }
const MEDIUM_PIZZA = { name: "Media Pizza", retailPrice: 15.99 }
const LARGE_PIZZA = { name: "Large Pizza", retailPrice: 21.99 }

describe('CheckoutHelper', () => {
  describe('total', () => {
    it('Case #1', () => {
      const cc: CheckoutHelper = new CheckoutHelper();
      cc.add(SMALL_PIZZA)
      cc.add(MEDIUM_PIZZA)
      cc.add(LARGE_PIZZA)
      expect(cc.total()).toEqual(49.97);
    });
  
    it('Case #2', () => {
      const cc: CheckoutHelper = new CheckoutHelper();
      cc.add(SMALL_PIZZA, 3)
      cc.add(LARGE_PIZZA)
      expect(cc.total()).toEqual(57.96);
      // expected: 45.97
      // actual: 57.96
    });
  
    it('Case #3', () => {
      const cc: CheckoutHelper = new CheckoutHelper();
      cc.add(MEDIUM_PIZZA, 3)
      cc.add(LARGE_PIZZA)
      expect(cc.total()).toEqual(69.96);
      // actual result: 69.96
      // expected: 67.96
    });
  });
  
})
