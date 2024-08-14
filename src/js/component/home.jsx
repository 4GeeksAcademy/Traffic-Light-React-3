import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectColor, setSelectColor] = useState("")
	const [newColor, setNewColor] = useState(false)

	// Función para alternar los colores del semáforo
	const toggleTrafficLight = () => {
		if (selectColor === "red") {
			setSelectColor("yellow");
		} else if (selectColor === "yellow") {
			setSelectColor("green");
		} else {
			setSelectColor("red");
		}
	};


	return (
		<div className="container">
			<h1 className="text-center mt-5 text-white">Traffic Light</h1>
			<div className="text-center" >
				<div className="bg-dark mx-auto" style={{ height: "80px", width: "15px", }}></div>
				<div className="bg-dark mx-auto rounded-3" style={{ width: "120px", }}>
					<div onClick={() => setSelectColor("red")}
						className={"rounded-circle bg-danger mx-auto" + (selectColor === "red" ? " glow" : "")} style={{ height: "100px", width: "100px", }}>
					</div>
					<div onClick={() => setSelectColor("yellow")}
						className={"rounded-circle bg-warning mx-auto" + (selectColor === "yellow" ? " glow" : "")} style={{ height: "100px", width: "100px", }}>
					</div>
					<div onClick={() => setSelectColor("green")}
						className={"rounded-circle bg-success mx-auto" + (selectColor === "green" ? " glow" : "")} style={{ height: "100px", width: "100px", }}>
					</div>
					<div onClick={() => setSelectColor("purple")}
						className={"rounded-circle  mx-auto" + (selectColor === "purple" ? " glow" : "")} style={{ height: "100px", width: "100px", backgroundColor: "purple", display: newColor ? "inline-block" : "none" }}>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<button onClick={toggleTrafficLight} className="btn btn-primary mt-5">
						Alternar color
					</button>
					<button onClick={() => setNewColor(!newColor)} className="btn btn-secondary mt-5 ms-5">
						{newColor ? "Retirar color" : "Agregar"}
					</button>

				</div>


			</div>

		</div>
	);
};
export default Home;
