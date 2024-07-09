import React from 'react'
import '../home.css'
import {Link} from 'react-router-dom'
import FlexImg from '../../assets/gerb.png'
import FlexImgTwo from '../../assets/image.png'
import Logo from '../../assets/music-note-clip-art-transparent-background-21.png'
import Telegram from '../../assets/icons8-telegram-app-48.png'
function vazir() {
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
     <div className='flex'>
      <img className='flex_img' src={FlexImg} alt="" />
      <h5 className='flex_h5'>O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlari</h5>
     </div>
     <div className='big_flex d'>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span> Respublikasi Prezidentining 1995-yil 20 oktabrdagi “O‘zbekistonda teatr va musiqa san’atini yanada rivojlantirishni qo‘llab-quvvatlash va rag‘batlantirish chora-tadbirlari to‘g‘risida“gi PF-1280-sonli farmoni</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>  Respublikasi Prezidentining 2008-yil 8-iyuldagi “Bolalar musiqa va san’at maktablarining moddiy-texnik bazasini mustahkamlash va ularning faoliyatini yanada yaxshilash bo‘yicha 2009-2014-yillarga mo‘ljallangan Davlat dasturi to‘g‘risida“gi PQ-910-sonli qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>   Respublikasi Prezidentining 2017-yil 15-fevraldagi “Madaniyat va sport sohasida boshqaruv tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida” PF-4956-sonli farmoni</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>   Respublikasi Prezidentining 2017-yil 15-fevraldagi “O‘zbekiston Respublikasi Madaniyat vazirligi faoliyatini tashkil etish to‘g‘risida”gi PQ-2778-sonli qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>  Respublikasi Prezidentining 2017-yil 8-avgustdagi “O‘zbekiston Davlat Konservatoriyasi faoliyatini yanada rivojlantirish va takomillashtirish chora-tadbirlari to‘g‘risida“gi PQ-3178-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>   Respublikasi Prezidentining 2017-yil 9-sentabrdagi “Oliy ta’lim muassasalarida pedagogika yo‘nalishida maxsus sirtqi bo‘limlarni tashkil etish to‘g‘risida” PQ-3183-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>   Respublikasi Prezidentining 2017-yil 17-noyabrdagi “O‘zbek milliy maqom san’atini yanada rivojlantirish chora-tadbirlari to‘g‘risida” PQ-3391-son qarori
        </h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>   Respublikasi Prezidentining 2018-yil 14-avgustdagi “Yoshlarni ma’naviy-axloqiy va jismoniy barkamol etib tarbiyalash, ularga ta’lim-tarbiya berish tizimini sifat jihatidan yangi bosqichga ko‘tarish chora-tadbirlari to‘g‘risida”gi PQ-3907-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>  Respublikasi Prezidentining 2018-yil 28-noyabrdagi “O‘zbekiston Respublikasida milliy madaniyatni yanada rivojlantirish konsepsiyasini tasdiqlash to‘g‘risida” PQ-4038-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>  O‘zbekiston Respublikasi Prezidentining 2019-yil 14-maydagi “Baxshichilik san’atini yanada rivojlantirish chora-tadbirlari to‘g‘risida” PQ-4320-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>   Respublikasi Prezidentining 2019-yil 27-maydagi “O‘zbekiston Respublikasida korrupsiyaga qarshi kurashish tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida“gi PF-5729-farmoni</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>   Respublikasi Prezidentining 2019-yil 30-sentabrdagi “Bolalar musiqa va san’at maktablari rahbar, o‘qituvchi va konsertmeystyerlari mehnatiga haq to‘lash va ularni moddiy rag‘batlantirish tizimini takomillashtirish to‘g‘risida” PQ-4468-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>  Respublikasi Prezidentining 2020-yil 21-apreldagi “Tasviriy va amaliy san’at sohasi samaradorligini yanada oshirishga doir chora-tadbirlari to‘g‘risida“gi PQ-4688-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span> Respublikasi Prezidentining 2020-yil 26-maydagi “O‘zbekiston Respublikasi Madaniyat vazirligi faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida“gi PQ-4730-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span> Respublikasi Prezidentining 2020-yil 26-maydagi “Madaniyat va san’at sohasining jamiyat hayotidagi o‘rni va ta’sirini yanada oshirish chora-tadbirlari to‘g‘risida”gi PQ-6000-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>  Respublikasi Prezidentining 2021-yil 26-martdagi “Ma’naviyat va ijodni qo‘llab-quvvatlash maqsadli jamg‘armasini tashkil etish to‘g‘risida”gi PQ-5039-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span>  Respublikasi Prezidentining 2021-yil 26-martdagi “Ma’naviy-ma’rifiy ishlar tizimini tubdan takomillashtirish chora-tadbirlari to‘g‘risida”gi PQ-5040-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span> Respublikasi Prezidentining 2021-yil 9-dekabrdagi “Madaniyat va san’atni rivojlantirishni qo‘llab-quvvatlash tizimini yanada takomillashtirish to‘g‘risida”gi PQ-36-son qarori</h4>
      </div>
      <div className="cart">
        <img className='icon far' src={FlexImgTwo} alt="" />
        <h4 className='cart_h4'><span>O‘zbekiston</span> Respublikasi Prezidentining 2022-yil 2-fevraldagi “Madaniyat va san’at sohasini yanada rivojlantirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi PQ-112-son qarori</h4>
      </div>
      
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

export default vazir