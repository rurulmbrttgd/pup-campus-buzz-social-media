// import Stories from "../../components/stories/Stories"
import Confessions from "../../components/confessions/confessions"
import Confess from "../../components/confess/Confess"
import "./confession.scss"
import { Helmet } from 'react-helmet';


const Confession = (children) => {
  return (
    <div className='confession'>
      <Helmet>
        <title>Confession Hall</title>
      </Helmet>
        <Confess />
        <Confessions />
    </div>
  );
}

export default Confession
