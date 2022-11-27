import React from 'react';
//import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import notfoundImg from '../assets/img/notfound.svg';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div>not found</div>
  );
};

export default NotFound;
