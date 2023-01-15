import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import dataSekolahSMP from '../../data/sekolah-smp.json';
import Map from '../components/map';
import WidgetCount from '../components/widget-count';

export default function SekolahMenegahPertama() {
  return (
    <>
      <Heading
        as="h1"
        size="3xl"
        textAlign="center"
        my={16}
        fontWeight="normal"
      >
        Data Jumlah Sekolah Menengah Pertama
        <Text fontWeight="bold">DKI JAKARTA</Text>
      </Heading>
      <Flex as="section" justifyContent="space-between" gap={16}>
        <WidgetCount
          title="Jumlah Sekolah Dasar Negeri"
          jumlah={
            dataSekolahSMP.filter((sekolah) => sekolah.tipe == 'negeri').length
          }
        />
        <WidgetCount
          title="Jumlah Sekolah Dasar Swasta"
          jumlah={
            dataSekolahSMP.filter((sekolah) => sekolah.tipe == 'swasta').length
          }
        />
      </Flex>
      <Map data={dataSekolahSMP} jenjang="smp" />
    </>
  );
}
