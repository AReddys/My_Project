import { createSelector } from 'reselect';

export const getApiData = (state) => state.apiData;

export const getSelectedEntityId = (state) => state.selectedEntityId;

export const getSelectedEntity = createSelector([getApiData, getSelectedEntityId], 
    (data, selectedEntityId) => data && data.find(dataItem => dataItem.id === selectedEntityId)
);
