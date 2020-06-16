import express from 'express';

import ComprehendRoutes from '../routes/ComprehendRoutes';
/**
 *
 *
 * @class App
 */
class App {
  /**
   * Creates an instance of App.
   * @memberof App
   */
  constructor() {
    this.app = express();
    this.config();
  }

  /**
   *
   *
   * @memberof App
   */
  config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    const comprehendRouter = new ComprehendRoutes().router;

    this.app.use('/', comprehendRouter);
  }
}

export default new App().app;
