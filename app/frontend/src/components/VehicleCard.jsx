import { Link, useNavigate } from 'react-router-dom';


export default function VehicleCard(key, year, mileage, price, model) {
  const navigate = useNavigate();

  return (
    <div 
      className='flex'
      key={ key }
    >
        {/* <img className="imgVehicle" src={ model.urlImage} alt={ `${model.carModelName}` } /> */}
        {/* <h3 id="vehicle-model">{ `${ model.brand.brandName } ${ model.carModelName }` }</h3> */}
        <h2>{ price }</h2>
        <div>
          <h4>{ year }</h4> 
          <h4>{ mileage }</h4>
        </div>
      </div>
  );
}
