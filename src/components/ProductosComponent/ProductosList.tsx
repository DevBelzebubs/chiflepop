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
    <div className="flex flex-wrap gap-4 justify-center">
      {productos.map((categoria, i) =>
        categoria.productos.map((prod, j) => (
          <div key={`${i}-${j}`} className="flex flex-col items-center gap-2 border-2 border-solid rounded-2xl p-4" style={{ borderColor: "#50AE36", width: "250px" }}>
            <img src={prod.image || "/img/default.png"} alt={prod.name} className="w-32 h-32 object-contain"/>
            <h2 className="text-lg font-semibold" style={{ color: "#50AE36" }}>
              {prod.name}
            </h2>
            <p className="text-sm text-center" style={{ color: "#50AE36" }}>
              {prod.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductosList;
