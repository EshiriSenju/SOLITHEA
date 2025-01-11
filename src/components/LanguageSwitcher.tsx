import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-green-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('de')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'de'
            ? 'bg-green-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        DE
      </button>
    </div>
  );
}