import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 14px;
  border-left: 5px solid #fff;
  color: #656565;
  display: block;
  background: #ffffff;
  padding: 10px 6px 10px 5px;
  text-decoration: none;
`;

const constructCustomCell = (rowData, cellValue)=> <StyledLink to={`entities/${rowData.company_name}/${rowData.id}`}>{cellValue}</StyledLink>

export const columns = [
    {
        Header: 'Business Id',
        id: 'id',
        Cell: ({ original }) => constructCustomCell(original, original.id)
    },
    {
        Header: 'Business Name',
        id: 'company_name',
        Cell: ({ original }) => constructCustomCell(original, original.company_name)
    },
    {
        Header: 'Website',
        id: 'website',
        Cell: ({ original }) => constructCustomCell(original, original.website)
    },
    {
        Header: 'Address',
        id: 'address',
        Cell: ({ original }) => constructCustomCell(original, original.address)
    },
    {
        Header: 'Province',
        id: 'province',
        Cell: ({ original }) => constructCustomCell(original, original.province)
    },
    {
        Header: 'City',
        id: 'city',
        Cell: ({ original }) => constructCustomCell(original, original.city)
    },
    {
        Header: 'Postal Code',
        id: 'postal_code',
        Cell: ({ original }) => constructCustomCell(original, original.postal_code)
    },
];

export const apiEndPoint = `https://smoothcommerce.tech/api.json`