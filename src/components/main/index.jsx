import './style.css';
import { Routes, Route } from 'react-router-dom';

function News() {
    return (
        <p><h1>Новости</h1></p>
    )
}

function About(){
    return (
        <h1>ЮФУ</h1>
    )
}

function Contacts(){
    return (
        <h2>8 (123) 456 - 78 - 90</h2>
    )
}

export function Main(){
    return (
    <div class="main">
        <div class="main_container">
            <section class="flex-center"><img src="https://avatarko.ru/img/kartinka/14/zhivotnye_kot_13379.jpg" width={200} alt="CAT"/></section>
            <article class="flex-center">
                <Routes>
                    <Route path='/news' element={<News />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='*' element={<h3>битая ссылка</h3>} />
                </Routes>
            </article>
            <aside class="flex-center">Тен Анастасия Алексеевна</aside>
        </div>    
    </div>
    )
}

export default Main;