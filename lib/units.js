export default [
  {
    name: 'pointsPicker',
    display: 'Points Picker',
    cost(bank, inventory) {
      console.log(bank, inventory);
      console.log('bank');
      console.log(bank);
      console.log('inventory');
      console.log(inventory);
      const newBank = bank;
      const newInventory = inventory;
      newBank ? (newBank.points -= 10) : null;
      newInventory ? (newInventory.pointsPickers += 1) : null;
      return { newBank, newInventory };
    },
    prerequisites(bank, inventory) {
      return bank.points >= 10;
    },
  },
];
