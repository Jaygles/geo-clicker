// import { resolve } from 'dns';

export default [
  {
    name: 'pointsPicker',
    display: 'Points Picker',
    cost(bank, inventory, type) {
      const newBank = bank;
      const newInventory = inventory;
      const hasCash = newBank.points >= 10;
      if (hasCash) {
        if (type === 'PURCHASE_BANK') {
          newBank.points -= 10;
          return { newBank };
        } else if (type === 'PURCHASE_INVENTORY') {
          newInventory.pointsPickers.amount += 1;
          return { newInventory };
        }
      } else {
        return false;
      }
    },
    prerequisites(bank, inventory) {
      return bank.points >= 10;
    },
  },
  {
    name: 'superPointsPicker',
    display: 'Super Points Picker',
    cost(bank, inventory, type) {
      const newBank = bank;
      const newInventory = inventory;
      const hasCash = newBank.points >= 1000;
      if (hasCash) {
        if (type === 'PURCHASE_BANK') {
          newBank.points -= 1000;
          return { newBank };
        } else if (type === 'PURCHASE_INVENTORY') {
          newInventory.superPointsPickers.amount += 1;
          return { newInventory };
        }
      } else {
        return false;
      }
    },
    prerequisites(bank, inventory) {
      return bank.points >= 1000;
    },
  },
];
