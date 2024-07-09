import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/music-note-clip-art-transparent-background-21.png'
import Telegram from '../assets/icons8-telegram-app-48.png'
import HeadOne from '../assets/head-img-0.jpg'
import HeadFive from '../assets/head-img-1.jpg'
import HeadTwo from '../assets/head-img-2.jpg'
import HeadThree from '../assets/head-img-3.jpg'
import HeadFour from '../assets/head-img-4.jpg'
import Jadval from '../assets/Darslar_jadvali...jpg'
import Afisha from '../assets/Maktab_afishasi..jpg'
import Navroz from '../assets/Afisha_Tanlov_Navruz...jpg'
function Asosiy() {
  return (
     <div className=' section'>
        <div class="header">
            <div class="head-top">
                <div class="head-top-logo">
                    <img class="logo" src={Logo}></img>
                </div>
                <div class="head-top-title">
                    <h1>O‘ZBEKISTON RESPUBLIKASI
                        MADANIYAT VAZIRLIGI
                        QASHQADARYO VILOYATI
                        MADANIYAT BOSHQARMASI
                        <br></br>
                        MIRISHKOR TUMANI
                        19-SON BOLALAR MUSIQA VA SAN'AT MAKTABI
                    </h1>
                    <p>
                        Qashqadaryo viloyati Mirishkor tumani Pomuq shaharchasi. KOtaniyozov ko‘chasi 6 uy
                    </p>
                    <p class="tel">Tel: <span>+998 99-948-99-63</span>
                        <span>+998 95-150-00-81</span>
                        <span>+998 94-296-08-93</span></p>
                </div>
                <div class="head-top-link">
                <Link className='link' to={'https://t.me/BMSM19'}>
                  <a><img src={Telegram} alt=""></img></a>
                </Link>
                </div>
            </div>
            <div class="navbar">
                <a href="#">Asosiy ma'lumotlar</a>
                <a href="#">Me'yoriy-huquqiy hujjatlar
                    <ul className='collaction'>
                        <Link className='link li' to={'/kons'}>
                        <li> O'zbekiston Respublikasi Konstitutsiyasi</li>
                        </Link>
                        <Link className='link li' to={'/qonun'}>
                        <li> O'zbekiston Respublikasi Kodekslari va Qonunlari</li>
                        </Link>
                        <Link className='link li' to={'/farmon'}>
                        <li> O'zbekiston Respublikasi Prezidentining farmonlari va qarorlari</li>
                        </Link>
                        <Link className='link li' to={'/vazir'}>
                        <li> O'zbekiston Respublikasi Madaniyat vazirlar mahkamasining qarorlari</li>
                        </Link>
                        <Link className='link li' to={'/xayat'}>
                        <li> O'zbekiston Respublikasi Madaniyat vazirining buyruqlari, Xay'at qarorlari</li>
                        </Link>
                        <Link className='link li' to={'/hujjat'}>
                        <li>  O'z kuchini yo'qotgan hujjatlar</li>
                        </Link>

                    </ul>
                </a>
                <a href="#">BMSM to‘g‘risida ma’lumotlar
                <ul className='collaction'>
                        <Link className='link' to={'/maktab'}>
                            <li>Maktab rahbaryati</li>
                        </Link>
                        <Link className='link' to={'/pedagog'}>
                            <li>Maktab pedagog hodimlar</li>
                        </Link>
                        <Link className='link' to={'https://zarkentbmsm.uz/PDFlar/34_BMSM_Ustav.pdf'}>
                            <li>BMSM ustavi</li>
                        </Link>
                        <Link className='link' to={'https://zarkentbmsm.uz/PDFlar/34_BMSM_Guvohnoma.pdf'}>
                            <li>Yuridik shaxsni davlat ro'yxatidan maktab strukturasi</li>
                        </Link>
                        <Link className='link' to={'https://zarkentbmsm.uz/PDFlar/34_BMSM_odob_axloq_qoidalari.pdf'}>
                            <li>Odob axloq qoidalari</li>
                        </Link>
                        <Link className='link' to={'/lokal'}>
                            <li>Local hujjatlar</li>
                        </Link>
                        <Link className='link' to={'https://zarkentbmsm.uz/PDFlar/34_BMSM_jamoa_shartnomasi.pdf'}>
                            <li>Jamoa shartnomasi</li>
                        </Link>
                        <Link className='link' to={'https://zarkentbmsm.uz/PDFlar/34_BMSM_strukturasi.pdf'}>
                            <li>Malaka tavsiflari</li>
                        </Link>

                    </ul>
                </a>
                <a href="#">O'quv jarayoni
                    <ul>
                        <li>BMSM o'quv ish rejasi</li>
                        <li>Ochiq darslar jadvali</li>
                        <li>O'quv dasturlari</li>
                        <li>Davlat ta'lim talablari</li>
                        <li>Tanlovlar, festivallar</li>
                        <li>Viloyat BMSMlar direktorlar Kengashi ish rejasi</li>
                        <li>Viloyat o'quv-amaliy seminarlari jadvali</li>
                    </ul>
                </a>
                <a href="#">Maktab galereyasi</a>
                <a href="#">Aloqa</a>
            </div>
        </div>
        <Link className='link' to={'/'}>
            <h4 className='bosh dsa'>Bosh sahifaga qaytish</h4>
        </Link>
 <div class="main__info">
            <h2>BMSM to‘g‘risida asosiy ma’lumotlar</h2>
            <p class="main__text">Ta’lim muassasasi tashkil etilgan yil: <strong>2021-yil</strong></p>
            <p class="main__text">Ta’lim muassasasining to‘liq nomi:<strong>Toshkent viloyati Madaniyat boshqarmasi tasarrufidagi  Parkent tumani 34-sonli bolalar musiqa va san’at maktabi</strong></p>
            <p class="main__text">Ta’lim muassasasining qisqartirilgan nomi: <strong> Parkent tumani 34-sonli BMSM</strong></p>
            <p class="main__text">Ta’lim muassasasining muassisi: <strong> Toshkent viloyati hokimligi</strong></p>
            <p class="main__text">Ta’lim muassasasining yuqori organi: <strong>Toshkent viloyati Madaniyat boshqarmasi</strong></p>
            <p class="main__text">Ta’lim turiga tegishliligi: <strong>Maktabdan tashqari ta’lim muassasasi</strong></p>
            <p class="main__text">Ta’lim faoliyati yo‘nalishi: <strong>Musiqa va san’at</strong></p>
            <p class="main__text">Ta’lim muassasasining identifikatsiya raqami (STIR): <strong> 308230372</strong></p>
            <p class="main__text">Ta’lim muassasasining manzili: <strong>Parkent tumani, Zarkent qishlog‘i, Davlatobod MFY</strong></p>
            <p class="main__text">Mo‘ljal: <strong> 46-sonli umumiy o‘rta maktabi </strong></p>
            <p class="main__text">Ta’lim muassasasi ma’muriyatining ish kuni tartibi: <strong>soat 9.00 dan 18.00 gacha, tushlik 13.00 dan 14.00 gacha</strong></p>
            <p class="main__text">Ta’lim muassasasining ish kuni tartibi: <strong>6 kunlik o‘quv haftasi</strong></p>
            <p class="main__text">BMSM direktori: <strong> Raxmonov Umidjon Ibroxim o‘g‘li</strong></p>
            <p class="main__text">BMSM direktorining o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari: <strong>  Olimjonov Ilyosjon Ibroxim o‘g‘li</strong></p>   
            <p class="main__text">BMSM direktorining xo‘jalik ishlari bo‘yicha o‘rinbosari: <strong>  O‘tbosarov Ilxom Ixtiyor o‘g‘li</strong></p>
            <p class="main__text">Aloqa telefoni: <a href="tel:+998931959127"><strong>(+998) 93-195-91-27, 93-166-66-99</strong></a></p>
            <p class="main__text">Elektron pochta manzili: <a href="mailto:sanatmaktabi@mail.ru"><strong>bmsm34tv@gmail.com</strong></a></p>
         
            <h2>Ta’lim yo‘nalishlari</h2>
                <table class="main__table">                
        <tbody><tr><td>NN</td><th> Tа’lim yo‘nаlishi</th><th> Qаbul yoshi</th><th> O‘qish muddаti</th></tr>
        <tr><td colspan="4"><b><i> Musiqа yo‘nаlishi</i></b></td> </tr>
        <tr><td>1</td><td class="jadvaluchunchap"> Fоrtepiаnо</td><td>6-9</td><td>7 yil</td></tr>
        <tr><td>2</td><td>Tоrli chоlg‘ulаr</td><td>6-9</td><td>7 yil</td></tr>            
        <tr><td>3</td><td>Damli va zarbli chоlg‘ulаr</td><td>6-11</td><td>5 yil</td></tr>            
        <tr><td>4</td><td>Xаlq chоlg‘ulаri </td><td>6-11</td><td>5 yil</td></tr>
        <tr><td>5</td><td>Аn’аnаviy chоlg‘u ijrоchiligi </td><td>6-11</td><td>5 yil</td></tr>            
        <tr><td>6</td><td>Аkаdemik хоnаndаlik </td><td>6-11</td><td>5 yil</td></tr>       
        <tr><td>7</td><td>Аn’аnаviy хоnаndаlik</td><td>6-11</td><td>5 yil</td></tr>                   
        <tr><td>8</td><td>Estrada xonandaligi</td><td>6-11</td><td>5 yil</td></tr>          
        <tr><td>9</td><td>Baxshichilik san’ati</td><td>6-11</td><td>5 yil</td></tr>          
        <tr><td>10</td><td>Estrada cholg‘u ijrochiligi:fortepino, torli cholg‘ular<br/>damli va zarbli cholg‘ular</td><td>6-9<br/>6-11</td><td>7 yil<br/>5 yil</td></tr>          
        <tr><td colspan="4"><b><i>San’at yo‘nаlishi</i></b></td></tr>
        <tr><td>11</td><td>Хоreоgrаfiya</td><td>6-11</td><td>5 yil</td></tr>
        <tr><td>12</td><td>Tаsviriy sаn’аt</td><td>6-11</td><td>5 yil</td></tr>            
        <tr><td>13</td><td>Amaliy sаn’аt</td><td>6-11</td><td>5 yil</td></tr>            
        <tr><td>14</td><td>Teаtr sаn’аti</td><td>6-11</td><td>5 yil</td></tr>
      </tbody></table>
                    
    </div><br/>
    <div class="karta">   
        <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1783.6947379369594!2d69.74321711949385!3d41.24780487962329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afad6e9e7747cb%3A0xbf5afcc11d11a761!2sMusiqa%20Maktab!5e0!3m2!1sru!2s!4v1714329539297!5m2!1sru!2s"></iframe>
        </div>
       
        
    
    
    </div>
    <div className='footer-section'>
        <div className="footer-title">
            <h2>FOYDALI HAVOLALAR</h2>
        </div>
        <div className="footer-links">
            <div className="footer-links-hav">
                <a href="#">BMSM to'g'risida</a>
                <a href="#">Aloqa</a>
                <a href="#">Sayt xaritasi</a>
            </div>
            <div className="footer-links-hav">
                <a href="#">O'zbekiston Respublikasi madaniyat vazirligi</a>
                <a href="#">O'zbekiston Respublikasi badiiy akademiyasi</a>
                <a href="#">O'zbekiston Davlat Konservatoriyasi</a>
            </div>
            <div className="footer-links-hav">
                <a href="#">O'zbekiston Davlat san'at va madaniyat instituti</a>
                <a href="#">LexUZ qonunchilik ma'lumotlari milliy bazasi</a>
                <a href="#">O'zbekiston madaniyati yangiliklari</a>
            </div>
        </div>
        <div className="footer-end">
            <p>© UNI PROJECT 
                <br></br>
                2022 Barcha huquqlar himoyalangan</p>
            <p>Veb-saytdagi ma'lumotlardan foydalanilganda, manbaga havola qilish majburiy</p>
        </div>
        </div>
    </div>
  )
}

export default Asosiy