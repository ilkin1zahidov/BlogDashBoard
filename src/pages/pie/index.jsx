import { Box } from "@mui/material";
import Header from "../../components/Common/Header"
import PieChart from "../../components/Common/PieChart"

const Pie = () => {
    return (
        <div className="pieChart">
            <Box m="20px" color="#000000">
                <Header title="Pie Chart" subtitle="Simple Pie Chart" />
                <Box height="75vh">
                    <PieChart />
                </Box>
            </Box>
        </div>

    )
}

export default Pie