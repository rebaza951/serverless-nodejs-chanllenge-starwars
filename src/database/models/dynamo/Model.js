import AWS from 'aws-sdk';

class Model {
  constructor() {
    this.dynamoDb = new AWS.DynamoDB.DocumentClient();
  }
  async create(data) {
    const params = {
      TableName: this.table,
      Item: data,
    };
    await this.dynamoDb.put(params).promise();
    return params.Item;
  }
}

export default Model;
