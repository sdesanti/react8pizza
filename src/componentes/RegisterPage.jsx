import { useState } from 'react';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim() || !confirmarPassword.trim()) {
            setError(true);
            return;
        }

        if (password.length < 6) {
            alert("Error - La contraseña debe tener al menos 6 caracteres");
            return;
        } else if (password !== confirmarPassword) {
            alert("Error - Las contraseñas deben ser iguales");
            return;
        }

        alert(`Datos enviados`);
        setError(false);
        setEmail('');
        setPassword('');
        setConfirmarPassword('');
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h4>Register</h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={validarDatos}>
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        Todos los campos son obligatorios
                                    </div>
                                )}
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email" 
                                        className="form-control" 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        value={email} 
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        id="password"
                                        name="password" 
                                        className="form-control" 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        value={password} 
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="confirmarPassword">Confirmar Password</label>
                                    <input 
                                        type="password" 
                                        id="confirmarPassword"
                                        name="confirmarPassword" 
                                        className="form-control" 
                                        onChange={(e) => setConfirmarPassword(e.target.value)} 
                                        value={confirmarPassword} 
                                    />
                                </div>
                                <div className='d-grid'>
                                    <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;