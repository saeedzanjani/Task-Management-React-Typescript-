import React,{useEffect} from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { ITodo } from "../../DTOs/interfaces/ITodo";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "& .css-pwngrv-MuiPaper-root-MuiCard-root": {
      minWidth: "15vw",
      height: '200px',
      "@media (max-width: 500px)": {
        minWidth: "none",
        width: "100%",
      }
    },
    "& .css-46bh2p-MuiCardContent-root": {
      padding: '10px 16px'
    },
    "& .css-5hrm3t-MuiTypography-root": {
      height: '70px'
    },
  },
  actionsRootCard: {
    width: "94%",
    display: "flex",
    justifyContent: "space-between",
  },
  rootContent: {
    padding: '24px 16px'
  },
});

const CustomCard = ({ title, description, status, id }: ITodo) => {
  const classes = useStyles();

  useEffect(() => {

  }, []);

  return (
    <div className={classes.root}>
      <Card sx={{ minWidth: 275 }} style={{ width: "100px !important" }}>
        <CardContent classes={{ root: classes.rootContent }}>
          <Typography
            sx={{ fontSize: 18, fontWeight: 600 }}
            color="text.dark"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions classes={{ root: classes.actionsRootCard }}>
          <Button size="small" variant="contained">
            {status}
          </Button>
        <Link to={`/edit/${id}`}>
        <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomCard;
