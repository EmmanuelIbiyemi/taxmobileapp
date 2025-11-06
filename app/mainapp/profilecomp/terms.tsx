import React, { useState } from 'react';
import { Modal, View, Text, Pressable, ScrollView } from 'react-native';


interface showTerms{
  visiblity:boolean
  setvisiblity: any
}

const TermsModal = ({visiblity , setvisiblity}: showTerms) => {
  return (
    <Modal visible={visiblity} animationType="slide" transparent={true}>
      <View className="flex-1 bg-black/50 justify-center px-5">
        <View className="bg-white rounded-xl p-6 max-h-[80%]">
          <ScrollView>
            <Text className="text-xl font-bold mb-4 text-gray-900">Terms & Conditions</Text>
            <Text className="text-sm text-gray-700 mb-6">
              By using this tax application, you agree to the following terms:
              {"\n\n"}1. You are responsible for the accuracy of your personal and financial data.
              {"\n\n"}2. We do not guarantee tax refunds or outcomes — all calculations are based on provided data.
              {"\n\n"}3. Your data may be stored securely for compliance and audit purposes.
              {"\n\n"}4. We are not liable for penalties or legal issues arising from incorrect filings.
              {"\n\n"}5. You agree to receive notifications and updates related to your tax profile.
              {"\n\n"}6. Use of this app does not constitute a legal or financial advisory relationship.
              {"\n\n"}7. You must not use this app for fraudulent or unlawful tax claims.
            </Text>

            <Pressable
              className="bg-emerald-600 rounded-full py-3 px-6 items-center"
              onPress={()=>setvisiblity(false)}
            >
              <Text className="text-white font-semibold text-base">I Agree</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default TermsModal;