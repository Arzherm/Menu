import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Panel", src: "Chart_fill" },
    { title: "Bandeja de entrada", src: "Chat" },
    { title: "Cuenta", src: "User", gap: true },
    { title: "Calendario ", src: "Calendar" },
    { title: "Busqueda", src: "Search" },
    { title: "Analisis", src: "Chart" },
    { title: "Archivos", src: "Folder", gap: true },
    { title: "Ajustes", src: "Setting" },
    { title: "Mensaje", src: "sobre" },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/pikachu1.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <div className={`flex items-center`}>
            <h2
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              <span className="flex items-center">Menu</span>
            </h2>
          </div>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover-bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`text-white ${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        {/* Caja de mensajes al final del menú */}
        <div className={`border-t border-gray-100 border-l border-gray-100 border-r border-gray-100 border-b border-gray-100 ${open ? "block" : ""}`}>

          <div className="flex items-center p-4">
          <h2 className={`text-sm font-bold text-white w-20 h-20 ${open ? "block" : ""}`}>...</h2>


          </div>
          <div className="p-4">
            <div className="flex items-center" style={{ marginTop: "-70px" }}>
              <img
                src="./src/assets/gengar1.png" 
                alt="Imagen de ejemplo"
                className="w-8 h-8 m-1" 
              />
              <span className={`text-white ${open ? "block" : "hidden"}`}>mensaje de Gengar</span>
            </div>
            <div className="flex items-center">
              <img
                src="./src/assets/gengar1.png" 
                alt="Imagen de ejemplo"
                className="w-8 h-8 m-1" 
              />
             <span className={`text-white ${open ? "block" : "hidden"}`}>mensaje de Gengar</span>

            </div>
            <div className="flex items-center">
              <img
                src="./src/assets/gengar1.png" 
                alt="Imagen de ejemplo"
                className="w-8 h-8 m-1" 
              />
              <span className={`text-white ${open ? "block" : "hidden"}`}>mensaje de Gengar</span>
            </div>
          

          </div>
        </div>
        <div className="text-white flex items-center ">
          <img
          src="./src/assets/perfil.png"
          alt=""
          className="w-8 h-8 m-1 mt-10"></img><h2 className={`mt-10 ${open ? '' : 'hidden'}`}>Emanuel Ulises Darocas</h2>


        </div>
      </div>
    </div>
  );
};

export default App;