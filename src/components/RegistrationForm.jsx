import "./RegistrationForm.css";
import { useState } from "react";

export function RegistrationForm({ setUser }) {

    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        // Validacion por si no termina de agregar todos los campos con los datos requeridos
        e.preventDefault();

        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }

        setError(false);

        // Pasar un estado
        setUser([nombre]);
    };

    return (
        <section>
            <h1>Login</h1>
            <form className="RegistrationForm" onSubmit={handleSubmit}>
                {/*Captura lo que escribimos en el input*/}
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="password"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                />

                <button>Iniciar sesion</button>
            </form>

            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    );
}
