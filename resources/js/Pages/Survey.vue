<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <!-- <logo class="fill-white block h-8" width="320" height="72" /> -->

            <!-- <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-yellow-400.svg" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-yellow-400-mark-white-text.svg" alt="Workflow" /> -->
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          
        </div>
      </div>
    </div>
    <hr>
  </Disclosure>

  <div class="bg-white shadow sm:rounded-lg ml-4 mr-4 mt-4">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Género
      </h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <RadioGroup v-model="form.gender">
            <RadioGroupLabel class="text-base font-medium text-gray-900">
            
            </RadioGroupLabel>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
            <RadioGroupOption as="template" v-for="gender in genderOptions" :key="gender.value" :value="gender.value" v-slot="{ checked, active }">
                <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-yellow-400' : '', 'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none']">
                <div class="flex-1 flex">
                    <div class="flex flex-col">
                    <RadioGroupLabel as="span" class="block text-sm font-medium text-gray-900">
                        {{ gender.label }}
                    </RadioGroupLabel>
                    <RadioGroupDescription as="span" class="mt-1 flex items-center text-sm text-gray-500">
                        {{ gender.description }}
                    </RadioGroupDescription>
                    
                    </div>
                </div>
                <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-yellow-500']" aria-hidden="true" />
                <div :class="[active ? 'border' : 'border-2', checked ? 'border-yellow-400' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']" aria-hidden="true" />
                </div>
            </RadioGroupOption>
            </div>
        </RadioGroup>
      </div>
      <div class="mt-3 text-sm">
        <p v-if="form.errors.gender" class="mt-2 text-sm text-red-600" id="name-error">{{ form.errors.gender }}</p>
      </div>
    </div>
  </div>

  <div class="bg-white shadow sm:rounded-lg ml-4 mr-4 mt-4">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Turma
      </h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          Por favor, seleccione a turma em que está inscrita no presente semestre lectivo (1º Semestre Ano Lectivo 2021/2022).
        </p>
        <multiselect 
            v-model="form.class"
            :options="classes"
            id="class"  
            :searchable="true"
            :filterResults="true"
            placeholder="Seleccione a sua turma"
            :minChars="1"
            :resolveOnLoad="true"
            :delay="0"
            mode="single"
            ref="class"
            :classes="selectClasses"
            class="mt-1"
        />
      </div>
      <div class="mt-3 text-sm">
            <p v-if="form.errors.class" class="mt-2 text-sm text-red-600" id="name-error">{{ form.errors.class }}</p>
      </div>
    </div>
  </div>

  <div class="bg-white shadow sm:rounded-lg ml-4 mr-4 mt-4">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        PONTUALIDADE
      </h3>
      <div class="mt-2 max-w-xl text-lg text-gray-500">
        <p>
          Indique as disciplinas em que o respectivo docente <b>não tem registado atrasos </b> às aulas.
        </p>
        
      </div>
      <div class="mt-3 text-sm">
          <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in subjects" :key="item.id" class="col-span-1 flex shadow-sm rounded-md bg-gray-100">
                <div class="flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md">
                <input :id="item.id" :name="item.name" v-model="form.no_delays" type="checkbox" :value="item.id" class="h-4 w-4 text-green-500 focus:ring-green-500 rounded-full" />
                </div>
                <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                     
                <div class="flex-1 px-4 py-2 text-sm truncate">
                    
                    <p class="text-gray-500">{{ item.name }}</p>
                </div>
                
                </div>
            </li>
            </ul>
            <br>
            <p v-if="form.errors.no_delays" class="mt-2 text-sm text-red-600" id="no_delays-error">{{ form.errors.no_delays }}</p>
      </div>
      <hr>

      <div class="mt-2 max-w-xl text-lg text-gray-500">
        <p>
          Indique as disciplinas em que o respectivo docente <b>tem registado poucos atrasos </b> às aulas.
        </p>
        
      </div>
      <div class="mt-3 text-sm">
          <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in subjects" :key="item.id" class="col-span-1 flex shadow-sm rounded-md bg-gray-100">
                <div class="flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md">
                <input :id="item.id" :name="item.name" v-model="form.few_delays" type="checkbox" :value="item.id" class="h-4 w-4 text-orange-400 focus:ring-orange-400 rounded-full" />
                </div>
                <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                     
                <div class="flex-1 px-4 py-2 text-sm truncate">
                    
                    <p class="text-gray-500">{{ item.name }}</p>
                </div>
                
                </div>
            </li>
            </ul>
            <br>
            <p v-if="form.errors.few_delays" class="mt-2 text-sm text-red-600" id="few_delays-error">{{ form.errors.few_delays }}</p>
      </div>

      <hr>

      <div class="mt-2 max-w-xl text-lg text-gray-500">
        <p>
          Indique as disciplinas em que o respectivo docente <b>tem registado muitos atrasos </b> às aulas.
        </p>
        
      </div>
      <div class="mt-3 text-sm">
          <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in subjects" :key="item.id" class="col-span-1 flex shadow-sm rounded-md bg-gray-100">
                <div class="flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md">
                <input :id="item.id" :name="item.name" v-model="form.lots_of_delays" type="checkbox" :value="item.id" class="h-4 w-4 text-red-500 focus:ring-red-500 rounded-full" />
                </div>
                <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                     
                <div class="flex-1 px-4 py-2 text-sm truncate">
                    
                    <p class="text-gray-500">{{ item.name }}</p>
                </div>
                
                </div>
            </li>
            </ul>
            <br>
            <p v-if="form.errors.lots_of_delays" class="mt-2 text-sm text-red-600" id="lots_of_delays-error">{{ form.errors.lots_of_delays }}</p>
      </div>

      <hr>
      <div class="flex justify-end mt-4">
        
        </div>
    </div>
  </div>

  <div class="bg-white shadow sm:rounded-lg ml-4 mr-4 mt-4">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        ASSIDUIDADE
      </h3>
      <div class="mt-2 max-w-xl text-lg text-gray-500">
        <p>
          Indique as disciplinas em que o respectivo docente <b>não tem registado faltas </b> às aulas.
        </p>
        
      </div>
      <div class="mt-3 text-sm">
          <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in subjects" :key="item.id" class="col-span-1 flex shadow-sm rounded-md bg-gray-100">
                <div class="flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md">
                <input :id="item.id" :name="item.name" v-model="form.no_absences" type="checkbox" :value="item.id" class="h-4 w-4 text-green-500 focus:ring-green-500 rounded-full" />
                </div>
                <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                     
                <div class="flex-1 px-4 py-2 text-sm truncate">
                    
                    <p class="text-gray-500">{{ item.name }}</p>
                </div>
                
                </div>
            </li>
            </ul>
            <br>
            <p v-if="form.errors.no_absences" class="mt-2 text-sm text-red-600" id="no_absences-error">{{ form.errors.no_absences }}</p>
      </div>
      <hr>

      <div class="mt-2 max-w-xl text-lg text-gray-500">
        <p>
          Indique as disciplinas em que o respectivo docente <b>tem registado poucas faltas </b> às aulas.
        </p>
        
      </div>
      <div class="mt-3 text-sm">
          <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in subjects" :key="item.id" class="col-span-1 flex shadow-sm rounded-md bg-gray-100">
                <div class="flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md">
                <input :id="item.id" :name="item.name" v-model="form.few_absences" type="checkbox" :value="item.id" class="h-4 w-4 text-orange-400 focus:ring-orange-400 rounded-full" />
                </div>
                <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                     
                <div class="flex-1 px-4 py-2 text-sm truncate">
                    
                    <p class="text-gray-500">{{ item.name }}</p>
                </div>
                
                </div>
            </li>
            </ul>
            <br>
            <p v-if="form.errors.few_absences" class="mt-2 text-sm text-red-600" id="few_absences-error">{{ form.errors.few_absences }}</p>
      </div>

      <hr>

      <div class="mt-2 max-w-xl text-lg text-gray-500">
        <p>
          Indique as disciplinas em que o respectivo docente <b>tem registado muitos atrasos </b> às aulas.
        </p>
        
      </div>
      <div class="mt-3 text-sm">
          <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in subjects" :key="item.id" class="col-span-1 flex shadow-sm rounded-md bg-gray-100">
                <div class="flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md">
                <input :id="item.id" :name="item.name" v-model="form.lots_of_absences" type="checkbox" :value="item.id" class="h-4 w-4 text-red-500 focus:ring-red-500 rounded-full" />
                </div>
                <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                     
                <div class="flex-1 px-4 py-2 text-sm truncate">
                    
                    <p class="text-gray-500">{{ item.name }}</p>
                </div>
                
                </div>
            </li>
            </ul>
            <br>
            <p v-if="form.errors.lots_of_absences" class="mt-2 text-sm text-red-600" id="lots_of_absences-error">{{ form.errors.lots_of_absences }}</p>
      </div>

      <hr>
      <div class="flex justify-end mt-4">
        <button v-if="form.class && form.no_delays.length && form.few_delays.length && form.lots_of_delays.length && form.no_absences.length && form.few_absences.length && form.lots_of_absences.length" :disabled="form.processing" type="button" class="flex items-end px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400" @click="submit">
            Submeter Respostas
        </button>
        </div>
    </div>
  </div>

  <hr>

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { CheckCircleIcon } from '@heroicons/vue/solid'
import Logo from '@/Shared/Logo'
import { useForm } from '@inertiajs/inertia-vue3';
import Multiselect from '@vueform/multiselect'


defineProps({
    layout: null,
    classes: Array,
    subjects: Array,
});

const genderOptions = ref([
  {
    value: 'M',
    label: 'Masculino',
    description: null
  },
  {
    value: 'F',
    label: 'Feminino',
    description: null
  }
]);

let form = useForm({
    gender: 'M',
    class: null,
    subjects: [],
    no_delays: [],
    few_delays: [],
    lots_of_delays: [],
    no_absences: [],
    few_absences: [],
    lots_of_absences: [],
})

let submit = () => {
    form.post('/surveys', {
      preserveScroll: true,
      onSuccess: () => {
        form.reset()
      },
  })
}

let selectClasses = computed(() => {
    return {
            container: 'relative max-w-lg w-full flex items-center justify-end cursor-pointer border-gray-300 rounded-md bg-white text-base leading-snug outline-none sm:max-w-xs sm:text-sm',
            containerDisabled: 'cursor-default bg-gray-100',
            containerOpen: 'rounded-b-none',
            containerOpenTop: 'rounded-t-none',
            containerActive: '',
            singleLabel: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
            multipleLabel: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
            search: 'max-w-lg w-full absolute shadow-sm border-gray-300 text-base font-sans bg-white rounded-md pl-3.5 sm:text-sm',
            tags: 'flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2',
            tag: 'bg-yellow-400 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap',
            tagDisabled: 'pr-2 opacity-50',
            tagRemove: 'flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group',
            tagRemoveIcon: 'bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60',
            tagsSearchWrapper: 'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
            tagsSearch: 'absolute inset-0 border-0 outline-none appearance-none p-0 text-base font-sans box-border w-full',
            tagsSearchCopy: 'invisible whitespace-pre-wrap inline-block h-px',
            placeholder: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400',
            caret: 'bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none',
            caretOpen: 'rotate-180 pointer-events-auto',
            clear: 'pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80',
            clearIcon: 'bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block',
            spinner: 'bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0',
            dropdown: 'max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b',
            dropdownTop: '-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t',
            dropdownHidden: 'hidden',
            options: 'flex flex-col p-0 m-0 list-none',
            optionsTop: 'flex-col-reverse',
            group: 'p-0 m-0',
            groupLabel: 'flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal',
            groupLabelPointable: 'cursor-pointer',
            groupLabelPointed: 'bg-gray-300 text-gray-700',
            groupLabelSelected: 'bg-green-600 text-white',
            groupLabelDisabled: 'bg-gray-100 text-gray-300 cursor-not-allowed',
            groupLabelSelectedPointed: 'bg-green-600 text-white opacity-90',
            groupLabelSelectedDisabled: 'text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed',
            groupOptions: 'p-0 m-0',
            option: 'flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3',
            optionPointed: 'text-gray-800 bg-gray-100',
            optionSelected: 'text-white bg-yellow-400',
            optionDisabled: 'text-gray-300 cursor-not-allowed',
            optionSelectedPointed: 'text-white bg-yellow-400 opacity-90',
            optionSelectedDisabled: 'text-green-100 bg-yellow-400 bg-opacity-50 cursor-not-allowed',
            noOptions: 'py-2 px-3 text-gray-600 bg-white',
            noResults: 'py-2 px-3 text-gray-600 bg-white',
            fakeInput: 'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
            spacer: 'h-9 py-px box-content',
            }
});
</script>