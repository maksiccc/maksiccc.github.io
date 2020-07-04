
if (theme.postInfo.totalCount) { 
	document.getElementById("container_wordcount").innerHTML = "&nbsp; < i class = \"fas fa-chart-area\" > < /i>&nbsp;未加密文章总字数:&nbsp;<span class = \"white-color\" > " + totalcount(site) +" < /span>&nbsp;字 ";
} 


if (theme.busuanziStatistics && theme.busuanziStatistics.enable) { 


	if (theme.busuanziStatistics && theme.busuanziStatistics.totalTraffic) { 
	"| & nbsp; < i class = \"far fa-eye\" > < /i>&nbsp;总访问量:&nbsp;<span id=\"busuanzi_value_site_pv\" class = \"white-color\" > < /span>&nbsp;次 </span>"
    } 
	if (theme.busuanziStatistics && theme.busuanziStatistics.totalNumberOfvisitors) { 

	|& nbsp; < i class = "fas fa-users" > < /i>&nbsp;总访问人数:&nbsp;<span id="busuanzi_value_site_uv" class = "white-color" > < /span>&nbsp;人 </span>
	
	}

}


document.getElementById("busuanzi_container_site_pv").innerHTML = ;
document.getElementById("busuanzi_container_site_uv").innerHTML = ;