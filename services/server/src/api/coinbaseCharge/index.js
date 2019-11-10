import {Router} from 'express';
import bodyParser from 'body-parser';
import {createCharge} from './controller';

const router = new Router();

/**
 * @api {post} /create Create
 * @apiName Create
 * @apiGroup Checkout
 * @apiPermission master
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParam {String} access_token Master access_token.
 * @apiSuccess (Success 201) {Object} Checkout Objectreturn
 * @apiError 401 Can't authenticate
 */
router.post('/create', bodyParser, createCharge());

export default router;
