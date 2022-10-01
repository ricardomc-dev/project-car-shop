module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('car_models',
      [
        {
          car_model_name: "320i",
          brand_id: 1,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/301/11/png-transparent-car-2018-bmw-320i-xdrive-bmw-xdrive-2017-bmw-320i-bmw-compact-car-sedan-performance-car-thumbnail.png"
        }, 
        {
          car_model_name: "M3",
          brand_id: 1,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/459/333/png-transparent-2018-bmw-m3-car-bmw-x6-bmw-7-series-bmw-logo-compact-car-sedan-performance-car-thumbnail.png"
        }, 
        {
          car_model_name: "535i",
          brand_id: 1,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/693/375/png-transparent-2015-bmw-3-series-car-2016-bmw-535i-sedan-luxury-vehicle-model-agency-compact-car-sedan-car-thumbnail.png"
        },
        {
          car_model_name: "X1",
          brand_id: 1,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/624/957/png-transparent-2018-bmw-x1-xdrive28i-sport-utility-vehicle-car-2018-bmw-x1-sdrive28i-bmw-compact-car-car-automatic-transmission-thumbnail.png"
        }, 
        {
          car_model_name: "X3",
          brand_id: 1,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/9/130/png-transparent-2018-bmw-x3-m40i-suv-2017-bmw-x3-sport-utility-vehicle-2018-bmw-x3-xdrive30i-bmw-car-vehicle-rim-thumbnail.png"
        },
        {
          car_model_name: "Celta",
          brand_id: 2,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/784/67/png-transparent-chevrolet-celta-car-chevrolet-prisma-fiat-uno-general-motors-car-compact-car-glass-sedan-thumbnail.png"
        }, 
        {
          car_model_name: "Cobalt",
          brand_id: 2,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/838/615/png-transparent-chevrolet-cobalt-ss-chevrolet-prisma-car-chevrolet-onix-chevrolet-compact-car-sedan-car-thumbnail.png"
        }, 
        {
          car_model_name: "Onix Hatch",
          brand_id: 2,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/143/238/png-transparent-chevrolet-onix-car-general-motors-chevrolet-prisma-car-compact-car-sedan-subcompact-car-thumbnail.png"
        },
        {
          car_model_name: "S 10 Cab. Dupla",
          brand_id: 2,
          group_id: 4,
          url_image:"https://w7.pngwing.com/pngs/917/23/png-transparent-chevrolet-s-10-car-chevrolet-chevy-ii-nova-general-motors-carros-4x4-compact-car-diesel-fuel-truck-thumbnail.png"
        }, 
        {
          car_model_name: "Vectra Sedan",
          brand_id: 2,
          group_id: 2,
          url_image:"https://baianinhosautopecas.com.br/wp-content/uploads/2016/05/chevrolet-vectra-300x171.png"
        },
        {
          car_model_name: "Argo",
          brand_id: 3,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/237/1000/png-transparent-fiat-argo-fiat-cronos-fiat-automobiles-city-car-car-compact-car-sedan-car-thumbnail.png"
        }, 
        {
          car_model_name: "Cronos",
          brand_id: 3,
          group_id: 2,
          url_image:"https://cronos.fiat.com.br/assets/images/img-version-cronos-drive-10-mt.png"
        }, 
        {
          car_model_name: "Fiorino",
          brand_id: 3,
          group_id: 7,
          url_image:"https://w7.pngwing.com/pngs/166/524/png-transparent-fiat-fiorino-type-327-car-fiat-uno-van-as-bari-compact-car-van-truck-thumbnail.png"
        },
        {
          car_model_name: "Pulse",
          brand_id: 3,
          group_id: 3,
          url_image:"https://legado.autoforce.com.br/assets/ddm/images/fiat-pulse/fiat_progetto.png"
        }, 
        {
          car_model_name: "Strada Cab Dupla",
          brand_id: 3,
          group_id: 4,
          url_image:"https://e7.pngegg.com/pngimages/605/177/png-clipart-ram-trucks-ram-pickup-pickup-truck-fiat-strada-chrysler-fiat-pickup-car-pickup-truck.png"
        },
        {
          car_model_name: "EcoSport",
          brand_id: 4,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/614/690/png-transparent-ford-motor-company-2018-ford-ecosport-se-2018-ford-ecosport-titanium-ford-compact-car-car-automatic-transmission-thumbnail.png"
        }, 
        {
          car_model_name: "F 1000",
          brand_id: 4,
          group_id: 4,
          url_image:"https://heycar.com.br/images/2021/Junho/Ford-F-1000-91.png"
        }, 
        {
          car_model_name: "Fiesta Sedan",
          brand_id: 4,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/296/841/png-transparent-2017-ford-fiesta-sedan-car-ford-focus-rally-s-compact-car-sedan-car-thumbnail.png"
        },
        {
          car_model_name: "Focus Hatch",
          brand_id: 4,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/444/501/png-transparent-2015-ford-focus-2014-ford-focus-car-2017-ford-focus-ford-compact-car-sedan-vehicle-thumbnail.png"
        }, 
        {
          car_model_name: "KA Hatch",
          brand_id: 4,
          group_id: 1,
          url_image:"https://carroemotos.com.br/wp-content/uploads/2020/11/ka.jpg"
        },
        {
          car_model_name: "City Sedan",
          brand_id: 5,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/148/742/png-transparent-honda-city-zx-mt-diesel-compact-car-honda-hr-v-honda-compact-car-sedan-car-thumbnail.png"
        }, 
        {
          car_model_name: "Civic",
          brand_id: 5,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/801/997/png-transparent-2017-honda-civic-2018-honda-civic-honda-city-honda-today-honda-compact-car-glass-sedan-thumbnail.png"
        }, 
        {
          car_model_name: "CR-V",
          brand_id: 5,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/43/979/png-transparent-2015-honda-cr-v-2018-honda-cr-v-honda-hr-v-car-honda-compact-car-car-vehicle-thumbnail.png"
        },
        {
          car_model_name: "Fit",
          brand_id: 5,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/751/793/png-transparent-2011-honda-fit-car-1992-honda-civic-2009-honda-fit-honda-compact-car-sedan-car-thumbnail.png"
        }, 
        {
          car_model_name: "HR-V",
          brand_id: 5,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/781/696/png-transparent-2018-honda-hr-v-2017-honda-hr-v-2016-honda-hr-v-car-honda-compact-car-sedan-vehicle-thumbnail.png"
        },
        {
          car_model_name: "Azera",
          brand_id: 6,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/144/870/png-transparent-2016-hyundai-azera-2015-hyundai-azera-2016-hyundai-genesis-2017-hyundai-azera-limited-hyundai-compact-car-sedan-car-thumbnail.png"
        }, 
        {
          car_model_name: "Creta",
          brand_id: 6,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/927/799/png-transparent-car-compact-sport-utility-vehicle-hyundai-creta-hyundai-atos-hyundai-creta-compact-car-car-india-thumbnail.png"
        }, 
        {
          car_model_name: "HB20",
          brand_id: 6,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/72/640/png-transparent-hyundai-hb20-car-hyundai-creta-hyundai-motor-brasil-car-compact-car-sedan-car-thumbnail.png"
        },
        {
          car_model_name: "Santa Fé",
          brand_id: 6,
          group_id: 5,
          url_image:"https://img2.gratispng.com/20180323/ruq/kisspng-2018-hyundai-santa-fe-sport-2017-hyundai-santa-fe-hyundai-5ab52c296c6912.8763970715218227614441.jpg"
        }, 
        {
          car_model_name: "Tucson",
          brand_id: 6,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/1003/115/png-transparent-hyundai-motor-company-sport-utility-vehicle-hyundai-tucson-car-suv-cars-thumbnail.png"
        },
        {
          car_model_name: "A 200",
          brand_id: 7,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/896/321/png-transparent-mercedes-benz-a-class-car-mercedes-benz-s-class-luxury-vehicle-mercedes-car-love-compact-car-sedan.png"
        }, 
        {
          car_model_name: "C 180",
          brand_id: 7,
          group_id: 2,
          url_image:"https://www.mazettoseguros.com.br/blog/wp-content/uploads/2018/04/seguro-c180.png"
        }, 
        {
          car_model_name: "GLA 250",
          brand_id: 7,
          group_id: 3,
          url_image:"https://w1.pngwing.com/pngs/667/108/png-transparent-luxury-mercedesbenz-gla-250-car-mercedesbenz-glcclass-allwheel-drive-latest-2019-thumbnail.png"
        },
        {
          car_model_name: "GLK 300",
          brand_id: 7,
          group_id: 6,
          url_image:"https://w7.pngwing.com/pngs/900/593/png-transparent-2017-mercedes-benz-glc-class-mercedes-glc-coupe-car-mercedes-benz-glk-class-mercedes-compact-car-sedan-convertible-thumbnail.png"
        }, 
        {
          car_model_name: "Sprinter 311",
          brand_id: 7,
          group_id: 7,
          url_image:"https://www.oficinabrasil.com.br/uploads/images/direto-do-forum/Sprinter311-c%c3%b3pia.jpg"
        },
        {
          car_model_name: "Captur",
          brand_id: 8,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/439/602/png-transparent-renault-captur-dacia-sandero-car-dacia-logan-renault-compact-car-sedan-car-thumbnail.png"
        }, 
        {
          car_model_name: "Clio Sedan",
          brand_id: 8,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/746/93/png-transparent-renault-clio-iii-car-dacia-sandero-renault-compact-car-sedan-car-thumbnail.png"
        }, 
        {
          car_model_name: "Duster",
          brand_id: 8,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/513/844/png-transparent-renault-duster-car-dacia-duster-car-service-white-car-vehicle-thumbnail.png"
        },
        {
          car_model_name: "Kwid",
          brand_id: 8,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/914/497/png-transparent-renault-kwid-car-dacia-logan-fiat-mobi-renault-compact-car-car-vehicle-thumbnail.png"
        }, 
        {
          car_model_name: "Oroch",
          brand_id: 8,
          group_id: 4,
          url_image:"https://w7.pngwing.com/pngs/370/566/png-transparent-dacia-duster-renault-duster-oroch-car-sport-utility-vehicle-renault-truck-automatic-transmission-pickup-truck-thumbnail.png"
        },
        {
          car_model_name: "Corolla",
          brand_id: 9,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/486/759/png-transparent-2017-toyota-corolla-2016-toyota-corolla-2014-toyota-corolla-2015-toyota-corolla-toyota-thumbnail.png"
        }, 
        {
          car_model_name: "Etios Hatch",
          brand_id: 9,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/122/431/png-transparent-toyota-etios-liva-car-toyota-hilux-hatching-compact-car-sedan-subcompact-car-thumbnail.png"
        }, 
        {
          car_model_name: "Hilux CS",
          brand_id: 9,
          group_id: 4,
          url_image:"https://www.webmotors.com.br/imagens/prod/348545/TOYOTA_HILUX_2.8_D4D_TURBO_DIESEL_CD_POWER_PACK_4X4_MANUAL_34854521584932544.webp?s=fill&w=130&h=97&q=70&t=true)"
        },
        {
          car_model_name: "RAV 4",
          brand_id: 9,
          group_id: 3,
          url_image:"https://w7.pngwing.com/pngs/533/108/png-transparent-toyota-rav4-acura-subaru-car-toyota-rav-4-compact-car-driving-car-thumbnail.png"
        }, 
        {
          car_model_name: "Yaris Sedan",
          brand_id: 9,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/182/244/png-transparent-2010-toyota-yaris-car-2018-toyota-yaris-ia-toyota-belta-toyota-compact-car-sedan-car-thumbnail.png"
        },
        {
          car_model_name: "Space Fox",
          brand_id: 10,
          group_id: 6,
          url_image:"https://cdn.motor1.com/images/mgl/jNz6N/s3/vw-spacefox-2016-ganha-multimidia-com-apple-car-play-e-android-auto.jpg"
        }, 
        {
          car_model_name: "Jetta",
          brand_id: 10,
          group_id: 2,
          url_image:"https://w7.pngwing.com/pngs/988/199/png-transparent-2018-volkswagen-jetta-2017-volkswagen-jetta-2015-volkswagen-jetta-car-volkswagen-compact-car-sedan-car-thumbnail.png"
        }, 
        {
          car_model_name: "Nivus",
          brand_id: 10,
          group_id: 3,
          url_image:"https://isencar.com.br/wp-content/uploads/2020/11/nivus-pcd-e1631913366337.png"
        },
        {
          car_model_name: "Polo Hatch",
          brand_id: 10,
          group_id: 1,
          url_image:"https://w7.pngwing.com/pngs/601/979/png-transparent-volkswagen-polo-city-car-volkswagen-up-vw-polo-compact-car-sedan-driving-thumbnail.png"
        }, 
        {
          car_model_name: "Saveiro Cab Dupla",
          brand_id: 10,
          group_id: 4,
          url_image:"https://volkswagenpampa.com.br/wp-content/uploads/2022/05/Volkswagen_Saveiro_Volkswagen_Pampa-1024x556.png"
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('car_models', null, {});
  }
};