import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import dataSekolahSMA from '../../data/sekolah-sma.json';
import Map from '../components/map';
import WidgetCount from '../components/widget-count';

export default function SekolahMenengahAtas() {
  return (
    <>
      <Heading
        as="h1"
        size="3xl"
        textAlign="center"
        my={16}
        fontWeight="normal"
      >
        Data Jumlah Sekolah Menengah Atas
        <Text fontWeight="bold">DKI JAKARTA</Text>
      </Heading>
      <Flex as="section" justifyContent="space-between" gap={16}>
        <WidgetCount
          title="Jumlah Sekolah Dasar Negeri"
          jumlah={
            dataSekolahSMA.filter((sekolah) => sekolah.tipe == 'negeri').length
          }
        />
        <WidgetCount
          title="Jumlah Sekolah Dasar Swasta"
          jumlah={
            dataSekolahSMA.filter((sekolah) => sekolah.tipe == 'swasta').length
          }
        />
      </Flex>
      <Map data={dataSekolahSMA} jenjang="sma" />
    </>
  );
}
