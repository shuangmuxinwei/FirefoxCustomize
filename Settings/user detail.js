/******
*    name: shuangmuxinwei user.js
*    date: 22 July 2023
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
// 取消“按下Ctrl+Tab时，依照最近使用顺序循环切换标签页火狐旧版本参数browser.ctrlTab.recentlyUsedOrder.”disable 'Ctrl+Tab cycles through tabs in recently used order'
user_pref("browser.ctrlTab.sortByRecentlyUsed", false);
// 同时打开多个标签页时不提醒。阈值由browser.tabs.maxOpenBeforeWarn指定
user_pref("browser.tabs.warnOnOpen", false);
// 关闭所有标签页时不提醒Do not warn when closing all open tabs. Mozilla Firefox 94 won't prompt users anymore when they are about to close a browser window with multiple tabs.
user_pref("browser.tabs.warnOnClose", false);
// 关闭多个标签页时不提醒Do not warn when closing all other open tabs
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
// 关闭最后一个标签时不关闭浏览器Do not close the window when the last tab gets closed
user_pref("browser.tabs.closeWindowWithLastTab", false);
// 禁止任务栏显示标签页预览图disable Windows taskbar preview [WINDOWS]
user_pref("browser.taskbar.previews.enable", false);
// 关闭常用跳转列表disable Windows jumplist [WINDOWS]
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
// 禁止任务栏火狐图标右键显示最近条目：设置——>个性化——>开始——>在开始屏幕或任务栏的跳转列表中显示最近打开的项。Windows 10 does not provide a way to exempt a specific application from having opened files saved in Recent Items; that feature has only an all-or-nothing switch.  HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Start_TrackDocs = 0 disables tracking, 1 enables. 
/*=====身份标签页CONTAINERS=====*/
// enable Container Tabs and its UI setting [FF50+]
// [SETTING] General>Tabs>Enable Container Tabs
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
// 左键单击+按钮时，显示容器菜单[FF74+]set behavior on "+ Tab" button to display container menu on left click [FF74+]. [NOTE] The menu is always shown on long press and right click
// [SETTING] General>Tabs>Enable Container Tabs>Settings>Select a container for each new tab
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
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
// 自定义浏览器用户界面，将下载按钮隐藏至折叠菜单CustomizableUI state of the browser's user interface
// user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[\"downloads-button\"],\"unified-extensions-area\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"home-button\",\"customizableui-special-spring1\",\"urlbar-container\",\"customizableui-special-spring2\",\"save-to-pocket-button\",\"fxa-toolbar-menu-button\",\"unified-extensions-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"firefox-view-button\",\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"import-button\",\"personal-bookmarks\"]},\"seen\":[\"developer-button\",\"save-to-pocket-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"PersonalToolbar\",\"toolbar-menubar\",\"TabsToolbar\",\"widget-overflow-fixed-list\"],\"currentVersion\":19,\"newElementCount\":5}");
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
// 从Content-Disposition头信息检索文件名的延时。大多数下载的文件名与下载URL中的内容匹配。但某些网站使用Content-Disposition标头字段，指定与URL不同的文件名。若未在设定延时检索到Content-Disposition值，浏览器使用URL中指定的文件名。Some URLs use Content-Disposition headers to tell browsers what to use for a filename when saving a file. This filename may not match the URL. When choosing “Save Link As...” from a link’s context menu, Mozilla must request the URL to find out the filename from a Content-Disposition header. Since this is not as fast as merely using the URL itself to generate a filename, Mozilla will time out after a short time waiting for the headers. This preference determines that timeout. 
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
// 禁用新标签页网址预加载disable preloading of the new tab url
user_pref("browser.newtab.preload", false); 


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
// 退出浏览器时清除会话还原设置（需要设置privacy.sanitize.sanitizeOnShutdown值为true）[FF34+]。若不使用会话恢复功能或已经清除历史记录，那么无需设置这一参数。参数值为true，阻止会话从崩溃中恢复set Session Restore to clear on shutdown (if 'privacy.sanitize.sanitizeOnShutdown' is true) [FF34+]. [NOTE] Not needed if Session Restore is not used ('browser.startup.page') or it is already cleared with history ('privacy.clearOnShutdown.*'). [NOTE] If true, this prevents resuming from crashes (also see 'browser.sessionstore.resume_from_crash')
// user_pref("privacy.clearOnShutdown.openWindows", true);



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
// 地址栏搜索单词字符串时，禁止DNS解析。字符串解析为有效主机，默认显示“是否前往主机”提示。0=从不解析；1=使用启发式（默认）；2=始终解析Controls when to DNS resolve single word search strings, after they were searched for. If the string is resolved as a valid host, show a "Did you mean to go to 'host'" prompt. 0 - never resolve; 1 - use heuristics (default); 2 - always resolve. disable location bar leaking single words to a DNS provider after searching [FF78+]. 0=never resolve, 1=use heuristics, 2=always resolve. 
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0); // [DEFAULT: 0 FF104+]
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
// 设置阻止自动播放的策略。0，粘性激活。1，瞬时激活（瞬时激活持续时间通过参数dom.user_activation.transient.timeout调整）。2，用户输入深度（当用户输入触发播放，允许自动播放，输入由用户输入深度决定）This pref defines what the blocking policy would be used in blocking autoplay. 0 : use sticky activation (default). 1 : use transient activation (the transient activation duration can be adjusted by the pref `dom.user_activation.transient.timeout`). 2 : user input depth (allow autoplay when the play is trigged by user input which is determined by the user input depth). disable autoplay of HTML5 media if you interacted with the site [FF78+]
// user_pref("media.autoplay.blocking_policy", 2);
// 禁止虚拟现实权限set a default permission for Virtual Reality [FF73+]
user_pref("permissions.default.xr", 2);
// 禁用虚拟现实设备API Disable virtual reality devices APIs
user_pref("dom.vr.enabled", false);
// 拦截弹出式窗口block popup windows
user_pref("dom.disable_open_during_load", true);
// 当网站安装附加组件时提示警告Warn you when websites try to install add-ons
user_pref("xpinstall.whitelist.required", true);
/*=====视频全屏=====*/
// 禁用视频全屏，防止屏幕分辨率泄漏disable Fullscreen API (requires user interaction) to prevent screen-resolution leaks 
// user_pref("full-screen-api.enabled", false);
// 过渡至全屏状态的黑屏超时（毫秒）timeout for black screen in fullscreen transition, unit: ms
user_pref("full-screen-api.transition.timeout", 0);
// 进入全屏状态时，黑屏淡入的超时（毫秒）transition duration of fade-to-black and fade-from-black, unit: ms
user_pref("full-screen-api.transition-duration.enter", "0 0");
// 离开全屏状态时，从黑屏淡出的超时（毫秒）transition duration of fade-to-black and fade-from-black, unit: ms
user_pref("full-screen-api.transition-duration.leave", "0 0");
// 鼠标指针停留在顶部时，全屏提醒的警告框显示的延迟（毫秒）delay for the warning box to show when pointer stays on the top, unit: ms
user_pref("full-screen-api.warning.delay", 0);
// 全屏提醒的警告框在滑出之前停留在屏幕上的时间（毫秒）time for the warning box stays on the screen before sliding out, unit: ms
user_pref("full-screen-api.warning.timeout", 0);
/*=====窗口=====*/
// 防止脚本移动窗口、调整窗口大小prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);
// 禁止晃动屏幕Disable vibrator API. disable shaking the screen
user_pref("dom.vibrator.enabled", false);
// 限制可能导致弹出窗口的事件limit events that can cause a pop-up
// user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
// 禁止关闭页面时弹出“确认离开”对话框。不能阻止页面关闭事件的JS泄漏disable "Confirm you want to leave" dialog on page close. Does not prevent JS leaks of the page close event. 
user_pref("dom.disable_beforeunload", true);
// 禁止网站设置浏览器右键菜单。Shift+右键单击显示浏览器右键单击菜单disable website control over browser right-click context menu. Shift-Right-Click will always bring up the browser right-click context menu.
// user_pref("dom.event.contextmenu.enabled", false);
// 禁用剪贴板API。参数值为真，允许触发“剪切”“复制”和“粘贴”事件。inputType为“insertFromPaste”或其他内容时，“input”事件可能会泄露剪贴板内容。disable Clipboard API. [WHY] Fingerprintable. Breakage. Cut/copy/paste require user interaction, and paste is limited to focused editable fields. If this is true, it's allowed to fire "cut", "copy" and "paste" events. Additionally, "input" events may expose clipboard content when inputType is "insertFromPaste" or something.
// user_pref("dom.event.clipboardevents.enabled", false);
// 禁用Javascript脚本设置的“剪切/复制到剪贴板”功能[FF41+]。会破坏合法的基于JS的“复制到剪贴板”功能。disable clipboard commands (cut/copy) from "non-privileged" content [FF41+]. this disables document.execCommand("cut"/"copy") to protect your clipboard. Disable "copy to clipboard" functionality via Javascript (Firefox >= 41). NOTICE: Disabling clipboard operations will break legitimate JS-based "copy to clipboard" functionality.
// user_pref("dom.allow_cut_copy", false);
// 禁止Linux上自动将所选内容发送到剪贴板。除ANDROID、XP_MACOSX、XP_UNIX系统外，参数值默认true。Do not automatically send selection to clipboard on some Linux platforms
// user_pref("clipboard.autocopy", false); 


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
/*=====遥测=====*/
// https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html
// 禁止遥测disable telemetry
// toolkit.telemetry.unified值为true，遥测始终启用，并记录基础数据。遥测发送额外的主ping。toolkit.telemetry.unified controls whether unified behavior is enabled. If true: Telemetry is always enabled and recording base data. Telemetry will send additional main pings. It defaults to true, but is false on Android (Fennec) builds.
// toolkit.telemetry.unified影响toolkit.telemetry.enabled。unified值为false，enabled决定是否启用遥测模块。unified值为true，enabled决定是否记录扩展数据。unified参数值在火狐预发布版本锁定为true，在正式版本锁定为false。The "toolkit.telemetry.unified" pref affects the behavior of the "toolkit.telemetry.enabled" pref. If "toolkit.telemetry.unified" is false then "toolkit.telemetry.enabled" controls the telemetry module. If "toolkit.telemetry.unified" is true then "toolkit.telemetry.enabled" only controls whether to record extended data. [NOTE] "toolkit.telemetry.enabled" is now LOCKED to reflect prerelease (true) or release builds (false).
// https://www.ghacks.net/2015/11/09/how-to-disable-the-firefox-saved-telemetry-pings-and-archive-folder/
// saved-telemetry-pings和datareporting/archive文件夹。火狐开发版的用户可能找到数月前的遥测数据，而稳定版用户只能查找到近期数据。Firefox设置不收集遥测数据，仍会创建数据。Telemetry pings遥测是Firefox发送到Mozilla服务器的数据包，数据以JSON格式存储，可通过在纯文本编辑器或有序方式显示JSON数据的专用软件查看。收集的数据包括浏览器的构建，各种基准值，已安装的扩展以及计算机系统的信息。saved-telemetry-pings和datareporting/archive文件夹包含遥测。核心区别似乎是后者以压缩格式（.jsonlz4）存储，而前者不是。Saved Telemetry Pings and datareporting/archived are two local folders in the Firefox profile that the browser started to populate with data recently. Users on development versions may find months worth of telemetry data in those folder while stable users only recent data. What makes this puzzling is that the data is created even if Firefox is configured to not collect telemetry data. Telemetry pings are data packages that Firefox sends to Mozilla servers. The data is stored in JSON format which means that you can take a look at it by loading it in a plain text editor or specialized application that displays JSON data in an orderly fashion.The collected data includes information about the build of the browser, various benchmark values, the installed extensions, and information about the computer system. The Saved Telemetry Pings folder and the Datareporting/archive folder contain both telemetry pings. The core difference appears to be that the latter stores them in compressed format (.jsonlz4) while the former does not.
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); 
// 用以接收遥测ping数据的服务器The server Telemetry pings are sent to. Change requires restart.
user_pref("toolkit.telemetry.server", "data:,");
// toolkit.telemetry.archive.enabled定义是否启用遥测ping的本地归档，只在toolkit.telemetry.unified值为true时起作用。The preference toolkit.telemetry.archive.enabled defines whether local archiving of telemetry pings is enabled or not. The preference depends on toolkit.telemetry.unified and works only if unified is turned on.
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
// 禁用后台挂起报告程序disable Background Hang Reporter
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] 
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
// disable Telemetry Coverage
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
// 禁用PingCentre遥测（用于几个系统插件）[FF57+]。目前参数被datareporting.healthreport.uploadEnabled覆盖。disable PingCentre telemetry (used in several System Add-ons) [FF57+]. Defense-in-depth: currently covered by datareporting.healthreport.uploadEnabled.
user_pref("browser.ping-centre.telemetry", false);
// 禁用默认浏览器代理（似只在XP上生效）disable the default browser agent. The agent still runs as scheduled if this pref is disabled, but it exits immediately before taking any action.
user_pref("default-browser-agent.enabled", false);
// 禁止强制网络门户检测disable Captive Portal detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
// disable Network Connectivity checks [FF65+]
user_pref("network.connectivity-service.enabled", false);
/*=====WebGL=====*/
// 禁用WebGL（网络图形库）disable WebGL (Web Graphics Library). If you need it then override it. RFP (RESIST FINGERPRINTING) still randomizes canvas for naive scripts.
user_pref("webgl.disabled", true);


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
// 不查询OCSP响应服务器确认证书当前是否有效。0=禁用；1=启用；2=仅对EV证书启用OCSP（non-stapled），将有关访问的站点信息泄漏到CA（证书颁发机构）。这是安全性和隐私（向CA泄露信息）之间的权衡。此参数仅控制OCSP获取，不会影响OCSP stapling。disable OCSP(Online Certificate Status Protocol) fetching to confirm current validity of certificates. 0=disabled, 1=enabled (default), 2=enabled for EV certificates only OCSP (non-stapled). leaks information about the sites you visit to the CA (cert authority). It's a trade-off between security (checking) and privacy (leaking info to the CA). [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling.
// [SETTING] Privacy & Security>Security>Certificates>Query OCSP responder servers to confirm the current validity of certificates
user_pref("security.OCSP.enabled", 0);
// Enable OCSP Stapling support
// user_pref("security.ssl.enable_ocsp_stapling", true);
// 将OCSP获取失败（non-stapled）设置为硬失败set OCSP fetch failures (non-stapled) to hard-fail SEC_ERROR_OCSP_SERVER_ERROR. 
// 当无法访问CA来验证网站证书时，火狐继续连接目标网站（软失败）。设置为true，火狐中断与目标网站的连接（硬失败）。当OCSP获取失败时，软失败没有意义：无法确认证书仍然有效（可能已被撤销）和/或可能受到攻击（如恶意阻断OCSP服务器）。When a CA cannot be reached to validate a cert, Firefox just continues the connection (=soft-fail). Setting this pref to true tells Firefox to instead terminate the connection (=hard-fail). It is pointless to soft-fail when an OCSP fetch fails: you cannot confirm a cert is still valid (it could have been revoked) and/or you could be under attack (e.g. malicious blocking of OCSP servers).
// https://bbs.kafan.cn/thread-2179806-1-1.html
// security.ocsp.require，决定soft-fail/hard-fail。目前OCSP服务器处理不了过大的并发量，加上国内的网络环境，所以经常出问题。打开security.ocsp.require使用hard-fail会破坏很多网站的访问。一般只要网站支持stapling，即网站服务器定期去OCSP服务器验证，然后在自己的服务器端建立有效的缓存，就足够，也是将来的趋势。这样OCSP服务器只要定期处理网站的查询就可以了，并发量小了很多。
user_pref("security.OCSP.require", true);
// 禁用Win8.1的微软家庭安全证书[FF50+]。0=禁止检测家庭安全模式和导入根证书。1=只尝试检测家庭安全模式（不导入根证书）。2=检测家庭安全模式并导入根证书disable Windows 8.1's Microsoft Family Safety cert [FF50+] [WIN]. 0=disable detecting Family Safety mode and importing the root. 1=only attempt to detect Family Safety mode (don't import the root). 2=detect Family Safety mode and import the root.
user_pref("security.family_safety.mode", 0);
// 启用严格的PKP（公钥锁定）。0=禁用，1=允许用户中间人设备（如杀毒软件），2=严格。如果依靠杀毒软件通过检查所有网络流量来保护网络浏览，保持默认值=1。enable strict PKP (Public Key Pinning). 0=disabled, 1=allow user MiTM (default; such as your antivirus), 2=strict. If you rely on an AV (antivirus) to protect your web browsing by inspecting ALL your web traffic, then leave at current default=1. [SETUP-WEB] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
user_pref("security.cert_pinning.enforcement_level", 2);
// 启用CRLite[FF73+]。0=禁用。1=查询CRLite，但只收集遥测数据。2=查询CRLite并同时执行 "已撤销 "和 "未撤销 "结果。3=查询CRLite并执行 "未撤销 "结果，但将 "已撤销 "结果交由OCSP处理enable CRLite [FF73+]. 0 = disabled. 1 = consult CRLite but only collect telemetry. 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results. 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked" (FF99+, default FF100+)
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
// 禁用中间证书缓存[FF41+]。会影响登录/证书/密钥数据库。效果是所有证书只能在会话中使用。保存的登录名和密码不可用。disable intermediate certificate caching [FF41+] [RESTART]. [NOTE] This affects login/cert/key dbs. The effect is all credentials are session-only. Saved logins and passwords are not available. Reset the pref and restart to return them.
// user_pref("security.nocertdb", true);


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
// 在加密页面上阻止来自Flash的未加密请求，缓解中间人攻击[FF59+]block unencrypted requests from Flash on encrypted pages to mitigate MitM(Man-in-the-MiddleAttack) attacks [FF59+] [underlying NPAPI code removed]. Pref to block sub requests that happen within an object.
user_pref("security.mixed_content.block_object_subrequest", true);



/*==========同步==========*/
// 禁止火狐帐户和同步disable Firefox Accounts & Sync [FF60+] [RESTART]. If set to false, FxAccounts and Sync will be unavailable. A restart is mandatory after flipping that preference.
user_pref("identity.fxaccounts.enabled", false); 



/*==========设置==========*/
// 禁用about:preferences的Mozilla产品More from Mozilla
user_pref("browser.preferences.moreFromMozilla", false);
// 在设置页面关闭搜索栏Toggling Search bar on and off in about:preferences
user_pref("browser.preferences.search", false);
// 关闭火狐的实验项目。每夜版默认开启，其余版本默认关闭
user_pref("browser.preferences.experimental", false);
user_pref("browser.preferences.experimental.hidden", false);



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
// 禁止绕过第三方扩展安装提示 [FF82+]disable bypassing 3rd party extension install prompts [FF82+]
user_pref("extensions.postDownloadThirdPartyPrompt", false);
// 强制启用SmartBlock shims[FF81+]enforce SmartBlock shims [FF81+]. In FF96+ these are listed in about:compat
user_pref("extensions.webcompat.enable_shims", true); // [DEFAULT: true]
// 锁定允许的扩展目录。将破坏扩展，语言包，主题和任何其他安装在配置文件和应用程序目录之外的XPI文件lock down allowed extension directories. [SETUP-CHROME] This will break extensions, language packs, themes and any other XPI files which are installed outside of profile and application directories
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
// 强制扩展、语言包签名enforced extension signing
user_pref("xpinstall.signatures.required", true); 
user_pref("extensions.langpacks.signatures.required", true);
// 取消统一管理扩展按钮（已废弃）
// user_pref("extensions.unifiedExtensions.enabled", false);
/*=====火狐自带扩展=====*/
// about:support，查看系统附加组件，自带扩展被存放在Features目录下。To view your System Add-ons go to about:support, they are listed under "Firefox Features". Windows: "...\Program Files\Mozilla\browser\features" (or "Program Files (X86)\etc" for 32bit). Mac: "...\Applications\Firefox\Contents\Resources\browser\features\". On Mac you can right-click on the application and select "Show Package Contents". Linux: "/usr/lib/firefox/browser/features" (or similar)
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
// 禁用网络兼容性报告[FF56+]enforce disabling of Web Compatibility Reporter [FF56+]. Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla.
user_pref("extensions.webcompat-reporter.enabled", false);
// Disable Pocket
user_pref("extensions.pocket.enabled", false);



/*==========主题==========*/
// 0，启用深邃主题dark (0), light (1), system (2), or toolbar (3).
user_pref("browser.theme.content-theme", 0);
// 设定工具栏颜色。深色0，浅色1，系统色2。mac/Win下默认light，其他平台默认系统色Communicates the toolbar color to platform (for e.g., prefers-color-scheme). Returns whether the toolbar is dark (0), light (1), or system (2). Default to "light" on macOS / Windows, and "system" elsewhere. The theming code sets it appropriately.
user_pref("browser.theme.toolbar-theme", 0);
// default-theme@mozilla.org，默认主题；firefox-compact-light@mozilla.org，明亮主题；firefox-compact-dark@mozilla.org，深邃主题；firefox-alpenglow@mozilla.org，染山霞主题
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");



/*==========插件==========*/
// 禁用Flash Player插件。ESR52.x是最后一个完全支持NPAPI插件的分支，FF52+稳定版只支持Flash。Disable Flash Player NPAPI plugin.  0=deactivated, 1=ask, 2=enabled. ESR52.x is the last branch to fully support NPAPI, FF52+ stable only supports Flash. You can still override individual sites via site permissions.
user_pref("plugin.state.flash", 0);
// 禁用Java插件Disable Java NPAPI plugin
// user_pref("plugin.state.java", 0);
// 禁止发送插件崩溃报告至网站disable sending the URL of the website where a plugin crashed [underlying NPAPI code removed]
user_pref("dom.ipc.plugins.reportCrashURL", false);
// 禁止发送Flash Player插件崩溃报告（已废弃）disable sending Flash crash reports
// user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
/*=====WebRTC=====*/
// 禁用WebRTC，防止泄露私人IP。disable WebRTC (Web Real-Time Communication).  Firefox desktop uses mDNS hostname obfuscation and the private IP is never exposed until required in TRUSTED scenarios; i.e. after you grant device (microphone or camera) access. Disable WebRTC entirely to prevent leaking internal IP addresses (Firefox < 42). NOTICE: Disabling WebRTC breaks peer-to-peer file sharing tools (reep.io ...)
user_pref("media.peerconnection.enabled", false);
// 在代理内部强制WebRTC[FF70+]force WebRTC inside the proxy [FF70+]
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// 强制使用单一网络接口生成ICE候选[FF42+]force a single network interface for ICE candidates generation [FF42+]. When using a system-wide proxy, it uses the proxy interface. Don't reveal your internal IP when WebRTC is enabled [FF42+].
user_pref("media.peerconnection.ice.default_address_only", true);
// 强制将私有IP排除在ICE候选者之外[FF51+]。这在授予设备访问权限后保护私有IP，即使在受信任的场景下也是如此，但在视频会议平台上通常会导致中断。force exclusion of private IPs from ICE candidates [FF51+]. [SETUP-HARDEN] This will protect your private IP even in TRUSTED scenarios after you grant device access, but often results in breakage on video-conferencing platforms.
// user_pref("media.peerconnection.ice.no_host", true);



/*==========工具栏==========*/
// 移除Firefox View按钮In Firefox 106, developers have added two new buttons to the toolbar of the browser. One of them, Firefox View, opens a built-in page with the list of recently opened tabs, tabs from your other devices, and also allows switching the theme. Another one is List all tabs that appears at the end of the tab row and opens a menu with open tabs similar to what you could see in Chrome. 
// https://winaero.com/how-to-remove-firefox-view-and-list-all-tabs-from-firefox-toolbar/
// user_pref("browser.tabs.firefox-view", false);
// 移除“list all tabs”按钮Control the visibility of Tab Manager Menu.
user_pref("browser.tabs.tabmanager.enabled", false);
// 移除“新功能”工具栏图标disable What's New toolbar icon [FF69+]
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); 
// 取消38.0.5集成的阅读模式，移除工具栏阅读模式图标disable Reader View. Whether or not to perform reader mode article parsing on page load. If this pref is disabled, we will never show a reader mode icon in the toolbar.
user_pref("reader.parse-on-load.enabled", false); 



/*==========历史记录==========*/
// 最近关闭的标签页最大数量。这一参数决定会话恢复服务跟踪多少个最近关闭的标签页（默认25）。会话恢复服务必须处于活动状态。"Undo Closed Tabs" in Session Restore. This preference controls how many closed tabs are kept track of via the Session Restore service. A positive integer indicating how many tab closures to remember for later possible restoration. The Session Restore service must be active for tab data to be remembered. This preference does not exist by default.
user_pref("browser.sessionstore.max_tabs_undo", 3);
// 最近关闭的窗口最大数量（默认 10）。会话恢复服务必须处于活动状态。This preference controlled how many closed windows are kept track of via the Session Restore service. A positive integer indicating how many window closures to remember for later possible restoration. The Session Restore service must be active for window data to be remembered. how many windows can be reopened (per session) - on non-OS X platforms. this pref may be ignored when dealing with pop-up windows to ensure proper startup
user_pref("browser.sessionstore.max_windows_undo", 1);
// 定义Ctrl-Shift-Del清除历史记录的项目。无论privacy.cpd.downloads参数值是什么，只要打开“清除最近的历史记录”对话框，将同步为privacy.cpd.history的值reset default items to clear with Ctrl-Shift-Del [SETUP-CHROME]. This dialog can also be accessed from the menu History>Clear Recent History. Firefox remembers your last choices. This will reset them when you start Firefox. [NOTE] Regardless of what you set "downloads" to, as soon as the dialog for "Clear Recent History" is opened, it is synced to the same as "history" 
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
// 定义“清除最近的历史记录”的时间范围。0=一切，1=过去一小时，2=过去两个小时，3=过去四个小时，4=今天reset default "Time range to clear" for "Clear Recent History". Firefox remembers your last choice. This will reset the value when you start Firefox. 0=everything, 1=last hour, 2=last two hours, 3=last four hours, 4=today. [NOTE] Values 5 (last 5 minutes) and 6 (last 24 hours) are not listed in the dropdown, which will display a blank value, and are not guaranteed to work
user_pref("privacy.sanitize.timeSpan", 0);
// 在内存中存储的最大页面数量。参数值为负数，根据可用内存量计算要缓存的内容查看器数量。最近访问的页面被存储在内存，避免重新解析（与内存缓存不同），以提高后退和前进的性能。这一参数限制在内存中存储的最大页面数量。默认-1，根据RAM总量自动确定存储内存的最大页面数量。0，禁止在内存中存储任何页面。任何正整数，存储在内存中的最大页面数量。Max number of total cached content viewers. Fastback caching - if this pref is negative, then we calculate the number of content viewers to cache based on the amount of available memory. the maximum number of pages stored in memory. Pages that were recently visited are stored in memory in such a way that they don't have to be re-parsed (this is different from the memory cache). This improves performance when pressing Back and Forward.This preference limits the maximum number of pages stored in memory. -1, Automatically determine the maximum amount of pages to store in memory based on the total amount of RAM (Default). 0, Do not store any pages in memory. Any positive integer, Maximum number of pages to store in memory.
user_pref("browser.sessionhistory.max_total_viewers", 3);
// 浏览器会话历史记录的最大页数（后退/前进按钮的历史记录缓存最大数量）The maximum number of pages in the browser's session history, i.e. the maximum number of URLs you can traverse purely through the Back/Forward buttons. Default value is 50.
user_pref("browser.sessionhistory.max_entries", 3);
// 禁止从崩溃中恢复会话disable resuming session from crash. 
// user_pref("browser.sessionstore.resume_from_crash", false);
// 设置会话保存操作之间的最小间隔（默认15000，15秒）。browser.sessionstore.enabled参数值为true才能生效。set the minimum interval between session save operations. This preference controls how often information about the current session is saved to the profile. A positive integer indicating the number of milliseconds between session saving operations. (Default is 15000, or 15 seconds; in Firefox 3.x: 10 seconds).browser.sessionstore.enabled must be true for this preference to have an effect.
user_pref("browser.sessionstore.interval", 3600000);



/*==========书签==========*/
// 始终显示书签工具栏。The visibility of the bookmarks toolbar. "newtab": Show on the New Tab Page. "always": Always show. "never": Never show
user_pref("browser.toolbars.bookmarks.visibility", "always");
// 书签备份文件的数量。0，禁用备份；-1，备份数量不受限制
user_pref("browser.bookmarks.max_backups", 1);
// 创建快捷方式时，禁止获取网站图标。快捷方式的图标使用profile/shortcutCache目录中的随机命名的.ico文件。删除快捷方式后，.ico依旧保留。参数值为false，快捷方式使用通用的火狐图标disable favicons in shortcuts. URL shortcuts use a cached randomly named .ico file which is stored in your profile/shortcutCache directory. The .ico remains after the shortcut is deleted. If set to false then the shortcuts use a generic Firefox icon. Don't fetch and permanently store favicons for Windows .URL shortcuts created by drag and drop. NOTICE: .URL shortcut files will be created with a generic icon. Favicons are stored as .ico files in $profile_dir\shortcutCache.
user_pref("browser.shell.shortcutFavicons", false);
// 禁止下载历史记录和书签中的网站图标。图标以数据blob形式存储在favicons.sqlite中，火狐关闭时清理favicons.sqlite。disable favicons in history and bookmarks. [NOTE] Stored as data blobs in favicons.sqlite, these don't reveal anything that your actual history (and bookmarks) already do. Your history is more detailed, so control that instead; e.g. disable history, clear history on exit, use Private Browsing mode. [NOTE] favicons.sqlite is sanitized on Firefox close.
user_pref("browser.chrome.site_icons", false);
// 禁用Web通知的网站图标disable favicons in web notifications
user_pref("alerts.showFavicons", false);



/*==========火狐界面==========*/
// 禁止显示标题栏。0，显示；2，不显示。Whether we should draw the tabs on top of the titlebar. 
user_pref("browser.tabs.inTitlebar", 2);
// 浏览器界面密度。主要影响工具栏按钮和地址栏的间距。0=正常，1=紧凑，2=触摸。UI density of the browser chrome. This mostly affects toolbarbutton and urlbar spacing. The possible values are 0=normal, 1=compact, 2=touch.
user_pref("browser.uidensity", 0);
// 在平板模式下使用为触控优化的界面Whether Firefox will automatically override the uidensity to "touch" while the user is in a touch environment (such as Windows tablet mode).
user_pref("browser.touchmode.auto", true);



/*==========磁盘缓存==========*/
// 禁止隐私浏览模式下媒体缓存写入磁盘disable media cache from writing to disk in Private Browsing. [NOTE] MSE (Media Source Extensions) are already stored in-memory in Private Browsing
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
// 如果资源小于设定的大小（单位KB），那么使用内存支持的媒体缓存；否则（单个共享全局）使用文件支持的媒体缓存If a resource is known to be smaller than this size (in kilobytes), a memory-backed MediaCache may be used; otherwise the (single shared global) file-backed MediaCache is used.
user_pref("media.memory_cache_max_size", 1048576);
// 禁用存储额外的会话数据disable storing extra session data [SETUP-CHROME]. define on which sites to save extra session data such as form content, cookies and POST data. 0=everywhere, 1=unencrypted sites, 2=nowhere
user_pref("browser.sessionstore.privacy_level", 2);
// 在系统下次启动后，禁止自动启动火狐并恢复会话[XP]disable automatic Firefox start and session restore after reboot [FF62+] [WINDOWS]. Whether to use RegisterApplicationRestart to restart the browser and resume the session on next Windows startup
user_pref("toolkit.winRegisterApplicationRestart", false);



/*==========杂项==========*/
// 取消AboutConfig警告disable about:config warning. FF71-72: chrome://global/content/config.xul. FF73-86: chrome://global/content/config.xhtml( jar:file:///C:/Program Files/Mozilla Firefox/omni.ja!/chrome/toolkit/content/global/config.xhtml)
// FF新版本:chrome://global/content/aboutconfig/aboutconfig.html(jar:file:///C:/Program Files/Mozilla Firefox/omni.ja!/chrome/toolkit/content/global/aboutconfig/aboutconfig.html)
// http://www.devdoc.net/web/developer.mozilla.org/en-US/docs/XUL_Tutorial/The_Chrome_URL.html
// user_pref("general.warnOnAboutConfig", false); // XHTML version
user_pref("browser.aboutConfig.showWarning", false); // HTML version [FF71+]


// 启用userChrome/userContent，自定义界面Support for legacy customizations that rely on checking the user profile directory for these stylesheets: userContent.css, userChrome.css.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); 


// 定义退格键的功能Backspace and Shift+Backspace behavior. 0 goes Back/Forward. 1 act like PgUp/PgDown. 2 and other values, nothing.
user_pref("browser.backspace_action", 2); 
// 禁止Alt键搭配其他键位激活菜单栏的菜单项（如Alt+F，激活菜单栏“文件”菜单项）。参数值默认18，指定Alt键；17，指定Ctrl+Shift。disable alt key toggling the menu bar
user_pref("ui.key.menuAccessKey", 0);
// 禁止Alt键激活菜单栏Make sure Alt key doesn't show the menubar
user_pref("ui.key.menuAccessKeyFocuses", false);
// 1，单击滚动条滚动到与点击点对应的视图。
user_pref("ui.scrollToClick", 1);
// 禁止Ctrl+Q按键退出浏览器[LINUX] [MAC]disable Ctrl-Q quit shortcut [LINUX] [MAC] [FF87+]. Don't quit the browser when Ctrl + Q is pressed.
// user_pref("browser.quitShortcut.disabled", true); 

// 在新标签页查看“页面/选中内容”的源代码。若启用外部编辑器查看页面源代码，此参数无效
user_pref("view_source.tab", true); 
// 启用外部编辑器查看页面源代码Check if external view source is enabled.  If so, try it.  If it fails, fallback to internal view source.
user_pref("view_source.editor.external", true);
// 指定查看页面源代码的外部编辑器路径
user_pref("view_source.editor.path", "d:\\Program Files\\EmEditor\\EmEditor.exe");



/*==========网络==========*/
/*=====DNS/DoH/PROXY/SOCKS/IPv6=====*/
// 禁用IPv6。IPv6可能会被滥用，尤其是MAC地址，并且可能会在VPN中泄漏。这是程序级别的禁用。禁用IPv6最好在操作系统/网络级别完成和在VPN设置中正确配置。disable IPv6. IPv6 can be abused, especially with MAC addresses, and can leak with VPNs: assuming your ISP and/or router and/or website is IPv6 capable. Most sites will fall back to IPv4. [SETUP-WEB] PR_CONNECT_RESET_ERROR: this pref might be the cause. [STATS] Firefox telemetry (Feb 2023) shows ~9% of successful connections are IPv6. [NOTE] This is an application level fallback. Disabling IPv6 is best done at an OS/network level, and/or configured properly in VPN setups. If you are not masking your IP, then this won't make much difference. If you are masking your IP, then it can only help. [NOTE] PHP defaults to IPv6 with "localhost". Use "php -S 127.0.0.1:PORT"
user_pref("network.dns.disableIPv6", true);
// 在使用SOCKS时，设置代理服务器进行DNS查询。如在Tor中，这会阻止本地DNS服务器知道Tor目的地，因为远程Tor节点将处理DNS请求set the proxy server to do any DNS lookups when using SOCKS. e.g. in Tor, this stops your local DNS server from knowing your Tor destination as a remote Tor node will handle the DNS request
user_pref("network.proxy.socks_remote_dns", true);
// 禁止使用UNC（统一命名规范）路径[FF61+]disable using UNC (Uniform Naming Convention) paths [FF61+]. [SETUP-CHROME] Can break extensions for profiles on network shares
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
// 禁止GIO作为潜在的代理旁路媒介disable GIO as a potential proxy bypass vector. Gvfs/GIO has a set of supported protocols like obex, network, archive, computer, dav, cdda, gphoto2, trash, etc. By default only sftp is accepted (FF87+)
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF]
/*=====SSL (Secure Sockets Layer) / TLS (Transport Layer Security)=====*/
// 需要安全协商。阻止与不支持RFC 5746的服务器连接，因为这些服务器可能会遭受中间人攻击。不支持RFC 5746的服务器如果禁用重新协商，就不会受到攻击，但浏览器无法确认这一点。将此参数设置为true是确保浏览器和服务器之间的通道不会出现不安全的重新协商的唯一方法require safe negotiation. Blocks connections to servers that don't support RFC 5746 as they're potentially vulnerable to a MiTM attack. A server without RFC 5746 can be safe from the attack if it disables renegotiations, but the problem is that the browser can't know that. Setting this pref to true is the only way for the browser to ensure there will be no unsafe renegotiations on the channel between the browser and the server. 
user_pref("security.ssl.require_safe_negotiation", true);
// 禁用TLS1.3 0-RTT（往返时间）[FF51+]disable TLS1.3 0-RTT (round-trip time) [FF51+]. This data is not forward secret, as it is encrypted solely under keys derived using the offered PSK. There are no guarantees of non-replay between connections
user_pref("security.tls.enable_0rtt_data", false);
// 控制TLS版本。1=TLS 1.0；2=TLS 1.1；3=TLS 1.2；4=TLS 1.3。control TLS versions. [WHY] Passive fingerprinting and security. 
// user_pref("security.tls.version.min", 3); // [DEFAULT: 3]
// user_pref("security.tls.version.max", 4);
// 禁用SSL会话ID[FF36+]disable SSL session IDs [FF36+] [WHY] Passive fingerprinting and perf costs. These are session-only and isolated with network partitioning (FF85+) and/or containers
// user_pref("security.ssl.disable_session_identifiers", true);
/*=====UI (User Interface)=====*/
// 挂锁显示 "安全受损 "警告 ，但页面子资源未显示挂锁警告display warning on the padlock for "broken security" (if security.ssl.require_safe_negotiation is false) Bug: warning padlock not indicated for subresources on a secure page! 
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// 在 "不安全连接 "警告页面显示高级信息display advanced information on Insecure Connection warning pages only works when it's possible to add an exception. i.e. it doesn't work for HSTS discrepancies.
user_pref("browser.xul.error_pages.expert_bad_cert", true);
// 在HTTP网站显示“不安全”的图标和提示文本display "insecure" icon and "Not Secure" text on HTTP sites
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_icon.pbmode.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
/*=====HEADERS / REFERERS=====*/
// 控制何时发送跨站referer。0=始终（默认），1=仅当基本域名匹配时，2=仅当主机匹配时。如果太严格，那么改为“0”并使用Smart Referer扩展（严格模式+添加例外）control when to send a cross-origin referer. 0=always (default), 1=only if base domains match, 2=only if hosts match. [SETUP-WEB] Breakage: older modems/routers and some sites e.g banks, vimeo, icloud, instagram. If "2" is too strict, then override to "0" and use Smart Referer extension (Strict mode + add exceptions).
user_pref("network.http.referer.XOriginPolicy", 2);
// 控制发送的跨站信息量[FF52+]。0=发送完整URI（默认），1=协议+主机+端口+路径，2=协议+主机+端口control the amount of cross-origin information to send [FF52+]. 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// 强制不启用referer欺骗，referer spoof影响跨站点请求伪造保护enforce no referer spoofing [WHY] Spoofing can affect CSRF (Cross-Site Request Forgery) protections. false=real referer, true=spoof referer (use target URI as referer).
user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]
// 设置默认Referrer策略[FF59+]。0=无引用，1=同源，2=跨来源时限制来源，3=降级时无Referrer。网站Referrer策略可以覆盖参数值set the default Referrer Policy [FF59+]. 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade. [WHY] Defaults are fine. They can be overridden by a site-controlled Referrer Policy
// user_pref("network.http.referer.defaultPolicy", 2); // [DEFAULT: 2]
// user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [DEFAULT: 2]
// 精细设置referer。0=不发送任何内容，1=仅在点击时发送，2=在图像请求时发送。referers. [WHY] Only cross-origin referers need control. Prefs allowing granular control of referers. 0=don't send any, 1=send only on clicks, 2=send on image requests as well
// user_pref("network.http.sendRefererHeader", 2);
// 控制要发送的信息量。0=发送完整URI（默认），1=协议+主机+端口+路径，2=协议+主机+端口control the amount of information to send. 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
// user_pref("network.http.referer.trimmingPolicy", 0);
// 禁用onions。disable onions. Firefox doesn't support hidden services. Use Tor Browser
// user_pref("dom.securecontext.allowlist_onions", true);
// 离开.onion域名时是否需要隐藏referrer。false=允许onion引用，true=隐藏onion引用（使用空引用）。Check whether we need to hide referrer when leaving a .onion domain. false=allow onion referer, true=hide onion referer (use empty referer).
// user_pref("network.http.referer.hideOnionSource", true);
/*=====预读取=====*/
// 禁止链接预读取disable link prefetching
// https://developer.mozilla.org/docs/Web/HTTP/Link_prefetching_FAQ
// https://www.ghacks.net/2013/04/27/firefox-prefetching-what-you-need-to-know/
user_pref("network.prefetch-next", false);
// 禁止DNS预读取disable DNS prefetching
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true]
// 禁用预读取disable predictor / prefetching
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
// 鼠标悬停在链接时，禁止打开与链接服务器的连接disable link-mouseover opening connection to linked server
// https://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links/
user_pref("network.http.speculative-parallel-limit", 0);
// 禁止按下鼠标点击书签和历史记录的推测连接[FF98+]disable mousedown speculative connections on bookmarks and history [FF98+]
user_pref("browser.places.speculativeConnect.enabled", false);
// 强制不执行“超链接审核”（点击跟踪）enforce no "Hyperlink Auditing" (click tracking)
user_pref("browser.send_pings", false); // [DEFAULT: false]

// 禁止监视操作系统联机/脱机连接状态Don't monitor OS online/offline connection state. If true, network link events will change the value of navigator.onLine
user_pref("network.manage-offline-status", false);
// 使用JavaScript时，强制使用en-US区域设置，防止泄漏程序区域/日期格式use en-US locale regardless of the system or region locale. [SETUP-WEB] May break some input methods e.g xim/ibus for CJK languages. Prevent leaking application locale/date format using JavaScript.
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
// 禁用HTTP替代服务[FF37+]disable HTTP Alternative Services [FF37+]. [WHY] Already isolated with network partitioning (FF85+). alt-svc allows separation of transport routing from the origin host without using a proxy.
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
