// import Stories from "../../components/stories/Stories"
import Confessions from "../../components/confessions/confessions"
import Confess from "../../components/confess/Confess"
import "./confession.scss"


const Confession = () => {
  return (
    <div className='confession'>
        <Confess />
        <Confessions />
    </div>
  );
}

export default Confession
