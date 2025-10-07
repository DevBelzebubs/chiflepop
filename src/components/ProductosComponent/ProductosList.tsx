
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
      <div className="flex flex-wrap gap-5 justify-center">
      {productos.map((categoria, i) =>
        categoria.productos.map((prod, j) => (
          <div key={`${i}-${j}`} className="flex flex-col items-center border-solid rounded-2xl p-4 ml-2 mr-2 cardHover" style={{ width: "250px", boxShadow: "0 4px 10px 0 rgb(0,0,0,0.25)"}}>
            <img src={prod.image || "/img/default.png"} className="w-32 h-32 object-contain"/>
            <div className="text-start">
              <h2 className="text-base font-semibold">{prod.name}</h2>
              <p className="text-sm font-medium">{prod.description}</p>
            </div>
          </div>
          ))
        )}
      </div>
      <div className="flex mt-10 justify-center">
          <a href={`https://wa.me/51960662079?text=Hola%20mundo`} target="_blank" rel="noopener noreferrer" className="bg-[#50AE36] text-white pt-2 pb-2 pr-7 pl-7 rounded-2xl flex items-center gap-1 wsp">
            <img src="/img/whatsapp-logo.svg" width={42} />
            <h2 className="text-2xl pb-1">Compra ahora</h2>
          </a>
        </div>
    </div>
  );
};

export default ProductosList;
