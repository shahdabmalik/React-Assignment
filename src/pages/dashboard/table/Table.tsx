import Box from '@mui/material/Box';
import { useState, useEffect } from "react"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import axios from 'axios';

// Defining interface of api data
interface ApiData {
    body: string,
    title: string,
    id: number,
    userId: number
}

const Table = () => {

    const [data, setData] = useState<ApiData[]>([])

    // Get data from api function
    async function getData() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const data: ApiData[] = response.data
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // Configuring columns of data grid
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0.2 },
        {
            field: 'title',
            headerName: 'Title',
            flex: 1,
        },
        {
            field: 'body',
            headerName: 'Body',
            flex: 1,
        },
        {
            field: 'userId',
            headerName: 'User ID',
            type: 'number',
            flex: 0.2
        },
    ];

    return (
        <Box sx={{ height: "630px", width: '100%', padding: "0 20px" }}>
            <Typography my={2} variant='h4' >Data Grid</Typography>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    )
}

export default Table