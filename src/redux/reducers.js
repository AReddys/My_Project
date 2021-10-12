import { ACTIONS } from './actions';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ACTIONS.FETCH_API_DATA: {
            return {...state, apiData: action.result}
        }
        case ACTIONS.SET_SELECTED_ENTITY_ID: {
            return {...state, selectedEntityId: action.entityId}
        }
        default:
            return state;
    }
};
