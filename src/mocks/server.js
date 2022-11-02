import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetchIngredients } from './mocks/fetchIngredients';

const server = setupServer(...fetchIngredients);

export { server, rest };
