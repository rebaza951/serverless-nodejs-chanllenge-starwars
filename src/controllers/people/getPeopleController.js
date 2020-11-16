import PeopleModel from "../../database/models/dynamo/People";
import request from "request";
import {SuccessResponse} from "../../helpers/responses";

class GetPeopleController {
  constructor() {
    this.model = new PeopleModel();
  }

  async run() {
    const api = await this.getApiData();
    const stored = await this.model.getActivePeople();
    SuccessResponse.data = {stored, api};
    return SuccessResponse;
  }

  async getApiData() {
    const url = 'https://swapi.py4e.com/api/people';
    const api = await new Promise(async (resolve, rejected) => {
      return request.get(url, function (error, response, body) {
        if (error) rejected(error);
        resolve(body);
      });
    });
    return JSON.parse(api).results;
  }
}

export default GetPeopleController;
