var express = require('express');
var chalk = require('chalk');
var router = express.Router();

/**
 * @swagger
 *
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - id
 *       - name
 *     properties:
 *       id:
 *         type: number
 *       name:
 *         type: string
 */

/**
 * @swagger
 *
 * /users:
 *   get:
 *     description: Get users
 *     produces:
 *     responses:
 *       200:
 *         description: users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/User'
 */
router.get('/', function (req, res, next) {
  console.info(
    chalk.blue('authorization:', JSON.stringify(req.header('authorization'))),
  );

  res.json({ id: 0, name: 'Jane' });
});

module.exports = router;
