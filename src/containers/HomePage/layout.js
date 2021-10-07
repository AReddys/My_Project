import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { columns, apiEndPoint } from '../../utils/data';

class HomePageLayout extends Component {
    getTableRowProps = (state, rowInfo) => {
        if (rowInfo && rowInfo.row) {
            return {
                onClick: e => {
                    this.props.setSelectedEntityId(rowInfo.original.id);
                    this.props.history.push({
                        pathname: `/entities/${rowInfo.original.company_name}/${rowInfo.original.id}`,
                        state: { apiData: this.props.apiData, selectedEntityId: rowInfo.original.id}
                    })
                },
            };
        } else {
            return { style: {} };
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: apiEndPoint
        }).then(({ data }) => {
            this.props.fetchApiData(data);
        })
    }
    render() {
        return (
            <div>
                <ReactTable columns={columns} data={this.props.apiData} getTrProps={this.getTableRowProps} />
            </div>

        )
    }
};

export default HomePageLayout;