import { FC, useContext } from "react";
import { Resource } from "../../../models/Resource";
import Context from "../../../context/Context";
import classes from "./Card.module.css";

interface CardProps {
  resourceItem: Resource;
  path: string;
}

const Card: FC<CardProps> = ({ resourceItem, path }: CardProps) => {
  const { sendRequest } = useContext(Context);

  const clickHandler = () => {
    sendRequest({
      url: `${process.env.REACT_APP_API_BASEURL}/${path}/${resourceItem.id}`,
      method: "DELETE",
      itemId: resourceItem.id,
    });
  };

  return (
    <div className={classes.card}>
      <img src={resourceItem.url} alt="resource" />
      <div className={classes.infoHolder}>
        <h3>{resourceItem.title}</h3>
        <p>{resourceItem.description}</p>
      </div>
      <button onClick={clickHandler}>Select</button>
    </div>
  );
};

export default Card;
