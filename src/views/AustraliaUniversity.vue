<template>
    <NavbarGrace />
	<Australia />
    <Fotter />
</template>

<script>
import NavbarGrace from '@/components/layouts/NavbarGrace.vue';
import Australia from '@/components/University/Australia.vue';
import Fotter from '@/components/layouts/fotter.vue';

export default {
	components: {
		NavbarGrace,
		Australia,
		Fotter
	}
};
</script>
