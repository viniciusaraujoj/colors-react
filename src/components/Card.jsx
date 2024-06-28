const Card = ({ color }) => {
  return (
    <div style={{ background: color }} className='card'>
      <p>{color.length ? color : 'Empty Value'} </p>
    </div>
  );
};

export default Card;
