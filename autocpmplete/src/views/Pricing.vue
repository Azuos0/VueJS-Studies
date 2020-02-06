<template>
  <div class="flex justify-center">
    <div class="w-1/2 bg-blue-900 rounded-lg shadow px-6 py-12 flex flex-col items-center">
      <div class="bg-gray-400 rounded-full flex justify-center p-1">
        <button
            v-for="(price, frequency) in plans[0].pricing" :key="frequency" 
          @click="currentFrequency = frequency"
          class="rounded-full text-xs font-bold px-6 py-1 uppercase focus:outline"
          :class="currentFrequency == frequency ? 'bg-blue-600 text-gray-200' : ''"
        >{{frequency}}</button>
      </div>

      <div class="flex w-full pt-8 justify-center">
        <div v-for="(plan, index) in plans" :key="index" class="text-white w-1/2">
          <h1 class="text-2xl font-bold">{{plan.name}}</h1>

          <ul class="pt-4">
            <li v-for="(benefit, index) in plan.benefits[currentFrequency]" :key="index">{{benefit}}</li>
          </ul>

          <div class="flex justify-center pt-8">
            <div class="text-4xl font-bold">{{getPrice(plan.pricing[currentFrequency].price)}}</div>
            <div class="pl-1 pt-2 text-gray-300">{{plan.pricing[currentFrequency].label}}</div>
          </div>

        </div>
      </div>

      <div class="pt-4 text-center text-gray-400 text-sm font-bold">
         <a href="#" @click.prevent="currency = 'usd'">USD</a> |
         <a href="#" @click.prevent="currency = 'eur'">EUR</a> |
         <a href="#" @click.prevent="currency = 'br'">BR</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pricing",
  data() {
    return {
      currentFrequency: "monthly",
      currency: 'usd',
      plans: [
        {
          name: "Starter",
          benefits: {
            monthly: ["benefit 1", "benefit 2", "benefit 3"],
            yearly: ["benefit 1", "benefit 2", "benefit 3", "benefit 4"],
            lifetime: [
              "benefit 1",
              "benefit 2",
              "benefit 3",
              "benefit 4",
              "benefit 5"
            ]
          },
          pricing: {
            monthly: { price: "99", label: "/mo" },
            yearly: { price: "199", label: "/yr" },
            lifetime: { price: "1200", label: "" }
          }
        },
        {
          name: "Pro",
          benefits: {
            monthly: ["benefit 1", "benefit 2", "benefit 3"],
            yearly: ["benefit 1", "benefit 2", "benefit 3", "benefit 4"],
            lifetime: [
              "benefit 1",
              "benefit 2",
              "benefit 3",
              "benefit 4",
              "benefit 5"
            ]
          },
          pricing: {
            monthly: { price: "199", label: "/mo" },
            yearly: { price: "999", label: "/yr" },
            lifetime: { price: "2200", label: "" }
          }
        }
      ]
    };
  },
  methods: {
      getPrice(price){
          return this['currency' + this.currency.toUpperCase()](price);
      },
      currencyUSD(price){
          return '$' + price;
      },
      currencyEUR(price){
          return Math.ceil(price * 0.85) + '€';
      },
      currencyBR(price){
          return 'R$' + Math.ceil(price*4.23);
      }
  }
};
</script>