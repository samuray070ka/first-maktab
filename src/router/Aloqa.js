import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/music-note-clip-art-transparent-background-21.png'
import Telegram from '../assets/icons8-telegram-app-48.png'
import {FaPhone, FaMailBulk, FaCalendar, FaLocationArrow} from 'react-icons/fa'
function Aloqa() {
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
                    <a href="">Asosiy ma'lumotlar</a>
                </Link>
              <a href="">Me'yoriy-huquqiy hujjatlar
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
              <a href="">BMSM to‘g‘risida ma’lumotlar
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
              <a href="">O'quv jarayoni
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
              <a href="">Maktab galereyasi</a>
              <a href="">Aloqa</a>
          </div>
      </div>
      <Link className='link' to={'/'}>
     <h4 className='bosh'>Bosh sahifaga qaytish</h4>
        </Link>
     <div className="contact-info">
        <div className="contact-item">
            <FaPhone className='ico'/>
          <h3>TELEFON RAQAMI</h3>
          <p>+998 55 901-54-34</p>
          <p>Qo‘ng‘iroq qilish</p>
        </div>
        <div className="contact-item">
            <FaMailBulk className='ico'/>
          <h3>E-MAIL</h3>
          <p>Umidbek34bmsm@gmail.com</p>
          <p>E-mail jo‘natish</p>
        </div>
        <div className="contact-item">
            <FaCalendar className='ico'/>
          <h3>ISH KUNI TARTIBI</h3>
          <p>Dushanba - Shanba</p>
          <p>8.00 - 18.00</p>
          <p>Yakshanba - dam olish kuni</p>
        </div>
        <div className="contact-item">
            <FaLocationArrow className='ico'/>
          <h3>MANZIL</h3>
          <p>111304 Toshkent viloyati</p>
          <p>Parkent tumani</p>
          <p>Zarkent qishlog‘i</p>
          <p>Davlatobod MFY</p>
        </div>
      </div>
      <div className="form">
        <h2>MUROJAAT FORMASI</h2>
        <form>
          <div className='dic'>
          <label>Ism-familiyangizni to‘liq ko‘rsating:</label>
          <label>Manzilingizni to‘liq ko‘rsating:</label>
          <label>Telefon raqamingizni ko‘rsating:</label>
          </div>
          <div className='dic'>
          <input type="text" name="name" />
          <input type="text" name="address" />
          <input type="text" name="phone" />
          </div>
          <label className='laber'>Murojaat mazmuni</label>
          <textarea className='textarea' name="message"></textarea>
          <label>Fayl:</label>
          <input type="file" name="file" />
          <button type="submit">JO'NATISH</button>
        </form>
      </div>

    


<div className='footer-section'>
      <div className="footer-title">
          <h2>FOYDALI HAVOLALAR</h2>
      </div>
      <div className="footer-links">
          <div className="footer-links-hav">
              <a href="">BMSM to'g'risida</a>
              <a href="">Aloqa</a>
              <a href="">Sayt xaritasi</a>
          </div>
          <div className="footer-links-hav">
              <a href="">O'zbekiston Respublikasi madaniyat vazirligi</a>
              <a href="">O'zbekiston Respublikasi badiiy akademiyasi</a>
              <a href="">O'zbekiston Davlat Konservatoriyasi</a>
          </div>
          <div className="footer-links-hav">
              <a href="">O'zbekiston Davlat san'at va madaniyat instituti</a>
              <a href="">LexUZ qonunchilik ma'lumotlari milliy bazasi</a>
              <a href="">O'zbekiston madaniyati yangiliklari</a>
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

export default Aloqa