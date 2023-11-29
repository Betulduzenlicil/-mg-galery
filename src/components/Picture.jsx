const Picture = ({ item }) => {
    return (
      <div className="picture">
        <div className="imageContainer" style={{borderRadius:"50%"}}>
          <img src={item.src.large} alt="" style={{width:"500px",height:"500px"}}/>
        </div>
        <div className="info" >
          <p>{item.photographer}</p>
        </div>
      </div>
    );
  };
  
  export default Picture;

//   const Picture = () => {
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

// export default Picture