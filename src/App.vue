<template>
  <div class="container">
    <h1>Go Living Applications List</h1>
    <ul>
      Applications
      <li v-for="entry in databaseEntries" :key="entry._id">
        {{entry.name}}
        {{entry.date}}
        {{entry.room}}
      </li>
    </ul>

    <button @click="getTheData">Update</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      databaseEntries: {}
    };
  },
  methods: {
    getTheData() {
      return new Promise((res, rej) => {
        axios.get("/retrieve").then(resp => {
          this.databaseEntries = resp.data;
          res();
        });
      });
    }
  },
  beforeMount() {
    this.getTheData();
  }
};
</script>

<style>
</style>