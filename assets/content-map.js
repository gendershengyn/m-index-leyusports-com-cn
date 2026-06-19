// assets/content-map.js
// Content map and search utility for site documentation

const siteConfig = {
  baseUrl: "https://m-index-leyusports.com.cn",
  brand: "乐鱼体育",
  version: "1.2.0"
};

const contentSections = [
  {
    id: "home",
    title: "首页",
    path: "/",
    keywords: ["乐鱼体育", "体育平台", "主页", "首页"],
    description: "乐鱼体育官方网站首页，提供体育赛事资讯与导航。"
  },
  {
    id: "sports",
    title: "体育赛事",
    path: "/sports",
    keywords: ["足球", "篮球", "网球", "电竞", "赛事直播", "乐鱼体育"],
    description: "浏览各类体育赛事，包括足球、篮球、网球及电子竞技。"
  },
  {
    id: "live",
    title: "直播",
    path: "/live",
    keywords: ["直播", "体育直播", "乐鱼体育", "实时赛事"],
    description: "实时体育赛事直播，不错过任何精彩瞬间。"
  },
  {
    id: "results",
    title: "赛果",
    path: "/results",
    keywords: ["赛果", "比分", "比赛结果", "乐鱼体育"],
    description: "查看历史比赛结果与最新比分数据。"
  },
  {
    id: "promotions",
    title: "优惠活动",
    path: "/promotions",
    keywords: ["活动", "优惠", "乐鱼体育", "促销"],
    description: "乐鱼体育最新优惠与活动信息汇总。"
  },
  {
    id: "support",
    title: "帮助中心",
    path: "/support",
    keywords: ["帮助", "客服", "FAQ", "乐鱼体育", "常见问题"],
    description: "获取乐鱼体育平台使用帮助与常见问题解答。"
  }
];

function generateContentMap(sections) {
  const map = {};
  sections.forEach(section => {
    map[section.id] = {
      title: section.title,
      url: siteConfig.baseUrl + section.path,
      keywords: section.keywords,
      description: section.description
    };
  });
  return map;
}

function searchContent(query, sections) {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];

  const results = [];
  sections.forEach(section => {
    const matchTitle = section.title.toLowerCase().includes(lowerQuery);
    const matchDescription = section.description.toLowerCase().includes(lowerQuery);
    const matchKeywords = section.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));

    if (matchTitle || matchDescription || matchKeywords) {
      results.push({
        id: section.id,
        title: section.title,
        url: siteConfig.baseUrl + section.path,
        matched: true
      });
    }
  });
  return results;
}

function renderSearchResults(query) {
  const results = searchContent(query, contentSections);
  if (results.length === 0) {
    return `<div class="search-no-result">未找到与 "${query}" 相关的内容。</div>`;
  }

  let html = '<ul class="search-results-list">';
  results.forEach(item => {
    html += `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`;
  });
  html += '</ul>';
  return html;
}

// Example usage (uncomment to test in browser console)
// console.log(generateContentMap(contentSections));
// console.log(searchContent("乐鱼", contentSections));
// document.body.innerHTML = renderSearchResults("乐鱼体育");

export { siteConfig, contentSections, generateContentMap, searchContent, renderSearchResults };