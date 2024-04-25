import Vue from 'vue';
import VueRouter from 'vue-router';
import Tv from '../views/Tv.vue';
import Music from '../views/Music.vue';
import Book from '../views/Book.vue';
import Chat from '../views/Chat.vue';
import TvComment from '../views/TvComment.vue';
import TvDetails from '../views/TvDetails.vue';
import BookDetails from '../views/BookDetails.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: Tv, component: Tv },
	{
		path: '/music',
		name: Music,
		component: () => import('../views/Music.vue'),
	},
	{ path: '/book', name: Book, component: Book },
	{ path: '/chat', name: Chat, component: Chat },
	{ path: '/tvComment', name: TvComment, component: TvComment },
	{ path: '/tvDetails/:id', name: TvDetails, component: TvDetails },
	{ path: '/bookDetails/:id', name: BookDetails, component: BookDetails },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
