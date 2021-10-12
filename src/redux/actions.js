

export const ACTIONS =  {
    FETCH_API_DATA: 'FETCH_API_DATA',
    SET_SELECTED_ENTITY_ID: 'SET_SELECTED_ENTITY_ID',
};

export const fetchApiData = (result) => ({
    type: ACTIONS.FETCH_API_DATA,
    result
});

export const setSelectedEntityId = (entityId) => ({
    type: ACTIONS.SET_SELECTED_ENTITY_ID,
    entityId
});
