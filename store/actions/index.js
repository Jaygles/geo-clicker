export function test() {
  return {
    type: 'TEST',
    payload: 1,
  };
}

export function checkAvailability(bank, inventory) {
  return {
    type: 'CHECK_AVAILABILITY',
    payload: { bank, inventory },
  };
}

export function addPoints(amount) {
  return {
    type: 'POINTS_MODIFY',
    payload: amount,
  };
}

export function purchaseBank(unit, inventory, bank) {
  return {
    type: 'PURCHASE_BANK',
    payload: { unit, inventory, bank },
  };
}

export function purchaseInventory(unit, inventory, bank) {
  return {
    type: 'PURCHASE_INVENTORY',
    payload: { unit, inventory, bank },
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
