const express = require('express');

const exampleRoute = () => (request, response) => {
	response.send({'ok': true})
}

module.exports = express.Router()
	.get('/api/test', exampleRoute());
