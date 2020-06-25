import AWS from 'aws-sdk';

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
   * @param {*} { LanguageCode = 'en', Text = '' }
   * @returns
   * @memberof ComprehendController
   */
  async getKeyPhrases({ LanguageCode = 'en', Text = '' }) {
    return this.comprehend.detectKeyPhrases({ LanguageCode, Text }).promise();
  }

  /**
   *
   *
   * @param {*} { LanguageCode = 'en', Text = '' }
   * @returns
   * @memberof ComprehendController
   */
  async getSentiment({ LanguageCode = 'en', Text = '' }) {
    return this.comprehend.detectSentiment({ LanguageCode, Text }).promise();
  }

  /**
   *
   *
   * @param {*} { LanguageCode = 'en', Text = '' }
   * @returns
   * @memberof ComprehendController
   */
  async getNamedEntities({ LanguageCode = 'en', Text = '' }) {
    return this.comprehend.detectEntities({ LanguageCode, Text }).promise();
  }

  /**
   *
   *
   * @param {*} { LanguageCode = 'en', Text = '' }
   * @returns
   * @memberof ComprehendController
   */
  async getSyntax({ LanguageCode = 'en', Text = '' }) {
    return this.comprehend.detectSyntax({ LanguageCode, Text }).promise();
  }
}

export const comprehendController = new ComprehendController(
  process.env.accessKeyId,
  process.env.secretAccessKey,
  process.env.region,
  process.env.apiVersion
);
