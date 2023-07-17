import { Box } from "@mui/material";
import Header from "../../components/Common/Header";
import LineChart from "../../components/Common/LineChart";

const Line = () => {
    return (
        <div className="lineChart">
            <Box m="20px">
                <Header title="Line Chart" subtitle="Simple Line Chart" />
                <Box height="75vh">
                    <LineChart />
                </Box>
            </Box>
        </div>

    )
}

export default Line