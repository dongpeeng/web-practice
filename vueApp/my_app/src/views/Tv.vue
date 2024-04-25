<template>
	<div>
		<ul class="tv-list">
			<li
				class="tv-item"
				v-for="item in tvList"
				:key="item.id"
				v-on:click="getDetails(item.id)"
			>
				<!--  @click="getComment(item.recommend_comment,item.id)" -->
				<div class="img">
					<img
						:src="'https://images.weserv.nl/?url=' + item.cover_url"
						alt=""
					/>
				</div>
				<div class="content">
					<h3>{{ item.title }}</h3>
					<p>{{ item.card_subtitle }}</p>
					<p><a href="/tvComment">评语</a></p>
					<!-- <router-link to="/tvComment">评语</router-link> -->
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
// import { mapState,mapMutations } from "vuex";
export default {
	data() {
		return {
			tvList: [],
			start: 0,
			isFinish: true,
		};
	},
	created() {
		this.getData();
		// this.getComment();
	},
	mounted() {
		this.listenScroll();
	},
	//   computed: {
	//   ...mapState(['recommend_comment']),
	// },
	methods: {
		/* 跨域问题：当你网页所在地址与你的接口的地址（协议，域名，端口号等）任何一个不同都会引发跨域问题（因为浏览器的同源策略）
        解决：jsonp，让后端帮你配置一下（cors），服务器代理  
   */
		// ...mapMutations(['setCurDetail']),
		//获取电视剧数据
		getData() {
			//必须用v2
			if (this.isFinish) {
				this.isFinish = false;
				// let baseUrl = 'https://bird.ioliu.cn/v2?url=';
				let tvUrl = `/api/v2/movie/suggestion?&start=${this.start}&count=10&new_struct=1&with_review=1&for_mobile=1`;
				this.axios
					.get(tvUrl)
					.then((res) => {
						console.log(res);
						this.tvList = this.tvList.concat(res.data.items);
						console.log(this.tvList);
						this.isFinish = true;
					})
					.catch((err) => console.log(err));
			}
		},
		//处理数据增加项
		listenScroll() {
			// 获取html元素
			let htmlDom = document.documentElement;
			let deviceHeight = htmlDom.clientHeight; //获取窗口的高度
			let fullHeight = 0;
			let scrollTop = 0;
			window.onscroll = () => {
				fullHeight = htmlDom.offsetHeight; //页面的总高度
				scrollTop = htmlDom.scrollTop; //滚动条距离顶部的距离
				// console.log(fullHeight,scrollTop,deviceHeight);
				if (scrollTop + deviceHeight > fullHeight - 20) {
					// 滚动事件防抖
					if (this.isFinish) {
						this.start += 10;
					}
					if (this.start < 50) {
						this.getData();
					}
					console.log('滚动到底部');
				}
			};
		},
		//跳转详情页面
		//  getComment(obj,key){
		//    if(this.isFinish){
		//      this.isFinish=false;
		//      this.setCurDetail({obj,key});
		//    }
		//    this.isFinish=true;
		//  },
		getDetails(id) {
			this.$router.push('/tvDetails/' + id);
		},
	},
};
</script>

<style lang="scss" scoped>
.tv-list {
	.tv-item {
		display: flex;
		padding: 10px;
		border-bottom: 1px solid #cccccc;
		.img {
			flex: 3;
			img {
				width: 100px;
			}
		}
		.content {
			flex: 5;
			padding: 10px;
			h3 {
				font-weight: bolder;
				margin-bottom: 20px;
			}
			a {
				text-decoration: none;
				color: #000000;
			}
			a:hover {
				color: rgba($color: #ff0000, $alpha: 0.6);
			}
		}
	}
}
</style>
