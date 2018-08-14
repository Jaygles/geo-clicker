export default function(state, action) {
  switch (action.type) {
    case 'PURCHASE_INVENTORY': {
      const modifiedState = action.payload.unit.cost(
        action.payload.bank,
        state,
        action.type,
      );
      const newState = modifiedState.newInventory;
      return { ...newState };
    }
    default: {
      return state || null;
    }
  }
}
