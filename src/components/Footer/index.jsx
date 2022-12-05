import React from "react";
import Logo from "../Logo";
import "./style.css";

export default () => {
    return <footer>
       <Logo/>
       <span  className="copy">&copy;
       {new Date().getFullYear()}DogFood.ru</span>
       <a href="">Каталог</a>
       <a href="">Акции</a>
       <a href="">Новости</a>
       <a href="">Отзывы</a>
       <a href="">Оплата и доставка</a>
       <a href="">Часто спрашивают</a>
       <a href="">Обратная связь</a>
       <a href="">Контакты</a>
       <div className="contacts">
        <p>Мы на связи</p>
        <a href="tel:+71234567890">+7(123)456-78-90</a>
        <div class="footer-email">
        <a href="mailto:dogfood.ru@gmail.ru">dogfood.ru@gmail.com</a>
        </div>
        <nav>
            <a href=""><i class="fa-brands fa-vk"></i></a>
            <a href=""><i class="fa-brands fa-odnoklassniki"></i></a>
            <a href=""><i class="fa-brands fa-telegram"></i></a>

        </nav>
       </div>
    </footer>
    
}