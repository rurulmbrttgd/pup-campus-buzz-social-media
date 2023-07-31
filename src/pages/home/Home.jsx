import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import { Helmet } from 'react-helmet';

const Home = (children) => {
  return (
    <div className="home">
      <Helmet>
        <title>Campus Buzz</title>
      </Helmet>
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home