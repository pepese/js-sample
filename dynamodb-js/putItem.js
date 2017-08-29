const path = require('path');
const dynamodb = require(path.join(__dirname, 'dynamodb'));

const params = {
  TableName: "test_table",
  Item:{
    "test_hash": {
      S: "xxxxx3"
    },
    "test_range": {
      S: "yyyyy3"
    },
    "test_value": {
      S: "zzzzz3"
    }
  }
};

dynamodb.putItem(params, (err, data) => {
  if (err) {
    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Added item:", JSON.stringify(data, null, 2));
  }
});
