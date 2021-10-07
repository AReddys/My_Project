export const columns = [
    {
        Header: 'Business Id',
        id: 'id',
        accessor: 'id'
    },
    {
        Header: 'Business Name',
        id: 'company_name',
        accessor: (data) => data.company_name
    },
    {
        Header: 'Website',
        id: 'website',
        accessor: (data) => data.website
    },
    {
        Header: 'Address',
        id: 'address',
        accessor: (data) => data.address
    },
    {
        Header: 'Province',
        id: 'province',
        accessor: (data) => data.province
    },
    {
        Header: 'City',
        id: 'city',
        accessor: (data) => data.city
    },
    {
        Header: 'Postal Code',
        id: 'postal_code',
        accessor: (data) => data.postal_code
    },
];

export const apiEndPoint = `https://smoothcommerce.tech/api.json`