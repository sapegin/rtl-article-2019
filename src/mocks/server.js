import { setupServer } from 'msw/node';
import { fetchIngredients } from './fetchIngredients';

const server = setupServer(...fetchIngredients);

export { server };
export { rest } from 'msw';
