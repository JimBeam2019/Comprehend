import express from 'express';

// import logger from '../config/logger';
import { comprehendController } from '../controllers/ComprehendController';

/**
 *
 *
 * @class ComprehendRoutes
 */
class ComprehendRoutes {
  /**
   * Creates an instance of ComprehendRoutes.
   * @memberof ComprehendRoutes
   */
  constructor() {
    this.router = express.Router();
    this.config();
  }

  /**
   *
   *
   * @memberof ComprehendRoutes
   */
  config() {
    // localhost:4200/
    this.router.get('/', (req, res) => {
      res.status(200).send({ code: 200, message: 'Well done!' });
    });

    // localhost:4200/detect-phrase
    this.router.get('/detect-phrase', async (req, res) => {
      const text = 'It is raining today in Seattle.';

      const params = { LanguageCode: 'en', Text: text };

      const comprehend = comprehendController.getComprehend();

      comprehend.detectKeyPhrases(params, (err, data) => {
        if (err) {
          res
            .status(200)
            .send({ code: 200, message: { err, stack: err.stack } });
        } else {
          res.status(200).send({ code: 200, message: { data } });
        }
      });
    });
  }
}

export default ComprehendRoutes;
