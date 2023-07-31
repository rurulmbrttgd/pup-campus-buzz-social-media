import Confession from "../confession/Confession";
import "./confessions.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Confessions = ({userId}) => {
  const { isLoading, error, data } = useQuery(["confessions"], () =>
    makeRequest.get("/confessions?userId="+userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="confessions">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((confessions) => <Confession post={confessions} key={confessions.id} />)}
    </div>
  );
};

export default Confessions;