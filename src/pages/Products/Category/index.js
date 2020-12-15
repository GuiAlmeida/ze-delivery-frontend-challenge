import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { useQuery } from '@apollo/client';
import { POC_PRODUCTS } from '../../../queries';

import ProductCard from '../Cards/Product';

import { Container } from './styles';

function Categories({ pocId, category, setLoading }) {
  const { loading, data } = useQuery(POC_PRODUCTS, {
    skip: !pocId || !category,
    variables: { id: pocId, search: '', categoryId: category.id },
    fetchPolicy: 'network-only'
  });

  if (loading) {
    return null;
  }

  const { products } = data.poc;

  if (!loading && !products.length) {
    return null;
  }

  setTimeout(() => setLoading(false), 0);

  return (
    <Container>
      <div className="categories-section-heading">
        <h2>{category.title}</h2>
        <div className="controls">
          <a href="#">Ver mais</a>
        </div>
      </div>
      <ScrollMenu
        data={products.slice(0, 12).map((product, i, a) => (
          <ProductCard
            lastItem={i + 1 === a.length}
            index={i}
            key={product.id}
            item={product}
          />
        ))}
        hideSingleArrow
        arrowLeft={
          products.length > 4 && <FaAngleLeft className="fa fa-angle-left" />
        }
        arrowRight={
          products.length > 4 && <FaAngleRight className="fa fa-angle-right" />
        }
        innerWrapperStyle={{ display: 'flex', padding: '30px 0' }}
        itemStyle={{ display: 'table-cell', outline: 'none' }}
        alignCenter={false}
        wheel={false}
        scrollBy={4}
      />
    </Container>
  );
}

Categories.defaultProps = {
  pocId: null,
  category: null
};

Categories.propTypes = {
  pocId: PropTypes.string,
  category: PropTypes.objectOf(PropTypes.string),
  setLoading: PropTypes.func.isRequired
};

export default Categories;
