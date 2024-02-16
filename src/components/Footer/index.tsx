export function Footer() {
  return (
    <div className="col-span-12 grid grid-cols-12 bg-neutral-900 text-white gap-10 border border-red-500 pt-8" >
      <div className="col-span-1" />
      <div className="col-span-12 sm:col-span-3">
        <h1 className="text-xl font-bold text-center mb-1">AVISO</h1>
        <p className="text-center text-sm">
          This site is not part of the Facebook website or Facebook Inc.
          Additionally, this site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </div>
      <div className="col-span-12 sm:col-span-2">
        <h1 className="text-xl font-bold text-center mb-1">FALE CONOSCO</h1>
        <p className="text-center text-sm">
          Fale conosco através dos nosso canais de atendimento: das 09h às 18h.
          <br />
          Telefone: (37) 3351-5181
        </p>
      </div>
      <div className="col-span-12 sm:col-span-2 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-center mb-1">RASTREIO</h1>
        <p className="text-center text-sm">
          Para rastrear o seu kit New Detox basta consultar no link abaixo:
        </p>
        <button className="font-Montserrat mt-5 w-fit p-3 bg-green-700 border-b-4 border-lime-500 text-white font-bold text-xs uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
          RASTREAR PEDIDO
        </button>
      </div>
      <div className="col-span-12 sm:col-span-3 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-center mb-1">SITE SEGURO</h1>
        <img
          src="https://newdetox.com.br/wp-content/uploads/2023/09/icons-siteseguro-1-1.png"
          alt=""
        />
        <a className="mt-3">
          <h1 className="underline font-bold">POLÍTICAS DE PRIVACIDADE</h1>
        </a>
        <a>
          <h1 className="underline font-bold">TERMOS DE USO</h1>
        </a>
      </div>
      <div className="col-span-1 " />
      <div className="col-span-12 py-2 flex flex-col sm:flex-row sm:gap-2 items-center justify-center bg-[#99d86a] text-green-800 leading-none">
        <h1 className="text-lg font-bold leading-none">
          <span className="font-normal">2024</span> © New Detox®.
        </h1>
        <h1 className="text-lg font-normal leading-none">Todos os direitos reservados.</h1>
      </div>
    </div>
  );
}
