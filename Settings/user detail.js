/*==========常规>启动==========*/
// 设置启动的开始页面。3=打开先前的窗口和标签页。set startup page. 0=blank, 1=home, 2=last visited page, 3=resume previous session.
// [SETTING] General>Startup>Restore previous session 
user_pref("browser.startup.page", 1);
// 禁止火狐升级后跳转至介绍新版本特性的页面disable welcome notices. After a browser update, Firefox might show an additional tab next to your usual homepage to offer more information on changes or new features included in the update. When a user starts up their browser, this preference is examined. If its value differs from the browser’s current milestone, then the user is redirected to the homepage specified in startup.homepage_override_url and this preference’s value is updated to the current milestone. The browser’s milestone (e.g., "rv:1.8.1.1") from the last successful startup of the browser. If it differs from the browser’s actual milestone, it is assumed an upgrade has occurred, and the user is redirected to the homepage override URL. If its value is "ignore", then the redirect does not occur and the preference is not updated. 
user_pref("browser.startup.homepage_override.mstone", "ignore");
// 禁止火狐升级后跳转至介绍新版本特性的页面When a user starts up their browser after upgrading (i.e., if browser.startup.homepage_override.mstone is different than the last time the browser started), the URL specified in this preference is loaded instead of their homepage.
user_pref("startup.homepage_override_url", "");
// 禁止火狐首次启动时跳转页面When Firefox is started with a new profile (usually, the first time it’s started after installation), the URL specified in this preference will be loaded (even if the user imported their own homepage). This is similar to startup.homepage_override_url, which specifies the URL loaded when Firefox is first started after an upgrade, but this preference allows specifying the page a first-time user would see.
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
// 禁止启动时显示空白页，加快启动速度disable showing about:blank/maximized window as soon as possible during startup [FF60+]
user_pref("browser.startup.blankWindow", false);
// 在加载libxul之前，显示skeleton UI窗口Show a skeleton UI window prior to loading libxul. Only visible for windows users as it is not implemented anywhere else.
user_pref("browser.startup.preXulSkeletonUI", false);
// 取消默认浏览器检查Do not check if Firefox is the default browser
user_pref("browser.shell.checkDefaultBrowser", false);


/*==========常规>标签页==========*/
// 取消“按下Ctrl+Tab时，依照最近使用顺序循环切换标签页”disable 'Ctrl+Tab cycles through tabs in recently used order'
user_pref("browser.ctrlTab.sortByRecentlyUsed", false);
// user_pref("browser.ctrlTab.recentlyUsedOrder", false);
// 同时打开多个标签页时不提醒。阈值由browser.tabs.maxOpenBeforeWarn指定
user_pref("browser.tabs.warnOnOpen", false);
// 关闭所有标签页时不提醒Mozilla Firefox 94 won't prompt users anymore when they are about to close a browser window with multiple tabs.
user_pref("browser.tabs.warnOnClose", false);
// 关闭多个标签页时不提醒
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
// 关闭最后一个标签时不关闭浏览器
user_pref("browser.tabs.closeWindowWithLastTab", false);
// 禁止任务栏显示标签页预览图disable Windows taskbar preview [WINDOWS]
user_pref("browser.taskbar.previews.enable", false);
// 关闭常用跳转列表disable Windows jumplist [WINDOWS]
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
// 禁止任务栏火狐图标右键显示最近条目：设置——>个性化——>开始——>在开始屏幕或任务栏的跳转列表中显示最近打开的项。Windows 10 does not provide a way to exempt a specific application from having opened files saved in Recent Items; that feature has only an all-or-nothing switch.  HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Start_TrackDocs = 0 disables tracking, 1 enables. 
/*=====标签页打开方式=====*/
// 3，在新标签页打开链接；2，在新窗口打开链接；1，强制在当前标签打开链接。enforce links targeting new windows to open in a new tab instead. 3 = divert new window to a new tab (default) . 2 = allow link to open a new window. 1 = force new window into same tab. Stops malicious window sizes and some screen resolution leaks.
// browser.link.open_newwindow，决定新标签页或新窗口打开链接。browser.link.open_newwindow.restriction精细调整哪些链接受到影响。Some web sites choose to open certain links in new windows. This preference lets you control where to open these links, that would normally open new windows. You can use browser.link.open_newwindow.restriction to fine tune which links will be affected by this preference.
user_pref("browser.link.open_newwindow", 3);
// 通过JavaScript打开的新窗口是小弹出窗口，没有一般窗口的所有功能，如隐藏后退、前进、重新加载按钮和状态栏，故意缩小尺寸等。该窗口是专门设计成弹出窗口，在新标签页打开较少价值。browser.link.open_newwindow.restriction可以设置这些类型的链接在新窗口打开，而将所有其他类型的链接在新标签页打开。Oftentimes when a new window is opened from JavaScript, it’s a small popup without all of a usual browser window’s features—e.g., the back/forward/reload buttons are hidden, the status bar is hidden, the size is purposely smaller, etc. Usually in this situation, the window is designed specifically as a popup, and opening it in a tab actually makes it less useful. This preference can let these types of links open as new windows while opening all other types as new tabs.
// 0=将browser.link.open_newwindow设置应用于所有新窗口（包括脚本窗口）。2=将browser.link.open_newwindow的设置应用于普通窗口，不应用于具有特征的脚本窗口。1=覆盖browser.link.open_newwindow设置，始终使用新窗口。0 = apply the setting browser.link.open_newwindow to ALL new windows (even script windows). 2 = apply the setting browser.link.open_newwindow to normal windows, but NOT to script windows with features (default). 1 = override the setting under browser.link.open_newwindow and always use new windows.
user_pref("browser.link.open_newwindow.restriction", 0);
// 全屏模式时，强制在新标签页打开设定在新窗口打开的链接（取决于browser.link.open_newwindow的参数）If true, this pref causes windows opened by window.open to be forced into new tabs (rather than potentially opening separate windows, depending on window.open arguments) when the browser is in fullscreen mode. We set this differently on Mac because the fullscreen implementation there is different.
user_pref("browser.link.open_newwindow.disabled_in_fullscreen", true);
// -1，将browser.link.open_newwindow设置应用于外部链接；3，在最近活动的窗口中打开外部链接；2，在新窗口打开外部链接；1，在最近活动的标签页中打开外部链接。-1 = apply the setting browser.link.open_newwindow to external links (default) . 3 = open external links in a new tab in the last active window. 2 = open external links in a new window. 1 = open external links in the last active tab replacing the current page. 
user_pref("browser.link.open_newwindow.override.external", -1);
// 后台打开外部链接Determines behavior of pages normally meant to open in a new window (such as target="_blank" or from an external program), but that have instead been loaded in a new tab. Setting this preference to True will still bring the browser to the front when opening links from outside the browser. True: Load the new tab in the background, leaving focus on the current tab. False (default): Load the new tab in the foreground, taking the focus from the current tab.
user_pref("browser.tabs.loadDivertedInBackground", true);
// 在新标签页打开书签open bookmarks in a new tab [FF57+]
user_pref("browser.tabs.loadBookmarksInTabs", true);
// 后台打开书签和历史记录Focus behavior of new tabs from bookmarks & history. True: When you open a bookmark in a new tab then that tab will load in the background without taking focus from the current tab. False (default): When you open a bookmark in a new tab then that tab will become the current tab.
user_pref("browser.tabs.loadBookmarksInBackground", true);
// 按住Ctrl键单击或中键单击书签不关闭菜单
user_pref("browser.bookmarks.openInTabClosesMenu", false);
// 在新标签页打开地址栏网址
user_pref("browser.urlbar.openintab", true);
// 后台打开新标签页
user_pref("browser.tabs.loadInBackground", true);
// 中键打开新标签页
user_pref("browser.tabs.opentabfor.middleclick", true);
// 禁用鼠标中键打开剪贴板中的链接disable middle mouse click opening links from clipboard
user_pref("middlemouse.contentLoadURL", false);
// 紧邻当前标签页打开当前标签页中的链接Open related links to a tab, e.g., link in current tab, at next to the current tab if |insertRelatedAfterCurrent| is true. Otherwise, always append new tab to the end.
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
// 紧邻当前标签页打开。browser.tabs.insertAfterCurrent值为true，覆盖browser.tabs.insertRelatedAfterCurrent设置。Open all links, e.g., bookmarks, history items at next to current tab if |insertAfterCurrent| is true. Otherwise, append new tab to the end for non-related links. Note that if this is set to true, it will trump the value of browser.tabs.insertRelatedAfterCurrent.
user_pref("browser.tabs.insertAfterCurrent", true);
// 标签栏鼠标滚轮切换标签页66+
user_pref("toolkit.tabbox.switchByScrolling", true);
// 双击关闭标签
user_pref("browser.tabs.closeTabByDblclick", true);


/*==========常规>语言与外观>网站外观==========*/
// 网站深色配色方案：深色0 = Dark . 1 = Light. 2 = Automatic. Some websites adapt their color scheme based on your preferences.
user_pref("layout.css.prefers-color-scheme.content-override", 0);
// 禁止已访问链接变色disable coloring of visited links
user_pref("layout.css.visited_links_enabled", false);


/*==========常规>语言与外观>颜色==========*/
// 禁止使用系统颜色disable using system colors[DEFAULT: false NON-WINDOWS]
// [SETTING] General>Language and Appearance>Fonts and Colors>Colors>Use system colors 
user_pref("browser.display.use_system_colors", false);
// 为链接添加下划线Underline links
user_pref("browser.underline_anchors", true);
// 在所有页面选择自定义的颜色覆盖页面指定的颜色Override the colors specified by the page. 0 = Only with High Contrast themes . 1 = Never. 2 = Always. 
// [SETTING] General>Language and Appearance>Fonts and Colors>Colors>Override the colors specified by the page with your selections above
user_pref("browser.display.document_color_use", 2);


/*==========常规>语言与外观>字体==========*/
// 禁止网站选择字体disable websites choosing fonts (0=block, 1=allow)
// 禁止网站使用自定义设置的字体，防止网站枚举本机安装的字体（指纹泄露）。Don’t use document specified fonts to prevent installed font enumeration (fingerprinting)
// General>Language and Appearance>Fonts & Colors>Advanced>Allow pages to choose...
// user_pref("browser.display.use_document_fonts", 0);
// 禁用SVG OpenType字体的渲染disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// disable graphite
// user_pref("gfx.font_rendering.graphite.enabled", false);


/*==========常规>语言与外观>全局缩放==========*/
// 全局缩放，不单独缩放文本Don’t  Zoom text only
user_pref("browser.zoom.full", true);


/*==========常规>语言与外观>语言==========*/
// 设置浏览器语言[FF59+]，v59前general.useragent.locale
user_pref("intl.locale.requested", "zh-CN,en-US");
// 设置网页显示的首选语言set preferred language for displaying web pages
// [SETTING] General>Language and Appearance>Language>Choose your preferred language for displaying pages
user_pref("intl.accept_languages", "zh-cn,zh,en-us,en,zh-tw,zh-hk");
// 输入时不检查拼写。0=none, 1-multi-line, 2=multi-line & single-line
user_pref("layout.spellcheckDefault", 0);


/*==========常规>文件与应用程序>下载==========*/
// 设置浏览器默认下载目录
user_pref("browser.download.dir", "c:\\Users\\shadow\\Desktop");
// 下载文件保存在最近下载目录0=desktop, 1=downloads (default), 2=last used
// [SETTING] General>Downloads>Save files to
user_pref("browser.download.folderList", 2);
// 总是询问保存文件的位置
// [SETTING] General>Downloads>Always ask you where to save files
user_pref("browser.download.useDownloadDir", false);
// 取消下载按钮自动隐藏[FF57+]
user_pref("browser.download.autohideButton", false);
// 使用FF98+新式下载流程，跳过下载确认对话框In newer versions of Mozilla Firefox (version 98.0 and later), if a user tries to download a file from a website, Firefox starts downloading the file automatically without displaying the classic notification window prompting the user to select open with or save file options. As soon as you click on a download link present on a website, Firefox starts the download and displays the download progress in the new Download panel or flyout icon present on its toolbar.  In previous versions of Firefox, the browser used to show a confirmation dialog box asking the user to select whether Firefox should open the file using an application or save the file on his computer system or cancel the downloading.
// https://www.askvg.com/tip-restore-classic-download-confirmation-prompt-in-mozilla-firefox/
user_pref("browser.download.improvements_to_download_panel", true);
// 禁止每次下载时工具栏自动打开下载面板浮动控件disable downloads panel opening on every download [FF96+]. In newer versions of Mozilla Firefox web browser, when you click on a download link present on a website, Firefox starts downloading the file without asking for confirmation. But to notify the user about the download process, Firefox automatically opens the Download panel flyout present on its toolbar.
// https://www.askvg.com/tip-enable-fully-automatic-and-silent-download-feature-in-firefox/
user_pref("browser.download.alwaysOpenPanel", false);
// 禁用下载对话框的“用……打开”，程序数据隔离disable "open with" in download dialog [FF50+]. Application data isolation. This is very useful to enable when the browser is sandboxed (e.g. via AppArmor). in such a way that it is forbidden to run external applications. This may interfere with some users' workflow or methods.
user_pref("browser.download.forbid_open_with", true);
// 禁止将下载文件添加至系统“最近使用的文档”列表disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);
// 从Content-Disposition头信息检索文件名的延时
// 大多数下载的文件名与下载URL中的内容匹配。但某些网站使用Content-Disposition标头字段，指定与URL不同的文件名。若未在设定延时检索到Content-Disposition值，浏览器使用URL中指定的文件名。Some URLs use Content-Disposition headers to tell browsers what to use for a filename when saving a file. This filename may not match the URL. When choosing “Save Link As...” from a link’s context menu, Mozilla must request the URL to find out the filename from a Content-Disposition header. Since this is not as fast as merely using the URL itself to generate a filename, Mozilla will time out after a short time waiting for the headers. This preference determines that timeout. 
// user_pref("browser.download.saveLinkAsFilenameTimeout", 0);


/*==========常规>文件与应用程序>应用程序==========*/
// 始终询问如何处理新类型文件，启用用户交互以确保安全性enable user interaction for security by always asking how to handle new mimetypes [FF101+]
// [SETTING] General>Files and Applications>What should Firefox do with other files
user_pref("browser.download.always_ask_before_handling_new_types", true);


/*==========常规>文件与应用程序>数字版权管理（DRM）==========*/
// 禁止播放采用DRM的内容disable all DRM content (EME: Encryption Media Extension)
// [SETTING] General>DRM Content>Play DRM-controlled content
user_pref("media.eme.enabled", false);
// 隐藏“播放采用DRM的内容”的设置hide the setting which also disables the DRM prompt
// user_pref("browser.eme.ui.enabled", false);
// 禁用GMP（Gecko媒体插件）disable GMP (Gecko Media Plugins) 
user_pref("media.gmp-provider.enabled", false);
// 更新GMP（Gecko媒体插件）安装/更新的服务地址Update service URL for GMP install/updates
// user_pref("media.gmp-manager.url", "");
// 禁用Widevine内容解密模块disable widevine CDM (Content Decryption Module). This is covered by the EME master switch 'media.eme.enabled'. 
user_pref("media.gmp-widevinecdm.enabled", false);
// 去除播放DRM内容黄条提示when media.gmp-*.visible is true, provided we're running on a supported platform/OS version, the corresponding CDM appears in the plugins list, Firefox will download the GMP/CDM if enabled, and our UI to re-enable EME prompts the user to re-enable EME if it's disabled and script requests EME. If *.visible is false, we won't show the UI to enable the CDM if its disabled; it's as if the keysystem is completely unsupported.
user_pref("media.gmp-widevinecdm.visible", false);
// 禁用OpenH264视频编码器disable the OpenH264 Video Codec. Firefox will make use of the OpenH264 codec provided by Cisco in order to support the H.264 video codec in WebRTC, a technology allowing for peer-to-peer video communication on the web. The OpenH264 codec is not distributed with Firefox but gets downloaded at the first start of Firefox. In case you want to prohibit that, you will have to preconfigure the browser and set the media.gmp-gmpopenh264.enabled preference to false. This is the bundled codec used for video chat in WebRTC.
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.visible", false);


/*==========常规>更新==========*/
// 禁止更新服务Whether or not to attempt using the service for updates.
// https://bbs.kafan.cn/forum.php?mod=redirect&goto=findpost&ptid=2089238&pid=39889684
user_pref("app.update.service.enabled", false);
// 禁止火狐使用Win系统服务Background Intelligent Transfer Service下载更新If set to true, the Update Service will attempt to use Windows BITS（Background Intelligent Transfer Service） to download updates and will fallback to downloading internally if that fails.
user_pref("app.update.BITS.enabled", false);
// 火狐检查更新的间隔（以秒为单位）By default, check for updates when the browser is not running every 7 hours.
user_pref("app.update.background.interval", 86400);
// 火狐下载更新时，提示用户If set to true, a message will be displayed in the hamburger menu while an update is being downloaded.
user_pref("app.update.notifyDuringDownload", true);
// 禁止火狐自动安装更新[WIN系统无效]disable auto-INSTALLING Firefox updates [NON-WINDOWS FF65+]. In FF65+ on Windows this SETTING is now stored in a file and the pref was removed. If set to true, the Update Service will automatically download updates if the user can apply updates. This pref is no longer used on Windows, except as the default value to migrate to the new location that this data is now stored (which is in a file in the update directory). Because of this, this pref  should no longer be used directly. Instead, getAppUpdateAutoEnabled and getAppUpdateAutoEnabled from UpdateUtils.sys.mjs should be used.
user_pref("app.update.auto", false);
// 禁止火狐后台自动安装更新There are two main preferences specifically relevant to updates. Those are app.update.auto, which controls whether updates should be downloaded automatically at all, even if Firefox is running, and app.update.background.enabled, to specifically control whether to use the background update system. We store these preferences in the update root directory, which is located in a per-installation location outside of any profile. Any profile loaded in that installation can observe and control these settings. 
user_pref("app.update.background.enabled", false);
// 更新服务下载安装包后，询问是否应用更新If set to true, the Update Service will apply updates in the background when it finishes downloading them.
// http://bbs.kafan.cn/forum.php?mod=redirect&goto=findpost&ptid=2089238&pid=39889684
user_pref("app.update.staging.enabled", false);


/*==========常规>性能==========*/
// 不使用推荐的性能设置disable Use recommended performance settings
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
// 内容进程限制为2
user_pref("dom.ipc.processCount", 2);
// 启用硬件加速enable hardware acceleration to reduce graphics fingerprinting
// [SETTING] General>Performance>Use hardware acceleration when available
user_pref("layers.acceleration.disabled", false);
// 开启direct2d，用于硬件加速Affects text rendering (fonts will look different), impacts video performance, and parts of Quantum that utilize the GPU will also be affected as they are rolled out.
// user_pref("gfx.direct2d.disabled", true);


/*==========常规>浏览==========*/
// 取消自动滚屏middle-click enabling auto-scrolling [DEFAULT: false on Linux]
// [SETTING] General>Browsing>Use autoscrolling
user_pref("general.autoScroll", false);
// 取消平滑滚动
// [SETTING] General>Browsing>Use smooth scrolling
user_pref("general.smoothScroll", false);
// 取消“在需要时显示触摸键盘”
// [SETTING] General>Browsing>Show a touch keyboard when necessary
user_pref("ui.osk.enabled", false);
// 取消“使用键盘方向键浏览网页（键盘浏览模式）”
// [SETTING] General>Browsing>Always use the cursor keys to navigate within pages
user_pref("accessibility.browsewithcaret", false);
// 在文本框外输入，则在页面中查找文本
// [SETTING] General>Browsing>Search for text when you start typing
user_pref("accessibility.typeaheadfind", true);
// 启用画中画视频控件Enable Picture in Picture mode
// [SETTING] General>Browsing>Enable picture-in-picture video controls
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);
// 取消“通过键盘、耳机或虚拟界面控制媒体”
// [SETTING] General>Browsing>Control media via keyboard, headset, or virtual interface
user_pref("media.hardwaremediakeys.enabled", false);



/*==========主页>新窗口和标签页==========*/
// 设置主页和新窗口的页面set HOME+NEWWINDOW page. about:home=Firefox Home , custom URL, about:blank
// [SETTING] Home>New Windows and Tabs>Homepage and new windows
user_pref("browser.startup.homepage", "chrome://browser/content/places/places.xhtml");
// 设置新标签页页面set NEWTAB page. true=Firefox Home (default), false=blank page
// [SETTING] Home>New Windows and Tabs>New tabs
user_pref("browser.newtabpage.enabled", false);


/*==========主页>Firefox主页内容==========*/
// 禁止主页显示网络搜索、快捷方式（保存或访问过的网站）、赞助商网站disable show Web Search, Shortcuts, Sponsored shortcuts
// [SETTING] Home>Firefox Home Content>Web Search / Shortcuts
user_pref("browser.newtabpage.activity-stream.showSearch", false); 
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+]
// Firefox主页快捷方式1行显示Shortcuts row number
user_pref("browser.newtabpage.activity-stream.topSitesRows", 1);
// [FF58+] Pocket > Sponsored Stories
user_pref("browser.newtabpage.activity-stream.showSponsored", false); 
// 禁止主页显示近期访问的网站与内容精选（包括访问过的页面、书签、最近下载）disable show Recent activity (A selection of recent sites and content)
// [SETTING] Home>Firefox Home Content>Recent activity
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
// Firefox主页近期动态1行显示Recent activity row number
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 1);
// 禁止主页显示Mozilla和Firefox的使用窍门与快讯disable show Tips and news from Mozilla and Firefox
// [SETTING] Home>Firefox Home Content>Snippets
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
// 清除默认快捷方式网站clear default topsites. [NOTE] This does not block you from adding your own.
user_pref("browser.newtabpage.activity-stream.default.sites", "");
// 在Firefox Quantum中禁用“Pocket 推荐”Disable "Recommended by Pocket" in Firefox Quantum
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
// 取消保存在Pocket的页面
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); 
// 禁止浏览时推荐扩展、新功能
// [SETTING] General>Browsing>Recommend extensions/features as you browse [FF67+]
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
// 禁用火狐主页（活动流）遥测disable Firefox Home (Activity Stream) telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);



/*==========搜索>搜索栏==========*/
// 地址栏和搜索栏合并Use the address bar for search and navigation.
user_pref("browser.search.widget.inNavBar", false);
// 设置默认搜索引擎Set Default Search Engine
user_pref("browser.urlbar.placeholderName", "Bing");
// 设置页面显示“为隐私窗口选择不同的默认搜索引擎”的隐藏选项Enables display of the options for the user using a separate default search engine in private browsing mode.
// [SETTING] Search>Choose a different default search engine for Private Windows only
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
// 为隐私窗口选择不同的默认搜索引擎
// [SETTING] Search>Use this search engine in Private Windows
user_pref("browser.search.separatePrivateDefault", true);
// 设置隐私浏览模式的默认搜索引擎Set Default Search Engine
user_pref("browser.urlbar.placeholderName.private", "Google");


/*==========搜索>搜索建议==========*/
// 禁用搜索建议disable live search suggestions. 'browser.search.suggest.enabled' and 'browser.urlbar.suggest.searches' must be true for the location bar to work.
// [SETTING] Search>Provide search suggestions
user_pref("browser.search.suggest.enabled", false);
// 禁止在地址栏结果中显示搜索建议Disable "Show search suggestions in location bar results".
// [SETTING] Search>Search Suggestions>Show search suggestions in address bar results
user_pref("browser.urlbar.suggest.searches", false);
// 在地址栏显示的结果中，不将搜索建议显示在浏览历史上方
// [SETTING] Search>Search Suggestions>Show search suggestions ahead of browsing history in address bar results
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
// 禁止在隐私窗口中显示搜索建议disable "Show search suggestions in Private Windows"
// [SETTING] Search>Search Suggestions>Show search suggestions in Private Windows
user_pref("browser.search.suggest.enabled.private", false);
// 禁用地址栏上下文建议[FF92+]disable location bar contextual suggestions [FF92+]
// 地址栏不显示赞助的快速建议结果Whether sponsored quick suggest results are shown in the urlbar. This pref is exposed to the user in the UI, and it's sticky so that its user-branch value persists regardless of whatever Firefox Suggest scenarios, with their various default-branch values, the user is enrolled in over time.
// [SETTING] Privacy & Security>Address Bar>Suggestions from...
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
// 地址栏不显示非赞助的快速建议结果Whether non-sponsored quick suggest results are shown in the urlbar. This pref is exposed to the user in the UI, and it's sticky so that its user-branch value persists regardless of whatever Firefox Suggest scenarios, with their various default-branch values, the user is enrolled in over time.
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]


/*==========搜索>搜索引擎==========*/
// 隐藏某些搜索引擎
// user_pref("browser.search.hiddenOneOffs", "百度,亚马逊,Google");
/*==========搜索>其他选项==========*/
// 在新标签页打开搜索Whether or not items opened from the search bar are opened in a new tab.
user_pref("browser.search.openintab", true);
// 前台打开搜索Whether or not tabs opened from searching in the context menu are loaded in the foreground or background. this preference controls whether a search from the context menu with "Search <search engine> for <selected text>" opening a new tab will give focus to it and load it in the foreground or keep focus on the current tab and open it in the background. true, New tab with search results will be opened in the background, focus stays on the current tab. false (default) , New tab with search results will be opened in the foreground.
user_pref("browser.search.context.loadInBackground", false);
// 不自动升级搜索引擎disable search engine updates
user_pref("browser.search.update", false);



/*==========隐私>增强型跟踪保护==========*/
// 启用增强跟踪保护自定义模式[FF86+]enable ENHANCED TRACKING PROTECTION custom Mode [FF86+]. ENHANCED TRACKING PROTECTION Strict Mode enables Total Cookie Protection. Adding site exceptions disables all ENHANCED TRACKING PROTECTION for that site and increases the risk of cross-site state tracking e.g. exceptions for SiteA and SiteB means PartyC on both sites is shared. value: standard / strict /  /custom
// to add site exceptions: Urlbar>ENHANCED TRACKING PROTECTION Shield. to manage site exceptions: Options>Privacy & Security>Enhanced Tracking Protection>Manage Exceptions
user_pref("browser.contentblocking.category", "custom");
// 自定义增强跟踪保护设置，拦截跨站跟踪性Cookie，并隔离其余跨站Cookie. customize ENHANCED TRACKING PROTECTION settings[DEFAULT: 5 FF103+].
// 0=接受所有cookie。1=阻止所有跨站Cookie（可能导致网站异常）。2=阻止所有Cookie（将会导致网站异常）。3=阻止未访问网站的Cookie。4=阻止跨站跟踪性Cookie。5=阻止跨站跟踪性Cookie，并隔离其余跨站Cookie。0 = Accepts all cookies. 1 = Blocks All cross-site cookies (may cause websites to break). 2 = Blocks All cookies (will cause websites to break). 3 = Blocks cookies from unvisited sites. 4 = Blocks Cross-site tracking cookies. 5 = Blocks Cross-site tracking cookies, and isolate other cross-site cookies.
// [SETTING] Privacy & Security>Enhanced Tracking Protection>Custom>Cookies
user_pref("network.cookie.cookieBehavior", 5);
// 在所有窗口启用跟踪保护Enable Firefox Tracking Protection in all windows. to add site exceptions: Urlbar>ETP Shield, to manage site exceptions: Options>Privacy & Security>Enhanced Tracking Protection>Manage Exceptions
// [SETTING] Privacy & Security>Enhanced Tracking Protection>Custom>Tracking content
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
// 启用各种增强跟踪保护列表enable various Enhanced Tracking Protection lists
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// 拦截加密货币挖矿程序Blocks Cryptominers
// [SETTING] Privacy & Security>Enhanced Tracking Protection>Custom>Cryptominers
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
// 拦截数字指纹跟踪程序Blocks Fingerprinters
// [SETTING] Privacy & Security>Enhanced Tracking Protection>Custom>Fingerprinters
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
// 启用增强跟踪保护严格模式后开启的参数
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
user_pref("privacy.annotate_channels.strict_list.enabled", true);
user_pref("privacy.partition.network_state.ocsp_cache", true);
// 启用查询参数剥离功能enable Query Parameters Stripping feature in normal browsing. Enable URL query stripping
// https://firefox-source-docs.mozilla.org/toolkit/components/antitracking/anti-tracking/query-stripping/index.html
user_pref("privacy.query_stripping.enabled", true);
// 在隐私浏览模式启用查询参数剥离功能enable Query Parameters Stripping feature in private browsing
user_pref("privacy.query_stripping.enabled.pbmode", true);
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
/*=====隐私>增强型跟踪保护>Do Not Track=====*/
// 仅当火狐设置为拦截已知跟踪器时，向网站发送Do Not Track信号disable the Do Not Track HTTP header. Do Not Track is enforced with Tracking Protection which is used in ENHANCED TRACKING PROTECTION Strict. 
// [SETTING] Privacy & Security>Enhanced Tracking Protection>Send websites a "Do Not Track" signal...
user_pref("privacy.donottrackheader.enabled", false);


/*==========隐私>登录信息与密码==========*/
// 不保存网站的帐户名和密码disable saving passwords. This does not clear any passwords already saved.
// [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites
user_pref("signon.rememberSignons", false);
// 禁止自动填写用户名密码disable auto-filling username & password form fields. can leak in cross-site forms and be spoofed.
// [SETTING] Privacy & Security>Logins and Passwords>Autofill logins and passwords
user_pref("signon.autofillForms", false);
// 取消“建议并生成高强度密码”disable Suggest and generate strong passwords
user_pref("signon.generation.enabled", false);
// 取消“网站密码外泄提醒”disable Show alerts about passwords for breached websites.
user_pref("signon.management.page.breach-alerts.enabled", false);
// 不允许面向Microsoft账户（个人/工作/学校）的Windows单点登录enforce no automatic authentication on Microsoft sites [FF91+] [WINDOWS 10+].
//  [SETTING] Privacy & Security>Logins and Passwords>Allow Windows single sign-on for Microsoft, work, and school accounts
user_pref("network.http.windows-sso.enabled", false);
// 禁用密码管理器的无形式登录捕获[FF51+]disable formless login capture for Password Manager [FF51+]
user_pref("signon.formlessCapture.enabled", false);
// 限制/禁用由子资源触发的HTTP认证凭证对话框[FF41+]，加强对潜在凭证钓鱼的防范。0=不允许子资源打开HTTP认证凭证对话框。1=不允许跨源的子资源打开HTTP认证凭证对话框。2=允许子资源打开HTTP认证凭证对话框。limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources [FF41+].  hardens against potential credentials phishing. 0 = don't allow sub-resources to open HTTP authentication credentials dialogs. 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs. 2 = allow sub-resources to open HTTP authentication credentials dialogs (default).
user_pref("network.auth.subresource-http-auth-allow", 1);
// 取消firefoxRelay. "available" = user can see feature offer. "offered" = we have offered feature to user and they have not yet made a decision. "enabled" = user opted in to the feature. "disabled" = user opted out of the feature.
user_pref("signon.firefoxRelay.feature", "disable");


/*==========隐私>Cookie和网站数据、历史记录==========*/
// 关闭火狐时删除Cookie与网站数据。勾选此选项，隐私>历史记录自动更改为“使用自定义设置”，并默认勾选关闭火狐时清除Cookie、缓存、脱机网站数据。参数已被privacy.sanitize.sanitizeOnShutdown替代delete cookies and site data on exit - replaced by "privacy.sanitize.sanitizeOnShutdown". 0=keep until they expire (default), 2=keep until you close Firefox
// [SETTING] Privacy & Security>Cookies and Site Data>Delete cookies and site data when Firefox is closed
// user_pref("network.cookie.lifetimePolicy", 2);
/*==========隐私>历史记录==========*/
// 历史记录使用自定义设置Use custom settings for history
user_pref("privacy.history.custom", true);
// 不一律使用隐私浏览模式don’t start Firefox in Private Browsing mode. [NOTE] In this mode all windows are "private windows" and the Private Browsing mode icon is not displayed. [NOTE] The P in Private Browsing mode can be misleading: it means no "persistent" disk state such as history, caches, searches, cookies, localStorage, IndexedDB etc (which you can achieve in normal mode).  In fact, Private Browsing mode limits or removes the ability to control some of these, and you need to quit Firefox to clear them. Private Browsing is best used as a one off window (Menu>New Private Window) to provide a temporary self-contained new session. Close all private windows to clear the Private Browsing session.
// [SETTING] Privacy & Security>History>Custom Settings>Always use private browsing mode
user_pref("browser.privatebrowsing.autostart", false);
// 记住浏览和下载历史Remember browsing and download history
// [SETTING] Privacy & Security>History>Custom Settings>Remember browsing and download history
user_pref("places.history.enabled", true);
// 禁用搜索和表单历史记录disable search and form history. Be aware that autocomplete form data can be read by third parties.
// [SETTING] Privacy & Security>History>Custom Settings>Remember search and form history
user_pref("browser.formfill.enable", false);
// 火狐关闭时清除历史记录enable Firefox to clear items on shutdown
// [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes | Settings
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// 退出浏览器时清除浏览和下载历史Browsing & Download History. If 'privacy.clearOnShutdown.history' is true, downloads will also be cleared regardless of the value 'privacy.clearOnShutdown.downloads'. but if 'privacy.clearOnShutdown.history' is false, 'privacy.clearOnShutdown.downloads' can still be cleared independently.
user_pref("privacy.clearOnShutdown.history", true);
// 退出浏览器时清除下载历史
user_pref("privacy.clearOnShutdown.downloads", true);
// 退出浏览器时清除登录状态Active Logins
user_pref("privacy.clearOnShutdown.sessions", true);
// 退出浏览器时清除缓存Cache
user_pref("privacy.clearOnShutdown.cache", true);
// 退出浏览器时清除表单和搜索历史Form & Search History
user_pref("privacy.clearOnShutdown.formdata", true);
// 退出浏览器时清除脱机网站数据Offline Website Data.  Offline Website Data" includes appCache, localStorage, service worker cache, and QuotaManager (IndexedDB, asm-cache)
user_pref("privacy.clearOnShutdown.offlineApps", true);
// 退出浏览器时不清除Cookies don’t  Delete cookies  when Firefox is closed
// [SETTING] to add site exceptions: Ctrl+I>Permissions>Cookies>Allow (when on the website in question). [SETTING] to manage site exceptions: Options>Privacy & Security>Permissions>Settings
user_pref("privacy.clearOnShutdown.cookies", false);
// 退出浏览器时不清除站点设置Site settings
user_pref("privacy.clearOnShutdown.siteSettings", false);


/*==========隐私>地址栏==========*/
// 地址栏结果禁止显示建议：浏览历史、书签、打开的标签页、快捷方式、搜索引擎disable location bar suggestion types
// [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest
// user_pref("browser.urlbar.suggest.history", false);
// user_pref("browser.urlbar.suggest.bookmark", false);
// user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); 
// 禁用地址栏结果显示建议：搜索引擎disable tab-to-search [FF85+]. Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search. 
user_pref("browser.urlbar.suggest.engines", false);
// 禁止地址栏自动填充disable location bar autofill. Disable inline autocomplete in URL bar
user_pref("browser.urlbar.autoFill", false);
// 地址栏下拉列表显示的条目数量controls the total number of entries to appear in the location bar dropdown
user_pref("browser.urlbar.maxRichResults", 5);
// 地址栏输入无效网址时，禁止调用搜索引擎搜索。给出错误信息，防止向搜索引擎泄露无效网址。不影响明确的操作，如使用下拉菜单的搜索按钮，或使用配置的关键词搜索快捷方式。disable location bar using search. Don't leak URL typos to a search engine, give an error message instead. Examples: "secretplace,com", "secretplace/com", "secretplace com", "secret place.com". This does not affect explicit user action such as using search buttons in the dropdown, or using keyword search shortcuts you configure in options (e.g. "d" for DuckDuckGo). Override this if you trust and use a privacy respecting search engine.
// 当搜索字符串没有被识别为网址，默认用搜索引擎搜索。设置为false，任何字符串被视为网址，即使是无效网址。禁止向搜索引擎提交地址栏中输入的无效网址。By default, when the search string is not recognized as a potential url, search for it with the default search engine. If set to false any string will be handled as a potential URL, even if it’s invalid. Do not submit invalid URIs entered in the address bar to the default search engine.
user_pref("keyword.enabled", false);
// 输入无效域名时，禁止域名猜测。域名猜测功能拦截DNS“找不到主机名错误”，并重新发送请求（如添加www或.com）。这是不一致的使用，通过代理服务器不起作用，是对DNS有缺陷的使用，隐私问题，可能会泄露敏感数据（如查询字符串），是一个安全风险（如常见拼写错误和恶意站点）。Don't try to guess domain names when entering an invalid domain name in URL bar. disable location bar domain guessing. domain guessing intercepts DNS "hostname not found errors" and resends a request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com as the 411 for DNS errors?), privacy issues (why connect to sites you didn't intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack), and is a security risk (e.g. common typos & malicious sites set up to exploit this).
user_pref("browser.fixup.alternate.enabled", false);
// 禁止地址栏推测性连接disable location bar making speculative connections [FF56+]
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// 复制网址时，禁止解码网址的非ASCII UTF-8符号Don't urlencode non-ASCII UTF-8 symbols in URLs while copying address into clipboard
// copy the entire URL from the location bar, Don't put the human readable (percent-decoded) URL on the clipboard.
user_pref("browser.urlbar.decodeURLsOnCopy", false);
// 地址栏不截断显示网址display all parts of the url in the location bar
user_pref("browser.urlbar.trimURLs", false);


/*==========隐私>权限==========*/
/*=====定位权限=====*/
// 禁用定位权限set a default permission for Location. 0=always ask (default), 1=allow, 2=block. These are fingerprintable via Permissions API, except VR. Just add site exceptions as allow/block for frequently visited/annoying sites: i.e. not global
// [SETTING] to add site exceptions: Ctrl+I>Permissions>. [SETTING] to manage site exceptions: Options>Privacy & Security>Permissions>Settings.
user_pref("permissions.default.geo", 2);
// 禁用位置感知浏览（地理定位）Disable Location-Aware Browsing (geolocation)
user_pref("geo.enabled", false);
// 允许定位权限时，使用Mozilla地理位置服务替代谷歌[FF74+]use Mozilla geolocation service instead of Google if permission is granted [FF74+]. Optionally enable logging to the console (defaults to false).
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
// 启用控制台的日志记录Optionally enable logging to the console (defaults to false).
// user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
// 禁用系统的地理定位服务disable using the OS's geolocation service
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]
// 禁用Mozilla基于特定地理位置选择搜索引擎Disable region checks. Don't use Mozilla-provided location-specific search engines. disable geographically specific results/search engines e.g. "browser.search.*.US". i.e. ignore all of Mozilla's various search engines in multiple locales
user_pref("browser.search.geoSpecificDefaults", false);
// disable region updates
user_pref("browser.region.network.url", ""); // [FF78+]
user_pref("browser.region.update.enabled", false); // [[FF79+]
// 禁止地理定位查找以设置搜索引擎默认区域Disable GeoIP lookup on your address to set default search engine region. set search region. [NOTE] May not be hidden if Firefox has changed your settings due to your region
user_pref("browser.search.region", "US"); 
/*=====摄像头、麦克风、通知、自动播放、虚拟现实权限=====*/
// 禁用摄像头权限set a default permission for Camera [FF58+]. 0=always ask (default), 1=allow, 2=block
// exceptions: Ctrl+I>Permissions>Use the Camera
user_pref("permissions.default.camera", 2);
// 禁用麦克风权限
user_pref("permissions.default.microphone", 2);
// 禁用通知set a default permission for Notifications [FF58+]
user_pref("permissions.default.desktop-notification", 2);
// 阻止音频、视频自动播放disable autoplay of HTML5 media [FF63+]. 0=Allow all, 1=Block non-muted media (default in FF67+), 2=Prompt (removed in FF66), 5=Block all (FF69+).
// [SETTING] Privacy & Security>Permissions>Autoplay>Settings>Default for all websites
user_pref("media.autoplay.default", 5);
// 禁止虚拟现实权限set a default permission for Virtual Reality [FF73+]
user_pref("permissions.default.xr", 2);
// 禁用虚拟现实设备API Disable virtual reality devices APIs
user_pref("dom.vr.enabled", false);
// 拦截弹出式窗口block popup windows
user_pref("dom.disable_open_during_load", true);
// 当网站安装附加组件时提示警告Warn you when websites try to install add-ons
user_pref("xpinstall.whitelist.required", true);


/*==========隐私>数据收集与使用==========*/
/*=====运行状况报告=====*/
// 禁用运行状况报告，禁止发送技术信息及交互数据disable Health Reports. Disable collection/sending of the health report (healthreport.sqlite*)
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical and interaction data to Mozilla
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
// 禁用数据提交disable new data submission, master kill switch [FF41+]. If disabled, no policy is shown or upload takes place, ever.
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// 禁用个性化扩展推荐disable personalized Extension Recommendations in about:addons and AMO [FF65+].  This pref has no effect when Health Reports (0331) are disabled
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
user_pref("browser.discovery.enabled", false);
/*=====实验=====*/
// 禁止火狐安装并运行实验项目disable Studies
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies
user_pref("app.shield.optoutstudies.enabled", false);
// 禁用Normandy/Shield遥测disable Normandy/Shield [FF60+]. Shield is an telemetry system (including Heartbeat) that can also push and test "recipes".
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
/*=====崩溃报告=====*/
// 禁用发送积压的崩溃报告enforce no submission of backlogged Crash Reports [FF58+]
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send backlogged crash reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
// 禁用崩溃报告disable Crash Reports. Disable sending reports of tab crashes to Mozilla (about:tabcrashed), don't nag user about unsent crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
// 火狐每夜版NIGHTLY_BUILD默认开启，其余版本默认关闭
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+]


/*==========安全>欺诈内容和危险软件防护==========*/
// 开启安全浏览功能enable Safe Browsing. SAFE BROWSING has taken many steps to preserve privacy. If required, a full url is never sent to Google, only a part-hash of the prefix, hidden with noise of other real part-hashes. Firefox takes measures such as stripping out identifying parameters and since SBv4 (FF57+) doesn't even use cookies. (#Turn on browser.safebrowsing.debug to monitor this activity). 
// [SETTING] Privacy & Security>Security>... Block dangerous and deceptive content
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
// 禁用安全浏览功能查杀下载文件。主开关，决定browser.safebrowsing.downloads.remote.enabled、remote.url、remote.block_potentially_unwanted、remote.block_uncommon参数。disable Safe Browsing checks for downloads (both local lookups + remote). This is the master switch for the safebrowsing.downloads* prefs.
// [SETTING] Privacy & Security>Security>... "Block dangerous downloads"
user_pref("browser.safebrowsing.downloads.enabled", false);
// 禁用安全浏览功能查杀下载文件（远程）。为验证某些可执行文件的安全性，火狐可能会向谷歌提交有关文件的信息，包括名称、来源、大小和内容的加密哈希值。disable Safe Browsing checks for downloads (remote). To verify the safety of certain executable files, Firefox may submit some information about the file, including the name, origin, size and a cryptographic hash of the contents, to the Google. Safe Browsing service which helps Firefox determine whether or not the file should be blocked. If you do not understand this, or you want this protection, then override this.
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
// user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth
// 禁用安全浏览功能检查流氓或不寻常的软件disable Safe Browsing checks for unwanted software
// [SETTING] Privacy & Security>Security>... "Warn you about unwanted and uncommon software"
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// 禁用安全浏览警告页面的 "忽略此警告"[FF45+]disable "ignore this warning" on Safe Browsing warnings [FF45+]. If clicked, it bypasses the block for that session. This is a means for admins to enforce Safe Browsing.
// user_pref("browser.safebrowsing.allowOverride", false);


/*==========安全>证书==========*/
// 不查询OCSP响应服务器确认证书当前是否有效。0=禁用，1=启用disable OCSP(Online Certificate Status Protocol) fetching to confirm current validity of certificates. 0=disabled, 1=enabled (default), 2=enabled for EV certificates only OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority). It's a trade-off between security (checking) and privacy (leaking info to the CA). [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling.
// [SETTING] Privacy & Security>Security>Certificates>Query OCSP responder servers to confirm the current validity of certificates
user_pref("security.OCSP.enabled", 0);
// Enable OCSP Stapling support
// user_pref("security.ssl.enable_ocsp_stapling", true);
// 将OCSP获取失败（non-stapled）设置为硬失败set OCSP fetch failures (non-stapled) to hard-fail SEC_ERROR_OCSP_SERVER_ERROR. 
// 当无法访问CA来验证网站证书时，火狐继续连接目标网站（软失败）。设置为true，火狐中断与目标网站的连接（硬失败）。当OCSP获取失败时，软失败没有意义：无法确认证书仍然有效（可能已被撤销）和/或可能受到攻击（如恶意阻止OCSP服务器）。When a CA cannot be reached to validate a cert, Firefox just continues the connection (=soft-fail). Setting this pref to true tells Firefox to instead terminate the connection (=hard-fail). It is pointless to soft-fail when an OCSP fetch fails: you cannot confirm a cert is still valid (it could have been revoked) and/or you could be under attack (e.g. malicious blocking of OCSP servers).
// https://bbs.kafan.cn/thread-2179806-1-1.html
// security.ocsp.require，决定soft-fail/hard-fail。目前OCSP服务器处理不了过大的并发量，加上国内的网络环境，所以经常出问题。打开security.ocsp.require使用hard-fail会破坏很多网站的访问。一般只要网站支持stapling，即网站服务器定期去OCSP服务器验证，然后在自己的服务器端建立有效的缓存，就足够，也是将来的趋势。这样OCSP服务器只要定期处理网站的查询就可以了，并发量小了很多。
user_pref("security.OCSP.require", true);
// 禁用Win8.1的微软家庭安全证书[FF50+] disable Windows 8.1's Microsoft Family Safety cert [FF50+] [WIN]
// 0=禁止检测家庭安全模式和导入根证书。1=只尝试检测家庭安全模式（不导入根证书）。2=检测家庭安全模式并导入根证书0=disable detecting Family Safety mode and importing the root. 1=only attempt to detect Family Safety mode (don't import the root). 2=detect Family Safety mode and import the root.
user_pref("security.family_safety.mode", 0);
// enable strict PKP (Public Key Pinning)
// 0=disabled, 1=allow user MiTM (default; such as your antivirus), 2=strict. MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
user_pref("security.cert_pinning.enforcement_level", 2);
// enable CRLite [FF73+]
// 0 = disabled. 1 = consult CRLite but only collect telemetry. 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results. 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked" (FF99+, default FF100+)
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);


/*==========安全>HTTPS-Only模式==========*/
// 所有窗口启用HTTPS-Only模式[FF76+]enable HTTPS-Only mode in all windows [FF76+]. When the top-level is HTTPS, insecure subresources are also upgraded (silent fail).
// [SETTING] to add site exceptions: Padlock>HTTPS-Only mode>On (after "Continue to HTTP Site"). [SETTING] Privacy & Security>HTTPS-Only Mode (and manage exceptions).
// user_pref("dom.security.https_only_mode", true);
// 仅在隐私窗口启用HTTPS-Only模式[FF80+]
// user_pref("dom.security.https_only_mode_pbm", true);
// 为本地资源启用仅HTTPS模式[FF77+]enable HTTPS-Only mode for local resources [FF77+]
// user_pref("dom.security.https_only_mode.upgrade_local", true);
// 禁用HTTP后台请求[FF82+]。尝试升级时，如果服务器在3秒内没有响应，火狐发送没有路径的顶级HTTP请求，以检查服务器是否支持HTTPS。设置这一参数，避免等待90秒的超时。disable HTTP background requests [FF82+]. When attempting to upgrade, if the server doesn't respond within 3 seconds, Firefox sends a top-level HTTP request without path in order to check if the server supports HTTPS or not. This is done to avoid waiting for a timeout which takes 90 seconds.
user_pref("dom.security.https_only_mode_send_http_background_request", false);
// 禁用https页面不安全的活动内容enforce no insecure active content on https pages. Block insecure active content on https pages
user_pref("security.mixed_content.block_active_content", true); // [DEFAULT: true]
// 禁用HTTPS页面不安全的被动内容（如图像）disable insecure passive content (such as images) on https pages
// user_pref("security.mixed_content.block_display_content", true);



/*==========扩展==========*/
// 禁用自动检查更新扩展和主题disable auto-CHECKING for extension and theme updates
user_pref("extensions.update.enabled", false);
// 禁用自动安装扩展和主题disable auto-INSTALLING extension and theme updates
// about:addons>Extensions>[cog-wheel-icon]>Update Add-ons Automatically (toggle)
user_pref("extensions.update.autoUpdateDefault", false);
// 禁用扩展元数据更新opt out of add-on metadata updates. Since Firefox 4, the Add-ons Manager displays additional information about each add-on you have installed, including screenshots, description, ratings, downloads, Contributions, and other metadata. In order to keep this information updated, Firefox will ask the Mozilla Add-ons gallery for information about the add-ons you have installed once a day. This involves sending the identifiers of each add-on you have installed to Mozilla, as well as information on how long it last took Firefox to start up. The add-on identifiers are used to return updated information to you, as well as in aggregate to provide personalized recommendations in the Get Add-ons pane of the Add-ons Manager. Start-up time information is used to improve Firefox and identify add-ons that may be causing Firefox to be slow.
user_pref("extensions.getAddons.cache.enabled", false);
// 禁用附加管理器页面的推荐窗格disable recommendation pane in about:addons (uses Google Analytics) 
user_pref("extensions.getAddons.showPane", false);
// 禁用附加管理器页面的推荐扩展[FF68+]disable recommendations in about:addons' Extensions and Themes panes [FF68+]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// 启用Mozilla的扩展和证书吊销名单Enable add-on and certificate blocklists (OneCRL) from Mozilla. Updated at interval defined in extensions.blocklist.interval (default: 86400). enforce Firefox blocklist. It includes updates for "revoked certificates".
user_pref("extensions.blocklist.enabled", true);
// 禁用某些Mozilla域名网站上的扩展限制 [FF60+]，让扩展在Mozilla域名网站上正常工作disable webextension restrictions on certain mozilla domains (you also need privacy.resistFingerprinting.block_mozAddonManager) [FF60+]. 
user_pref("extensions.webextensions.restrictedDomains", "");
// 让扩展在Mozilla域名网站上正常工作disable mozAddonManager Web API [FF57+]. To allow extensions to work on AMO, you also need extensions.webextensions.restrictedDomains. 
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
/*=====火狐自带扩展=====*/
// 禁用火狐自带扩展更新disable System Add-on updates. It can compromise security. System addons ship with prefs, use those.
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
// 禁用火狐自带的截图扩展disable Screenshots. Preference that allows individual users to disable Screenshots.
user_pref("extensions.screenshots.disabled", true);
// 禁用火狐帐户、密码表单自动填充disable Form Autofill
// 如果extensions.formautofill.addresses.supportedCountries参数值包括browser.search.region指定的区域，并且extensions.formautofill.addresses.supported参数值是 detect，火狐设置界面显示UI。自动填充存储的数据不安全，使用JSON格式。extensions.formautofill.heuristics.enabled参数控制没有@autocomplete属性的表单自动填充。If .supportedCountries includes your region (browser.search.region) and .supported is "detect" (default), then the UI will show. Stored data is not secure, uses JSON. extensions.formautofill.heuristics.enabled controls Form Autofill on forms without @autocomplete attributes.
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
// extensions.formautofill.addresses.available参数值on/detect，其他值表示自动填充不可用。detect表示如果满足扩展定义的条件，则启用。extensions.formautofill.available未在表单自动填充中使用，但需要存在以用于迁移目的。Preferences for the form autofill toolkit component. The truthy values of "extensions.formautofill.addresses.available" is "on" and "detect", any other value means autofill isn't available. "detect" means it's enabled if conditions defined in the extension are met. Note: "extensions.formautofill.available" is not being used in form autofill, but need to exist for migration purposes.
user_pref("extensions.formautofill.available", "");
// user_pref("extensions.formautofill.addresses.available", "");
user_pref("extensions.formautofill.addresses.supported", "");
//  迁移extensions.formautofill.available、extensions.formautofill.creditCards.available到新参数Migrate "extensions.formautofill.available" and "extensions.formautofill.creditCards.available" from old to new prefs ""extensions.formautofill.addresses.supported" and "extensions.formautofill.creditCards.supported"
// user_pref("extensions.formautofill.creditCards.available", "");
user_pref("extensions.formautofill.creditCards.supported", "");
// 禁用网络兼容性报告 [FF56+]enforce disabling of Web Compatibility Reporter [FF56+]. Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla.
user_pref("extensions.webcompat-reporter.enabled", false);
