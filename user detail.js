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



/*==========语言与外观>网站外观==========*/
// 网站深色配色方案：深色0 = Dark . 1 = Light. 2 = Automatic. Some websites adapt their color scheme based on your preferences.
user_pref("layout.css.prefers-color-scheme.content-override", 0);
// 禁止已访问链接变色disable coloring of visited links
user_pref("layout.css.visited_links_enabled", false);


/*==========语言与外观>颜色==========*/
// 禁止使用系统颜色disable using system colors[DEFAULT: false NON-WINDOWS]
// [SETTING] General>Language and Appearance>Fonts and Colors>Colors>Use system colors 
user_pref("browser.display.use_system_colors", false);
// 为链接添加下划线Underline links
user_pref("browser.underline_anchors", true);
// 在所有页面选择自定义的颜色覆盖页面指定的颜色Override the colors specified by the page. 0 = Only with High Contrast themes . 1 = Never. 2 = Always. 
// [SETTING] General>Language and Appearance>Fonts and Colors>Colors>Override the colors specified by the page with your selections above
user_pref("browser.display.document_color_use", 2);


/*==========语言与外观>字体==========*/
// 禁止网站选择字体disable websites choosing fonts (0=block, 1=allow)
// 禁止网站使用自定义设置的字体，防止网站枚举本机安装的字体（指纹泄露）。Don’t use document specified fonts to prevent installed font enumeration (fingerprinting)
// General>Language and Appearance>Fonts & Colors>Advanced>Allow pages to choose...
// user_pref("browser.display.use_document_fonts", 0);
// 禁用SVG OpenType字体的渲染disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// disable graphite
// user_pref("gfx.font_rendering.graphite.enabled", false);


/*==========语言与外观>全局缩放==========*/
// 全局缩放，不单独缩放文本Don’t  Zoom text only
user_pref("browser.zoom.full", true);


/*==========语言与外观>语言==========*/
// 设置浏览器语言[FF59+]，v59前general.useragent.locale
user_pref("intl.locale.requested", "zh-CN,en-US");
// 设置网页显示的首选语言set preferred language for displaying web pages
// [SETTING] General>Language and Appearance>Language>Choose your preferred language for displaying pages
user_pref("intl.accept_languages", "zh-cn,zh,en-us,en,zh-tw,zh-hk");
// 输入时不检查拼写。0=none, 1-multi-line, 2=multi-line & single-line
user_pref("layout.spellcheckDefault", 0);
