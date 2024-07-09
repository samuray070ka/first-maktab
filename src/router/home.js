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
function home() {
  return (
    <div className='section'>
            <div class="header">
            <div class="head-top">
                <div class="head-top-logo">
                    <img class="logo" src={Logo} alt="logo-header"></img>
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
                <Link className='link' to={'/asosiy'}>
                    <a href="#">Asosiy ma'lumotlar</a>
                </Link>
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
                    <ul className='collaction'>
                        <Link className='link' to={'https://zarkentbmsm.uz/PDFlar/34_BMSM_Ish_rejasi.pdf'}>
                        <li>BMSM o'quv ish rejasi</li>
                        </Link>
                        <Link className='link' to={'https://zarkentbmsm.uz/PDFlar/34_BMSM_Ochiq_darslar.pdf'}>
                        <li>Ochiq darslar jadvali</li>
                        </Link>
                        <Link className='link' to={'/dastur'}>
                        <li>O'quv dasturlari</li>
                        </Link>
                        <Link className='link' to={'https://zarkentbmsm.uz/PDFlar/Davlat_talim_talabi.pdf'}>
                        <li>Davlat ta'lim talablari</li>
                        </Link>
                        <Link className='link' to={'/festival'}>
                        <li>Tanlovlar, festivallar</li>
                        </Link>
                        <Link className='link' to={'https://zarkentbmsm.uz/PDFlar/Direktorlar_kengashi_ish_rejasi.pdf'}>
                        <li>Viloyat BMSMlar direktorlar Kengashi ish rejasi</li>
                        </Link>

                    </ul>
                </a>
                <Link className='link' to={'/galary'}>
                    <a href="#">Maktab galereyasi</a>
                </Link>
                <Link className='link' to={'/aloqa'}>
                    <a href="#">Aloqa</a>
                </Link>
            </div>
        </div>
        <div class="area">
            <div class="area-top">
                
                <div class="area-top-content">
                    <a href="#"><img src={HeadOne} alt="area"></img></a>
                    <a href="#"><img src={HeadTwo} alt="area"></img></a>
                    <a href="#"><img src={HeadThree} alt="area"></img></a>
                    <a href="#"><img src={HeadFour} alt="area"></img></a>
                    <a href="#"><img src={HeadFive} alt="area"></img></a>
                </div>
               
            </div>
        </div>
        <div class="wrapper">
            <div class="wrapper-left-link">
                <a href="#">BMSM directorining taqdimoti</a>
                <a href="#">Maktab ko'rsatkichlari</a>
                <a href="#">O'quvchilar uchun</a>
                <a href="#">O'quvchilar havfsizligi</a>
                <a href="#">Hamkorlik Memorandumlari</a>
                <a href="#">Mehnat Muhofazasi</a>
                <a href="#">Ota-onalar, Sizlar uchun!</a>
                <a href="#">Bizning yutuqlar</a>
                <a href="#">Bo'sh ish o'rinlari</a>
                <a href="#">Musiqa va san'at olamida</a>
                <a href="#">Ma'naviyat va Ma'rifat</a>
                <a href="#">Virtual Qabulxona</a>
            </div>
            <div class="wrapper-right-content">
                <div class="wrapper-right-first-box">
                    <div class="wr-ri-first-box-title">
                        <h1>Maktab yangiliklari</h1>
                    </div>
                    <div class="wr-ri-first-box-wrap">

                        <div class="big">
                            <div class="box-top">
                                <h2>20</h2>
                            </div>
                            <div class="box">
                                <h2 class="h22w">may</h2>
                            </div>
                        </div>
                        
                        <div class="    wr-ri-first-box-wrap-text">
                            <p>
                            Ushbu o'quv dasturi 2015-yil 20-avgustdan boshlab O`zb.Res. Xalq ta'limi vazirligining 15-son (2 ilova) buyrug`i asosida tasdiqlangan.
                            Bolalar musiqa va san'at maktabi umumta'lim maktabi bilan yaqin aloqada bo'lib, barkamol shaxsni tarbiyalashga yordam beradi.
Bolalar musiqa va san'at maktabida o'qishning asosiy vazifasi o'quvchilarni badiiy madaniyatga jalb qilish, ularning tasviriy savodxonlik asoslarini o'rgatish, ularning estetik ta'limini tarbiyalash, shuningdek, o'rta maxsus ta'lim muassasalarida badiiy ta'limni davom ettirish uchun eng iqtidorli o'quvchilarni aniqlashdir.

                            </p>
                            <a href="#">Batafsil</a>
                        </div>
                    </div>
                </div>
                <div class="wrapper-right-first-box mt">
                    <div class="wr-ri-first-box-wrap">
                        <div class="wr-ri-first-box-wrap">

                            <div class="big">
                                <div class="box-top">
                                    <h2>20</h2>
                                </div>
                                <div class="box">
                                    <h2 class="h22w">may</h2>
                                </div>
                            </div>
                            
                            <div class="    wr-ri-first-box-wrap-text">
                                <p>
                                Ушбу ўқув дастури болалар мусиқа ва санъат мактабларининг Давлат талаблари асосида  «Театр санъати» йўналишининг Актёрлик маҳорати фани бўйича ўқитишининг мақсад ва вазифаларини, мазмун-моҳиятини белгилайди.
Мазкур дастур ўқувчиларнинг истеъдодини, маданий савиясини, ижрочилик маҳоратларини, эшитиш қобилиятини ҳар томонлама ривожлантириш билан бирга бадиий дидини шакллантириш ва дунёқарашини кенгайтириш, бўлғуси актёрда саҳнавий кўникмалар ва театр санъати тамойилларини шакллантириш, ижрочилик куртакларини парваришлаш, ижодкорлик салоҳиятини  вояга етказиш  каби мақсадларни ўз олдига қўяди. 

                                </p>
                                <a href="#">Batafsil</a>
                            </div>
                        </div>
                        </div>
                    </div>
                <div class="wrapper-right-first-box mt">
                    <div class="wr-ri-first-box-wrap">
                        <div class="wr-ri-first-box-wrap">

                            <div class="big">
                                <div class="box-top">
                                    <h2>20</h2>
                                </div>
                                <div class="box">
                                    <h2 class="h22w">may</h2>
                                </div>
                            </div>
                            
                            <div class="    wr-ri-first-box-wrap-text">
                                <p>
                                Театрда бадиий образ яратиш, қаҳрамон хатти-ҳаракатлари, хис-туйғуларини томошабинга етказишда “Саҳна нутқи” асосий ифода воситаларидан бири. “Саҳна нутқи" фани тўғри нафас олиш, ўқувчи овоз марказини шакллантириш, орфоэпия нормаларига амал қилиш бадиий адабиётни ўрганиш, оғзаки нутқнинг мантиқий-интонацион кўникмаларини ўзлаштиришни ҳамда аниқ ва равон талаффузни қамраб олади. 
                                </p>
                                <a href="#">Batafsil</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="first-section-main">
            <div class="first-top-main">
                <img class="img_one" src="https://zarkentbmsm.uz/img/bulim_f_no_torli.svg" alt=""></img>
                <img class="img_one" src="	https://zarkentbmsm.uz/img/bulim_uzbek.svg" alt=""></img>
                <img class="img_one" src="	https://zarkentbmsm.uz/img/bulim_vokal.svg" alt=""></img>
                <img class="img_one" src="	https://zarkentbmsm.uz/img/bulim_teoriya.svg" alt=""></img>
                <img class="img_one" src="	https://zarkentbmsm.uz/img/bulim_xoreografiya.svg" alt=""></img>
                
            </div>
            <div class="first-body-main">
                <div class="first-body-calendar-main">
                    <div class="calendar-main-first">
                        <div class="calendar-heading">
                            <h2><a href="#">Mart 2023</a></h2>
                        </div>
                        <div class="calendar-body">
                            <div class="calendar-week">
                                <p>yak</p>
                                <p>du</p>
                                <p>se</p>
                                <p>cho</p>
                                <p>pay</p>
                                <p>jum</p>
                                <p>sha</p>
                            </div>
                            <div class="calendar-day">
                                <button disabled class="disabled-btn"></button>
                                <button disabled class="disabled-btn"></button>
                                <button disabled class="disabled-btn"></button>
                                <button type="button">1</button>
                                <button type="button">2</button>
                                <button type="button">3</button>
                                <button type="button">4</button>
                                <button type="button">5</button>
                                <button type="button" class="active">6</button>
                                <button type="button">7</button>
                                <button type="button">8</button>
                                <button type="button">9</button>
                                <button type="button">10</button>
                                <button type="button">11</button>
                                <button type="button" class="main">12</button>
                                <button type="button">13</button>
                                <button type="button">14</button>
                                <button type="button" class="active">15</button>
                                <button type="button">16</button>
                                <button type="button">17</button>
                                <button type="button">18</button>
                                <button type="button">19</button>
                                <button type="button" class="active">20</button>
                                <button type="button">21</button>
                                <button type="button">22</button>
                                <button type="button">23</button>
                                <button type="button">24</button>
                                <button type="button">25</button>
                                <button type="button">26</button>
                                <button type="button">27</button>
                                <button type="button">28</button>
                                <button type="button">29</button>
                                <button type="button">30</button>
                                <button type="button">31</button>
                                <button disabled class="disabled-btn"></button>
                            </div>
                        </div>
                    </div>
                    <div class="calendar-work">
                        <div class="calendar-work-title">
                            <h2>Keyingi ish:</h2>
                        </div>
                        <div class="calendar-work-link">
                            <p><span>15.03.2023</span><span>10:00</span></p>
                            <a href="#">Fortepiano bo'limida “Etyud ustida ishlash” mavzusida <br></br> uslubiy ma'ruza.</a>
                        </div>
                        <div class="calendar-work-link">
                            <p><span>15.03.2023</span><span>10:00</span></p>
                            <a href="#">“Navro'z” bayramiga bag'ishlangan katta konsert <br></br> dasturi</a>
                        </div>
                        <div class="calendar-work-link">
                            <p><span>15.03.2023</span><span>10:00</span></p>
                            <a href="#">An'anaviy xonandalik sinfida “Ustoz - shogird <br></br> an'analari” sinf konserti</a>
                        </div>
                        <div class="calendar-work-link">
                            <p><span>15.03.2023</span><span>10:00</span></p>
                            <a href="#">Madaniyat va san'at kuniga bag'ishlangan tadbir</a>
                        </div>
                    </div>
                </div>
                <div className="first-body-content-main">
                    <a href="#"><img src={Jadval} alt="jadval"></img></a>
                    <a href="#"><img src={Afisha} alt="afisha"></img></a>
                </div>
                <div className="first-body-last-main">
                    <a href="#"><img src={Navroz} alt="Navro'z"></img></a>
                </div>
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

export default home