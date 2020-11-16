import Model from './Model';

class People extends Model {
  constructor() {
    super();
    this.table = process.env.PEOPLE_TABLE_NAME;
  }
  async getActivePeople() {
    const params = {
      TableName: this.table,
      FilterExpression: '#state = :state',
      ExpressionAttributeNames: {
        '#state': 'state',
      },
      ExpressionAttributeValues: {
        ':state': "1",
      },
    };
    return this.dynamoDb.scan(params).promise();
  }
}

export default People;
