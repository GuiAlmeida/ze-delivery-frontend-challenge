import React, { useState, useEffect, useRef } from 'react';
import {
  FaBars,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaApple,
  FaGooglePlay
} from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import FeaturedProductCard from './Cards/Product';
import Footer from '../../components/Footer';
import AddressModal from '../../components/Modal/Address';
import { categories, featuredProducts, coverageAreas } from '../../__mocks__';

import { Container } from '../../assets/globalStyles';
import {
  Wrapper,
  Header,
  HeroSection,
  Form,
  FeaturedSection,
  AppSection,
  CoverageSection
} from './styles';

import JuiceSplash from '../../assets/images/juice_splash.png';
import BeatsZodiac from '../../assets/images/beats_zodiac.png';
import ZeIcon from '../../assets/images/icon_ze.png';
import ZeIcon2x from '../../assets/images/icon_ze@2x.png';
import ZeLogo from '../../assets/images/logo_ze.png';
import MockupApp from '../../assets/images/mockup_app.png';

function Home({ history }) {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);
  const addressModal = useRef(null);
  const [cookies] = useCookies(['userAddress']);

  function handleNavBar() {
    setNavBarIsOpen(!navBarIsOpen);
  }

  function getAddress() {
    addressModal.current.openModal();
  }

  function openAppStore() {
    window.open(
      'https://apps.apple.com/br/app/z%C3%A9-delivery-de-bebidas/id1070070438',
      '_blank'
    );
  }

  function openGooglePlay() {
    window.open(
      'https://play.google.com/store/apps/details?id=com.cerveceriamodelo.modelonow',
      '_blank'
    );
  }

  useEffect(() => {
    if (navBarIsOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [navBarIsOpen]);

  useEffect(() => {
    if (cookies.userAddress) {
      history.push('/products');
    }
  }, []);

  return (
    <Wrapper>
      <HeroSection>
        <Header navBarIsOpen={navBarIsOpen}>
          <button
            type="button"
            className="navbar-button"
            onClick={handleNavBar}
          >
            <FaBars className="fa fa-bars" aria-label="Handle menu" />
          </button>
          <nav className="header-navbar-wrapper">
            <div className="header-navbar-content">
              <img
                src={ZeLogo}
                className="header-navbar-content-image"
                alt="Zé Delivery Logo"
              />
              <ul>
                <li>
                  <a href="#">Seja um parceiro</a>
                </li>
                <li>
                  <a href="#">Ajuda</a>
                </li>
              </ul>
              <button type="button" className="button button-small">
                Entrar
              </button>
            </div>
          </nav>
        </Header>
        <div className="hero-section-background">
          <img
            src={JuiceSplash}
            className="hero-section-background-left-image"
            alt="Orange Juice Fruit Splash"
          />
          <img
            src={BeatsZodiac}
            className="hero-section-background-right-image"
            alt="Skol Beats Zodiac"
          />
        </div>
        <div className="hero-section-content">
          <img
            src={ZeIcon}
            srcSet={`${ZeIcon} 300w, ${ZeIcon2x} 768w, ${ZeIcon2x} 1280w`}
            alt="Zé Delivery Icon"
            className="icon-ze"
          />
          <h1 className="hero-section-title">
            Entregas de bebidas geladas a <span>preço de mercado</span>
          </h1>
          <h2 className="hero-section-subtitle">
            Confira nossas ofertas exclusivas feitas especialmente para você
          </h2>
          <Form>
            <div
              role="button"
              className="label"
              tabIndex={0}
              onClick={getAddress}
              onKeyPress={getAddress}
            >
              <FaMapMarkerAlt className="fa fa-map-marker-alt" />
              <input placeholder="Informe seu endereço" disabled />
            </div>
            <button
              type="button"
              onClick={getAddress}
              className="button button-large"
            >
              Continuar
            </button>
          </Form>
          <div className="hero-section-categories">
            <ScrollMenu
              data={categories.map((category, i) => (
                <button
                  key={category.id}
                  type="button"
                  className="category-card"
                  style={i + 1 === categories.length ? { marginRight: 0 } : {}}
                  onClick={getAddress}
                  data-testid={`featured-category-btn-${i}`}
                >
                  {category.label}
                </button>
              ))}
              hideArrows
              alignCenter={false}
              wheel={false}
            />
          </div>
        </div>
      </HeroSection>
      <FeaturedSection>
        <Container flexDirection="column">
          <h1 className="section-caption">Os melhores do zé</h1>
          <div className="featured-section-products">
            {featuredProducts.map((product) => (
              <FeaturedProductCard
                key={product.id}
                item={product}
                getAddress={getAddress}
              />
            ))}
          </div>
        </Container>
      </FeaturedSection>
      <CoverageSection>
        <Container flexDirection="column">
          <div className="featured-section-coverage-areas-title">
            <h1 className="section-caption">Explore por cidades</h1>
            <a href="#">Ver mais</a>
          </div>
          <div className="featured-section-coverage-areas">
            {coverageAreas.map((product) => (
              <a key={product.id} href={product.href}>
                {product.name}
              </a>
            ))}
          </div>
        </Container>
      </CoverageSection>
      <AppSection>
        <Container>
          <div className="app-section-content">
            <div className="app-section-column-left">
              <img
                src={MockupApp}
                alt="App Zé Delivery"
                className="mockup-app"
              />
            </div>
            <div className="app-section-column-right">
              <h2>Tenha ainda mais opções com o nosso aplicativo</h2>
              <ul className="app-section-lists">
                <li>
                  <FaCheckCircle className="fa fa-check-circle" />
                  <span>Mais facilidade e praticidade</span>
                </li>
                <li>
                  <FaCheckCircle className="fa fa-check-circle" />
                  <span>Vincule cartões de pagamento e crie endereços</span>
                </li>
                <li>
                  <FaCheckCircle className="fa fa-check-circle" />
                  <span>Acompanhe o andamento dos seus pedidos</span>
                </li>
              </ul>
              <div className="app-section-store-buttons">
                <button type="button" className="apple" onClick={openAppStore}>
                  <FaApple className="fa fa-apple" />
                </button>
                <div className="separator" />
                <button
                  type="button"
                  className="google-play"
                  onClick={openGooglePlay}
                >
                  <FaGooglePlay className="fa fa-google-play" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </AppSection>
      <Footer />
      <AddressModal ref={addressModal} />
    </Wrapper>
  );
}

Home.defaultProps = {
  history: null
};

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any)
};

export default Home;
