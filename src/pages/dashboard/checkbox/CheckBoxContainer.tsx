import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CheckBox from './CheckBox';

// Departments
const departments = [
    {
        "department": "customer_service",
        "sub_departments": [
            "support",
            "customer_success"
        ]
    },
    {
        "department": "design",
        "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
        ]
    }
]

const CheckBoxContainer = () => {

    return (
        <Box my={10} sx={{ width: '100%', padding: "0 20px" }}>
            <Typography my={2} variant='h4' >Check Box</Typography>
            {departments.map((item)=>{
                return(
                    <CheckBox key={item.department} department={item.department} sub_department={item.sub_departments} />
                )
            })}

        </Box>
    );

}

export default CheckBoxContainer