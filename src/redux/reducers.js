export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'FETCH_API_DATA': {
            return { apiData: action.result };
        }
        case 'SET_SELECTED_ENTITY_ID': {
            return { selectedEntityId: action.entityId };
        }
        default:
            return state;
    }
}