import { FC, useContext, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Card from "../../components/UI/card/Card";
import Context from "../../context/Context";
import classes from "./SportsScreen.module.css";

const SportsScreen: FC = () => {
  const { data: sports, isLoading, error, sendRequest } = useContext(Context);

  useEffect(() => {
    sendRequest({
      url: "http://localhost:3000/sports",
      method: "GET",
    });
  }, []);

  if (isLoading) return <ClipLoader size={160} color="#ffe032" />;
  if (error) return <span className={classes.error}>{error}</span>;

  return (
    <section className={classes.section}>
      <h3 className={classes.sectionTitle}>Sports</h3>
      <p className={classes.subTitle}>
        Please select the options you dont want to see on the tv.
      </p>
      <div className={classes.cardContainer}>
        {sports.map((sport) => (
          <Card key={sport.id} resourceItem={sport} path="sports" />
        ))}
      </div>
    </section>
  );
};

export default SportsScreen;
