import { Box } from "@mui/material";
import Header from "../../components/Common/Header";
import BarChart from "../../components/Common/BarChart";

const Bar = () => {
  return (
    <div className="BarChart">
            <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
    </div>
  
  );
};

export default Bar;