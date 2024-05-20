// TicketPDF.js

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const TicketPDF = ({ theater, date, time, seats, totalPrice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Movie Ticket</Text>
        <Text style={styles.text}>Theater: {theater}</Text>
        <Text style={styles.text}>Date: {date}</Text>
        <Text style={styles.text}>Time: {time}</Text>
        <Text style={styles.text}>Selected Seats: {seats.join(', ')}</Text>
        <Text style={styles.text}>Total Price: ₹ {totalPrice}</Text>
      </View>
    </Page>
  </Document>
);

export default TicketPDF;
