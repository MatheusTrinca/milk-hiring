import Realm from 'realm';
import { CheckListSchema } from './schemas/CheckListSchema';
import { CheckListSyncSchema } from './schemas/CheckListSyncSchema';

export const getRealm = async () =>
  await Realm.open({
    path: 'milk-hiring',
    schema: [CheckListSchema, CheckListSyncSchema],
    deleteRealmIfMigrationNeeded: true,
  });
