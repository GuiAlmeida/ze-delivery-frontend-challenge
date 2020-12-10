import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaApple,
  FaGooglePlay
} from 'react-icons/fa';

import ScrollBox from '../../components/home/ScrollBox';
import FeaturedProduct from '../../components/home/featuredProduct';
import CoverageArea from '../../components/home/coverageArea';
import Footer from '../../components/footer';
import { categories, featuredProducts, coverageAreas } from '../../mocks';

import { Container } from '../../assets/globalStyles';
import {
  Wrapper,
  Header,
  HeroSection,
  Form,
  Label,
  Input,
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

function Home() {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);

  function handleNavBar() {
    setNavBarIsOpen(!navBarIsOpen);
  }

  function getAddress() {
    console.log('search');
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

  return (
    <Wrapper>
      <HeroSection>
        <Header navBarIsOpen={navBarIsOpen}>
          <button
            type="button"
            className="navbar-button"
            onClick={handleNavBar}
          >
            <FaBars className="fa fa-bars" />
          </button>
          <div className="header-navbar-wrapper">
            <div className="header-navbar-content">
              <img
                src={ZeLogo}
                className="header-navbar-content-image"
                alt="Zé Delivery Logo"
              />
              <ul>
                <li>
                  <a href="/">Seja um parceiro</a>
                </li>
                <li>
                  <a href="/">Ajuda</a>
                </li>
              </ul>
              <button type="button" className="button button-small">
                Entrar
              </button>
            </div>
          </div>
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
            <Label onClick={getAddress}>
              <FaMapMarkerAlt className="fa fa-map-marker-alt" />
              <Input
                placeholder="Informe seu endereço"
                disabled
                value="Informe seu endereço"
              />
            </Label>
            <button
              type="button"
              onClick={getAddress}
              className="button button-large"
            >
              Continuar
            </button>
          </Form>
          <ScrollBox>
            {categories.map((category, i) => (
              <button
                key={category.id}
                type="button"
                className="hero-section-category-card"
                style={i + 1 === categories.length ? { marginRight: 0 } : {}}
                onClick={getAddress}
              >
                {category.name}
              </button>
            ))}
          </ScrollBox>
        </div>
      </HeroSection>
      <FeaturedSection>
        <Container flexDirection="column">
          <h1 className="section-caption">Os melhores do zé</h1>
          <div className="featured-section-products">
            {featuredProducts.map((product) => (
              <FeaturedProduct
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
            <a href="/">Ver mais</a>
          </div>
          <div className="featured-section-coverage-areas">
            {coverageAreas.map((product) => (
              <CoverageArea key={product.id} item={product} />
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
    </Wrapper>
  );
}

export default Home;
