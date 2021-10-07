
export function fetchApiData(result) {
    return {
        type: 'FETCH_API_DATA',
        result
    }
};

export function setSelectedEntityId(entityId) {
    return {
        type: 'SET_SELECTED_ENTITY_ID',
        entityId
    }
};
