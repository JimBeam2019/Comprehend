import express from 'express';

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
    this.router.get('/', (req, res) => {
      res.status(200).send({ code: 200, message: 'Well done!' });
    });
  }
}

export default ComprehendRoutes;
