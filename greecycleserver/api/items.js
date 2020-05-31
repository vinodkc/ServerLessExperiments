'use strict';

module.exports.additem = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'additem ',
      },
      null,
      2
    ),
  };
};

module.exports.getitem = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'getitem ',
      },
      null,
      2
    ),
  };
};

module.exports.updateitem = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'updateitem ',
      },
      null,
      2
    ),
  };
};

module.exports.deleteitem = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'deleteitem ',
      },
      null,
      2
    ),
  };
};
