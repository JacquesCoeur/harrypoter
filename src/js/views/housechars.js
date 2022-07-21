import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { useParams } from "react-router-dom";

export const Housechars = () => {
    const {store,actions} = useContext(Context);
    const [favorites, setFavorites] = useState([]);
    const params = useParams();
    useEffect(() => {
		actions.getCharacterGryffindor();
        
	}, []);
    return(
        <div className=" container-fluid row justify-content-center me-0">
           
                {store.characters.map((value,position)=>{
                    return (
                    <div className="card col-4 m-1 cardgryffback parent container">
                        <div className="row">
                            <h5 className="card-title col-9 text-light  textselements">
                            <p key={position}>{value.name}</p>
                            <Link to={"/character/" + position}>Ver Perfil</Link>
                            </h5>

                            <button type="button" className=" addfav btn btn-dark col-2"
                            onClick={()=>{actions.addFavorites(value.name)}}
                            >Add To Fav</button>
                        </div>
                    </div>)
                })}
                

        </div>
    );
}