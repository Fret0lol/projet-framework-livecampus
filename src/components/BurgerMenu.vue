<template>
	<div id="menu">
		<div class="menu">
			<input id="menu--toggle" type="checkbox" @click="test"/>
			<label class="menu--toggle__trigger" for="menu--toggle"></label>
			<label class="menu--toggle__burger" for="menu--toggle"></label>
			<ul class="menu__body">
				<li class="menu__body-element">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png" alt="">
					<p>{{ user.email }} </p>
				</li>

				<li class="menu__body-element">
					<a class="menu__body-link" href="mailto:hi@VBelozyorov.com"> Mail </a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from "@vue/reactivity";

const store = useStore()

	let user = computed(() => {
		return store.state.user;
	});

function test() {
	console.log(user.value);
}

</script>
<style>
#menu--toggle[type="checkbox"]:not(:checked),
#menu--toggle[type="checkbox"]:checked {
	display: none;
}

.menu--toggle__trigger,
.menu--toggle__burger,
.menu--toggle__burger:before,
.menu--toggle__burger:after {
	position: absolute;
	top: 1.6em;
	left: 1.6em;
	width: 2em;
	height: 5px;
	background-color: #3fb27f;
	border-radius: 2px;
	cursor: pointer;
	z-index: 100;
	transition: 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.menu--toggle__trigger {
	height: 2em;
	background: none;
}
.menu--toggle__burger::before {
	content: "";
	top: 10px;
	left: 0;
}
.menu--toggle__burger::after {
	content: "";
	top: 20px;
	left: 0;
}

.menu__body {
	position: absolute;
	width: 7em;
	height: 7em;
	margin: 0;
	padding: 0;
	z-index: 10;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.menu__body-element,
.menu__body-link {
	display: none;
	font-weight: normal;
	color: #3fb27f;
	text-decoration: none;
	text-transform: none;
	list-style: none;
	outline: 0;
}

.menu__body-element {
	text-indent: 2em;
}
.menu__body-element img {
	width: 2em;
	height: 2em;
	border-radius: 50%;
}

.menu__body-link:hover {
	display: block;
	width: 0;
	color: #3fb27f;
	background-color: #fff;
	animation: changeWidthOfElementAnimation 0.35s both;
}

#menu--toggle:checked + .menu--toggle__trigger + .menu--toggle__burger {
	top: 35px;
	transform: rotate(405deg);
	transition: transform 0.35s cubic-bezier(.68, -.55, .265, 1.55);
}
#menu--toggle:checked + .menu--toggle__trigger + .menu--toggle__burger::before {
	top: 0;
	transform: rotate(90deg);
	transition: transform 0.35s cubic-bezier(.68, -.55, .265, 1.55);
}
#menu--toggle:checked + .menu--toggle__trigger + .menu--toggle__burger::after {
	top: 0;
	transform: rotate(90deg);
	transition: transform 0.35s cubic-bezier(.68, -.55, .265, 1.55);
}
#menu--toggle:checked + .menu--toggle__trigger + .menu--toggle__burger + .menu__body {
	background-color: #fff;
	animation: checkboxCheckedAnimation 1s cubic-bezier(.25, .1, .25, 1) both;
}
#menu--toggle:checked + .menu--toggle__trigger ~ .menu__body .menu__body-element,
#menu--toggle:checked + .menu--toggle__trigger ~ .menu__body .menu__body-link {
	display: block;
}


/**
 *	Animations
 *
 *  @note checkboxCheckedAnimation - added fix for Microsoft Edge
 */
@keyframes checkboxCheckedAnimation {
	100% {
		width: 300px;
		height: 100%;
		border-radius: 0;
	}
}

@keyframes checkboxUncheckedAnimation {
	0% {
		width: 100vw;
		height: 100vh;
	}
}

@keyframes changeWidthOfElementAnimation {
	50% {
		width: 0;
	}
	100% {
		width: 100%;
	}
}
</style>
