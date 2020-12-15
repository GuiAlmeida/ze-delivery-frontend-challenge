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
import { withCookies, Cookies } from 'react-cookie';
import PropTypes, { instanceOf } from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { useQuery } from '@apollo/client';
import { POC_SEARCH_METHOD, ALL_CATEGORIES_SEARCH } from '../../queries';

import Footer from '../../components/Footer';
import AddressModal from '../../components/Modal/Address';
import ProductsCategory from './Category';
import CategoryCard from './Cards/Category';
import Shimmer from './Shimmer';
import Empty from './Empty';

import { Container } from '../../assets/globalStyles';
import {
  Wrapper,
  Header,
  Label,
  CategoriesSection,
  ProductsSection
} from './styles';
import { categories } from '../../__mocks__';

import ZeIcon from '../../assets/images/icon_ze.png';
import ZeIcon2x from '../../assets/images/icon_ze@2x.png';

function Products({ cookies, history, now }) {
  const addressModal = useRef(null);
  const [address, setAddress] = useState(null);
  const [searchInputFocus, setSearchFocus] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchNavBarIsOpen, setSearchNavBarIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const { loading: loadingPoc, data: pocData } = useQuery(POC_SEARCH_METHOD, {
    variables: {
      algorithm: 'NEAREST',
      lat: cookies.get('userAddress')?.lat,
      long: cookies.get('userAddress')?.lng,
      now
    },
    fetchPolicy: 'network-only'
  });
  const pocId = pocData?.pocSearch[0]?.id;
  const { data: categoriesData } = useQuery(ALL_CATEGORIES_SEARCH, {
    skip: !pocId,
    variables: { id: pocId, search: '', categoryId: null },
    fetchPolicy: 'network-only'
  });

  function handleInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  function handleSearchNavBarIsOpen() {
    setSearchNavBarIsOpen(!searchNavBarIsOpen);
  }

  useEffect(() => {
    if (!loadingPoc && !pocId) {
      setLoading(false);
    }
  }, [loadingPoc]);

  useEffect(() => {
    if (searchNavBarIsOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [searchNavBarIsOpen]);

  useEffect(() => {
    const userAddress = cookies.get('userAddress');

    if (userAddress) {
      if (userAddress.geolocation) {
        setAddress(`Próximo de ${userAddress.district}`);
      } else {
        setAddress(`${userAddress.streetName}, ${userAddress.streetNumber}`);
      }
    } else if (history) history.push('/');
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
                data-testid="location-btn"
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
      {!loading && categoriesData && (
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
      )}
      <ProductsSection>
        {categoriesData?.allCategory.map((category) => (
          <ProductsCategory
            key={category.id}
            pocId={pocId}
            category={category}
            setLoading={setLoading}
          />
        ))}
        {loading && <Shimmer />}
        {!loading && !categoriesData && <Empty />}
      </ProductsSection>
      <Footer />
      <AddressModal ref={addressModal} />
    </Wrapper>
  );
}

Products.defaultProps = {
  now: new Date().toISOString(),
  history: null
};

Products.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
  history: PropTypes.objectOf(PropTypes.any),
  now: PropTypes.string
};

export default withCookies(Products);
