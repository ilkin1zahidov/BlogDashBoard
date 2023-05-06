import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/Common/GeographyChart";
import Header from "../../components/Common/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="Geography">
      <Box m="20px">
        <Header title="Geography" subtitle="Simple Geography Chart" />
        <Box
          height="75vh"
          border={`1px solid ${colors.grey[100]}`}
          borderRadius="4px"
          color="#000000"
        >
          <GeographyChart />
        </Box>
      </Box>
    </div>

  );
};

export default Geography;