import Realm from 'realm';
import { CheckListSchema } from './schemas/CheckListSchema';

export const getRealm = async () =>
  await Realm.open({
    path: 'milk-hiring',
    schema: [CheckListSchema],
    deleteRealmIfMigrationNeeded: true,
  });
