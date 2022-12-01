import { CheckListType } from '../database/schemas/CheckListSchema';
import { ICheckItem } from '../models/CheckItem';

export const formatFromRealm = (data: CheckListType): ICheckItem => {
  return {
    _id: data._id,
    type: data.type,
    amount_of_milk_produced: data.amount_of_milk_produced,
    farmer: {
      name: data.farmerName,
      city: data.farmerCity,
    },
    from: {
      name: data.from,
    },
    to: {
      name: data.to,
    },
    number_of_cows_head: data.number_of_cows_head,
    had_supervision: data.had_supervision,
    location: {
      latitude: data.latitude,
      longitude: data.longitude,
    },
    created_at: data.created_at,
    updated_at: data.updated_at,
    __v: data.__v,
  };
};

export const formatDataToRealm = (
  data: ICheckItem
): Omit<CheckListType, '_id'> => {
  return {
    type: data.type,
    amount_of_milk_produced: data.amount_of_milk_produced,
    farmerName: data.farmer.name,
    farmerCity: data.farmer.city,
    from: data.from.name,
    to: data.to.name,
    number_of_cows_head: data.number_of_cows_head,
    had_supervision: data.had_supervision,
    latitude: data.location.latitude,
    longitude: data.location.longitude,
    created_at: data.created_at,
    updated_at: data.updated_at,
    __v: data.__v,
  };
};
