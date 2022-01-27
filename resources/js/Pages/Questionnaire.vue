<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="relative bg-yellow-400" v-if="toast">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="font-medium text-gray-900">
          <span class="md:hidden">
            {{ toast?.message }}
          </span>
          <span class="hidden md:inline">
            {{ toast?.message }}
          </span>
          <span class="block sm:ml-2 sm:inline-block">
            <a target="_blank" href="https://www.isptec.co.ao" class="text-gray-900 font-bold underline"> Visite o ISPTEC <span aria-hidden="true">&rarr;</span></a>
          </span>
        </p>
      </div>
    </div>
  </div>

  <div class="relative bg-gray-800 min-h-screen">
    <div class="h-56 bg-yellow-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply" alt="" />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
          INQUÉRITO
        </h2>
        <p class="mt-2 text-white text-3xl font-medium tracking-tight sm:text-4xl">
          ASSIDUIDADE E PONTUALIDADE DOS DOCENTES EM SALA DE AULA
        </p>
        <p class="mt-3 text-lg text-gray-300">
          Com este inquérito pretende-se medir o nível de assiduidade e pontualidade dos docentes em sala de aula, na perspectiva dos estudantes do ISPTEC, sendo confidencial e anónimo.
        </p>
        <p class="mt-3 text-lg text-gray-300">
          Na resposta ao inquérito, considere a turma e as disciplinas em que está inscrito no 1.º semestre do ano lectivo 2021/2022.
        </p>
        <p class="mt-3 text-lg text-gray-300">
          Agradecemos a sua disponibilidade e colaboração.
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
              <Link href="/participar" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-yellow-400 hover:bg-yellow-500">
                Participar
              <ExternalLinkIcon class="-mr-1 ml-3 h-5 w-5 text-gray-900" aria-hidden="true" />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon, ExternalLinkIcon } from '@heroicons/vue/outline'

defineProps({
    layout: null,
    toast: Object,
    popstate: Boolean
});

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
</script>