import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { faker } from "@faker-js/faker";
import Selo1 from "../../assets/selo1.svg";
import Selo2 from "../../assets/Selo2.png";
import Selo3 from "../../assets/formasPagamento.png";

const DDDs = [
  "SP - (11)",
  "SP - (12)",
  "SP - (13)",
  "SP - (14)",
  "SP - (15)",
  "SP - (16)",
  "SP - (17)",
  "SP - (18)",
  "SP - (19)",
  "RJ - (21)",
  "RJ - (22)",
  "RJ - (24)",
  "ES - (27)",
  "ES - (28)",
  "MG - (31)",
  "MG - (32)",
  "MG - (33)",
  "MG - (34)",
  "MG - (35)",
  "MG - (37)",
  "MG - (38)",
  "PR - (41)",
  "PR - (42)",
  "PR - (43)",
  "PR - (44)",
  "PR - (45)",
  "PR - (46)",
  "SC - (47)",
  "SC - (48)",
  "SC - (49)",
  "RS - (51)",
  "RS - (53)",
  "RS - (54)",
  "RS - (55)",
  "DF - (61)",
  "GO - (62)",
  "TO - (63)",
  "GO - (64)",
  "MT - (65)",
  "MT - (66)",
  "MS - (67)",
  "AC - (68)",
  "RO - (69)",
  "BA - (71)",
  "BA - (73)",
  "BA - (74)",
  "BA - (75)",
  "BA - (77)",
  "SE - (79)",
  "PE - (81)",
  "AL - (82)",
  "PB - (83)",
  "RN - (84)",
  "CE - (85)",
  "PI - (86)",
  "PE - (87)",
  "CE - (88)",
  "PI - (89)",
  "PA - (91)",
  "AM - (92)",
  "PA - (93)",
  "PA - (94)",
  "RR - (95)",
  "AP - (96)",
  "AM - (97)",
  "MA - (98)",
  "MA - (99)",
];

export function Notification() {
  const [inUp, setInUp] = useState(false);

  const numeros = faker.datatype.number({ min: 10000, max: 20000 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setInUp((prevInUp) => !prevInUp);
    }, numeros);

    // Função de limpeza para interromper o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [inUp]);

  return (
    <div
      className={`bg-gradient-to-l from-green-600 via-green-700 to-green-900 flex items-center gap-2 p-3 shadow-lg shadow-black/30 text-white fixed right-5 !z-50 bottom-5 rounded-xl ${
        inUp ? "animate__backInUp" : "animate__backOutDown"
      }  animate__animated `}
      // className={`bg-green-700 flex items-center gap-2 p-3 shadow-lg shadow-black/30 text-white fixed right-5 !z-50 bottom-5 rounded-xl`}
    >
      <img className="w-20" src={Selo1} alt="" />
      {/* <CheckCircleIcon sx={{ fontSize: 40, color: "#28c700" }} /> */}
      <div>
        <p className="text-md uppercase font-semibold font-Inter leading-none ">
          {(faker.name.fullName({sex: 'female'})).slice(0,8)}***
        </p>
        <p className="text-xs italic leading-none">
          {faker.helpers.arrayElement(DDDs)}{" "}
          {faker.datatype.number({ min: 9000, max: 9999 })}*****
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
            {faker.datatype.number({ min: 1, max: 6 })}x
          </p>
          <img
            src="https://newdetox.com.br/wp-content/uploads/2023/10/5-new-e.webp"
            className="w-full  sm:w-14 drop-shadow-2xl"
          />
        </div>
      <img src={Selo3} className="w-full  sm:w-20 drop-shadow-2xl" />
      </div>
    </div>
  );
}
