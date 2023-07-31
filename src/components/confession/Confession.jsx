import "./confession.scss";

const Confession = ({ post }) => {


  return (
    <div className='post1'>
      <div className={`container ${post.note_design === 1 ?  'note-design-b' : post.note_design === 2  ?  'note-design-c' :''}`}>
        <div className="content">
          <h1>{post.title}</h1>
          <p>{post.confession}</p>
          <p>-{`${post.anonymous === 0 ? post.name : 'Anonymous' }`}</p>
        </div>
      </div>
    </div>
  );
};

export default Confession;
