<template>
  <div>
    <!--<h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/cats/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>-->
    <pet-table species="cats" :pets="cats"></pet-table>
  </div>
</template>

<script>
//import cats from "../data/cats";
import { mapState } from "vuex";
import PetTable from "../components/PetTable";
export default {
  data() {
    return {
      //cats
    };
  },
  components: { "pet-table": PetTable },
  computed: {
    ...mapState(["cats"])
  }
};
</script>

<style></style>
