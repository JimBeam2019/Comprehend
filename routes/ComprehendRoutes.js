import express from 'express';

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

    // localhost:4200/comprehend
    this.router.get('/comprehend', async (req, res) => {
      const text =
        "The group I went with had very high hope for this place. The burger I had was good and the beer I had was even better but the worst thing I saw was the customer service. From the moment we walked in we were all looked at like we didn't belong there. The waiters were ignoring us the entire time. I sat and watched the blonde hair blue eyed waiters prioritize the blond hair blue eyed customers. As I scanned the room I knew exactly what to expect from this small town white washed restaurant. Only come here if you know a white family and they escort you in. The waiter did not ask us our temperature preferences for out burgers. Once we realized that she didn't ask us it was near impossible to get her attention to tell her. 3/7 of us actually got the temperature we wanted. I did not get a medium rare burger I got a medium well burger. This show the inconsistency with the cooking of the meat. It took 15 minutes to even get a beer. Once I asked about when my beer I was told that the keg needed to be replaced. I'm sure that she forgot to give me my beer and just told me that it was empty to make up for her mistake. I was dinning with a group of friends and we were ignored on multiple occasions by the staff. They did not even try to give us great customer service because of the size of our group. They knew that gratuity was already going to be applied to our bill. The service we received was sub par. I will not be returning or recommend this place due to its racial preferences. If you are African American, Hispanic, Asian, or any person of color, just be ready to be ignored and stared at like you are the eighth wonder of the world.";
      const params = { Text: text };

      const resTextAnalysis = await Promise.all([
        comprehendController.getKeyPhrases(params),
        comprehendController.getSentiment(params),
        comprehendController.getNamedEntities(params),
        comprehendController.getSyntax(params)
      ]);

      res.status(200).send({
        code: 200,
        message: {
          keyPhrases: resTextAnalysis[0],
          sentiment: resTextAnalysis[1],
          namedEntities: resTextAnalysis[2],
          syntax: resTextAnalysis[3]
        }
      });
    });
  }
}

export default ComprehendRoutes;
