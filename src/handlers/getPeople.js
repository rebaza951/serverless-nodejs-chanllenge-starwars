import GetPeopleController from "../controllers/people/getPeopleController";
// import createError from 'http-errors';
// import validator from '@middy/validator';
// import commonMiddleware from '../lib/commonMiddleware';
// import createAuctionSchema from '../lib/schemas/createAuctionSchema';

const peopleController = new GetPeopleController();

async function getPeople(event, context) {

  const response = await peopleController.run();

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
}

export const handler = getPeople;
