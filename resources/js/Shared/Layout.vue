<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <logo class="fill-white h-12 w-auto" />
              <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg" alt="Workflow" /> -->
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2">
                <div class="space-y-1">
                  <Link v-for="item in navigation" :key="item.name" :href="item.href" :class="[$page.component === item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md']" :aria-current="$page.component === item.current ? 'page' : undefined">
                    <component :is="item.icon" :class="[$page.component === item.current ? 'text-yellow-400' : 'text-gray-400', 'mr-3 flex-shrink-0 h-6 w-6 hover:text-yellow-400']" aria-hidden="true" />
                    {{ item.name }}
                  </Link>
                </div>
                <div class="mt-8">
                  <!-- <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="mobile-teams-headline">
                    Teams
                  </h3>
                  <div class="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline">
                    <a v-for="team in teams" :key="team.name" :href="team.href" class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                      <span :class="[team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']" aria-hidden="true" />
                      <span class="truncate">
                        {{ team.name }}
                      </span>
                    </a>
                  </div> -->
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
      <div class="flex items-center flex-shrink-0 px-6">
        <logo class="fill-white h-12 w-auto" />
        <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg" alt="Workflow" /> -->
      </div>
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
        <!-- User account dropdown -->
        <Menu as="div" class="px-3 relative inline-block text-left">
          <div>
            <MenuButton class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-ft-orange">
              <span class="flex w-full justify-between items-center">
                <span class="flex min-w-0 items-center justify-between space-x-3">
                  <span class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
                    <span class="text-xs font-medium leading-none text-white">{{ auth.user.name.split(' ').map(word => word[0]).join('') }}</span>
                  </span>
                  <!-- <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" /> -->
                  <span class="flex-1 flex flex-col min-w-0">
                    <span class="text-gray-900 text-sm font-medium truncate">{{ auth.user.name }}</span>
                    <span class="text-gray-500 text-sm truncate">{{ auth.user.email }}</span>
                  </span>
                </span>
                <SelectorIcon class="flex-shrink-0 h-5 w-5 text-gray-400 hover:text-yellow-400" aria-hidden="true" />
              </span>
            </MenuButton>
          </div>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Perfil</a>
                </MenuItem>
                <!-- <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>
                </MenuItem> -->
              </div>
              <!-- <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get desktop app</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                </MenuItem>
              </div> -->
              <div class="py-1">
                <Link :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" :href="route('logout')" method="post" as="button">
                  Logout
                </Link>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <!-- Sidebar Search -->
        <!-- <div class="px-3 mt-5">
          <label for="search" class="sr-only">Search</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
              <SearchIcon class="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
            <input type="text" name="search" id="search" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md" placeholder="Search" />
          </div>
        </div> -->
        <!-- Navigation -->
        <nav class="px-3 mt-6">
          <div class="space-y-1">
            
            <Link v-for="item in navigation" :key="item.name" :href="item.href" :class="[$page.component === item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md transform transition-all duration-200 hover:scale-125']" :aria-current="$page.component === item.current ? 'page' : undefined">
              <component :is="item.icon" :class="[$page.component === item.current ? 'text-yellow-400' : 'text-gray-400', 'mr-3 flex-shrink-0 h-6 w-6 hover:text-yellow-400']" aria-hidden="true" />
              {{ item.name }}
            </Link>
          </div>
          <div class="mt-8">
            <!-- Secondary navigation -->
            <!-- <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="desktop-teams-headline">
              Teams
            </h3>
            <div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
              <a v-for="team in teams" :key="team.name" :href="team.href" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                <span :class="[team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']" aria-hidden="true" />
                <span class="truncate">
                  {{ team.name }}
                </span>
              </a>
            </div> -->
          </div>
        </nav>
      </div>
    </div>
    <!-- Main column -->
    <div class="lg:pl-64 flex flex-col">
      <!-- Search header -->
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
        <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ft-orange lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
          <!-- <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search-field" name="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search" />
              </div>
            </form>
          </div> -->
          <div class="flex items-center">
            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ft-orange">
                  <span class="sr-only">Open user menu</span> 
                  <span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500">
                    <span class="text-xs font-medium leading-none text-white">VM</span>
                  </span>
                  <!-- <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> -->
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Perfil</a>
                    </MenuItem>
                    <!-- <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Settings</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>
                    </MenuItem> -->
                  </div>
                  <!-- <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get desktop app</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                    </MenuItem>
                  </div> -->
                  <div class="py-1">
                    <Link :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" :href="route('logout')" method="post" as="button">
                        Logout
                      </Link>
                    <!-- <MenuItem v-slot="{ active }">
                      <Link :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" :href="route('logout')" method="post" as="button">
                        Logout
                      </Link>
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Logout</a>
                    </MenuItem> -->
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
  <flashMessage :toast="$page.props.toast" :popstate="$page.props.popstate"></flashMessage>
</template>
<script setup>
import { ref, watch } from 'vue'
import Logo from '@/Shared/Logo'
import { usePage } from '@inertiajs/inertia-vue3';
import FlashMessage from '@/Shared/flash-message'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { MenuAlt1Icon, ViewListIcon, XIcon } from '@heroicons/vue/outline'
import { HomeIcon, ChevronRightIcon, DotsVerticalIcon, SearchIcon, SelectorIcon, UserGroupIcon, ArrowNarrowDownIcon, ArrowNarrowUpIcon, AcademicCapIcon, BriefcaseIcon, CollectionIcon, IdentificationIcon, ClockIcon, BanIcon } from '@heroicons/vue/solid'

defineProps({
  auth: Object
});


const navigation = [
  { name: 'Início', href: route('dashboard'), icon: HomeIcon, current: 'Dashboard' },
  { name: 'Horários', href: route('schedules.index'), icon: ClockIcon, current: 'Schedule/Index' },
  { name: 'Colaboradores', href: route('users.index'), icon: UserGroupIcon, current: 'User/Index' },
  { name: 'Entradas', href: route('attendances.index'), icon: ArrowNarrowDownIcon, current: 'Attendance/Index' },
  { name: 'Saídas', href: route('leaves.index'), icon: ArrowNarrowUpIcon, current: 'Leave/Index' },
  { name: 'Funções', href: route('categories.index'), icon: IdentificationIcon, current: 'Category/Index' },
  { name: 'Departamentos', href: route('departments.index'), icon: CollectionIcon, current: 'Department/Index' },
  { name: 'Vínculos', href: route('contracttypes.index'), icon: BriefcaseIcon, current: 'ContractType/Index' },
  { name: 'Motivos de Ausência', href: route('absreasons.index'), icon: BanIcon, current: 'AbsenceReason/Index' },
  { name: 'Áreas de Ensino', href: route('teachingareas.index'), icon: AcademicCapIcon, current: 'TeachingArea/Index' }
]
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]

const sidebarOpen = ref(false)

</script>