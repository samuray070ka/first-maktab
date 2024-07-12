import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/music-note-clip-art-transparent-background-21.png'
import Telegram from '../../assets/icons8-telegram-app-48.png'
function pedagog() {
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
                        Toshkent shahar Madaniyat boshqarmasi tasarrufidagi Mirzo Ulug’bek tumani 2-sonli bolalar musiqa va san’at maktabi
                    </h1>
                    <p>
                    Toshkent shahar, Mirzo Ulug’bek tumani, Sayram MFY, Sayram ko’chasi 19-uy
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
        <h2 className='los'>Faoliyat ko‘rsatayotgan pedagog xodimlar ro‘yxati</h2>
        <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>NN</th>
                    <th>Pedagogning F. I. Sh.</th>
                    <th>Ma’lumoti</th>
                    <th>Qaysi o‘quv yurtini tamomlagan</th>
                    <th>Ma’lumoti bo‘yicha mutaxassisligi</th>
                    <th>Asosiy/ o‘rindosh</th>
                    <th>Malakasini oshirgan yil</th>
                    <th>Malakasini oshirgan joyi</th>
                    <th>Maktabda qachondan ishlaydi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Bekova Yulduz Samatovna</td>
                    <td>oliy</td>
                    <td>O'zbekiston davlat konservatoriyasi</td>
                    <td>akademik xor dirijori</td>
                    <td>asosiy</td>
                    <td></td>
                    <td></td>
                    <td>10.02.2023</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mahmudboyeva Sarvinoz Dilshod qizi</td>
                    <td>o'rta-maxsus, tugallanmagan oliy</td>
                    <td>O'ZDK xuzuridagi iqtidorli bolalar akademik litseyi, O'zbekiston Davlat Konservatoriyasi</td>
                    <td>musiqashunoslik</td>
                    <td>o'rindosh</td>
                    <td></td>
                    <td></td>
                    <td>04.09.2023</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Maxsudova Sarvinoz Komil qizi</td>
                    <td>o'rta-maxsus, tugallanmagan oliy</td>
                    <td>Bekobod san’at kolleji, Nizomiy nomidagi Toshkent davlat pedagogika universiteti</td>
                    <td>fortepiano ijrochiligi, Musiqiy ta’lim</td>
                    <td>asosiy</td>
                    <td></td>
                    <td></td>
                    <td>05.09.2022</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Oripova Gulzoda Olimjonovna</td>
                    <td>o'rta-maxsus, tugallanmagan oliy</td>
                    <td>Yunus Rajabiy nomli Toshkent pedagogika kolleji, Chirchiq davlat pedagogika instituti</td>
                    <td>maktabgacha ta’lim, san’atshunos</td>
                    <td>asosiy</td>
                    <td></td>
                    <td></td>
                    <td>06.09.2021</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Sultonova Mashhura Xasan qizi</td>
                    <td>tugallanmagan oliy</td>
                    <td>Toshkent davlat pedagogika universiteti</td>
                    <td>musiqiy ta’lim</td>
                    <td>o‘rindosh</td>
                    <td></td>
                    <td></td>
                    <td>01.02.2023</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Xolxo'jayeva Mohira Qobil qizi</td>
                    <td>o'rta-maxsus, tugallanmagan oliy</td>
                    <td>Toshkent ixtisoslashtirilgan madaniyat va san'at maktabi, Nizomiy nomidagi Toshkent davlat pedagogika universiteti</td>
                    <td></td>
                    <td>asosiy</td>
                    <td></td>
                    <td></td>
                    <td>06.09.2021</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Isaboyeva Bilnura Yunusjon qizi</td>
                    <td>o‘rta-maxsus, tugallanmagan oliy</td>
                    <td>Toshkent ixtisoslashtirilgan madaniyat va san’at maktabi, Nizomiy nomidagi Toshkent davlat pedagogika universiteti</td>
                    <td>xalq cholg‘ulari ijrochiligi, musiqiy ta’lim</td>
                    <td>asosiy</td>
                    <td></td>
                    <td></td>
                    <td>06.09.2021</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>O‘ktamboyeva Zebiniso Dilshod qizi</td>
                    <td>o‘rta-maxsus, tugallanmagan oliy</td>
                    <td>Bekobod san’at kolleji, Chirchiq davlat pedagogika instituti</td>
                    <td>musiqa o‘qituvchisi, san’atshunos</td>
                    <td>o‘rindosh</td>
                    <td></td>
                    <td></td>
                    <td>05.09.2022</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Olimjonov Ilyosjon Ibroxim o‘g‘li</td>
                    <td>oliy</td>
                    <td>Toshkent viloyati Chirchiq pedagogika instituti</td>
                    <td>an’anaviy cholg‘ular ijrochisi</td>
                    <td>asosiy</td>
                    <td></td>
                    <td></td>
                    <td>04.01.2023</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>O‘tbosarov Aziz Ixtiyor o‘g‘li</td>
                    <td>o‘rta-maxsus, tugallanmagan oliy</td>
                    <td>Toshkent viloyati pedagogika kolleji, Chirchiq davlat pedagogika instituti</td>
                    <td>musiqa o‘qituvchisi, san’atshunos</td>
                    <td>asosiy</td>
                    <td></td>
                    <td></td>
                    <td>05.09.2022</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Risqiboyeva Gulshoda Baxtiyor qizi</td>
                    <td>o‘rta-maxsus, tugallanmagan oliy</td>
                    <td>Toshkent madaniyat kolleji, Nizomiy nomidagi Toshkent davlat pedagogika universiteti</td>
                    <td>Xalq cholg‘ulari ansambli rahbari, musiqiy ta’lim</td>
                    <td>asosiy</td>
                    <td></td>
                    <td></td>
                    <td>05.09.2022</td>
                </tr>
            </tbody>
        </table>
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

export default pedagog