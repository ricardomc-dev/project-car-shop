import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Header } from '../components/Header';
import AppContext from '../context/AppContext';
import {
  addIdToLocalSto,
  deleteIdFromLocalSto,
  getLocalStorageInfo } from '../services/localStorage';

import shareIcon from '../assets/shareIcon.svg';
import whiteHeartIcon from '../assets/whiteHeartIcon.svg';
import blackHeartIcon from '../assets/blackHeartIcon.svg';

function Detail() {
  const { id } = useParams();
  const { filtedVehicles } = useContext(AppContext);
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


  useEffect(() => {
    if (localStorage.getItem('user@favorites')) {
      console.log(getLocalStorageInfo('user@favorites').some((car) => car.carId === Number(id)))
      return setIsFavorite(getLocalStorageInfo('user@favorites')
        .some((car) => car.carId === Number(id)));
    }
  }, [id]);

  const selectedVehicle = filtedVehicles.filter((item) => item.id === Number(id))

  console.log(selectedVehicle)

  const { 
    id: carId,
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


  function handleFavoriteItem() {
    const favoriteCar = {
      carId,
      mileage,
      carModelName,
      urlImage,
      price,
      year
    }
      
    if (!isFavorite) {
      addIdToLocalSto(favoriteCar, 'user@favorites');
      setIsFavorite(true);
    } else {
      deleteIdFromLocalSto(Number(id), 'user@favorites');
      setIsFavorite(false);
    }
  }

  return(
    <main className="w-full">
      <Header />
        <div className="max-w-screen-2xl h-screen mx-auto p-16">
          <div
            className="shadow-[0_0_36px_rgba(0,0,0,0.3)] w-full h-3/4 flex rounded"
          >
              <img
                className="rounded-t-lg h-96   "
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
              <div className="w-full flex flex-row justify-end ml-4">
                <CopyToClipboard text={window.location.href}>
                  <button
                    className="mr-4"
                    type="button"
                    onClick={ () => setIsLinkCopied(true) }
                  >
                    { buttonShareIcon }
                  </button>
                </CopyToClipboard>
                <button
                  type="button"
                  onClick={ () => handleFavoriteItem() }
                >
                  { isFavorite ? blackHeart : whiteHeart }
                </button>
                { isLinkCopied && <span>Link copied!</span> }
              </div>
          </div>
        </div>
    </main>
  )
}

export default Detail;

