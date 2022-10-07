import "./App.css";
import SearchAppBar from "./components/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import OutlinedCard from "./components/JobCard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { jobs } from "./assets/Jobs";
import Paginations from "./components/Paginations";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center", marginTop: "2rem" }}
          >
            {jobs.slice(6, 10).map((job) => (
              <Grid item key={job.id}>
                <Item sx={{ borderRadius: 5 }}>
                  <OutlinedCard job={job} />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Paginations />
      </Box>
    </ThemeProvider>
  );
}

export default App;
