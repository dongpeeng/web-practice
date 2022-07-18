
/* -- 动态规划法：钢条切割问题 -- */
/*
某公司购买长钢条，将其切割后进行出售。切割钢条的成本可以忽略不计，钢条的长度为整英寸。
已知价格表p，其中pi（i＝1，2，...，m）表示长度为i英寸的钢条的价格。现要求解使销售收益最大的切割方案。
求解此切割方案的算法基本思想如下：
假设长钢条的长度为n英寸，最佳切割方案的最左边切割段长度为i英寸，则继续求解剩余长度为n-i 英寸钢条的最佳切割方案。
考虑所有可能的i，得到的最大收益rn对应的切割方案即为最佳切割方案。rn的递归定义如下：
    rn =max1≤ i ≤n(pi +rn-i)
对此递归式，给出自顶向下和自底向上两种实现方式。
*/

// #include <stdio.h>
// #define LEN 100
// int count=0;
// int count2=0;

// int Top_Down_Cut_Rod(int p[],int n){ 
//  /*自顶向下*/
	
//     int r=0;
//     int i;
// 	printf("执行Top_Down_Cut_Rod(%d)。\n",n-i);
//     if(n == 0){
//         return 0;
//     }
//     for(i=1;  i<=n ;i++){
//         int tmp = p[i]+Top_Down_Cut_Rod(p,n-i);
// //    	count++;
//         r=(r>=tmp)?r:tmp;
//     }
// //	printf("自顶向下重复次数%d。\n",count);
//     return r;
// }
// int Bottom_Up_Cut_Rod(int p[],int n){     
// /*自底向上*/
//     int r[LEN]={0};
//     int temp=0;
//     int i,j;
// 	int count;
//     for(j=1;j<=n;j++){
//         temp=0;
//         for(i=1; i<=j  ;i++) {
//             temp= temp>=(r[i]+r[j-i])?temp:(r[i] + r[j - i]) ;
// //		    count2++;
//         }
//         r[j] = (temp>p[j])?temp:p[j]   ;
//     }
// //    printf("\n自底向上重复次数%d。\n",count2);
//     printf("\n");
//     for(i=0;i<=n;i++){printf("r[%d]=%d \t",i,r[i]);}
//     printf("\n");
//     return r[n];
// }
// int main(){
// 	int p[]={0,1,5,8,9,10};
// 	int result_top=0;
// 	int result_bottom=0;
// 	int n=5;
// 	result_top=Top_Down_Cut_Rod(p,n);
// 	result_bottom=Bottom_Up_Cut_Rod(p,n);
// 	/*打印结果*/
// 	printf("\n --希赛教育：https://www.educity.cn/ -- \n");
// 	printf(" 自顶向下：%d英寸钢条最多能够卖出%d元！\n",n,result_top);
// 	printf("\n 自底向上：%d英寸钢条最多能够卖出%d元！\n",n,result_bottom);
// 	printf("\n --希赛教育：https://www.educity.cn/ -- \n");
// 	return 0;
// }
/* --回溯法：N皇后问题-- */

/*

    n-皇后问题是在n行n列的棋盘上放置n个皇后，使得皇后彼此之间不受攻击，其规则是任意两个皇后不在同一行、同一列和相同的对角线上。
    拟采用以下思路解决n-皇后问题：第i个皇后放在第i行。
    从第一个皇后开始，对每个皇后，从其对应行（第i个皇后对应第i行）的第一列开始尝试放置，若可以放置，确定该位置，考虑下一个皇后；若与之前的皇后冲突，则考虑下一列；
    若超出最后一列，则重新确定上一个皇后的位置。重复该过程，直到找到所有的放置方案。
*/
/*
常量和变量说明
    pos：一维数组，pos[i]表示第i个皇后放置在第i行的具体位置
    count：统计放置方案数
    i，j，k：变量
    N：皇后数
*/


#include <stdio.h>
#include <math.h>
#define N 4

/*判断第k个皇后目前放置位置是否与前面的皇后冲突*/
int isplace(int pos[], int k) {
    int i;
    for(i=1; i<k; i++) {
    	if(pos[i]==pos[k]|| fabs(i-k)  == fabs(pos[i] - pos[k])) {
		return 0;
	    }
    }
    return 1;
}
 
int main() {
    int i,j,count=1;
    int pos[N+1];

    //初始化位置
    for(i=1; i<=N; i++) {
        pos[i]=0;
    }
    j=1;
    printf("\n --希赛教育：https://www.educity.cn/ -- \n\n");
    while(j>=1) {
        pos[j]= pos[j]+1;
        /*尝试摆放第i个皇后*/
        while(pos[j]<=N&&!isplace(pos,j)) {
            pos[j]= pos[j]+1;
        }
         /*得到一个摆放方案*/
        if(pos[j]<=N&&j== N) {
            printf("方案%d: ",count++);
            for(i=1; i<=N; i++){
                printf("%d  ",pos[i]);
            }
            printf("\n");
        }
        /*考虑下一个皇后*/
        if(pos[j]<=N&&j<N) {
            j=j+1;
        } else{ //返回考虑上一个皇后
            pos[j]=0;
            j=j-1;
        }
    }
    printf("\n --希赛教育：https://www.educity.cn/ -- \n");
    return 1;
}

// /* --2017年上半年软件设计师考试下午真题试题四-- */

// /* --分治法：假币问题-- */

// /*
// 假币问题：有n枚硬币，其中有一枚是假币，已知假币的重量较轻。现只有一个天平，要求用尽量少的比较次数找出这枚假币。
// 【分析问题】
// 将n枚硬币分成相等的两部分:
// (1)当n为偶数时，将前后两部分，即 1...n/2和n/2+1...0，放在天平的两端，较轻的一端里有假币，继续在较轻的这部分硬币中用同样的方法找出假币:
// (2)当n为奇数时，将前后两部分，即1..(n -1)/2和(n+1)/2+1...0，放在天平的两端，较轻的一端里有假币，继续在较轻的这部分硬币中用同样的方法找出假币；若两端重量相等，则中间的硬币，即第 (n+1)/2枚硬币是假币。
// */

// /*
// 代码说明：
// 下面是算法的C语言实现，其中:
// coins[]： 硬币数组
// first，last：当前考虑的硬币数组中的第一个和最后一个下标
// */

// #include <stdio.h>
 
// int getCounterfeitCoin(int coins[],int first,int last)
// {
//     int firstSum = 0, lastSum = 0;
//     int i;
//     if(first==last-1){        /*只剩两枚硬币*/
//     if(coins[first] < coins[last])
//         return first;
//         return last;
//     }
 
//     if((last - first + 1) % 2 ==0){        /*偶数枚硬币*/
//         for(i = first;i <first + (last-first) / 2 + 1;i++){
//             firstSum+= coins[i];
//         }
//         for(i=first + (last-first) / 2 + 1;i < last +1;i++){
//             lastSum += coins[i];
//         }
//         if(firstSum<lastSum){
//             return getCounterfeitCoin(coins,first,first+(last-first)/2);
//         }else{
//             return getCounterfeitCoin(coins,first+(last-first)/2+1,last);
//         }
//     }
//     else{       /*奇数枚硬币*/
//         for(i=first;i<first+(last-first)/2;i++){
//             firstSum+=coins[i];
//         }
//         for(i=first+(last-first)/2+1;i<last+1;i++){
//             lastSum+=coins[i];
//         }
//         if(firstSum<lastSum){
//             return getCounterfeitCoin(coins,first,first+(last-first)/2-1);
//         }else if(firstSum>lastSum){
//             return getCounterfeitCoin(coins,first+(last-first)/2-1,last);
//         }else{
//             return(first+(last-first)/2);
//         }
//      }
// }

// int main(){
//     int coins[]={2,2,2,1,2,2,2,2};
//     int feitCoin=-1;
//     feitCoin=getCounterfeitCoin(coins,0,7);

// 	/*打印结果*/
//  	printf("\n --希赛教育：https://www.educity.cn/ -- \n");
//     printf("\n第%d个硬币为假币！\n",feitCoin+1);
// 	printf("\n --希赛教育：https://www.educity.cn/ -- \n");
//     return 0;
    
// }

