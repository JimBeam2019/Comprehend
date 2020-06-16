import AWS from 'aws-sdk';

import logger from '../config/logger';
import '../config/config';

/**
 *
 *
 * @export
 * @class ComprehendController
 */
export class ComprehendController {
  /**
   * Creates an instance of ComprehendController.
   * @param {string} accessKeyId
   * @param {string} secretAccessKey
   * @param {string} region
   * @param {string} apiVersion
   * @memberof ComprehendController
   */
  constructor(accessKeyId, secretAccessKey, region, apiVersion) {
    this.comprehend = new AWS.Comprehend({
      accessKeyId,
      secretAccessKey,
      region,
      apiVersion
    });
  }

  /**
   *
   *
   * @returns
   * @memberof ComprehendController
   */
  getComprehend() {
    return this.comprehend;
  }
}

export const comprehendController = new ComprehendController(
  process.env.accessKeyId,
  process.env.secretAccessKey,
  process.env.region,
  process.env.apiVersion
);
