<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <logo class="fill-white block h-8" width="320" height="72" />

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

  <div class="bg-yellow-400">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-semibold text-white sm:text-4xl">
          ASSIDUIDADE DOCENTE EM SALA DE AULA
        </h2>
        <p class="mt-3 text-xl text-gray-800 sm:mt-4">
          Eis os resultados do inquérito feito.
        </p>
      </div>
      <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div class="flex flex-col">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-800">
            Participantes
          </dt>
          <dd class="order-1 text-5xl font-semibold text-white">
            {{ entries }}
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-800">
            Masculino
          </dt>
          <dd class="order-1 text-5xl font-semibold text-white">
            {{ gender_m }}
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-800">
            Feminino
          </dt>
          <dd class="order-1 text-5xl font-semibold text-white">
            {{ gender_f }}
          </dd>
        </div>
      </dl>
    </div>
  </div>

  <hr class="mt-4">

  <div class="flex flex-col ml-4 mr-4 mt-2">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
            
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Turma
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Respostas
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="lclass in classes" :key="lclass.id">
                
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ lclass.class }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ lclass.total }}
                  </span>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

    <br>

  <div class="flex flex-col ml-4 mr-4 mt-2">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
            
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unidade Curricular
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Respostas
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="subject in subjects" :key="subject.id">
                
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ subject.subject }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ subject.total }}
                  </span>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

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
    genders: Array,
    entries: String,
    gender_f: String,
    gender_m: String,
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
  },
  {
    value: 'O',
    label: 'Outro',
    description: null
  }
]);

let form = useForm({
    gender: 'M',
    class: null,
    subjects: [],
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