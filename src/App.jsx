import React, { useEffect, useState } from 'react';
import './App.css';
import loc from '../src/assets/loc.svg'
import iphone from './assets/iPhone 13 Pro.png'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang]= useState('eng');
  const [isDarkMode, setIsDarkMode] = useState(false)

  function changeLang(e) {
    setLang(e.target.value)
  }
  useEffect(() =>{
    i18n.changeLanguage(lang)
  },[lang]);

  const darkMod = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
 
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className={`container max-w-[1440px] mx-auto ${isDarkMode ? 'dark-container' : 'light-container'}`}>
          <header className='py-[31.5px] px-[74px] flex justify-between shadow-medium items-center'>
            <h1 className='text-3xl font-serif font-extrabold'>
              {t('logo')}
            </h1>
            <ul className='flex gap-[28px] '>
              <li className='font-medium'> {t('Assets')}</li>
              <li>{t('Creators')}</li>
              <li>{t('Creators')}</li>
              <li>{t('Go Pro')}</li>
            </ul>
            <input className='py-2 px-2 rounded-md text-white bg-green-200' type="text" placeholder='search' />
            <div className='flex gap-5 items-center '>
              <h1 className='font-black text-xl'>
              {t('Log in')}
              </h1>
              <select onChange={changeLang} value={lang} className='w-20 text-xl border rounded-md  py-1 px-4 bg-green-400 text-white border-none'>
                <option value="uz">uz</option>
                <option value="rus">rus</option>
                <option defaultValue value="eng">eng</option>
              </select>
              <button className='px-3 py-2 bg-blue-600 rounded-md text-xl font-bold' onClick={darkMod}>
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
            </div>
          </header>

          <div className='continer-2 px-[130px] py-[100px] flex gap-[127px] mt-7 ml-7'>
            <div className='max-w-[555px]'>
              <h3 className='text-gray-600'>{t('hello')}</h3>
              <h1 className='text-5xl font-black text-blue-950 mt-5 mb-11'>{t('h2')}</h1>
              <div className='flex gap-8 items-center mb-[74px] '>
                <img src={loc} alt="" />
                <p className='max-w-[460px] text-blue-950 text-xl'>
                {t('h3')}
                </p>
              </div>
              <h2 className='text-4xl font-extrabold mb-3'>
              {t('h4')}
              </h2>
              <p className='text-xl text-blue-800 font-medium mb-8'>{t('h5')}</p>
              <div className='max-w-[527px] bg-white flex flex-row justify-between rounded-full px-3 py-2 '>
                <input className='ml-6' type="text" placeholder='Your email address' />
                <button className='py-6 px-9 bg-blue-700 text-white rounded-full'>{t('h6')}</button>
              </div>
            </div>

            <img src={iphone} alt="" />
          </div>
      </div>
    </div>
  )
}

export default App