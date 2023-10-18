import { useState, useEffect } from 'react'
import './Horoscopo.css'
const Horoscopo = ({fecha}) => {
    const [ horoscopo,setHoroscopo] = useState("");
    const horoscopos= [
        {
          "nombre": "Aries",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/horoscopo-zodiacal-aries-10ba47.jpg",
          "descripcion": "Aries es el signo de la Aventura, el que se caracteriza por ser muy creativo, optimista y entusiasta.",
          "fechaInicio":"21 de Marzo",
          "fechaFin":"19 de Abril"
        },
        {
          "nombre": "Géminis",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2021-11/horoscopo-zodiacal-geminis-6d471e.jpg",
          "descripcion": "Geminis es el signo de la Creatividad, el que se caracteriza por ser muy creativo, optimista y entusiasta.",
          "fechaInicio":"21 de Mayo",
          "fechaFin":"20 de Junio"
    
        },
        {
          "nombre": "Tauro",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/horoscopo-zodiacal-tauro-95e1b6.jpg",
          "descripcion": "Tauro es el signo de la Justicia, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"20 de Abril",
          "fechaFin":"20 de Mayo"
        },
        {
          "nombre": "Cáncer",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/horoscopo-zodiacal-cancer-f7c89f.jpg",
          "descripcion": "Cáncer es el signo de la Sabiduría, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"21 de Junio",
          "fechaFin":"22 de Julio"
        },
        {
          "nombre": "Leo",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-11/horoscopo-zodiacal-leo-c679a6.jpg",
          "descripcion": "Leo es el signo de la Sabiduría, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"23 de Julio",
          "fechaFin":"22 de Agosto"
        },
        {
          "nombre": "Virgo",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/horoscopo-zodiacal-virgo-c37b74.jpg",
          "descripcion": "Virgo es el signo de la Sabiduría, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"23 de Agosto",
          "fechaFin":"22 de Septiembre"
        },
        {
          "nombre": "Libra",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/horoscopo-zodiacal-libra-2dd401.jpg",
          "descripcion": "Libra es el signo de la Sabiduría, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"23 de Septiembre",
          "fechaFin":"22 de Octubre"
        },
        {
          "nombre": "Escorpio",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/horoscopo-zodiacal-escorpio-60ad8e.jpg",
          "descripcion": "Escorpio es el signo de la Sabiduría, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"23 de Octubre",
          "fechaFin":"21 de Noviembre"
        },
        {
          "nombre": "Sagitario",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/horoscopo-zodiacal-sagitario-384c6f.jpg",
          "descripcion": "Sagitario es el signo de la Sabiduría, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"22 de Noviembre",
          "fechaFin":"21 de Diciembre"
        },
        {
          "nombre": "Capricornio",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/horoscopo-zodiacal-capricornio-8b7d5c.jpg",
          "descripcion": "Capricornio es el signo de la Sabiduría, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"22 de Diciembre",
          "fechaFin":"19 de Enero"
        },
        {
          "nombre": "Acuario",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-11/horoscopo-zodiacal-acuario-208efc.jpg",
          "descripcion": "Acuario es el signo de la Sabiduría, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"20 de Enero",
          "fechaFin":" 18 de Febrero"
        },
        {
          "nombre": "Piscis",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2021-11/horoscopo-zodiacal-piscis-c44099.jpg",
          "descripcion": "Piscis es el signo de la Sabiduría, el que se caracteriza por ser muy responsable, honesto y decidido.",
          "fechaInicio":"19 de Febrero",
          "fechaFin":"20 de Marzo"
        }
      ]

    useEffect(() => {
        const calculateHoroscope = () => {
            let dia = fecha.getDate();
            const mes = fecha.getMonth() + 1;

            switch (true) {
              case ((mes === 3 && dia>20) || (mes === 4 && dia<=19 )):
                setHoroscopo("Aries");
                break;
              case ((mes == 4 && dia>19) || (mes == 5 && dia<=20 )):
                setHoroscopo("Tauro");
                break;
              case ((mes == 5 && dia>20)|| (mes == 6 && dia<=20)):
                setHoroscopo("Géminis");
                break;
              case ((mes == 6 && dia>20) || (mes == 7 && dia<=22)):
                setHoroscopo("Cáncer");
                break;
              case ((mes == 7 && dia>22) || (mes == 8 && dia<=22)):
                setHoroscopo("Leo");
                break;
              case ((mes == 8 && dia>22) || (mes == 9 && dia<=22)):
                setHoroscopo("Virgo");
                break;
              case ((mes == 9 && dia>22) || (mes == 10 && dia<=22)):
                setHoroscopo("Libra");
                break;
              case ((mes == 10 && dia>22) || (mes == 11 && dia<=21)):
                setHoroscopo("Escorpio");
                break;
              case ((mes == 11 && dia>21) || (mes == 12 && dia<=21)):
                setHoroscopo("Sagitario");
                break;
              case ((mes === 12 && dia>21) || (mes === 1 && dia<=19)):
                setHoroscopo("Capricornio");
                break;
              case ((mes == 1 && dia>19) || (mes == 2 && dia<=18)):
                setHoroscopo("Acuario");
                break;
              case ((mes == 2 && dia>18) || (mes == 3 && dia<=20)):
                setHoroscopo("Piscis");
                break;
              default:
                setHoroscopo("Signo Desconocido");
            }
          };
            calculateHoroscope();
      }, [fecha]);
    return (
    <div >
      {horoscopos
  .filter((option) => option.nombre === horoscopo)
  .map((option) => (
    <div key={option.nombre} >
        <h4>{option.nombre}</h4>
        <div className='card'>
      <img src={option.img} alt={option.nombre} className="logo" />
      <p>{option.fechaInicio} - {option.fechaFin}</p>
      </div>
      <p>{option.descripcion}</p>

    </div>
  ))}

    </div>
  )
}
export default Horoscopo;