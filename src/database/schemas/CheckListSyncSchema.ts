export type CheckListSyncType = {
  _id: number;
  type: string;
  amount_of_milk_produced: string;
  farmerName: string;
  farmerCity: string;
  from: string;
  to: string;
  number_of_cows_head: string;
  had_supervision: boolean;
  latitude: number;
  longitude: number;
  created_at: Date;
  updated_at: Date;
  __v: number;
};

export const CheckListSyncSchema = {
  name: 'CheckListSync',

  properties: {
    _id: 'int',
    type: 'string',
    amount_of_milk_produced: 'string',
    farmerName: 'string',
    farmerCity: 'string',
    from: 'string',
    to: 'string',
    number_of_cows_head: 'string',
    had_supervision: 'bool',
    latitude: 'float',
    longitude: 'float',
    created_at: 'date',
    updated_at: 'date',
    __v: 'int',
  },
};
