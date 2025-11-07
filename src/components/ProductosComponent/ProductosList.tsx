
type Producto = {
  name: string;
  description: string;
  image?: string;
};

type Categoria = {
  id: number;
  name?: string;
  productos: Producto[];
};

type Props = {
  productos?: Categoria[];
};

const ProductosList = ({ productos = [] }: Props) => {
  return (
    <div className="w-full max-w-[1300px] mx-auto px-4">
      <div className="flex flex-wrap gap-8 justify-center">
      {productos.map((categoria, i) =>
        categoria.productos.map((prod, j) => (
          <div key={`${i}-${j}`} className="flex flex-col bg-white border-2 border-transparent rounded-3xl p-6 cardHover" style={{ width: "280px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)"}}>
            <div className="flex justify-center items-center bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-6 mb-4">
              <img src={prod.image || "/img/default.png"} className="w-32 h-32 object-contain"/>
            </div>
            <div className="text-start space-y-2">
              <h2 className="text-lg font-bold text-gray-800">{prod.name}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{prod.description}</p>
            </div>
          </div>
          ))
        )}
      </div>
      <div className="flex mt-16 justify-center">
          <a href={`https://wa.me/51960662079?text=Hola%20mundo`} target="_blank" rel="noopener noreferrer" className="bg-[#50AE36] text-white px-8 py-4 rounded-2xl flex items-center gap-3 wsp font-bold text-lg">
            <img src="/img/whatsapp-logo.svg" width={36} alt="WhatsApp" />
            <span className="text-xl">Compra ahora</span>
          </a>
        </div>
    </div>
  );
};

export default ProductosList;
