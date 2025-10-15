import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Cards() {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 256 }}>
              <CardHeader title="Himanshu Kava" avatar={<Avatar sx={{bgcolor:"red"}}>H</Avatar>} subheader="19 september 2025" action={<IconButton><MoreVertIcon/></IconButton>}/>
              <Divider/>
              <CardActionArea>
                <CardMedia component="img" image="/images/pizza.jpg" />
              </CardActionArea>
              <CardContent>
                <Typography component="div" variant="h5">
                  Pizza
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  cum laboriosam repellendus sequi? Voluptatibus eligendi
                  excepturi vitae laborum! Nulla dolorem ipsum ipsam aperiam
                  fuga natus vero aliquam corporis aliquid tempore!
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">Order Now!</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <CardHeader title="Himanshu Kava" avatar={<Avatar sx={{bgcolor:"red"}}>H</Avatar>} subheader="19 september 2025" action={<IconButton><MoreVertIcon/></IconButton>}/>
              <Divider/>
            <Card sx={{ maxWidth: 256 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/images/burger.jpg"
                  sx={{ height: 210 }}
                />
              </CardActionArea>
              <CardContent>
                <Typography component="div" variant="h5">
                  Burger
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  facilis error aperiam vero expedita fugit rerum nam aliquid,
                  debitis nulla ducimus obcaecati optio hic dolor in beatae quia
                  illo est!
                </Typography>
              </CardContent>

              <CardActions>
                <Button variant="contained">Order Now!</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={3}>
            <Card sx={{ maxWidth: 256 }}>
              <CardHeader title="Himanshu Kava" avatar={<Avatar sx={{bgcolor:"red"}}>H</Avatar>} subheader="19 september 2025" action={<IconButton><MoreVertIcon/></IconButton>}/>
              <Divider/>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/images/pasta.jpg"
                  sx={{ height: 170 }}
                />
              </CardActionArea>
              <CardContent>
                <Typography component="div" variant="h5">
                  Pizza
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  cum laboriosam repellendus sequi? Voluptatibus eligendi
                  excepturi vitae laborum! Nulla dolorem ipsum ipsam aperiam
                  fuga natus vero aliquam corporis aliquid tempore!
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">Order Now!</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={3}>
             <Card sx={{ maxWidth: 256 }}>
              <CardHeader title="Himanshu Kava" avatar={<Avatar sx={{bgcolor:"red"}}>H</Avatar>} subheader="19 september 2025" action={<IconButton><MoreVertIcon/></IconButton>}/>
              <Divider/>
              <CardActionArea>
                <CardMedia component="img" image="/images/bread.jpg" sx={{height:170}} />
              </CardActionArea>
              <CardContent>
                <Typography component="div" variant="h5">
                  Pizza
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  cum laboriosam repellendus sequi? Voluptatibus eligendi
                  excepturi vitae laborum! Nulla dolorem ipsum ipsam aperiam
                  fuga natus vero aliquam corporis aliquid tempore!
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">Order Now!</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
