// src/utils/formatters.ts

export function formatearPrecio(precio: number): string {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
    }).format(precio);
}

export function obtenerNombreCategoria(categoria: string): string {
    const categorias: { [key: string]: string } = {
        "tortas-cuadradas": "Tortas Cuadradas",
        "tortas-circulares": "Tortas Circulares",
        "postres-individuales": "Postres Individuales",
        "sin-azucar": "Sin Azúcar",
        "tradicional": "Tradicional",
        "sin-gluten": "Sin Gluten",
        "vegana": "Vegana",
        "especiales": "Especiales",
    };
    return categorias[categoria] || categoria;
}