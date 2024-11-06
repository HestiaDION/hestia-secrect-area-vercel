import styles from  './Login.module.css'
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';

import red_hestia from '../../assets/red_hestia.svg'
import animacao from '../../assets/gif_login.json'
import invisible_password from '../../assets/invisible_password.svg'
import visible_password from '../../assets/visible_password.svg'

export default function Login({ onLogin }){
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Função para dar a visibilidade à senha
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Função para fazer a requisiçãoo
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch('https://hestia-flask-secret-area.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });

            const data = await response.json();

            if (!response.ok) {
                setErrorMessage("Email ou senha incorretos.");
                return;
            }

            if (data.token) {
                localStorage.setItem('token', data.token);
                onLogin(); 
            } else {
                setErrorMessage(data.error || "Erro desconhecido.");
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("Erro ao conectar ao servidor.");
        }
    };

    return(
        <>
            <a href='https://lottiefiles.com/search?q=statistics&category=animations&page=3'><img src={red_hestia} className={styles.logo} alt="Logo Héstia" height="51px"/></a>
            <div className={styles.login}>
            <div className={styles.description}>
                <div className={styles.text}>
                    <h1>Sing in to</h1>
                    <h4>Área secreta do</h4>
                    <h4 className={styles.veremelho} style={{marginBottom: "20px"}}>Héstia</h4>

                    <p>Principais informações e estatísticas para o</p>
                    <p className={styles.veremelho}>anunciante!</p>
                </div>

                <div className={styles.gif}>
                    <Player
                        autoplay
                        loop
                        src={animacao}
                        style={{ height: '500px', width: '250px' }}
                    />
                </div>
            </div>
            <div className={styles.form}>
                <h2>Sign in</h2>
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className={styles.passwordContainer}>
                    <input
                    type={passwordVisible ? 'text' : 'password'}
                    className={styles.inputField}
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <img
                    src={passwordVisible ? invisible_password : visible_password}
                    className={styles.passwordToggle}
                    onClick={togglePasswordVisibility}
                    />
                    
                </div>
                {/* Aqui está a mensagem de erro */}
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                <button className={styles.loginButton} onClick={handleSubmit}>Login</button>
            </div>
        </div>
        </>
    )
}
