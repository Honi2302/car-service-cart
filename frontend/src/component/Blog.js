import {React, useState, useEffect} from "react";
import carImg from "../assest/car.jpeg";
import Navbar2 from "./Navbar2";



const Blog = () => {

const [todaysBlog, setTodaysBlog] = useState([[]])
// const [recommendBlog, setRecommendBlog] = useState([[]])   there is no data in recommemded API
 useEffect(()=>{
  todayBlog()
  // recommended()
  },[])

const todayBlog = async()=>{
  let result = await fetch("https://kv-varlu.vercel.app/api/v1/blog")
  let response = await result.json()
  const finalresponse =[]
  finalresponse.push(response.blogs)
  setTodaysBlog(finalresponse)
  console.log(finalresponse)
}

// const recommended = async()=>{
//   let result = await fetch("https://kv-varlu.vercel.app/api/v1/blog/recommended/get")
//   let response = await result.json()
//   const finalresponse =[]
//   finalresponse.push(response.blogs)
//   setTodaysBlog(finalresponse)
//   console.log(response)
// }

  return (
    <>
    <Navbar2/>
      <div className="blog" style={{ display: "flex" }}>
        <div style={{ width: "70vw" }}>
          <h3>Today's Article</h3>
          <div>
           

{
todaysBlog[0].map((item)=>
<div className="card card-me">
              <img src={carImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {item.description}
                </p>
                <a className="linkClass" href="\">
                  Read More
                </a>
              </div>
            </div>
)
}

            <h3>Recommended</h3>

            <div>
              <div className="card card-me">
                <img src={carImg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum</h5>
                  <p className="card-text">
                    Some quick example text to build on the Lorem Ipsum and make
                    up the bulk of the card's content.
                  </p>
                  <a className="linkClass" href="\">
                    Read More
                  </a>
                </div>
              </div>
              <div className="card card-me">
                <img src={carImg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum</h5>
                  <p className="card-text">
                    Some quick example text to build on the Lorem Ipsum and make
                    up the bulk of the card's content.
                  </p>
                  <a className="linkClass" href="\">
                    Read More
                  </a>
                </div>
              </div>
              <div className="card card-me">
                <img src={carImg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum</h5>
                  <p className="card-text">
                    Some quick example text to build on the Lorem Ipsum and make
                    up the bulk of the card's content.
                  </p>
                  <a className="linkClass" href="\">
                    Read More
                  </a>
                </div>
              </div>
              <div className="card card-me">
                <img src={carImg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Lorem Ipsum</h5>
                  <p className="card-text">
                    Some quick example text to build on the Lorem Ipsum and make
                    up the bulk of the card's content.
                  </p>
                  <a className="linkClass" href="\">
                    Read More
                  </a>
                </div>
              </div>
                          </div>
          </div>
        </div>
        <div style={{ width: "30vw" }}>
          <h3 style={{ marginLeft: "0rem" }}>Today's Article</h3>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
          <div className="sideSection">
            <div>
              <img className="sideSectionImg" src={carImg} alt="..." />
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>
                dsfghjgfd edsfghj weghj dsfgh erwsfdghj dsfgh sdfhgj aesrtjy
                dfgh
              </p>
            </div>
          </div>
        </div>
      </div>

          </>
  );
};

export default Blog;
