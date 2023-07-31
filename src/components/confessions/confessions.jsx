import Confession from "../confession/Confession";
import "./confessions.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import axios from "axios";

const Confessions = ({userId}) => {
  const { isLoading, error, data } = useQuery(["confessions"], () =>
    axios.get("/confessions", {
        withCredentials: true,
      }).then((res) => {
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
