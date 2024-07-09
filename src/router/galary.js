import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/music-note-clip-art-transparent-background-21.png'
import Telegram from '../assets/icons8-telegram-app-48.png'
import Slayd from '../assets/slayd_1.jpg'
import Slayd2 from '../assets/slayd_2.jpg'
import Slayd3 from '../assets/slayd_3.jpg'
import Slayd4 from '../assets/slayd_4.jpg'
import Slayd17 from '../assets/slayd_17.jpg'
import SlayD1 from '../assets/photo_2024-04-05_09-59-26.jpg'
import SlayD2 from '../assets/photo_2024-04-09_15-29-31.jpg'
import SlayD3 from '../assets/photo_2024-04-16_14-24-48.jpg'
import SlayD4 from '../assets/photo_2024-04-24_16-05-17.jpg'
import SlayD5 from '../assets/photo_2024-05-05_14-36-36.jpg'
import SlayD6 from '../assets/photo_2024-05-10_16-14-52 (2).jpg'
import SlayD7 from '../assets/photo_2024-05-10_16-14-53.jpg'
import SlayD8 from '../assets/photo_2024-05-17_16-14-31.jpg'
import SlayD9 from '../assets/photo_2024-07-04_09-55-04.jpg'

function galary() {
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
                  <a href="https://t.me/BMSM19"><img src={Telegram} alt=""></img></a>
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
              <a href="#">Maktab galereyasi</a>
              <a href="#">Aloqa</a>
          </div>
      </div>
      <Link className='link' to={'/'}>
     <h4 className='bosh'>Bosh sahifaga qaytish</h4>
        </Link>
     <div className='big_flexx'>
        <div className='small'>
            <img src={Slayd2} alt="" />
            <h2>Maktab binosining ko‘rinishi</h2>
        </div>
        <div className='small'>
            <img src={Slayd} alt="" />
            <h2>Maktabga asosiy
            kirish qismi</h2>
        </div>
        <div className='small'>
            <img src={Slayd3} alt="" />
            <h2>Maktab
            foyesi</h2>
        </div>
        <div className='small'>
            <img src={Slayd4} alt="" />
            <h2>Maktab
            foyesi</h2>
        </div>
        <div className='small'>
            <img src={Slayd17} alt="" />
            <h2>1-qavat
            yo‘lagi</h2>
        </div>
     </div>
    <div className='swiper'>
    <div className='swiper_child'>
            <img src={SlayD1} alt="" />
            <h3>“Bo’zatov Fest 2024” tanlovi davom etmoqda.</h3>
        </div>
        <div className='swiper_child'>
            <img src={SlayD2} alt="" />
            <h3>9-aprel – Amir Temur tavallud topgan kun!</h3>
        </div>
        <div className='swiper_child'>
            <img src={SlayD3} alt="" />
            <h3>Qashqadaryo viloyat Mirishkor tumani 19-son Bolalar musiqa va sanʼat maktabida dars mashgʻulotlari</h3>
        </div>
        <div className='swiper_child'>
            <img src={SlayD4} alt="" />
            <h3>2024-yil 24- aprel kuni Qashqadaryo viloyati Mirishkor tumani 19-son bolalar musiqa va sanat</h3>
        </div>
        <div className='swiper_child'>
            <img src={SlayD5} alt="" />
            <h3>Миришкор туман 19 БМСМ  Навруза Курбанова.</h3>
        </div>
        <div className='swiper_child'>
            <img src={SlayD6} alt="" />
            <h3>Qashqadaryo viloyati Oila va xotin-qizlar boshqarmasi Mirishkor tuman Oila va xotin-qizlar boʻlimi</h3>
        </div>
        <div className='swiper_child'>
            <img src={SlayD7} alt="" />
            <h3>Qashqadaryo viloyati Oila va xotin-qizlar boshqarmasi Mirishkor tuman Oila va xotin-qizlar boʻlimi</h3>
        </div>
        <div className='swiper_child'>
            <img src={SlayD8} alt="" />
            <h3>Qashqadaryo viloyati Mirishkor tuman 19-son bolalar musiqa va sanʼat maktabida  sinflarining 
             foto lavhalar.</h3>
        </div>
        <div className='swiper_child'>
            <img src={SlayD9} alt="" />
            <h3>Qashqadaryo viloyati Mirishkor tumani 19-sonli bolalar musiqa va sanʼat maktabida yakunlari boʻyicha hisobot konserti.</h3>
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

export default galary