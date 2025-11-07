import React from 'react';
import { formatearPrecio } from '../utils/formatters';

// 1. Definimos la "forma" del producto (de nuevo)
// (Más adelante te enseñaré a mover esto a un archivo global)
interface Producto {
    id: number;
    codigo: string;
    categoria: string;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
    icono: string;
}

// 2. Definimos las "propiedades" (props) que recibirá este componente.
// Recibirá UN solo producto.
interface ProductCardProps {
    producto: Producto;
}

// 3. El componente recibe las "props" y las usa
export const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
    return (
        <div key={producto.codigo} className="border rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
                src={`/${producto.imagen}`} // <-- ¡Ya con la ruta corregida!
                alt={producto.nombre}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{producto.descripcion}</p>
                <p className="text-lg text-pink-700 font-bold mt-2">
                    {formatearPrecio(producto.precio)}
                </p>
                <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};