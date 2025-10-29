
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

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

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-5 text-[#1A1A1A]">
        Create Tax Bill
      </Text>

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Business Name"
        value={form.businessName}
        onChangeText={(v) => handleChange("businessName", v)}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="TIN / VAT Number"
        value={form.tin}
        onChangeText={(v) => handleChange("tin", v)}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Bill Number"
        value={form.billNumber}
        onChangeText={(v) => handleChange("billNumber", v)}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Date (YYYY-MM-DD)"
        value={form.date}
        onChangeText={(v) => handleChange("date", v)}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Total Value"
        keyboardType="numeric"
        value={form.totalValue}
        onChangeText={(v) => handleChange("totalValue", v)}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Tax Rate (%)"
        keyboardType="numeric"
        value={form.taxRate}
        onChangeText={(v) => handleChange("taxRate", v)}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Currency (e.g. NGN, USD)"
        value={form.currency}
        onChangeText={(v) => handleChange("currency", v)}
      />

      <TouchableOpacity
        className="bg-emerald-600 py-4 rounded-lg mt-3 active:opacity-80"
        onPress={handleCalculate}
        activeOpacity={1}
      >
        <Text className="text-white text-center font-semibold text-base">
          Generate Bill
        </Text>
      </TouchableOpacity>

      {result && (
        <View className="bg-gray-100 rounded-xl mt-5 p-4">
          <Text className="text-base text-gray-800 mb-1">
            Tax Value: ₦{result.taxValue.toFixed(2)}
          </Text>
          <Text className="text-base text-gray-800">
            Total with Tax: ₦{result.totalWithTax.toFixed(2)}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
