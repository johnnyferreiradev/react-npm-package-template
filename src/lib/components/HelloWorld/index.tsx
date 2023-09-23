import React from 'react';
import { useTranslation } from 'react-i18next';

const HelloWorld = () => {
  const { t } = useTranslation();
  return <p>{t('Hello world')}</p>;
};

export default HelloWorld;
