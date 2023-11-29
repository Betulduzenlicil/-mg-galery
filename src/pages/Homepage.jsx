import data from "../helper/data";
import Picture from "../components/Picture";
import {Footer} from "../components/Footer";

const Homepage = () => {
  return <div style={{minHeight:"100vh"}}>
    <h1>My React Albums</h1>
    <div className="pictures">
    {data.map((item) => <Picture item={item} />)};
    </div>
    <Footer/>
  </div>

};

export default Homepage;

// import data from "../helper/data";

// // const Picture = ({ item }) => {
// const Picture = () => {
//     console.log(data)
//   return (data.map(item => {
//     return(
//     <div className="picture">
//       <div className="imageContainer">
//         <img src={item.src.large} alt="" />
//       </div>
//       <div className="info">
//         <p>{item.photographer}</p>
//       </div>
//     </div>
//     )
//   })
//   );
// };

// export default Picture;