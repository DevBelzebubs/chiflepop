import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm bg-black/40"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <motion.div
            key="content"
            className="flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl bg-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full md:w-1/2 text-white p-8 md:p-10 flex flex-col justify-start"
              style={{ backgroundColor: "#7BBB50" }}
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Libro de reclamaciones
              </h1>
              <p className="text-sm md:text-base leading-relaxed mb-6">
                Valoramos tu feedback, si tienes cualquier queja o sugerencia,
                por favor llena nuestro formulario y te responderemos en la
                brevedad posible.
              </p>

              <div className="flex flex-col gap-5 text-sm md:text-base">
                <div className="flex items-center gap-3">
                  <img src="/img/Shield.svg" alt="Shield" className="w-5 h-5 md:w-6 md:h-6" />
                  <p>Tu opinión es importante para nosotros</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/img/Reloj.svg" alt="Reloj" className="w-5 h-5 md:w-6 md:h-6" />
                  <p>Respuesta en menos de 48 horas hábiles</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/img/Comprobado.svg" alt="Comprobado" className="w-5 h-5 md:w-6 md:h-6" />
                  <p>Toda queja y opinión se toman de manera seria</p>
                </div>
              </div>
            </div>

            <form className="w-full md:w-1/2 bg-white flex justify-center p-8 md:p-10">
              <div className="w-full max-w-md flex flex-col gap-6">
                <div className="w-full">
                  <h2 className="text-sm md:text-base mb-1 font-semibold">Nombre:</h2>
                  <input
                    className="border border-[#626262] rounded-lg w-full h-[2.8rem] pl-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3B9B03]"
                    placeholder="Tu nombre..."
                    type="text"
                  />
                </div>

                <div className="w-full">
                  <h2 className="text-sm md:text-base mb-1 font-semibold">Email:</h2>
                  <input
                    className="border border-[#626262] rounded-lg w-full h-[2.8rem] pl-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3B9B03]"
                    placeholder="Tu email..."
                    type="email"
                  />
                </div>

                <div className="w-full">
                  <h2 className="text-sm md:text-base mb-1 font-semibold">Tipo de queja:</h2>
                  <select className="border border-[#626262] rounded-lg w-full h-[2.8rem] pl-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#3B9B03]">
                    <option value="">Selecciona una opción</option>
                    <option value="Calidad de producto">Calidad de producto</option>
                    <option value="Servicio de delivery">Servicio de delivery</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>

                <div className="w-full">
                  <h2 className="text-sm md:text-base mb-1 font-semibold">Detalles:</h2>
                  <textarea
                    className="border border-[#626262] rounded-lg w-full h-[7rem] pl-3 pt-2 text-sm md:text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#3B9B03]"
                    placeholder="Proporcione detalles de la queja"
                  ></textarea>
                </div>

                <button
                  className="mt-2 p-3 rounded-lg bg-[#3B9B03] text-white text-sm md:text-base font-medium transition-all duration-300 hover:brightness-110"
                >
                  Completar formulario
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
