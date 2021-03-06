import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Counter from "../Counter/Counter"; 
import Boton from "../boton/Boton";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, categoria, imagen, descripcion, precio }) => {

  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const {agregarCart} = useContext(CartContext);
const cartOnAdd = (cantidad) => {
    agregarCart({id, nombre, precio, cantidad, imagen});
    setCantidadAgregada(cantidad);
};

  return (
    <>
      <div className="card container text-center w-50">
        <div className="row">
          <div className="col-md-4">
            <div className="card-header">
              <h2 className="display-5 fw-1 card-title">{categoria}</h2>
            </div>
            <div className="card-image">
              <img className="img-fluid" src={imagen} alt={nombre} />
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center justify-content-around">
            <div className="card-content d-flex flex-column justify-content-around h-100">
              <span className="card-title my-3 fs-1">
                <b>{nombre}</b>
              </span>
              <div className="d-flex flex-row justify-content-center">
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} className="text-warning" />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h3 className="fs-1 my-3">
                <b>Precio:</b> {precio}{" "}
                <span className="spanCounter fs-2">$</span>
              </h3>
              {  cantidadAgregada === 0 
              ? <Counter onAdd={cartOnAdd} stock={25} initial={0} />
              : <Link to='/cart'><Boton classButton='btn btn-outline-dark' label="terminar de comprar" /></Link>
               }
            </div>
          </div>
        </div>
        <div className="row">
          <footer className="card-footer">
            <h3 className="card-text">detalles del producto</h3>
            <p className="fs-4 my-3 text-start">{descripcion}</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;