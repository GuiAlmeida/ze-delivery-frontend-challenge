import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

import { Container } from '../../assets/globalStyles';
import { FooterSection } from './styles';

function Footer() {
  return (
    <FooterSection>
      <Container flexDirection="column">
        <div className="footer-section-content">
          <div className="footer-section-column">
            <h3 className="footer-section-subtitle">Categorias</h3>
            <ul className="footer-section-list">
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Cervejas
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Destilados
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Vinhos
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Sem álcool
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Petiscos
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section-column">
            <h3 className="footer-section-subtitle">Institucional</h3>
            <ul className="footer-section-list">
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Quem somos
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Cidades atendidas
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Carreiras
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Imprensa
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section-column">
            <h3 className="footer-section-subtitle">Recursos</h3>
            <ul className="footer-section-list">
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Central de ajuda
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Seja um parceiro
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Termos de uso
                </a>
              </li>
              <li className="footer-section-list-item">
                <a href="/" className="footer-section-link">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-section-copyright">
          <span className="footer-section-brand">
            © 2020 Zé Delivery. Todos os direitos reservados.
          </span>
          <ul className="footer-section-social">
            <li className="footer-section-social-item">
              <a
                href="https://www.facebook.com/zedeliverydebebidas"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFacebookF className="fa fa-facebook" />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://twitter.com/zedelivery"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter className="fa fa-twitter" />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.instagram.com/zedelivery"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram className="fa fa-instagram" />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/company/zedelivery/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </FooterSection>
  );
}

export default Footer;
