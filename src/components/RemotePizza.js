import React from 'react';
import PropTypes from 'prop-types';
import { fetchIngredients as defaultFetchIngredients } from '../services';

export default function RemotePizza({ fetchIngredients }) {
  const [ingredients, setIngredients] = React.useState([]);

  const handleCook = () => {
    fetchIngredients().then((response) => {
      setIngredients(response.args.ingredients);
    });
  };

  return (
    <>
      <h3>Pizza</h3>
      <button onClick={handleCook}>Cook</button>
      {ingredients.length > 0 && (
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      )}
    </>
  );
}

RemotePizza.propTypes = {
  fetchIngredients: PropTypes.func,
};

RemotePizza.defaultProps = {
  fetchIngredients: defaultFetchIngredients,
};
