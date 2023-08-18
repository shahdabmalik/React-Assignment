import useRedirectUser from "../../customHook/useRedirectUser"
import CheckBoxContainer from "./checkbox/CheckBoxContainer"
import Table from "./table/Table"

const Dashboard = () => {

    // Using redirect user ustom hook
    useRedirectUser("/")

    return (
        <>
            <Table />
            <CheckBoxContainer />
        </>
    )
}

export default Dashboard