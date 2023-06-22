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
// 全屏模式时，强制在新标签页打开链接（取决于browser.link.open_newwindow的参数）If true, this pref causes windows opened by window.open to be forced into new tabs (rather than potentially opening separate windows, depending on window.open arguments) when the browser is in fullscreen mode. We set this differently on Mac because the fullscreen implementation there is different.
user_pref("browser.link.open_newwindow.disabled_in_fullscreen", true);
// -1，将browser.link.open_newwindow设置应用于外部链接；3，在最近活动的窗口中打开外部链接；2，在新窗口打开外部链接；1，在最近活动的标签页中打开外部链接。-1 = apply the setting browser.link.open_newwindow to external links (default) . 3 = open external links in a new tab in the last active window. 2 = open external links in a new window. 1 = open external links in the last active tab replacing the current page. 
user_pref("browser.link.open_newwindow.override.external", -1);
// 后台打开外部链接Determines behavior of pages normally meant to open in a new window (such as target="_blank" or from an external program), but that have instead been loaded in a new tab. Setting this preference to True will still bring the browser to the front when opening links from outside the browser. True: Load the new tab in the background, leaving focus on the current tab. False (default): Load the new tab in the foreground, taking the focus from the current tab.
user_pref("browser.tabs.loadDivertedInBackground", true);
// 新标签页打开书签open bookmarks in a new tab [FF57+]
user_pref("browser.tabs.loadBookmarksInTabs", true);
// 后台打开书签和历史记录Focus behavior of new tabs from bookmarks & history. True: When you open a bookmark in a new tab then that tab will load in the background without taking focus from the current tab. False (default): When you open a bookmark in a new tab then that tab will become the current tab.
user_pref("browser.tabs.loadBookmarksInBackground", true);
// 按住Ctrl键单击或中键单击书签不关闭菜单
user_pref("browser.bookmarks.openInTabClosesMenu", false);
// 新标签页打开地址栏网址
user_pref("browser.urlbar.openintab", true);
// 后台打开新标签页
user_pref("browser.tabs.loadInBackground", true);
// 中键打开新标签页
user_pref("browser.tabs.opentabfor.middleclick", true);
// 禁用鼠标中键打开剪贴板中的链接disable middle mouse click opening links from clipboard
user_pref("middlemouse.contentLoadURL", false);
// 紧邻当前标签页打开当前标签页中的链接。Open related links to a tab, e.g., link in current tab, at next to the current tab if |insertRelatedAfterCurrent| is true. Otherwise, always append new tab to the end.
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
// 禁用火狐自动安装更新[WIN系统无效]disable auto-INSTALLING Firefox updates [NON-WINDOWS FF65+]. In FF65+ on Windows this SETTING is now stored in a file and the pref was removed. If set to true, the Update Service will automatically download updates if the user can apply updates. This pref is no longer used on Windows, except as the default value to migrate to the new location that this data is now stored (which is in a file in the update directory). Because of this, this pref  should no longer be used directly. Instead, getAppUpdateAutoEnabled and getAppUpdateAutoEnabled from UpdateUtils.sys.mjs should be used.
user_pref("app.update.auto", false);
// 禁止火狐后台自动安装更新There are two main preferences specifically relevant to updates. Those are app.update.auto, which controls whether updates should be downloaded automatically at all, even if Firefox is running, and app.update.background.enabled, to specifically control whether to use the background update system. We store these preferences in the update root directory, which is located in a per-installation location outside of any profile. Any profile loaded in that installation can observe and control these settings. 
user_pref("app.update.background.enabled", false);
// 禁止更新服务
// https://bbs.kafan.cn/forum.php?mod=redirect&goto=findpost&ptid=2089238&pid=39889684
user_pref("app.update.service.enabled", false);
// 禁止火狐使用Win系统服务Background Intelligent Transfer Service下载更新If set to true, the Update Service will attempt to use Windows BITS（Background Intelligent Transfer Service） to download updates and will fallback to downloading internally if that fails.
user_pref("app.update.BITS.enabled", false);
// 更新服务下载安装包后，询问是否应用更新If set to true, the Update Service will apply updates in the background when it finishes downloading them.
// http://bbs.kafan.cn/forum.php?mod=redirect&goto=findpost&ptid=2089238&pid=39889684
user_pref("app.update.staging.enabled", false);
// user_pref("app.update.background.previous.reasons", "[\"app.update.auto=false\",\"app.update.background.enabled=false\",\"not default profile\",\"app.update.langpack.enabled=true and at least one langpack is installed\"]");


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
// 画中画Enable Picture in Picture mode
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
