const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB({region: 'ap-northeast-1'});

module.exports = dynamodb;
