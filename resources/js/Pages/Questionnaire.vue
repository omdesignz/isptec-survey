<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-800">
    <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply" alt="" />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
          INQUÉRITO
        </h2>
        <p class="mt-2 text-white text-3xl font-medium tracking-tight sm:text-4xl">
          ASSIDUIDADE DOCENTE EM SALA DE AULA
        </p>
        <p class="mt-3 text-lg text-gray-300">
          Este inquérito é um instrumento elaborado para medir o grau de assiduidade docente em sala de aula na perspectiva dos estudantes do ISPTEC cujo objectivo é melhorar  a assiduidade docente e consequentemente, o processo de ensino-aprendizagem.
        </p>
        <p class="mt-3 text-lg text-gray-300">
          Este questionário é de natureza confidencial. O tratamento da informação, por sua vez, será efectuado de uma forma global, não sendo sujeito a uma análise individualizada.
        </p>
        <p class="mt-3 text-lg text-gray-300">
          Agradecemos a sua disponibilidade e colaboração sem as quais o nosso trabalho não seria possível.
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
  <flashMessage :toast="$page.props.toast" :popstate="$page.props.popstate"></flashMessage>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon, ExternalLinkIcon } from '@heroicons/vue/outline'
import FlashMessage from '@/Shared/flash-message'

defineProps({
    layout: null,
    toast: Object
});

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
</script>