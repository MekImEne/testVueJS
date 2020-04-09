<template>
  <div>
    <!--<h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/dogs/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>-->
    <pet-table species="dogs" :pets="dogs"></pet-table>
  </div>
</template>

<script>
//import dogs from "../data/dogs";
import { mapState } from "vuex";
import PetTable from "../components/PetTable";

export default {
  data() {
    return {
      //dogs
    };
  },
  components: { "pet-table": PetTable },

  computed: {
    ...mapState(["dogs"])
  }
};
</script>

<style></style>
