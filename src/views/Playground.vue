<template>
    <div>
        <pre>{{ data.count }}</pre>
        <button @click="add">+</button>
    </div>
</template>

<script setup>
import { reactive, watch } from 'vue';



const data = reactive({ count: 0 })


const add = () => {
    return data.count++
}

// this won't work because we are passing a number to watch()
watch(data.count, (count) => {
  console.log(`Count is: ${count}`)
})

// instead, use a getter:
watch(
  () => data.count,
  (count) => {
    console.log(`Count is: ${count} with getter`)
  }
)



</script>

<style lang="scss" scoped></style>