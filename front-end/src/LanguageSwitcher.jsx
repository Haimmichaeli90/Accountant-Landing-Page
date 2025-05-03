import { useTranslation } from 'react-i18next';
import './assets/LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('he')}>עברית</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ar')}>ع</button>
      <button onClick={() => changeLanguage('ru')}>РУ</button>
    </div>
  );
}

export default LanguageSwitcher;
