import Ajv from 'ajv';
import GetPeopleController from "../controllers/people/createPeopleController";
import PeopleSchema from '../lib/schemas/PeopleSchema.json';
import { ErrorResponse } from '../helpers/responses';

const peopleController = new GetPeopleController();

async function getPeople(event, context) {
  const data = JSON.parse(event.body);
  const ajv = new Ajv({ allErrors: true });
  const valid = ajv.validate(PeopleSchema, data);

  if (!valid) {
    return {
      statusCode: 200,
      body: JSON.stringify(ErrorResponse(ajv.errors)),
    };
  }

  const response = await peopleController.run(data);

  return {
    statusCode: 201,
    body: JSON.stringify(response),
  };
}

export const handler = getPeople;
