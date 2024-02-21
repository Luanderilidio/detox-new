import PersonIcon from "@mui/icons-material/Person";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, TextField } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ReactInputMask from "react-input-mask";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Define o modo de paleta para dark
  },
});

const styleSX = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#84cc16", // Define a cor da borda
      borderWidth: 2,
    },
    "&:hover fieldset": {
      borderColor: "#ffffff", // Define a cor da borda quando o mouse passa sobre o input
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff", // Define a cor da borda quando o input está focado
    },
  },
};

export function Footer() {
  return (
    <div className="col-span-12 grid grid-cols-4 bg-neutral-900 text-white gap-10 pt-8 px-0">
      <div className="col-span-4 sm:col-span-1 flex flex-col items-center justify-start">
        <h1 className="w-fit first-letter:text-xl font-bold text-center mb-1">
          AVISO
        </h1>
        <p className="text-center text-xs px-4  ">
          This site is not part of the Facebook website or Facebook Inc.
          Additionally, this site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        <a
          target="_blank"
          rel="noopener"
          href="https://drive.google.com/file/d/1ROa_ydk8D2plbF-QOyDIxITDu6UG4xB4/view?usp=drivesdk"
        >
          <button className="font-Montserrat mt-5 w-fit p-2 bg-gradient-to-l from-green-700 via-green-700 to-green-800 border-b-4 border-lime-500 text-white font-bold text-xs uppercase rounded-xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
            <PictureAsPdfIcon /> ALVARÁ - ANVISA
          </button>
        </a>
      </div>
      <div className="col-span-4 sm:col-span-1 flex flex-col items-center">
        <h1 className="text-xl font-bold text-center mb-1">FALE CONOSCO</h1>
        <p className="text-center text-sm">
          Fale conosco através dos <br /> nosso canais de atendimento: <br />{" "}
          das 09h às 18h. Telefone: (37) 3351-5181
        </p>
        <a
          target="_blank"
          rel="noopener"
          href="https://api.whatsapp.com/send?phone=5565998201684&text=Ol%C3%A1,%20quero%20tirar%20algumas%20d%C3%BAvidas%20*fico%20no%20aguardo*."
        >

        <button className="font-Montserrat mt-5 w-fit p-3 bg-gradient-to-l from-green-700 via-green-700 to-green-800 border-b-4 border-lime-500 text-white font-bold text-xs uppercase rounded-xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
          <WhatsAppIcon /> FALAR COM ATENDENTE
        </button>
        </a>
      </div>
      <div className="col-span-4 sm:col-span-1 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-center mb-1">RASTREIO</h1>
        <p className="text-center text-sm">
          Para rastrear o seu kit <br /> New Detox basta consultar no link
          abaixo:
        </p>
        <a
          target="_blank"
          rel="noopener"
          href="https://pedidos.capsulbrasil.com.br/tracking"
        >

        <button className="font-Montserrat mt-5 w-fit p-3 bg-gradient-to-l from-green-700 via-green-700 to-green-800 border-b-4 border-lime-500 text-white font-bold text-xs uppercase rounded-xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
          <PlaceIcon sx={{ fontSize: 15 }} /> RASTREAR PEDIDO
        </button>
        </a>
      </div>
      <div className="col-span-4 sm:col-span-1 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-center mb-1">SITE SEGURO</h1>
        <img
          src="https://newdetox.com.br/wp-content/uploads/2023/09/icons-siteseguro-1-1.png"
          alt=""
        />
        <img
          src="https://cdn.plezstore.com.br/assets/img/security/site-seguro-blindado.png"
          className="w-2/3"
        />
        <img
          src="https://armasfronteira.com/wp-content/uploads/2022/08/dadosprotegidos.png"
          className="w-2/3"
        />
        <a className="mt-3">
          <h1 className="underline font-bold">POLÍTICAS DE PRIVACIDADE</h1>
        </a>
        <a>
          <h1 className="underline font-bold">TERMOS DE USO</h1>
        </a>
      </div>

      {/*
      
    
      <div className="col-span-5 hidden">
        <div>
          <h1 className="text-xl font-bold text-left mb-1">ENVIE SUA DÚVIDA</h1>
          <div className="flex gap-3 bg-green-700 rounded-xl border-b-4 border-lime-500 p-4">
            <div className="w-full flex flex-col gap-3  bg-green-700">
              <ThemeProvider theme={theme}>
                <TextField
                  size="small"
                  placeholder="Digite aqui..."
                  color="info"
                  label="Nome"
                  variant="outlined"
                  InputProps={{
                    style: { borderColor: "#000000" }, // Define a cor da borda
                  }}
                  InputLabelProps={{
                    style: { color: "white", fontWeight: "bold" }, // Define a cor do rótulo
                  }}
                  sx={styleSX}
                />
                <TextField
                  size="small"
                  fullWidth
                  placeholder="(00) 0 0000-0000"
                  color="info"
                  label="Whatsapp"
                  variant="outlined"
                  InputProps={{
                    style: { borderColor: "#000000" }, // Define a cor da borda
                  }}
                  InputLabelProps={{
                    style: { color: "white", fontWeight: "bold" }, // Define a cor do rótulo
                  }}
                  sx={styleSX}
                />
              </ThemeProvider>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <ThemeProvider theme={theme}>
                <TextField
                  variant="outlined"
                  size="small"
                  className="w-full"
                  label="Pergunta"
                  multiline
                  rows={2}
                  maxRows={4}
                  InputProps={{
                    style: { borderColor: "#000000" }, // Define a cor da borda
                  }}
                  InputLabelProps={{
                    style: { color: "white", fontWeight: "bold" }, // Define a cor do rótulo
                  }}
                  sx={styleSX}
                />
              </ThemeProvider>
              <Button fullWidth className="!capitalize"  size="small" variant="contained">Enviar</Button>
            </div>
          </div>
        </div>
      </div>
     */}
      <div className="col-span-4 py-2 flex flex-col sm:flex-row sm:gap-2 items-center justify-center bg-[#99d86a] text-green-800 leading-none">
        <h1 className="text-lg font-bold leading-none">
          <span className="font-normal">2024</span> © New Detox®.
        </h1>
        <h1 className="text-lg font-normal leading-none">
          Todos os direitos reservados.
        </h1>
      </div> 
    </div>
  );
}
