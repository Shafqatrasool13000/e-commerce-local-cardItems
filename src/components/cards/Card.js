import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid, CardActionArea } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import DeleteAction from '../../redux/actions/DeleteAction';
export default function CardItem() {
    const list = useSelector(state => state.AddReducer.list);
    const dispatch = useDispatch();
    return (
        <>
            <Box mt={2}>
                <Grid container sx={{
                            justifyContent:{
                                xs:'center', sm:'none'
                            }
                        }}>
                    {list.length!==0?(list.map((e, i) =>
                        <Grid key={i} item my={2} sm={6} md={4} >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={e.file}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {e.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {e.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={()=>
                                        dispatch(DeleteAction(i))
                                    }>
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )): <h3>Click On Add Button</h3> }
                </Grid>
            </Box>
        </>
    );
}


