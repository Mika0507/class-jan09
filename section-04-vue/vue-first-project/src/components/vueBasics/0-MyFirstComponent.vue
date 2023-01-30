  <!-- HTML aquí -->
    <template>
    
        <div>

            <p class="belen">Mi nombre es Belén, nací en España y tengo 34 años</p>

            <p>{{ myNameTwo }}</p>

        </div>

        <div>
            <p>
                Mi nombre es {{ myName }}, nací en {{ countryOfBirth }} y tengo {{ age }} años {{ booleanValue }}
            </p>
        </div>
        <section>
            <div class="counter">
                <button @click="decreaseCounter"> - </button>
                <p>{{ counter.count }}</p>
                <button @click="increaseCounter"> + </button>
            </div>
        </section> 
        
    <!-- HTML puesto con interpolación de texto - mejor conocido como nuestro claudators de bigote -->
    </template>


    <!-- JS aquí -->
    <script setup>
        import { ref, reactive} from "vue";


        const myNameTwo = "Belén";

        const myName = ref("Belén");
        const countryOfBirth = ref("España");
        const age = ref(34);


        const myInfo = reactive({
            myName: "Belén",
            countryOfBirth: "España",
            age: 34,
        })

        const counter = reactive({
            count: 0,
            title: "My counter",
        })
        const increaseCounter = () => {
            counter.count++
        }
        const decreaseCounter = () => {
            counter.count--
        }
    </script>


    <!-- CSS aquí -->
    <style scoped>
    </style>