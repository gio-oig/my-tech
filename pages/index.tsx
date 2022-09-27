import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { NextPage } from "next";
import NavBar from "../layout/appBar/Appbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const SidebarContainer = styled(Box)({
  maxWidth: "300px",
  width: "100%",
  display: "grid",
  margin: "auto",
});

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Box minHeight="100vh">
        <Container maxWidth="lg">
          <Grid container xs={12}>
            <Grid xs={0} sm={4}>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <SidebarContainer>
                  sidebar
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Phone"
                    />
                    <FormControlLabel control={<Checkbox />} label="Laptop" />
                  </FormGroup>
                </SidebarContainer>
              </Box>
            </Grid>
            <Grid container xs={12} sm={8}>
              <Grid container xs={12} rowGap={2}>
                {Array(35)
                  .fill(undefined)
                  .map((it, i) => (
                    <Grid container xs={12}>
                        <ProductCard key={i}/>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;

const ProductCard = () => (
  <Grid container xs={12}>
    <Grid>
      <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img alt="complex" src="https://static.my.ge/mymarket/photos/thumbs/0815/22057244_1.jpg?v=30" />
      </ButtonBase>
    </Grid>
    <Grid container sm direction="column">
      <Grid xs>
        <Typography gutterBottom variant="subtitle1" component="div">
          Standard license
        </Typography>
        <Typography variant="body2" gutterBottom>
          Full resolution 1920x1080 • JPEG
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: 1030114
        </Typography>
      </Grid>
      <Grid>
        <Typography sx={{ cursor: "pointer" }} variant="body2">
          Remove
        </Typography>
      </Grid>
    </Grid>
    <Grid>
      <Typography variant="subtitle1" component="div">
        $19.00
      </Typography>
    </Grid>
  </Grid>
);
