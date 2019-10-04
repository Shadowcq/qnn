<template>
    <div role="tabpanel" id="messages">

        <div class="comt-xlist" id="comt_xlist">
            <div class="row">
                <!--总评分-->
                <div class="col-md-4 col-xs-4 rate-score">
                    <p class="star">总评分：
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star-empty"></span>
                        <span class="red">99%好评</span>
                    </p>
                    <p>
                        <span class="red">7080</span>人已评
                    </p>
                </div>
                <!--买家印象-->
                <div class="col-md-8 col-xs-8 rate-tags">
                    <div class="label">买家印象</div>
                    <div class="tag-list">
                        <span class="good-comment">发货快(462)</span>
                        <span class="good-comment">官网值得信赖(390)</span>
                        <span class="good-comment">服务好(322)</span>
                        <span class="good-comment">清洁效果好(299)</span>
                        <span class="good-comment">包装不错(217)</span>
                        <span class="good-comment">性价比高(195)</span>
                        <span class="good-comment">操作简单(147)</span>
                        <span class="good-comment">质量好(105)</span>
                        <span class="good-comment">噪音小(70)</span>
                    </div>
                </div>
            </div>

            <div class="comment-filter">
                <label><input type="radio" name="filter" value="0">全部</label>
                <label class="current"><input type="radio" name="filter" value="3" checked="checked">有内容</label>
                <label><input type="radio" name="filter" value="1">有晒图</label>
                <div class="fr">
                    <select class="order-by">
                        <option selected="" value="recommend">推荐排序</option>
                        <option value="time">时间排序</option>
                    </select>
                </div>
            </div>

            <ul class="g-xlist">
                <li>
                    <div class="u-avatar">
                        <img src="../../assets/imgs/hotSall/697261982.jpg" />
                        <h5>E***2</h5>
                    </div>
                    <div class="comt-detail">
                        <div class="rate-tags">
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star-empty"></span>
                            <span class="good-comment">官网值得信赖</span>
                        </div>
                        <div class="c-hb">
                            <div class="c-body">
                                <div class="c-content">东西很好，宝宝很喜欢，一直追在后面</div>
                                <div class="c-time">2019-08-30</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="u-avatar"><img src="../../assets/imgs/hotSall/697261982.jpg" />
                        <h5>E***1</h5>
                    </div>
                    <div class="comt-detail">
                        <div class="rate-tags">
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star-empty"></span>
                            <span class="good-comment">发货快</span>
                            <span class="good-comment">官网值得信赖</span>
                            <span class="good-comment">服务好</span>
                            <span class="good-comment">清洁效果好</span>
                            <span class="good-comment">性价比高</span>

                        </div>
                        <div class="c-hb">
                            <div class="c-body">
                                <div class="c-content">买机器人时心大心细，听别人说不好用，搞不干净，又看了许多评价，并和其他型号做了比较，客服也很好，最后选择DJ35，收货后立刻试了，非常满意，打扫的非常干净，还推荐给朋友，看了一下价钱比我买时贵了，真的值得购买。</div>
                                <div class="comt-thumbs act-tumbs">
                                    <a class="video-box" href="javascript:void(0);">
                                        <img src="../../assets/imgs/hotSall/about1.png" />
                                    </a>
                                </div>
                                <div class="c-time">2019-08-24</div>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">1</a>
                    </li>
                    <li>
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">3</a>
                    </li>
                    <li>
                        <a href="#">4</a>
                    </li>
                    <li>
                        <a href="#">5</a>
                    </li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    <!--<li>
        												<a href="#"></a>
        											</li>
        											<li>
        												<a href="#">跳转</a>
        											</li>-->
                </ul>
            </nav>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
