import { Box } from "@mui/material"
import TextField from "@mui/material/TextField/TextField"
import Stack from "@mui/material/Stack/Stack"
import Button from "@mui/material/Button/Button"
import { SyntheticEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


type formTypes = {
    name: string,
    email: string,
    phone: string
}
const initialState: formTypes = {
    name: "",
    email: "",
    phone: ""
}

const Home = () => {

    // checking loggedin status to display warning
    const loggedIn = localStorage.getItem("loggedIn")

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)

    // Handle Form Submit Function
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(formData))
        localStorage.setItem("loggedIn", "true")
        navigate("/dashboard")

    }

    // Handle change function
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })

    }


    return (
        <Box sx={{ width: "100%", height: "100dvh", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "center" }} >
            {loggedIn === "false" && <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                Please provide details before accessing dashboard
            </Alert>
            }
            <Box component="form" onSubmit={handleSubmit} sx={{
                border: "1px solid lightgray",
                padding: "1rem 1rem",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
                borderRadius: "6px",
                maxWidth: "400px",
                width: "100%"
            }} >
                <Stack spacing={2} >
                    <TextField required id="outline-required" label="Name" name="name" type="text" variant="outlined" onChange={handleChange} />
                    <TextField required id="outline-required" label="Email" name="email" type="email" variant="outlined" onChange={handleChange} />
                    <TextField required id="outline-required" label="Phone" name="phone" type="number" variant="outlined" onChange={handleChange} />
                    <Button type="submit" variant="outlined" >Submit</Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default Home