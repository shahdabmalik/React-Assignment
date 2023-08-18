import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useState } from "react"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

type PropTypes = {
    department: string,
    sub_department: string[]
}

const CheckBox = ({ department, sub_department }: PropTypes) => {

    const [checked, setChecked] = useState([false, false]);
    const [show, setShow] = useState(true)

    // parent handler
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
        if (checked[0] === false && checked[1] === false) {
            setShow(true)
        }
    };
    
    // child handler
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };
    
    // child handler
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };

    // hide show button handler
    const handleClick = () => {
        setShow(!show)

    }

    // Childrens
    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, overflow: "hidden" }}>
            <FormControlLabel
                label={sub_department[0]}
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label={sub_department[1]}
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
        </Box>
    );

    return (
        <Box sx={{ width: '100%', display: 'flex', gap: "10px" }}>
            {show ? <RemoveIcon onClick={handleClick} sx={{ marginTop: '8px', cursor: 'pointer' }} /> : <AddIcon onClick={handleClick} sx={{ marginTop: '8px', cursor: 'pointer' }} />}
            <div>
                <FormControlLabel
                    label={department}
                    control={
                        <Checkbox
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                            onChange={handleChange1}
                        />
                    }
                />
                { show && children}
            </div>
        </Box>
    );
}

export default CheckBox