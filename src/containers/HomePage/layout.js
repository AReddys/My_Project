import React, { useEffect } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { createGlobalStyle } from 'styled-components';
import { columns, apiEndPoint } from '../../utils/data';
import PropTypes from 'prop-types';

const GlobalStyle = createGlobalStyle`
   .EntityTable .rt-tbody  .rt-tr-group .rt-tr {
      &:hover {
        background-color: #e6f5ff;
      }
    }
`;

export default function HomePageLayout({ fetchApiData, apiData, setSelectedEntityId }) {

    useEffect(() => {
        axios({
            method: 'GET',
            url: apiEndPoint
        }).then(({ data }) => {
            fetchApiData(data);
        })
    }, []);

    const getTableRowProps = (state, rowInfo) => {
        if (rowInfo && rowInfo.row) {
            return {
                onClick: e => setSelectedEntityId(rowInfo.original.id),
            };
        } else {
            return { style: {} };
        }
    };

    const getTheadProps = () => ({ style: { backgroundColor: '#07487a', color: '#FFFFFF', } });

    return (
        <>
            <GlobalStyle />
            <ReactTable
                className="EntityTable"
                columns={columns}
                data={apiData}
                getTrProps={getTableRowProps}
                minRows={0}
                getTheadProps={getTheadProps}
            />
        </>
    )
};

HomePageLayout.propTypes = {
    fetchApiData: PropTypes.func,
    setSelectedEntityId: PropTypes.func,
    apiData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};