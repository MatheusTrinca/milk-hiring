import { CheckListType } from '../database/schemas/CheckListSchema';
import { ICheckItem } from '../models/CheckItem';

// This function format data from Realm to setCheckingListItems on Context
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

// This function format Data to be stored in RealmDB
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

// This funcition format data to be sent to API
export const formatArrayToSync = (dataArr: ICheckItem[]) => {
  const checklists = dataArr.map(item => ({
    id: String(item._id) || String(Date.now()),
    type: item.type,
    amount_of_milk_produced: +item.amount_of_milk_produced,
    number_of_cows_head: +item.number_of_cows_head,
    had_supervision: item.had_supervision,
    farmer: {
      name: item.farmer.name,
      city: item.farmer.city,
    },
    from: {
      name: item.from.name,
    },
    to: {
      name: item.to.name,
    },
    location: {
      latitude: item.location.latitude,
      longitude: item.location.longitude,
    },
    created_at: item.created_at,
    updated_at: item.updated_at,
  }));

  return { checklists };
};

// This function format data to be updated
export const formatToEdit = (data: CheckListType) => {
  return {
    type: data.type,
    amount_of_milk_produced: +data.amount_of_milk_produced,
    number_of_cows_head: +data.number_of_cows_head,
    had_supervision: data.had_supervision,
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
    location: {
      latitude: data.latitude,
      longitude: data.longitude,
    },
    created_at: data.created_at,
    updated_at: data.updated_at,
  };
};
