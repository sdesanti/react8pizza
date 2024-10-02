import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UsuarioContexto';

const LoginPage = () => {
    const { token, login } = useUser(); 
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (token) {
            navigate('/');  
        }
    }, [token, navigate]);

    const validarDatos = async (e) => {
        e.preventDefault();

        
        if (!email.trim() || !password.trim()) {
            setError(true);
            return;
        }

        
        if (password.length < 6) {
            alert("Error - La contraseña debe tener al menos 6 caracteres");
            return;
        }

       
        try {
            await login(email, password);  
            setError(false);  
        } catch (error) {
            setError(true);  
        }
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h4>Iniciar Sesión</h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={validarDatos}>
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        Error en las credenciales, inténtalo de nuevo.
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
                                <div className="form-group mb-4">
                                    <label htmlFor="password">Contraseña</label>
                                    <input 
                                        type="password" 
                                        id="password"
                                        name="password" 
                                        className="form-control" 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        value={password} 
                                    />
                                </div>
                                <div className='d-grid'>
                                    <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
