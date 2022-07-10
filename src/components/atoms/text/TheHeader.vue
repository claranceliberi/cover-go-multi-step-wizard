<template>
  <h2 v-once v-bind="$attrs" class="font-bold text-2xl">
    <slot></slot>
  </h2>
</template>

<!-- May be this component can be improved , to render multiple diffenrent headers using render function, 
from h1,h2,h3 but for this case, I think it's better to use h2 for this case i dont need much. -->
