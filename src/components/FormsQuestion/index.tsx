import PersonIcon from "@mui/icons-material/Person";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Dialog, DialogTitle, InputAdornment, TextField } from "@mui/material";
import ReactInputMask from "react-input-mask";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

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
      borderRadius: 3,
    },
    "&:hover fieldset": {
      borderColor: "#ffffff", // Define a cor da borda quando o mouse passa sobre o input
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff", // Define a cor da borda quando o input está focado
    },
  },
};

export function FormsQuestion() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="col-span-5 shadow-2xl shadow-black/30">
      <div>
        <div className="flex flex-col gap-3 bg-green-700 rounded-xl border-b-4 border-lime-500 p-4">
          <div className="w-full flex flex-col gap-3  bg-green-700">
            <h1 className="text-xl font-bold text-left mb-1 text-white">
              ENVIE SUA DÚVIDA
            </h1>
            <ThemeProvider theme={theme}>
              <TextField
                size="small"
                placeholder="Digite aqui..."
                color="info"
                label="Nome"
                variant="outlined"
                InputProps={{
                  style: { borderColor: "#000000" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
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
                  startAdornment: (
                    <InputAdornment position="start">
                      <WhatsAppIcon />
                    </InputAdornment>
                  ),
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
                  endAdornment: (
                    <InputAdornment position="end">
                      <QuestionAnswerIcon />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { color: "white", fontWeight: "bold" }, // Define a cor do rótulo
                }}
                sx={styleSX}
              />
            </ThemeProvider>
            <button
              onClick={handleClickOpen}
              className="font-Montserrat mt-1  sm:w-96 p-3 bg-white border-b-4 border-lime-500 text-black font-bold text-lg uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      <Dialog onClose={handleClose} open={open} className="">
        <DialogTitle className="text-2xl !font-bold uppercase  text-center !leading-none text-green-700 flex flex-col items-center justify-center">
          <CheckCircleOutlineIcon
            className="text-green-600"
            sx={{ fontSize: 100 }}
          />
          Dúvida enviada para central de Suporte ao cliente
        </DialogTitle>
        <div className="flex items-center justify-center mb-5">
          <a
            target="_blank"
            rel="noopener"
            onClick={handleClose}
            href="https://api.whatsapp.com/send?phone=5565998201684&text=Ol%C3%A1,%20quero%20tirar%20algumas%20d%C3%BAvidas%20*fico%20no%20aguardo*."
            className="font-Montserrat mt-1 text-center  p-3 bg-green-600 border-b-4 border-lime-500 text-white font-bold text-lg uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30"
          >
            Falar com atendente
          </a>
        </div>
      </Dialog>
    </div>
  );
}
