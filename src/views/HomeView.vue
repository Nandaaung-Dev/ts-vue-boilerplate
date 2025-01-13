<template>
  <div>
    <h3>Enter Phone Numbers:</h3>
    <input
      type="text"
      v-model="currentPhone"
      @keyup.enter="addPhoneNumber"
      placeholder="Type a phone number and press Enter"
    />
    <ul>
      <li v-for="(phone, index) in phoneNumbers" :key="index">
        {{ phone }}
        <button @click="removePhoneNumber(index)">Remove</button>
      </li>
    </ul>
    <p>Phone Numbers Array: {{ phoneNumbers }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive state variables
const currentPhone = ref("");
const phoneNumbers = ref([]);

// Method to add a phone number
const addPhoneNumber = () => {
  if (currentPhone.value.trim()) {
    phoneNumbers.value.push(currentPhone.value.trim());
    currentPhone.value = ""; // Clear the input
  }
};

// Method to remove a phone number by index
const removePhoneNumber = (index) => {
  phoneNumbers.value.splice(index, 1);
};
</script>
