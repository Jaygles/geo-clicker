export default function(state, action) {
  switch (action.type) {
    case 'PURCHASE_POINTS_PICKERS': {
      const newPickers = { ...state };
      newPickers.pointsPickers += action.payload;
      return newPickers;
    }
    default: {
      return state || null;
    }
  }
}
