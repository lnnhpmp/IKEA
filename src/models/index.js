// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bed } = initSchema(schema);

export {
  Bed
};