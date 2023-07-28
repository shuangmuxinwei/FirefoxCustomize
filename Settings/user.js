/******
*    name: shuangmuxinwei user.js
*    date: 28 July 2023
*    version: 113
*    url: https://github.com/shuangmuxinwei/FirefoxCustomize/tree/main/Settings

* 免责声明：
  1、本user.js文件，参考了arkenfox user.js、pyllyukko user.js、BETTERFOX user.js、RunningCheese user.js、CopyCat user.js及其他的网络资源，在此表示感谢。
  具体参考链接见https://github.com/shuangmuxinwei/FirefoxCustomize/tree/main
  2、本user.js文件，仅限于个人的使用分享，不一定完全适合所有人的使用环境。所以，使用前，请自行参考注释取舍。
  3、本参数汇总，提供详细注释版、简易注释版两个user.js文件。详细注释版，提供中英注释；简易注释版，一般保留简要的中文注释。
  4、部分参数值涉及路径，如“d:\\Program Files\\EmEditor\\EmEditor.exe”等，需要修改为用户自己本电脑的路径。否则，参数失效。
  5、本user.js文件参数的顺序，依照设置页面about:preferences的选项顺序依次排列，如“常规>启动”“常规>标签页”等。其余相关的参数，则尽量归类于设置页面选项之后或者文件最末。
  6、部分参数设置和注释说明，由于本人的知识和经验所限，不一定正确。欢迎指正。
******/



/*==========常规>启动==========*/
// 设置启动的开始页面。1=主页；3=打开先前的窗口和标签页
user_pref("browser.startup.page", 1);
// 禁止火狐升级后跳转至介绍新版本特性的页面
user_pref("browser.startup.homepage_override.mstone", "ignore");
// 禁止火狐升级后跳转至介绍新版本特性的页面
user_pref("startup.homepage_override_url", "");
// 禁止火狐首次启动时跳转页面
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
// 禁止启动时显示空白页，加快启动速度
user_pref("browser.startup.blankWindow", false);
// 在加载libxul之前，显示skeleton UI窗口
user_pref("browser.startup.preXulSkeletonUI", false);
// 取消默认浏览器检查
user_pref("browser.shell.checkDefaultBrowser", false);


/*==========常规>标签页==========*/
// 取消“按下Ctrl+Tab时，依照最近使用顺序循环切换标签页”
user_pref("browser.ctrlTab.sortByRecentlyUsed", false);
// 同时打开多个标签页时不提醒
user_pref("browser.tabs.warnOnOpen", false);
// 关闭所有标签页时不提醒
user_pref("browser.tabs.warnOnClose", false);
// 关闭多个标签页时不提醒
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
// 关闭最后一个标签时不关闭浏览器
user_pref("browser.tabs.closeWindowWithLastTab", false);
// 禁止任务栏显示标签页预览图
user_pref("browser.taskbar.previews.enable", false);
// 关闭常用跳转列表
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
// 禁止任务栏火狐图标右键显示最近条目：设置——>个性化——>开始——>在开始屏幕或任务栏的跳转列表中显示最近打开的项
/*=====身份标签页CONTAINERS=====*/
// 启用身份标签页及其用户界面
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
// 左键单击+按钮时，显示身份标签页菜单
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
/*=====标签页打开方式=====*/
// 在新标签页打开链接
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
// 全屏模式时，强制在新标签页打开设定在新窗口打开的链接
user_pref("browser.link.open_newwindow.disabled_in_fullscreen", true);
// 在新标签页打开外部链接
user_pref("browser.link.open_newwindow.override.external", -1);
// 后台打开外部链接
user_pref("browser.tabs.loadDivertedInBackground", true);
// 在新标签页打开书签
user_pref("browser.tabs.loadBookmarksInTabs", true);
// 后台打开书签和历史记录
user_pref("browser.tabs.loadBookmarksInBackground", true);
// 按住Ctrl键单击或中键单击书签不关闭菜单
user_pref("browser.bookmarks.openInTabClosesMenu", false);
// 在新标签页打开地址栏网址
user_pref("browser.urlbar.openintab", true);
// 后台打开新标签页
user_pref("browser.tabs.loadInBackground", true);
// 中键打开新标签页
user_pref("browser.tabs.opentabfor.middleclick", true);
// 禁用鼠标中键打开剪贴板中的链接
user_pref("middlemouse.contentLoadURL", false);
// 禁用中键粘贴、中键定位滚动条位置
user_pref("middlemouse.paste", false);
user_pref("middlemouse.contentLoadURL", false);
user_pref("middlemouse.scrollbarPosition", false);
// 紧邻当前标签页打开当前标签页中的链接
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
// 紧邻当前标签页打开
user_pref("browser.tabs.insertAfterCurrent", true);
// 标签栏鼠标滚轮切换标签页
user_pref("toolkit.tabbox.switchByScrolling", true);
// 双击关闭标签
user_pref("browser.tabs.closeTabByDblclick", true);


/*==========常规>语言与外观>网站外观==========*/
// 网站深色配色方案：深色
user_pref("layout.css.prefers-color-scheme.content-override", 0);
// 禁止已访问链接变色
user_pref("layout.css.visited_links_enabled", false);


/*==========常规>语言与外观>颜色==========*/
// 禁止使用系统颜色
user_pref("browser.display.use_system_colors", false);
// 为链接添加下划线
user_pref("browser.underline_anchors", true);
// 在所有页面选择自定义的颜色覆盖页面指定的颜色
user_pref("browser.display.document_color_use", 2);


/*==========常规>语言与外观>字体==========*/
// 禁止网站选择字体
// user_pref("browser.display.use_document_fonts", 0);
// 禁用SVG OpenType字体的渲染
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// disable graphite
// user_pref("gfx.font_rendering.graphite.enabled", false);


/*==========常规>语言与外观>全局缩放==========*/
// 全局缩放，不单独缩放文本
user_pref("browser.zoom.full", true);


/*==========常规>语言与外观>语言==========*/
// 设置浏览器语言
user_pref("intl.locale.requested", "en-US,zh-CN");
// 设置网页显示的首选语言
user_pref("intl.accept_languages", "zh-cn,zh,en-us,en,zh-tw,zh-hk");
// 输入时不检查拼写
user_pref("layout.spellcheckDefault", 0);


/*==========常规>文件与应用程序>下载==========*/
// 设置浏览器默认下载目录
user_pref("browser.download.dir", "c:\\Users\\shadow\\Desktop");
// 下载文件保存在最近下载目录
user_pref("browser.download.folderList", 2);
// 总是询问保存文件的位置
user_pref("browser.download.useDownloadDir", false);
// 取消下载按钮自动隐藏
user_pref("browser.download.autohideButton", false);
// 使用FF98+新式下载流程，跳过下载确认对话框
user_pref("browser.download.improvements_to_download_panel", true);
// 禁止每次下载时工具栏自动打开下载面板浮动控件
user_pref("browser.download.alwaysOpenPanel", false);
// 禁用下载对话框的“用……打开”，程序数据隔离
user_pref("browser.download.forbid_open_with", true);
// 禁止将下载文件添加至系统“最近使用的文档”列表
user_pref("browser.download.manager.addToRecentDocs", false);
// 从Content-Disposition头信息检索文件名的延时
// user_pref("browser.download.saveLinkAsFilenameTimeout", 0);


/*==========常规>文件与应用程序>应用程序==========*/
// 禁用PDFJS和PDFJS脚本
user_pref("pdfjs.disabled", true); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]
// 始终询问如何处理新类型文件，启用用户交互以确保安全性
user_pref("browser.download.always_ask_before_handling_new_types", true);


/*==========常规>文件与应用程序>数字版权管理（DRM）==========*/
// 禁止播放采用DRM的内容
user_pref("media.eme.enabled", false);
// 隐藏“播放采用DRM的内容”的设置
// user_pref("browser.eme.ui.enabled", false);
// 禁用GMP（Gecko媒体插件）
user_pref("media.gmp-provider.enabled", false);
// 更新GMP（Gecko媒体插件）安装/更新的服务地址Update service URL for GMP install/updates
// user_pref("media.gmp-manager.url", "");
// 禁用Widevine内容解密模块
user_pref("media.gmp-widevinecdm.enabled", false);
// 去除播放DRM内容黄条提示
user_pref("media.gmp-widevinecdm.visible", false);
// 禁用OpenH264视频编码器disable the OpenH264 Video Codec. Firefox will make use of the OpenH264 codec provided by Cisco in order to support the H.264 video codec in WebRTC, a technology allowing for peer-to-peer video communication on the web. The OpenH264 codec is not distributed with Firefox but gets downloaded at the first start of Firefox. In case you want to prohibit that, you will have to preconfigure the browser and set the media.gmp-gmpopenh264.enabled preference to false. This is the bundled codec used for video chat in WebRTC.
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.visible", false);
/*=====WebRTC=====*/
// 禁用WebRTC，防止泄露私人IP
user_pref("media.peerconnection.enabled", false);
// 在代理内部强制WebRTC
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// 强制使用单一网络接口生成ICE候选
user_pref("media.peerconnection.ice.default_address_only", true);
// 强制将私有IP排除在ICE候选者之外
// user_pref("media.peerconnection.ice.no_host", true);


/*==========常规>更新==========*/
// 禁止更新服务
user_pref("app.update.service.enabled", false);
// 禁止火狐使用Win系统服务Background Intelligent Transfer Service下载更新
user_pref("app.update.BITS.enabled", false);
// 火狐检查更新的间隔（以秒为单位）
user_pref("app.update.background.interval", 86400);
// 火狐下载更新时，提示用户
user_pref("app.update.notifyDuringDownload", true);
// 禁止火狐自动安装更新[WIN系统无效]
user_pref("app.update.auto", false);
// 禁止火狐后台自动安装更新
user_pref("app.update.background.enabled", false);
// 更新服务下载安装包后，询问是否应用更新
user_pref("app.update.staging.enabled", false);


/*==========常规>性能==========*/
// 不使用推荐的性能设置
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
// 内容进程限制为2
user_pref("dom.ipc.processCount", 2);
// 启用硬件加速
user_pref("layers.acceleration.disabled", false);
// 开启direct2d，用于硬件加速
// user_pref("gfx.direct2d.disabled", true);


/*==========常规>浏览==========*/
// 取消自动滚屏
user_pref("general.autoScroll", false);
// 取消平滑滚动
user_pref("general.smoothScroll", false);
// 取消“在需要时显示触摸键盘”
user_pref("ui.osk.enabled", false);
// 取消“使用键盘方向键浏览网页（键盘浏览模式）”
user_pref("accessibility.browsewithcaret", false);
// 在文本框外输入，则在页面中查找文本
user_pref("accessibility.typeaheadfind", true);
// 启用画中画视频控件
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);
// 取消“通过键盘、耳机或虚拟界面控制媒体”
user_pref("media.hardwaremediakeys.enabled", false);



/*==========主页>新窗口和标签页==========*/
// 设置主页和新窗口的页面
user_pref("browser.startup.homepage", "chrome://browser/content/places/places.xhtml");
// 设置新标签页页面：空白页
user_pref("browser.newtabpage.enabled", false);
// 禁用新标签页网址预加载
user_pref("browser.newtab.preload", false); 


/*==========主页>Firefox主页内容==========*/
// 禁止主页显示网络搜索、快捷方式（保存或访问过的网站）、赞助商网站
user_pref("browser.newtabpage.activity-stream.showSearch", false); 
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+]
// 禁用火狐主页（活动流）的赞助商内容
user_pref("browser.newtabpage.activity-stream.showSponsored", false); 
// 火狐主页快捷方式1行显示
user_pref("browser.newtabpage.activity-stream.topSitesRows", 1);
// 禁止主页显示近期访问的网站与内容精选（包括访问过的页面、书签、最近下载）
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
// 火狐主页近期动态1行显示
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 1);
// 禁止主页显示Mozilla和Firefox的使用窍门与快讯
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
// 清除默认快捷方式网站
user_pref("browser.newtabpage.activity-stream.default.sites", "");
// 在火狐Quantum中禁用“Pocket 推荐”
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
// 取消保存在Pocket的页面
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); 
// 禁止浏览时推荐扩展、新功能
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
// 禁用火狐主页（活动流）遥测
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
// 禁止已访问页面的截图，删除配置文件夹的thumbnails文件
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
// 禁用除browser.newtabpage.activity-stream.asrouter.provider.message-groups以外的消息系统
// user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
// user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
// user_pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "");



/*==========搜索>搜索栏==========*/
// 地址栏和搜索栏合并
user_pref("browser.search.widget.inNavBar", false);
// 设置默认搜索引擎
user_pref("browser.urlbar.placeholderName", "Bing");
// 设置页面显示“为隐私窗口选择不同的默认搜索引擎”的隐藏选项
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
// 为隐私窗口选择不同的默认搜索引擎
user_pref("browser.search.separatePrivateDefault", true);
// 设置隐私浏览模式的默认搜索引擎
user_pref("browser.urlbar.placeholderName.private", "Bing");


/*==========搜索>搜索建议==========*/
// 禁用搜索建议
user_pref("browser.search.suggest.enabled", false);
// 禁止在地址栏结果中显示搜索建议
user_pref("browser.urlbar.suggest.searches", false);
// 在地址栏显示的结果中，不将搜索建议显示在浏览历史上方
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
// 禁止在隐私窗口中显示搜索建议
user_pref("browser.search.suggest.enabled.private", false);
// 地址栏不显示赞助的快速建议结果
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
// 地址栏不显示非赞助的快速建议结果
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]


/*==========搜索>搜索引擎==========*/
// 隐藏某些搜索引擎
// user_pref("browser.search.hiddenOneOffs", "百度,亚马逊,Google");
/*==========搜索>其他选项==========*/
// 在新标签页打开搜索
user_pref("browser.search.openintab", true);
// 前台打开搜索
user_pref("browser.search.context.loadInBackground", false);
// 不自动升级搜索引擎
user_pref("browser.search.update", false);



/*==========隐私>增强型跟踪保护==========*/
// 启用增强跟踪保护自定义模式
user_pref("browser.contentblocking.category", "custom");
// 自定义增强跟踪保护设置，拦截跨站跟踪性Cookie，并隔离其余跨站Cookie
user_pref("network.cookie.cookieBehavior", 5);
// 在所有窗口启用跟踪保护
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
// 启用各种增强跟踪保护列表
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// 拦截加密货币挖矿程序
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
// 拦截数字指纹跟踪程序
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
// 启用增强跟踪保护严格模式后开启的参数
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
user_pref("privacy.annotate_channels.strict_list.enabled", true);
user_pref("privacy.partition.network_state.ocsp_cache", true);
// 启用查询参数剥离功能
user_pref("privacy.query_stripping.enabled", true);
// 在隐私浏览模式启用查询参数剥离功能
user_pref("privacy.query_stripping.enabled.pbmode", true);
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
/*=====隐私>增强型跟踪保护>Do Not Track=====*/
// 仅当火狐设置为拦截已知跟踪器时，向网站发送Do Not Track信号
user_pref("privacy.donottrackheader.enabled", false);


/*==========隐私>登录信息与密码==========*/
// 不保存网站的帐户名和密码
user_pref("signon.rememberSignons", false);
// 禁止自动填写用户名密码
user_pref("signon.autofillForms", false);
// 取消“建议并生成高强度密码
user_pref("signon.generation.enabled", false);
// 取消“网站密码外泄提醒”
user_pref("signon.management.page.breach-alerts.enabled", false);
// 不允许面向Microsoft账户（个人/工作/学校）的Windows单点登录
user_pref("network.http.windows-sso.enabled", false);
// 禁用密码管理器的无形式登录捕获
user_pref("signon.formlessCapture.enabled", false);
// 限制/禁用由子资源触发的HTTP认证凭证对话框[FF41+]，加强对潜在凭证钓鱼的防范
user_pref("network.auth.subresource-http-auth-allow", 1);
// 取消firefoxRelay
user_pref("signon.firefoxRelay.feature", "disable");


/*==========隐私>Cookie和网站数据、历史记录==========*/
// 关闭火狐时删除Cookie与网站数据
// user_pref("network.cookie.lifetimePolicy", 2);
/*==========隐私>历史记录==========*/
// 历史记录使用自定义设置
user_pref("privacy.history.custom", true);
// 不一律使用隐私浏览模式
user_pref("browser.privatebrowsing.autostart", false);
// 记住浏览和下载历史
user_pref("places.history.enabled", true);
// 禁用搜索和表单历史记录
user_pref("browser.formfill.enable", false);
// 火狐关闭时清除历史记录
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// 退出浏览器时清除浏览和下载历史
user_pref("privacy.clearOnShutdown.history", true);
// 退出浏览器时清除下载历史
user_pref("privacy.clearOnShutdown.downloads", true);
// 退出浏览器时清除登录状态
user_pref("privacy.clearOnShutdown.sessions", true);
// 退出浏览器时清除缓存
user_pref("privacy.clearOnShutdown.cache", true);
// 退出浏览器时清除表单和搜索历史
user_pref("privacy.clearOnShutdown.formdata", true);
// 退出浏览器时清除脱机网站数据
user_pref("privacy.clearOnShutdown.offlineApps", true);
// 退出浏览器时不清除Cookies
user_pref("privacy.clearOnShutdown.cookies", false);
// 退出浏览器时不清除站点设置
user_pref("privacy.clearOnShutdown.siteSettings", false);
// 退出浏览器时清除会话还原设置
// user_pref("privacy.clearOnShutdown.openWindows", true);



/*==========隐私>地址栏==========*/
// 地址栏结果禁止显示建议：浏览历史、书签、打开的标签页、快捷方式、搜索引擎
// user_pref("browser.urlbar.suggest.history", false);
// user_pref("browser.urlbar.suggest.bookmark", false);
// user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); 
// 禁用地址栏结果显示建议：搜索引擎
user_pref("browser.urlbar.suggest.engines", false);
// 禁止地址栏自动填充
user_pref("browser.urlbar.autoFill", false);
// 地址栏下拉列表显示的条目数量
user_pref("browser.urlbar.maxRichResults", 5);
// 地址栏输入无效网址时，禁止调用搜索引擎搜索
user_pref("keyword.enabled", false);
// 输入无效域名时，禁止域名猜测
user_pref("browser.fixup.alternate.enabled", false);
// 地址栏搜索单个字符串时，禁止DNS解析
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0); // [DEFAULT: 0 FF104+]
// 地址栏输入特定的关键词，将其视为有效的TLD，而非搜索
// user_pref("browser.fixup.domainwhitelist.localhost", true);
// 关键词自动跳转域名。地址栏输入webchat或pushbt，自动转换成域名http://webchat/和http://pushbt/
// user_pref("browser.fixup.domainwhitelist.pushbt", true);
// user_pref("browser.fixup.domainwhitelist.webchat", true);
// 禁止地址栏推测性连接
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// 复制网址时，禁止解码网址的非ASCII UTF-8符号
user_pref("browser.urlbar.decodeURLsOnCopy", false);
// 地址栏不截断显示网址
user_pref("browser.urlbar.trimURLs", false);


/*==========隐私>权限==========*/
/*=====定位权限=====*/
// 禁用定位权限
user_pref("permissions.default.geo", 2);
// 禁用位置感知浏览（地理定位）
user_pref("geo.enabled", false);
// 允许定位权限时，使用Mozilla地理位置服务替代谷歌
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
// 启用控制台的日志记录
// user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
// 禁用系统的地理定位服务
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]
// 禁用Mozilla基于特定地理位置选择搜索引擎
user_pref("browser.search.geoSpecificDefaults", false);
// 禁用区域更新
user_pref("browser.region.network.url", ""); // [FF78+]
user_pref("browser.region.update.enabled", false); // [[FF79+]
// 禁止地理定位查找以设置搜索引擎默认区域
user_pref("browser.search.region", "US"); 
/*=====摄像头、麦克风、通知、自动播放、虚拟现实权限=====*/
// 禁用摄像头权限
user_pref("permissions.default.camera", 2);
// 禁用麦克风权限
user_pref("permissions.default.microphone", 2);
// 禁用通知
user_pref("permissions.default.desktop-notification", 2);
// 阻止音频、视频自动播放
user_pref("media.autoplay.default", 5);
// 设置阻止自动播放的策略
// user_pref("media.autoplay.blocking_policy", 2);
// 禁止虚拟现实权限
user_pref("permissions.default.xr", 2);
// 禁用虚拟现实设备API
user_pref("dom.vr.enabled", false);
// 拦截弹出式窗口
user_pref("dom.disable_open_during_load", true);
// 当网站安装附加组件时提示警告
user_pref("xpinstall.whitelist.required", true);
// 禁用网站覆盖Firefox键盘快捷键
// user_pref("permissions.default.shortcuts", 2);
// 删除某些Mozilla域名的特殊权限
user_pref("permissions.manager.defaultsUrl", "");
// 删除网络频道白名单
user_pref("webchannel.allowObject.urlWhitelist", "");
// 禁用权限委托
user_pref("permissions.delegation.enabled", false);
/*=====视频全屏=====*/
// 禁用视频全屏，防止屏幕分辨率泄漏
// user_pref("full-screen-api.enabled", false);
// 过渡至全屏状态的黑屏超时（毫秒）
user_pref("full-screen-api.transition.timeout", 0);
// 进入全屏状态时，黑屏淡入的超时（毫秒）
user_pref("full-screen-api.transition-duration.enter", "0 0");
// 离开全屏状态时，从黑屏淡出的超时（毫秒）
user_pref("full-screen-api.transition-duration.leave", "0 0");
// 鼠标指针停留在顶部时，全屏提醒的警告框显示的延迟（毫秒）
user_pref("full-screen-api.warning.delay", 0);
// 全屏提醒的警告框在滑出之前停留在屏幕上的时间（毫秒）
user_pref("full-screen-api.warning.timeout", 0);
/*=====窗口=====*/
// 防止脚本移动窗口、调整窗口大小
user_pref("dom.disable_window_move_resize", true);
// 禁止晃动屏幕
user_pref("dom.vibrator.enabled", false);
// 限制可能导致弹出窗口的事件
// user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
// 禁止关闭页面时弹出“确认离开”对话框
user_pref("dom.disable_beforeunload", true);
// 禁止网站设置浏览器右键菜单
// user_pref("dom.event.contextmenu.enabled", false);
// 禁用剪贴板API
// user_pref("dom.event.clipboardevents.enabled", false);
// 禁用Javascript脚本设置的“剪切/复制到剪贴板”功能
// user_pref("dom.allow_cut_copy", false);
// 禁止Linux上自动将所选内容发送到剪贴板
// user_pref("clipboard.autocopy", false); 
// 禁用DOM（文档对象模型）存储
// user_pref("dom.storage.enabled", false);
// 禁用service worker缓存和缓存存储
// user_pref("dom.caches.enabled", false);
// 禁用存储API
// user_pref("dom.storageManager.enabled", false);
// 禁用存储访问API
// user_pref("dom.storage_access.enabled", false);
// 启用下一代本地存储
// user_pref("dom.storage.next_gen", true);


/*==========隐私>数据收集与使用==========*/
/*=====运行状况报告=====*/
// 禁用运行状况报告，禁止发送技术信息及交互数据
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
// 禁用数据提交
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// 禁用个性化扩展推荐
user_pref("browser.discovery.enabled", false);
/*=====实验=====*/
// 禁止火狐安装并运行实验项目
user_pref("app.shield.optoutstudies.enabled", false);
// 禁用Normandy/Shield遥测
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
/*=====崩溃报告=====*/
// 禁用发送积压的崩溃报告
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
// 禁用崩溃报告
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
// 火狐每夜版默认开启，其余版本默认关闭
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+]
/*=====遥测=====*/
// 禁止遥测
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); 
// 用以接收遥测ping数据的服务器
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
// 禁用后台挂起报告程序
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] 
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
// disable Telemetry Coverage
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
// 禁用PingCentre遥测（用于几个系统插件）
user_pref("browser.ping-centre.telemetry", false);
// 禁用默认浏览器代理（似只在XP上生效）
user_pref("default-browser-agent.enabled", false);


/*==========安全>欺诈内容和危险软件防护==========*/
// 开启安全浏览功能
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
// 禁用安全浏览功能查杀下载文件
user_pref("browser.safebrowsing.downloads.enabled", false);
// 禁用安全浏览功能查杀下载文件（远程）
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
// user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth
// 禁用安全浏览功能检查流氓或不寻常的软件
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// 禁用安全浏览警告页面的“忽略此警告”
// user_pref("browser.safebrowsing.allowOverride", false);


/*==========安全>证书==========*/
// 不查询OCSP响应服务器确认证书当前是否有效
user_pref("security.OCSP.enabled", 0);
// Enable OCSP Stapling support
// user_pref("security.ssl.enable_ocsp_stapling", true);
// 将OCSP获取失败（non-stapled）设置为硬失败
user_pref("security.OCSP.require", true);
// 禁用Win8.1的微软家庭安全证书
user_pref("security.family_safety.mode", 0);
// 启用严格的PKP（公钥锁定）
user_pref("security.cert_pinning.enforcement_level", 2);
// 启用CRLite
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
// 禁用中间证书缓存
// user_pref("security.nocertdb", true);


/*==========安全>HTTPS-Only模式==========*/
// 所有窗口启用HTTPS-Only模式
// user_pref("dom.security.https_only_mode", true);
// 仅在隐私窗口启用HTTPS-Only模式
// user_pref("dom.security.https_only_mode_pbm", true);
// 为本地资源启用仅HTTPS模式
// user_pref("dom.security.https_only_mode.upgrade_local", true);
// 禁用HTTP后台请求
user_pref("dom.security.https_only_mode_send_http_background_request", false);
// 禁用https页面不安全的活动内容
user_pref("security.mixed_content.block_active_content", true); // [DEFAULT: true]
// 禁用HTTPS页面不安全的被动内容（如图像）
// user_pref("security.mixed_content.block_display_content", true);
// 在加密页面上阻止来自Flash的未加密请求，缓解中间人攻击
// user_pref("security.mixed_content.block_object_subrequest", true);



/*==========同步==========*/
// 禁止火狐帐户和同步
user_pref("identity.fxaccounts.enabled", false); 



/*==========设置==========*/
// 禁用about:preferences的Mozilla产品
user_pref("browser.preferences.moreFromMozilla", false);
// 在设置页面关闭搜索栏
user_pref("browser.preferences.search", false);
// 关闭火狐的实验项目
user_pref("browser.preferences.experimental", false);
user_pref("browser.preferences.experimental.hidden", false);



/*==========扩展==========*/
// 禁用自动检查更新扩展和主题
user_pref("extensions.update.enabled", false);
// 禁用自动安装扩展和主题
user_pref("extensions.update.autoUpdateDefault", false);
// 禁用扩展元数据更新
user_pref("extensions.getAddons.cache.enabled", false);
// 禁用附加管理器页面的推荐窗格
user_pref("extensions.getAddons.showPane", false);
// 禁用附加管理器页面的推荐扩展
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// 启用Mozilla的扩展和证书吊销名单
user_pref("extensions.blocklist.enabled", true);
// 禁用某些Mozilla域名网站上的扩展限制[FF60+]，让扩展在Mozilla域名网站上正常工作
user_pref("extensions.webextensions.restrictedDomains", "");
// 让扩展在Mozilla域名网站上正常工作 
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
// 禁止绕过第三方扩展安装提示
user_pref("extensions.postDownloadThirdPartyPrompt", false);
// 强制启用SmartBlock shims
user_pref("extensions.webcompat.enable_shims", true); // [DEFAULT: true]
// 锁定允许的扩展目录
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
// 强制扩展、语言包签名
user_pref("xpinstall.signatures.required", true); 
user_pref("extensions.langpacks.signatures.required", true);
// 取消统一管理扩展按钮（已废弃）
// user_pref("extensions.unifiedExtensions.enabled", false);
/*=====火狐自带扩展=====*/
// 禁用火狐自带扩展更新
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
// 禁用火狐自带的截图扩展
user_pref("extensions.screenshots.disabled", true);
// 禁用火狐帐户、密码表单自动填充
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
// 禁用自动填充
user_pref("extensions.formautofill.available", "");
// user_pref("extensions.formautofill.addresses.available", "");
user_pref("extensions.formautofill.addresses.supported", "");
// user_pref("extensions.formautofill.creditCards.available", "");
user_pref("extensions.formautofill.creditCards.supported", "");
// 禁用网络兼容性报告
user_pref("extensions.webcompat-reporter.enabled", false);
// Disable Pocket
user_pref("extensions.pocket.enabled", false);



/*==========主题==========*/
// 0，启用深邃主题
user_pref("browser.theme.content-theme", 0);
// 设定工具栏颜色。深色0，浅色1，系统色2
user_pref("browser.theme.toolbar-theme", 0);
// 深邃主题
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");



/*==========插件==========*/
// 禁用Flash Player插件
user_pref("plugin.state.flash", 0);
// 禁用Java插件
// user_pref("plugin.state.java", 0);
// 禁止发送插件崩溃报告至网站
user_pref("dom.ipc.plugins.reportCrashURL", false);
// 禁止发送Flash Player插件崩溃报告（已废弃）
// user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);



/*==========工具栏==========*/
// 移除Firefox View按钮
// user_pref("browser.tabs.firefox-view", false);
// 移除“list all tabs”按钮
user_pref("browser.tabs.tabmanager.enabled", false);
// 移除“新功能”工具栏图标
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); 
// 取消38.0.5集成的阅读模式，移除工具栏阅读模式图标
user_pref("reader.parse-on-load.enabled", false); 



/*==========历史记录==========*/
// 最近关闭的标签页最大数量
user_pref("browser.sessionstore.max_tabs_undo", 3);
// 最近关闭的窗口最大数量
user_pref("browser.sessionstore.max_windows_undo", 1);
// 定义Ctrl-Shift-Del清除历史记录的项目
user_pref("privacy.cpd.cache", true);    // [DEFAULT: true]
// 表单和搜索历史
user_pref("privacy.cpd.formdata", true); // [DEFAULT: true]
user_pref("privacy.cpd.history", true);  // [DEFAULT: true]
// 登录状态
user_pref("privacy.cpd.sessions", true); // [DEFAULT: true]
// 脱机网站数据
user_pref("privacy.cpd.offlineApps", false); // [DEFAULT: false]
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.downloads", true); 
// 会话还原Session Restore
user_pref("privacy.cpd.openWindows", false); 
user_pref("privacy.cpd.passwords", false);
// 网站设置
user_pref("privacy.cpd.siteSettings", false);
// 定义“清除最近的历史记录”的时间范围
user_pref("privacy.sanitize.timeSpan", 0);
// 在内存中存储的最大页面数量
user_pref("browser.sessionhistory.max_total_viewers", 3);
// 浏览器会话历史记录的最大页数（后退/前进按钮的历史记录缓存最大数量）
user_pref("browser.sessionhistory.max_entries", 3);
// 禁止从崩溃中恢复会话
// user_pref("browser.sessionstore.resume_from_crash", false);
// 设置会话保存操作之间的最小间隔（默认15000，15秒）
user_pref("browser.sessionstore.interval", 3600000);



/*==========书签==========*/
// 始终显示书签工具栏
user_pref("browser.toolbars.bookmarks.visibility", "always");
// 书签备份文件的数量
user_pref("browser.bookmarks.max_backups", 1);
// 创建快捷方式时，禁止获取网站图标
user_pref("browser.shell.shortcutFavicons", false);
// 禁止下载历史记录和书签中的网站图标
user_pref("browser.chrome.site_icons", false);
// 禁用Web通知的网站图标
user_pref("alerts.showFavicons", false);



/*==========开发者工具==========*/
// 开发者工具独立窗口显示
user_pref("devtools.toolbox.host", "window");
// 开发者工具显示分离式控制台
user_pref("devtools.toolbox.splitconsoleEnabled", true);
// 启用开发者工具网络、样式编辑器、性能、内存、存储、无障碍环境、应用程序、DOM
user_pref("devtools.netmonitor.enabled", true);
user_pref("devtools.styleeditor.enabled", true);
user_pref("devtools.performance.enabled", true);
user_pref("devtools.memory.enabled", true);
user_pref("devtools.storage.enabled", true);
user_pref("devtools.accessibility.enabled", true);
user_pref("devtools.application.enabled", true);
user_pref("devtools.dom.enabled", true);
// 开发者工具深色主题
user_pref("devtools.theme", "dark");
// 通过prefers-reduced-motion使用更简明的高亮显示Use simpler highlighters with prefers-reduced-motion
user_pref("devtools.inspector.simple-highlighters-reduced-motion", true);
// 启用浏览器界面及附加组件的调试工具箱
user_pref("devtools.chrome.enabled", true);
// 启用远程调试Enable remote debugging
user_pref("devtools.debugger.remote-enabled", true);
// 关闭浏览器工具箱“传入连接”提示
user_pref("devtools.debugger.prompt-connection", false);
// 浏览器工具箱禁止弹窗自动隐藏
// user_pref("ui.popup.disable_autohide", true);



/*==========火狐界面==========*/
// 禁止显示标题栏
user_pref("browser.tabs.inTitlebar", 2);
// 浏览器界面密度。0=正常，1=紧凑，2=触摸
user_pref("browser.uidensity", 0);
// 在平板模式下使用为触控优化的界面
user_pref("browser.touchmode.auto", true);
// 禁用动画（标签页、全屏、滑动提示）
user_pref("toolkit.cosmeticAnimations.enabled", false);
// 禁用一些动画
user_pref("ui.prefersReducedMotion", 1); // [HIDDEN PREF]



/*==========磁盘缓存==========*/
// 禁止隐私浏览模式下媒体缓存写入磁盘
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
// 如果资源小于设定的大小（单位KB），那么使用内存支持的媒体缓存；否则（单个共享全局）使用文件支持的媒体缓存
user_pref("media.memory_cache_max_size", 1048576);
// 禁用存储额外的会话数据
user_pref("browser.sessionstore.privacy_level", 2);
// 在系统下次启动后，禁止自动启动火狐并恢复会话[XP]
user_pref("toolkit.winRegisterApplicationRestart", false);
// 禁用脱机缓存
// user_pref("browser.cache.offline.enable", false);



/*==========网络==========*/
/*=====DNS/DoH/PROXY/SOCKS/IPv6=====*/
// 禁用IPv6
user_pref("network.dns.disableIPv6", true);
// 在使用SOCKS时，设置代理服务器进行DNS查询
user_pref("network.proxy.socks_remote_dns", true);
// 禁止使用UNC（统一命名规范）路径
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
// 禁止GIO作为潜在的代理旁路媒介
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF]
/*=====SSL(Secure Sockets Layer)/TLS(Transport Layer Security)=====*/
// 需要安全协商
user_pref("security.ssl.require_safe_negotiation", true);
// 禁用TLS1.3 0-RTT（往返时间）
user_pref("security.tls.enable_0rtt_data", false);
// 控制TLS版本
// user_pref("security.tls.version.min", 3); // [DEFAULT: 3]
// user_pref("security.tls.version.max", 4);
// 禁用SSL会话ID
// user_pref("security.ssl.disable_session_identifiers", true);
// 强制不执行TLS 1.0/1.1降级
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
/*=====UI (User Interface)=====*/
// 挂锁显示 "安全受损 "警告 ，但页面子资源未显示挂锁警告
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// 在 "不安全连接 "警告页面显示高级信息
user_pref("browser.xul.error_pages.expert_bad_cert", true);
// 在HTTP网站显示“不安全”的图标和提示文本
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_icon.pbmode.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
/*=====HEADERS / REFERERS=====*/
// 控制何时发送跨站referer。0=始终（默认），1=仅当基本域名匹配时，2=仅当主机匹配时
user_pref("network.http.referer.XOriginPolicy", 2);
// 控制发送的跨站信息量
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// 强制不启用referer欺骗，referer spoof影响跨站点请求伪造保护
user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]
// 设置默认Referrer策略
// user_pref("network.http.referer.defaultPolicy", 2); // [DEFAULT: 2]
// user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [DEFAULT: 2]
// 精细设置referer。0=不发送任何内容，1=仅在点击时发送，2=在图像请求时发送
// user_pref("network.http.sendRefererHeader", 2);
// 控制要发送的信息量
// user_pref("network.http.referer.trimmingPolicy", 0);
// 禁用onions
// user_pref("dom.securecontext.allowlist_onions", true);
// 离开.onion域名时是否需要隐藏referrer
// user_pref("network.http.referer.hideOnionSource", true);
/*=====反指纹识别RESIST FINGERPRINTING=====*/
// 启用反指纹识别
// user_pref("privacy.resistFingerprinting", true);
// 设置新窗口大小最大值
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);
// 启用反指纹识别信箱
user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
// user_pref("privacy.resistFingerprinting.letterboxing.dimensions", ""); // [HIDDEN PREF]
// 实验性反指纹识别
// user_pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid");
// user_pref("privacy.resistFingerprinting.testGranularityMask", 0);
// 设置反指纺识别的字体可见度级别
// user_pref("layout.css.font-visibility.resistFingerprinting", 1); // [DEFAULT: 1]
// 强制使用非本机小部件主题
user_pref("widget.non-native-theme.enabled", true); // [DEFAULT: true]
// 禁用WebGL（网络图形库）
user_pref("webgl.disabled", true);
/*=====预读取=====*/
// 禁止链接预读取
user_pref("network.prefetch-next", false);
// 禁止DNS预读取
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true]
// 禁用预读取
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
// 鼠标悬停在链接时，禁止打开与链接服务器的连接
user_pref("network.http.speculative-parallel-limit", 0);
// 禁止按下鼠标点击书签和历史记录的推测连接
user_pref("browser.places.speculativeConnect.enabled", false);
// 强制不执行“超链接审核”（点击跟踪）
user_pref("browser.send_pings", false); // [DEFAULT: false]
/*=====网络杂项=====*/
// 禁用自动页面刷新
user_pref("accessibility.blockautorefresh", true);
// 禁止强制网络门户检测
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
// 禁用网络连接检查
user_pref("network.connectivity-service.enabled", false);
// 禁止监视系统联机/脱机连接状态
user_pref("network.manage-offline-status", false);
// 使用JavaScript时，强制使用en-US区域设置，防止泄漏程序区域/日期格式
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
// 在国际化域名中使用Punycode消除可能的欺骗
user_pref("network.IDN_show_punycode", true);
// 禁用HTTP替代服务
// user_pref("network.http.altsvc.enabled", false);
// user_pref("network.http.altsvc.oe", false);
// 中止前连续重定向的最大次数
// user_pref("network.http.redirection-limit", 10);
// 将第三方Cookie（如果已启用）设置为仅会话
// user_pref("network.cookie.thirdparty.sessionOnly", true);
// user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // [FF58+]
// 禁用电池状态API
// user_pref("dom.battery.enabled", false);
// 禁用媒体功能API
// user_pref("media.media-capabilities.enabled", false);
/*=====WEB WORKERS=====*/
// 禁止service workers
user_pref("dom.serviceWorkers.enabled", false);
// 禁用网站通知 
user_pref("dom.webnotifications.enabled", false); // [FF22+]
user_pref("dom.webnotifications.serviceworker.enabled", false); // [FF44+]
// 禁用推送通知
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");
/*=====JAVASCRIPT=====*/
// 禁用asm.js
// user_pref("javascript.options.asmjs", false);
// 禁用Ion和基线JIT以防范JS漏洞
// user_pref("javascript.options.ion", false);
// user_pref("javascript.options.baselinejit", false);
// user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
// 禁用WebAssembly
// user_pref("javascript.options.wasm", false);
// 启用（有限但充分的）window.opener保护 
user_pref("dom.targetBlankNoOpener.enabled", true); // [DEFAULT: true FF79+]
/*=====指纹识别=====*/
// 禁用navigator.mediaDevices和getUserMedia()支持
// user_pref("media.navigator.enabled", false);
// 禁用网络音频应用程序接口
// user_pref("dom.webaudio.enabled", false);
/*=====FIRST PARTY ISOLATION=====*/
// 强制不执行第一方隔离
user_pref("privacy.firstparty.isolate", false); // [DEFAULT: false]
// 对window.opener强制实施第一方隔离限制
// user_pref("privacy.firstparty.isolate.restrict_opener_access", true); // [DEFAULT: true]
// 阻止postMessage跨越不同的第一方域
// user_pref("privacy.firstparty.isolate.block_post_message", true);
// 启用第一方隔离方案
// user_pref("privacy.firstparty.isolate.use_site", true);



/*==========按键==========*/
// 定义退格键的功能
user_pref("browser.backspace_action", 2); 
// 禁止Alt键激活菜单栏
user_pref("ui.key.menuAccessKeyFocuses", false);
// 禁止Alt键搭配其他键位激活菜单栏的菜单项（如Alt+F，激活菜单栏“文件”菜单项）
user_pref("ui.key.menuAccessKey", 0);
// 1，单击滚动条滚动到与点击点对应的视图。
user_pref("ui.scrollToClick", 1);
// 禁止Ctrl+Q按键退出浏览器[LINUX] [MAC]
// user_pref("browser.quitShortcut.disabled", true); 
// 启用TSF（似仅适用于XP系统）
user_pref("intl.tsf.enabled", true);
// 在新标签页查看“页面/选中内容”的源代码
user_pref("view_source.tab", true); 
// 启用外部编辑器查看页面源代码
user_pref("view_source.editor.external", true);
// 指定查看页面源代码的外部编辑器路径
user_pref("view_source.editor.path", "d:\\Program Files\\EmEditor\\EmEditor.exe");
// 查看页面源代码时自动换行
user_pref("view_source.wrap_long_lines", true);



/*==========杂项==========*/
// 取消AboutConfig警告chrome://global/content/aboutconfig/aboutconfig.html(jar:file:///C:/Program Files/Mozilla Firefox/omni.ja!/chrome/toolkit/content/global/aboutconfig/aboutconfig.html)
user_pref("browser.aboutConfig.showWarning", false); // HTML version [FF71+]
// 实施CSP（内容安全策略）
// user_pref("security.csp.enable", true);
// 安装附加组件的等待时间
user_pref("security.dialog_enable_delay", 500); // [DEFAULT: 1000]
// 阻止无障碍服务接入浏览器
user_pref("accessibility.force_disabled", 1);
// 删除用外部程序打开的临时文件
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// 禁用beacon异步HTTP传输（用于分析）
user_pref("beacon.enabled", false);
// 禁用UITour后台，使远程页面无法使用它
user_pref("browser.uitour.enabled", false);
// user_pref("browser.uitour.url", ""); // Defense-in-depth
// 禁用数学标记语言
// user_pref("mathml.disabled", true);
// 禁用内容内SVG（可缩放矢量图形）
// user_pref("svg.disabled", true);
// 在Win8/8.1/10上禁用启动应用商店的链接
user_pref("network.protocol-handler.external.ms-windows-store", false);
// 启用userChrome/userContent支持，自定义界面
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); 
