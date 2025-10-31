
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView , Platform } from "react-native";

import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export default function TaxBill() {


  
  const [form, setForm] = useState({
    businessName: "",
    tin: "",
    billNumber: "",
    date: "",
    totalValue: "",
    taxRate: "7.5",
    currency: "NGN",
  });

  const [result, setResult] = useState(null);
  const [date, setDate] = useState(new Date);
  const [showDate, setShow] = useState(false);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleCalculate = () => {
    const totalValue = parseFloat(form.totalValue);
    const taxRate = parseFloat(form.taxRate);
    if (isNaN(totalValue) || isNaN(taxRate)) return;

    const taxValue = (totalValue * taxRate) / 100;
    const totalWithTax = totalValue + taxValue;

    setResult({
      taxValue,
      totalWithTax,
    });
  };

  const clockChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
  if (event.type === 'set' && selectedDate) {
    setDate(selectedDate);
  }
  setShow(false); 
};

  return (
    <ScrollView className="flex-1 bg-white p-5" scrollEnabled={true}>
      <Text className="text-2xl font-bold mb-5 text-[#1A1A1A]">
        Create Tax Bill
      </Text>

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Business Name"
        value={form.businessName}
        onChangeText={(v) => handleChange("businessName", v)}
        cursorColor={"black"}
        placeholderTextColor={'black'}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="TIN / VAT Number"
        value={form.tin}
        onChangeText={(v) => handleChange("tin", v)}
        cursorColor={"black"}
        placeholderTextColor={'black'}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Bill Number"
        value={form.billNumber}
        onChangeText={(v) => handleChange("billNumber", v)}
        cursorColor={"black"}
        placeholderTextColor={'black'}
      />


      <TouchableOpacity
        onPress={() => {setShow(true)}}
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        activeOpacity={1}
      >
        <Text style={{ color: 'black' }}>
          {`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`|| 'Date (YYYY-MM-DD)'}
        </Text>
      </TouchableOpacity>


      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Total Value"
        keyboardType="numeric"
        value={form.totalValue}
        onChangeText={(v) => handleChange("totalValue", v)}
        cursorColor={"black"}
        placeholderTextColor={'black'}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Tax Rate (%)"
        keyboardType="numeric"
        value={form.taxRate}
        onChangeText={(v) => handleChange("taxRate", v)}
        cursorColor={"black"}
        placeholderTextColor={'black'}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Currency (e.g. NGN, USD)"
        value={form.currency}
        onChangeText={(v) => handleChange("currency", v)}
        cursorColor={"black"}
        placeholderTextColor={'black'}
      />

      <TouchableOpacity
        className="bg-emerald-600 py-4 rounded-lg mt-1 active:opacity-80"
        onPress={() =>{handleCalculate() , console.log(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`)}}
        activeOpacity={1}
      >
        <Text className="text-white text-center font-semibold text-base">
          Generate Bill
        </Text>
      </TouchableOpacity>

      {result && (
        <View className="bg-gray-100 rounded-xl mt-2 p-4" style={{borderWidth:1, borderColor:'lightgreen'}}>
          <Text className="text-base text-gray-800 mb-1">
            Tax Value: ₦{result.taxValue.toFixed(2)}
          </Text>
          <Text className="text-base text-gray-800">
            Total with Tax: ₦{result.totalWithTax.toFixed(2)}
          </Text>
        </View>
      )}

      {
        showDate && 
        <RNDateTimePicker 
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            value={date}
            onChange={clockChange}
          />
      }
    </ScrollView>
  );
}
