import units from '../../lib/units';

export default function(state, action) {
  switch (action.type) {
    case 'CHECK_AVAILABILITY': {
      const available = [];
      for (let i = 0; i < units.length; i += 1) {
        if (units[i].prerequisites(action.payload)) {
          available.push(units[i]);
        }
      }
      const newState = available;
      return newState;
    }
    default: {
      return state || null;
    }
  }
}
