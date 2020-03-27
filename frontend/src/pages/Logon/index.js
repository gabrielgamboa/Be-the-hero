import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; //feather icons, importado e colocado no componente FiLogin

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
    return (
        <div className="logon-conteiner">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" />
                    <button className='button' type="submit">Entrar</button>

                    <Link className="back-link" to="/register"> {/* Usar o componente Link to ao invés de "a href para não ter que carregar novamente todo o HTML. Assim, ele apenas troca de rota, e não recarrega o React do zero." */}
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}