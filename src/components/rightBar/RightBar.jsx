import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690797076/maila_nafcfs.png"
                alt=""
              />
              <span>Maila Padilla</span>
            </div>
            <div className="buttons">
              <button>subscribe</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690797080/yman_fv2hhe.jpg"
                alt=""
              />
              <span>Yman Simbulan</span>
            </div>
            <div className="buttons">
              <button>subscribe</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690796963/jerzi_yopgy7.jpg"
                alt=""
              />
              <p>
                <span>Jerzen Espiritu</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690796961/karlos_jueayi.jpg"
                alt=""
              />
              <p>
                <span>Karlos Vicario</span> changed their profile picture
              </p>
            </div>
            <span>5 mins ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690796960/ronalambert_czgbay.jpg"
                alt=""
              />
              <p>
                <span>Ronald Tugadi</span> posted a new status update: "Pagod na akong magcode xD"
              </p>
            </div>
            <span>30 mins ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690796972/hanz_jkjsps.png"
                alt=""
              />
              <p>
                <span>Hannah Grace Joaquin</span> reacted to your post
              </p>
            </div>
            <span>1 hr ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690796972/hanz_jkjsps.png"
                alt=""
              />
              <div className="online" />
              <span>Hannah Grace Joaquin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690796963/jerzi_yopgy7.jpg"
                alt=""
              />
              <div className="online" />
              <span>Jerzen Espiritu</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690797075/PATT_ir6lzw.png"
                alt=""
              />
              <div className="online" />
              <span>Pat Caguimbal</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690796960/ronalambert_czgbay.jpg"
                alt=""
              />
              <div className="online" />
              <span>Ronald Tugadi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690796961/karlos_jueayi.jpg"
                alt=""
              />
              <div className="online" />
              <span>Karlos Vicario</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690796961/cardi_vfff3f.jpg"
                alt=""
              />
              <div className="online" />
              <span>Joy Santos</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690798484/trisha_fzitws.png"
                alt=""
              />
              <div className="online" />
              <span>Trisha Buena</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690798853/keritoh_spirit_htpujz.jpg"
                alt=""
              />
              <div className="online" />
              <span>Kirito Spirit</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690798850/358739622_304709081930786_3338908445816953735_n_mzi9gn.jpg"
                alt=""
              />
              <div className="online" />
              <span>Shanny Boi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://res.cloudinary.com/dezndgyxo/image/upload/v1690798852/lunard_kdohya.jpg"
                alt=""
              />
              <div className="online" />
              <span>Lunard Tugs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
