export function test() {
  return {
    type: 'TEST',
    payload: 1,
  };
}

export function checkAvailability(bank) {
  return {
    type: 'CHECK_AVAILABILITY',
    payload: bank,
  };
}

export function addPoints(amount) {
  return {
    type: 'POINTS_MODIFY',
    payload: amount,
  };
}

export function purchaseBank(unit) {
  console.log('purchase being dispatched');
  return {
    type: 'PURCHASE_BANK',
    payload: unit,
  };
}

export function purchaseInventory(unit) {
  console.log('purchase being dispatched');
  return {
    type: 'PURCHASE_INVENTORY',
    payload: unit,
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
