const path = require('path');
const dynamodb = require(path.join(__dirname, 'dynamodb'));

const params = {
  TableName: "test_table",
  Key:{
    "test_hash": {
      S: "xxxxx"
    },
    "test_range": {
      S: "yyyyy"
    }
  },
  AttributesToGet: [
    "test_value"
  ]
};

dynamodb.getItem(params, (err, data) => {
  if (err) {
    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Added item:", JSON.stringify(data, null, 2));
  }
});
