import axios from 'axios';
import {Router} from 'express';
import {middleware as query} from 'querymen';
import bodyParser from 'body-parser';
import {middleware as body} from 'bodymen';
import {createCharge} from './controller';

const router = new Router();

/**
 * @api {post} /auth Authenticate
 * @apiName Authenticate
 * @apiGroup Auth
 * @apiPermission master
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParam {String} access_token Master access_token.
 * @apiSuccess (Success 201) {String} token User `access_token` to be passed to other requests.
 * @apiSuccess (Success 201) {Object} user Current user's data.
 * @apiError 401 Master access only or invalid credentials.
 */
router.post('/create', bodyParser.json(), createCharge);

export default router;
