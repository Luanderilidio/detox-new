import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { faker } from "@faker-js/faker";
import Selo1 from "../../assets/selo1.svg";
import Selo2 from "../../assets/Selo2.png";
import Selo3 from "../../assets/formasPagamento.png";
import { DDDs, nomesMulheres } from "./test";




export function Notification() {
  const [inUp, setInUp] = useState(false);

  const numeros = faker.datatype.number({ min: 10000, max: 50000 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setInUp((prevInUp) => !prevInUp);
    }, numeros);

    // Função de limpeza para interromper o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [inUp]);

  return (
    <div
      className={`bg-gradient-to-l from-green-600 via-green-700 to-green-900 flex items-center gap-2 p-3 shadow-lg shadow-black/30 text-white fixed right-1 !z-50 bottom-5 rounded-xl ${
        inUp ? "animate__bounceInUp" : "animate__bounceOutDown animate__faster"
      }  animate__animated `}
      // className={`bg-green-700 flex items-center gap-2 p-3 shadow-lg shadow-black/30 text-white fixed right-5 !z-50 bottom-5 rounded-xl`}
    >
      <img className="w-20 " src={Selo1} alt="" />
      {/* <CheckCircleIcon sx={{ fontSize: 40, color: "#28c700" }} /> */}
      <div>
        <p className="text-md uppercase font-semibold font-Inter leading-none ">
          {/* {(faker.name.fullName({sex: 'female'})).slice(0,8)}*** */}
          {(faker.helpers.arrayElement(nomesMulheres)).slice(0,14)}***
        </p>
        <p className="text-xs italic leading-none">
          {faker.helpers.arrayElement(DDDs)}{" "}
          {faker.datatype.number({ min: 90000, max: 99999 })}***
        </p>
        <p className="text-xs">
          Compra{" "}
          <span className="font-black leading-none">
            {faker.helpers.arrayElement(["no Boleto", "no Cartão", "via PIX"])}
          </span>{" "}
        </p>
        <img className="w-20" src={Selo2} alt="" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <p className="font-bold font-Montserrat text-4xl italic text-green-400">
            {faker.datatype.number({ min: 1, max: 4 })}x
          </p>
          <img
            src="https://newdetox.com.br/wp-content/uploads/2023/10/5-new-e.webp"
            className="w-14  sm:w-14 drop-shadow-2xl"
          />
        </div>
      <img src={Selo3} className="w-12  sm:w-20 drop-shadow-2xl" />
      </div>
    </div>
  );
}
