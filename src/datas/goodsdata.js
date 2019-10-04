let goodsList=[
        { id: 1, title: "地宝T5 Plus",title1:"以旧换新 高配新品", price: 2999, pic: require("../assets/imgs/shouye/b-1.png") },
        { id: 2, title: "地宝DN520", title1:"以旧换新 高配新品", price:2699, pic: require("../assets/imgs/shouye/b-2.png") },
        { id: 3, title: "窗宝W880",title1:"以旧换新 高配新品" ,price: 2499, pic: require("../assets/imgs/shouye/b-3.png") },
        { id: 4, title: "地宝DJ65",title1:"视觉导航新品 全面升级", price: 1999, pic: require("../assets/imgs/shouye/b-4.png") },
      ]
let  goodsList1=[
    { id: 1, title: "T5 Max",title1:"重磅新品 革新升级", price: 2899, pic: require("../assets/imgs/shouye/d1.png") },
    { id: 2, title: "DJ35",title1:"热销爆款 能看慧思考", price: 1699, pic: require("../assets/imgs/shouye/d2.png") },
    { id: 3, title: "DN55",title1:"激光扫描 全局规划", price: 2399, pic: require("../assets/imgs/shouye/d3.png") },
    { id: 4, title: "N5 Fun",title1:"视觉导航 规划升级", price: 1899, pic: require("../assets/imgs/shouye/d4.png") },
    { id: 5, title: "T5 Max",title1:"重磅新品 革新升级", price: 2899, pic: require("../assets/imgs/shouye/d5.png") },
    { id: 6, title: "DJ35",title1:"热销爆款 能看慧思考", price: 1699, pic: require("../assets/imgs/shouye/d6.png") },
    { id: 7, title: "DN55",title1:"激光扫描 全局规划", price: 2399, pic: require("../assets/imgs/shouye/d7.png") },
    { id: 8, title: "N5 Fun",title1:"视觉导航 规划升级", price: 1899, pic: require("../assets/imgs/shouye/d8.png") },

]
let sortList = [
    { "id": 1, "pic": require("../assets/imgs/parts/640.jpg"), "price": "10", "title": "过滤海帕 1个 地宝魔镜/魔镜S/灵犀系列配件 高效过滤网HEPA", "descp": "适用于地宝魔镜/魔镜S/灵犀/天天/幻影/CR120/CR121/CR540", "sale": "41069", "comment": "10871" },
    { "id": 2, "pic": require("../assets/imgs/parts/641.png"), "price": "24", "title": "边刷 1对 魔镜/魔镜S/灵犀专用配件", "descp": "适用于地宝魔镜/魔镜S/灵犀/天天/CR120/CR121/CR540", "sale": "24629", "comment": "10517" },
    { "id": 3, "pic": require("../assets/imgs/parts/642.png"), "price": "80", "title": "滚刷 1个 地宝DD35/朵朵S/朵朵/DE3配件", "descp": "适用于地宝DD35/DD33/朵朵/晶晶/随心/朵朵S/DR95/天E/芯E/DT8系列/DM8系列/DR9系", "sale": "21711", "comment": "15399" },
    { "id": 4, "pic": require("../assets/imgs/parts/643.png"), "price": "12", "title": "抹布 1块 地宝魔镜系列专用配件（老版本）", "descp": "适用于老版本的地宝魔镜S/金睿/灵犀", "sale": "21477", "comment": "5413" },
    { "id": 5, "pic": require("../assets/imgs/parts/644.png"), "price": "20", "title": "抹布 1块 地宝朵朵/晶晶/随心/朵朵S配件 （带包角）干湿分离渗水抹布", "descp": "适用于地宝朵朵（老版本）/晶晶/随心/朵朵S（老版本）/天E/芯E/DT8系列", "sale": "20440", "comment": "6011" },
    { "id": 6, "pic": require("../assets/imgs/parts/645.png"), "price": "24", "title": "边刷 1对 地宝DJ35/DD35/朵朵S/倾城/DK3/DK4系列配件", "descp": "适用于地宝DJ35、DD35、DD33、DE35、DE33、DD35E、DD56、DG36、DB35、D36E、DM86、TCR360、 D36A、D36B、D36C、D36F、DB53、DM81、DT85、DT83、BFD-yv、BFD-yt、DT85G、DT87G、DN650、 DR92、DR95、DW700、DG710、DG711、DG716、DR98、DK33、DK35、DK36、DK39、DK41、DK43", "sale": "12719", "comment": "7713" },
    { "id": 7, "pic": require("../assets/imgs/parts/646.png"), "price": "1", "title": "魔术贴 1片 地宝朵朵/朵朵S/晶晶/DR95/倾城专用配件", "descp": "适用于地宝DT85G\DT85\DT83\DR92\DR95\DW700\DG710", "sale": "11438", "comment": "2157" },
    { "id": 8, "pic": require("../assets/imgs/parts/647.png"), "price": "2", "title": "过滤海绵 1个 科沃斯扫地机器人地宝DD35/DJ35/DN55专用配件", "descp": "预计9月下旬到货，适用于地宝DD35,DD33,DD56,DD35E,DJ35", "sale": "11010", "comment": "3923" },
    { "id": 9, "pic": require("../assets/imgs/parts/648.png"), "price": "12", "title": "抹布 1块 地宝魔镜S/灵犀（WIFI版）专用配件自渗水拖地布", "descp": "适用于带WIFI功能的地宝魔镜S/灵犀/金睿", "sale": "9992", "comment": "3365" },
    { "id": 10, "pic": require("../assets/imgs/parts/649.png"), "price": "100", "title": "窗宝清洁液 2L装-1瓶 窗宝全系列专用配件", "descp": "适用于窗宝全系，产品保质期为2年", "sale": "9726", "comment": "2469" },
    { "id": 11, "pic": require("../assets/imgs/parts/650.png"), "price": "3.5", "title": "过滤海绵 1块 地宝朵朵/朵朵S/DW700系列配件", "descp": "适用于地宝DT85/DT83/BFD-yv-GW(天e）/BFD-yt-US（芯e）/朵朵S/DW700", "sale": "9087", "comment": "3757" },
    { "id": 12, "pic": require("../assets/imgs/parts/651.png"), "price": "6", "title": "初级滤网 1个 魔镜/灵犀/魔镜S系列配件 初效过滤网", "descp": "适用于地宝魔镜/天天/幻影/魔镜S/灵犀/金睿", "sale": "7998", "comment": "3574" },
    { "id": 13, "pic": require("../assets/imgs/parts/652.png"), "price": "20", "title": "滚刷盖板 1个 地宝朵朵/朵朵S系列配件（老版本、配合非浮动式滚刷使用）", "descp": "适用于地宝DT85/DT83/BFD-yv-GW(天e）/BFD-yt-US（芯e）/DT85G（老版本、配合非浮动式滚刷使用）", "sale": "7099", "comment": "3767" },
    { "id": 14, "pic": require("../assets/imgs/parts/653.png"), "price": "60", "title": "抹布 3块 地宝倾城/朵朵S（新版）/DE35/DE55/DE53配件", "descp": "适用于地宝倾城/倾心/DG716/小睿/DW700/朵朵（新版）/朵朵S（新版）/DE35/DE33/DE55/DE53", "sale": "6885", "comment": "4455" },
    { "id": 15, "pic": require("../assets/imgs/parts/654.png"), "price": "12", "title": "抹布 1块 地宝琉璃/莹石/魔钻/CEN66/新版可可/DL3系列抹布", "descp": "适用于地宝琉璃/莹石/魔钻/CEN66系列/新版可可/魔戒/布丁/DG800/DG801/DG805/DL33/DL35", "sale": "6779", "comment": "1682" }

]

    // 导出
module.exports={goodsList,goodsList1}  