export default function(state, action) {
  switch (action.type) {
    case 'PURCHASE_INVENTORY': {
      const modifiedState = action.payload.cost(null, state);
      const newState = modifiedState.newInventory;
      return { ...newState };
    }
    default: {
      return state || null;
    }
  }
}
