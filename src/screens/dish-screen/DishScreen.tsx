import { FC, useContext, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Card from "../../components/UI/card/Card";
import Context from "../../context/Context";
import classes from "./DishScreen.module.css";

const DishScreen: FC = () => {
  const { data: dishes, isLoading, error, sendRequest } = useContext(Context);

  useEffect(() => {
    sendRequest({
      url: "http://localhost:3000/dishes",
      method: "GET",
    });
  }, []);

  if (isLoading) return <ClipLoader size={160} color="#ffe032" />;
  if (error) return <p className={classes.error}>{error}</p>;

  return (
    <section className={classes.section}>
      <h3 className={classes.sectionTitle}>Dishes</h3>
      <p className={classes.subTitle}>
        Please select the options you dont want to see on the menu.
      </p>
      <div className={classes.cardContainer}>
        {dishes.map((dish) => {
          return <Card key={dish.id} resourceItem={dish} path="dishes" />;
        })}
      </div>
    </section>
  );
};

export default DishScreen;
