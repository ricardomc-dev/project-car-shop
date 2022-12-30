import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Header } from '../components/Header';
import AuthContext from '../context/AuthContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function Detail() {
  const { id } = useParams();
  const { filtedVehicles } = useContext(AuthContext);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const whiteHeart = (
    <img
      data-testid="favorite-btn"
      src={ whiteHeartIcon }
      alt="whiteHeart"
    />
  );
  const blackHeart = (
    <img
      data-testid="favorite-btn"
      src={ blackHeartIcon }
      alt="blackHeartIcon"
    />
  );

  const buttonShareIcon = (
    <img
      data-testid="share-btn"
      src={ shareIcon }
      alt="share"
    />
  );

  const selectedVehicle = filtedVehicles.filter((item) => item.id === Number(id))

  console.log(selectedVehicle)

  const { 
    color: { colorName },
    mileage,
    model: { 
      brand: { brandName },
      carModelName,
      group: { groupName },
      urlImage
    },
    price,
    year
  } = selectedVehicle[0]

 

  console.log(colorName)
  return(
    <main className="w-full">
      <Header />
        <div className="max-w-screen-2xl h-screen mx-auto p-16">
          <div
            className="shadow-[0_0_36px_rgba(0,0,0,0.3)] w-full h-3/4 flex rounded"
          >
              <img
                className="rounded-t-lg h-40   "
                src={ `${urlImage}` }
                alt={ carModelName }
              />
              <div className="w-full flex items-center justify-between">
                <div className="p-2 flex flex-col">
                  <div>
                    <p className="text-2xl font-bold text-gray-600 mt-1">
                      { carModelName }
                    </p>
                    <p className="text-2xl font-bold mb-2 text-orange-300">
                      <small className="text-2xl">
                        {`R$ ${price}`}
                      </small>
                    </p>
                  </div>
                  <div className=" text-green mt-4">
                    <p className="flex items-center gap-1">
                      <b>Quilometragem:</b> {`${mileage} Km`}
                    </p>
                    <p className="flex items-center gap-1 ">
                      <b>Ano Fabricação:</b> {year}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </main>
  )
}

export default Detail;

