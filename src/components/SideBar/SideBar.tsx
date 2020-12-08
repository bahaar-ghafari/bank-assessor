import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ListItemText, List } from "@material-ui/core";
import { Link } from "react-router-dom";

type IProps = {
  list: IPropsItem[];
};
type IPropsItem = {
  name: string;
  icon: any;
  rout: string;
};
export const MainListItems = (props: IProps) => {
  const { list } = props;
  return (
    <List>
      {list.map((item) => (
        <Link
          to={`/${item.rout}`}
          style={{ textDecoration: "none", color: "darkslategray" }}
        >
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
