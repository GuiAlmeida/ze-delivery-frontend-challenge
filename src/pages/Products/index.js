import React, { useEffect, useState, useRef } from 'react';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaTimes
} from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import Footer from '../../components/Footer';
import AddressModal from '../../components/Modal/Address';
import CategoryCard from '../../components/Products/Cards/Category';
import ProductCard from '../../components/Products/Cards/Product';

import { Container } from '../../assets/globalStyles';
import {
  Wrapper,
  Header,
  Label,
  CategoriesSection,
  ProductsSection
} from './styles';
import { categories, products } from '../../mocks';

import ZeIcon from '../../assets/images/icon_ze.png';
import ZeIcon2x from '../../assets/images/icon_ze@2x.png';

function Products({ history }) {
  const addressModal = useRef(null);
  const productsScrollMenu = useRef(null);
  const [cookies] = useCookies(['userAddress']);
  const [address, setAddress] = useState(null);
  const [searchInputFocus, setSearchFocus] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchNavBarIsOpen, setSearchNavBarIsOpen] = useState(false);

  function handleInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  function handleSearchNavBarIsOpen() {
    setSearchNavBarIsOpen(!searchNavBarIsOpen);
  }

  useEffect(() => {
    if (searchNavBarIsOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [searchNavBarIsOpen]);

  useEffect(() => {
    if (cookies.userAddress) {
      if (cookies.userAddress.geolocation) {
        setAddress(`Próximo de ${cookies.userAddress.district}`);
      } else {
        setAddress(
          `${cookies.userAddress.streetName}, ${cookies.userAddress.streetNumber}`
        );
      }
    } else {
      history.push('/');
    }
  }, []);

  return (
    <Wrapper>
      <Header searchNavBarIsOpen={searchNavBarIsOpen}>
        <Container flexDirection="row">
          <div className="header-content">
            <a href="/products" className="icon-link">
              <img
                src={ZeIcon}
                srcSet={`${ZeIcon} 300w, ${ZeIcon2x} 768w, ${ZeIcon2x} 1280w`}
                alt="Zé Delivery Icon"
                className="icon-ze"
              />
            </a>
            <div className="search-navbar-wrapper">
              <div className="search-navbar-content">
                <button
                  type="button"
                  className="button close-btn"
                  onClick={handleSearchNavBarIsOpen}
                >
                  <FaTimes className="fa fa-times" />
                </button>
                <Label htmlFor="address" focus={searchInputFocus}>
                  <FaSearch className="fa fa-search" />
                  <input
                    name="address"
                    placeholder="Tá com sede de quê?"
                    value={searchInputValue}
                    onChange={handleInputChange}
                    onFocus={() => setSearchFocus(true)}
                    onBlur={() => setSearchFocus(false)}
                  />
                </Label>
              </div>
            </div>
            <div className="buttons-container">
              <button
                type="button"
                className="button location-btn"
                onClick={() => addressModal.current.openModal()}
                title={address ? `${address}` : 'Informe seu endereço'}
              >
                <FaMapMarkerAlt className="fa fa-map-marker-alt" />
                <span className="subtitle">Entregar em</span>
                <div className="info">
                  <span className="title">
                    {address ? `${address}` : 'Informe seu endereço'}
                  </span>
                  <FaAngleDown className="fa fa-angle-down" />
                </div>
              </button>
              <button
                type="button"
                className="button search-btn"
                onClick={handleSearchNavBarIsOpen}
              >
                <FaSearch className="fa fa-search" />
              </button>
              <button type="button" className="button bag-btn">
                <FaShoppingBag className="fa fa-shopping-bag" />
                <span className="text">Sacola</span>
                <div className="items-count">
                  <span>0</span>
                </div>
              </button>
            </div>
          </div>
        </Container>
      </Header>
      <CategoriesSection>
        <div className="categories-section-container">
          <ScrollMenu
            data={categories.map((category, i) => (
              <CategoryCard
                key={category.id}
                item={category}
                lastItem={i + 1 === categories.length}
              />
            ))}
            hideSingleArrow
            arrowLeft={<FaAngleLeft className="fa fa-angle-left" />}
            arrowRight={<FaAngleRight className="fa fa-angle-right" />}
            innerWrapperStyle={{ padding: '30px 0' }}
            alignCenter={false}
            wheel={false}
          />
        </div>
      </CategoriesSection>
      <ProductsSection>
        <div className="categories-section-container">
          <div className="categories-section-heading">
            <h2>Cervejas</h2>
            <div className="controls">
              <a href="#">Ver mais</a>
            </div>
          </div>
          <ScrollMenu
            ref={productsScrollMenu}
            data={products.slice(0, 12).map((product, i) => (
              <ProductCard index={i} key={product.id} item={product} />
            ))}
            hideSingleArrow
            arrowLeft={<FaAngleLeft className="fa fa-angle-left" />}
            arrowRight={<FaAngleRight className="fa fa-angle-right" />}
            innerWrapperStyle={{ display: 'flex', padding: '30px 0' }}
            itemStyle={{ display: 'table-cell', outline: 'none' }}
            alignCenter={false}
            wheel={false}
          />
        </div>
      </ProductsSection>
      <Footer />
      <AddressModal ref={addressModal} />
    </Wrapper>
  );
}

Products.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Products;
