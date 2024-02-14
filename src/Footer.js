import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="container">
            <hr></hr>
            <div className="footer-column">
                <Link to="/"><div className='header-logo'></div></Link>
                <nav>
                    <h4>Навигация</h4>
                    <ul>
                        <li><Link to='/services'>Услуги</Link></li>
                        <li><Link to='/certificates'>Сертификаты</Link></li>
                        <li><Link to='/about'>О нас</Link></li>
                        <li><Link to='/404'>Погода</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                    </ul>
                </nav>
                <div className="footer-adress">
                    <h4>Адрес</h4>
                    <ul>
                        <li>г. Новосибирск</li>
                        <li>ул. Бердский тупик 9/1</li>
                        <li>Пляж «Звезда»</li>
                        <li>Яхт-клуб «Наука»</li>
                    </ul>
                </div>
                <div className="footer-contacts">
                    <h4>Контакты</h4>
                    <ul>
                        <li>+ 7 869 468 48 68</li>
                        <li>nautica@mail.ru</li>
                    </ul>
                    <div className="footer-icons">
                        <img src="/public/images/tg-icon.png" alt="tg"></img>
                        <img src="/public/images/wa-icon.png" alt="wa"></img>
                        <img src="/public/images/vk-icon.png" alt="vk"></img>
                        <img src="/public/images/inst-icon.png" alt="inst"></img>
                    </div>
                </div>
            </div>
            <p>Политика конфиденциальности</p>
        </footer>
    )
}