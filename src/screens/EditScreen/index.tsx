import { Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

export const EditScreen: React.FC = () => {
  const { params } = useRoute();

  return (
    <View>
      <Text>Edit Screen</Text>
    </View>
  );
};
