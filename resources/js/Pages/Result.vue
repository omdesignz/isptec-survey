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

  <div class="ml-4 mr-4">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      
    </h3>
    <dl class="mt-5 grid grid-cols-1 rounded-lg bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 overflow-hidden shadow divide-y divide-gray-600 md:grid-cols-3 md:divide-y-0 md:divide-x">
      <div class="px-4 py-5 sm:p-6">
        <dt class="text-base font-normal text-gray-900">
          N. Total de Participantes
        </dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div class="flex items-baseline text-4xl font-semibold text-gray-900">
            {{ entries }}
            <span class="ml-2 text-sm font-medium text-gray-500"></span>
          </div>
        </dd>
      </div>

      <div class="px-4 py-5 sm:p-6">
        <dt class="text-base font-normal text-gray-900">
          N. Total de Participantes Masculinos
        </dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div class="flex items-baseline text-4xl font-semibold text-gray-900">
            {{ gender_m }}
            <span class="ml-2 text-sm font-medium text-gray-500"></span>
          </div>
        </dd>
      </div>

      <div class="px-4 py-5 sm:p-6">
        <dt class="text-base font-normal text-gray-900">
          N. Total de Participantes Femininos
        </dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div class="flex items-baseline text-4xl font-semibold text-gray-900">
            {{ gender_f }}
            <span class="ml-2 text-sm font-medium text-gray-500"></span>
          </div>
        </dd>
      </div>
    </dl>
  </div>

  <hr class="mt-4">
  
  <div class="bg-white pt-4 pb-2 px-4 sm:px-6 lg:pt-4 lg:pb-28 lg:px-8">
    <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div>
        <h2 class="text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">
          Turmas
        </h2>
        
      </div>
      <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">

        <div>
          
          
          <table class="min-w-full divide-y divide-gray-200 mt-2" v-if="classes.length">
            <thead class="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500">
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

  <hr class="mt-4">

  <div class="bg-white pt-4 pb-2 px-4 sm:px-6 lg:pt-4 lg:pb-28 lg:px-8">
    <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div>
        <h2 class="text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">
          Pontualidade
        </h2>
        
      </div>
      <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">

        <div>
          <div>
            <a href="#" class="inline-block">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-500 text-white">
                Não tem registado atrasos
              </span>
            </a>
          </div>
          
          <table class="min-w-full divide-y divide-gray-200 mt-2" v-if="no_delays.length">
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
              <tr v-for="subject in no_delays" :key="subject.id">
                
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

        <div>
          <div>
            <a href="#" class="inline-block">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-500 text-white">
                Tem registado poucos atrasos
              </span>
            </a>
          </div>
          
          <table class="min-w-full divide-y divide-gray-200 mt-2" v-if="few_delays.length">
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
              <tr v-for="subject in few_delays" :key="subject.id">
                
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ subject.subject }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                    {{ subject.total }}
                  </span>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div>
            <a href="#" class="inline-block">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-500 text-white">
                Tem registado muitos atrasos
              </span>
            </a>
          </div>
          
          <table class="min-w-full divide-y divide-gray-200 mt-2" v-if="lots_of_delays.length">
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
              <tr v-for="subject in lots_of_delays" :key="subject.id">
                
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ subject.subject }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
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

  <hr class="mt-4">

  <div class="bg-white pt-4 pb-2 px-4 sm:px-6 lg:pt-4 lg:pb-28 lg:px-8">
    <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div>
        <h2 class="text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl">
          Assiduidade
        </h2>
        
      </div>
      <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">

        <div>
          <div>
            <a href="#" class="inline-block">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-500 text-white">
                Não tem registado faltas
              </span>
            </a>
          </div>
          
          <table class="min-w-full divide-y divide-gray-200 mt-2" v-if="no_absences.length">
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
              <tr v-for="subject in no_absences" :key="subject.id">
                
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

        <div>
          <div>
            <a href="#" class="inline-block">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-500 text-white">
                Tem registado poucas faltas
              </span>
            </a>
          </div>
          
          <table class="min-w-full divide-y divide-gray-200 mt-2" v-if="few_absences.length">
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
              <tr v-for="subject in few_absences" :key="subject.id">
                
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ subject.subject }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                    {{ subject.total }}
                  </span>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div>
            <a href="#" class="inline-block">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-500 text-white">
                Tem registado muitas faltas
              </span>
            </a>
          </div>
          
          <table class="min-w-full divide-y divide-gray-200 mt-2" v-if="lots_of_absences.length">
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
              <tr v-for="subject in lots_of_absences" :key="subject.id">
                
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ subject.subject }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
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
    no_delays: Array,
    few_delays: Array,
    lots_of_delays: Array,
    no_absences: Array,
    few_absences: Array,
    lots_of_absences: Array,
    genders: Array,
    entries: Number,
    gender_f: Number,
    gender_m: Number,
});
</script>