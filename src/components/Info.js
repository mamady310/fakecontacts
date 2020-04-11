const Info = ({ name, email, id, website}) => {
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
       
       <a href={website} target="_blank">
        <img alt='people' src={`https://flathash.com/${id}?size=200x200`}/></a>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
  
  export default Info;