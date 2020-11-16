import PeopleModel from "../../database/models/dynamo/People";
import {SuccessResponse} from "../../helpers/responses";

class CreatePeopleController {
  constructor() {
    this.model = new PeopleModel();
  }

  async run(data) {
    SuccessResponse.data = await this.createPeople(data);
    return SuccessResponse ;
  }

  async createPeople(data) {
    const url = data.url.split("/");
    data.id = url[url.length-2];
    data.state = '1';
    return this.model.create(data);
  }
}

export default CreatePeopleController;
