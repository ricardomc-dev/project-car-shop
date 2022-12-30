import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import AuthContext from '../context/AuthContext';
// import VehicleCard  from '../components/VehicleCard';
import { setToken, requestData } from '../services/requests';

function Vehicles() {
  const navigate = useNavigate();
  const { filtedVehicles } = useContext(AuthContext);
  
  console.log(filtedVehicles)
  return(
    <main className="w-full">
      <Header />
      <div className="grid gap-4 grid-cols-4 grid-rows-3 m-10">
        {filtedVehicles && filtedVehicles.map((car, id) => (
          <div
            className="max-w-sm bg-white border border-gray-200 shadow-[0_0_36px_rgba(0,0,0,0.3)] w-full flex rounded"
            key={ car.id }
          >
            <Link to={ `/vehicles/${car.id}` }>
              <img
                className="rounded-t-lg h-40   "
                src={ `${car.model.urlImage}` }
                alt={ car.model.carModelName }
              />
              <div className="w-full flex items-center justify-between">
                <div className="p-2 flex flex-col">
                  <div>
                    <p className="text-2xl font-bold text-gray-600 mt-1">
                      {car.model.carModelName}
                    </p>
                    <p className="text-2xl font-bold mb-2 text-orange-300">
                      <small className="text-2xl">
                        {`R$ ${car.price}`}
                      </small>
                    </p>
                  </div>
                  <div className=" text-green mt-4">
                    <p className="flex items-center gap-1">
                      <b>Quilometragem:</b> {`${car.mileage} Km`}
                    </p>
                    <p className="flex items-center gap-1 ">
                      <b>Ano Fabricação:</b> {car.year}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Vehicles;
