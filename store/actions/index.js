export function test() {
  return {
    type: 'TEST',
    payload: 1,
  };
}

export function addPoints(amount) {
  return {
    type: 'POINTS_MODIFY',
    payload: amount,
  };
}

export function purchasePointsPickers(amount) {
  return {
    type: 'PURCHASE_POINTS_PICKERS',
    payload: amount,
  };
}

export function increment(bank, inventory) {
  return {
    type: 'INCREMENT',
    payload: {
      bank,
      inventory,
    },
  };
}
