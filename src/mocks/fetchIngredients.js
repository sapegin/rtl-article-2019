import { rest } from 'msw';

export const fetchIngredients = [
  rest.get('https://httpbin.org/anything', (req, res, ctx) => {
    return res(
      ctx.json({
        args: { ingredients: ['bacon', 'tomato', 'mozzarella', 'pineapples'] },
      })
    );
  }),
];
