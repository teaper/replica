# Replica [![LICENSE MIT](https://img.shields.io/badge/LICENSE-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[Github style](https://github.com/sabrinaluo/hexo-theme-replica) replication for hexo theme. 

Just in case you are working in the office but suddenly have some genius ideas. :two_hearts:  
[Click here to view the demo site](https://www.teaper.dev)

Issues & Contributions are welcome! :stuck_out_tongue:
  
## Setup
#### Install
```
git clone git@github.com:teaper/replica.git themes/replica
```
or
```
git clone https://github.com/teaper/replica.git themes/replica
```

#### Configure
Set `theme: replica` in `_config.yml` (the one in your root folder)

**PLEASE NOTE** 
Modifying `blog_root/themes/replica/_config.yml` directly is **NOT** recommended.  
It's suggested to configure your site through `blog_root/_config.yml` **(root folder).**

Here is a sample of `blog_root/_config.yml`
<details>
<summary>CLICK ME</summary>
  
``` yml
# Hexo Configuration
## Docs: http://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: TEAPER
description: 一个人学会思考，比学会啥都强！
author: teaper
language: zh-CN
timezone: Asia/Shanghai
favicon: https://i.loli.net/2019/06/04/5cf683cea837456459.jpeg

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://www.teaper.dev
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:

# Directory
source_dir: source
public_dir: public
tag_dir: tags
link_dir: links
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:


# Writing
new_post_name: :title.md # File name of new posts year:month:day-:title.md
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss

# Pagination
## Set per_page to 0 to disable pagination
per_page: 0
pagination_dir: page

# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: replica

# Deployment
## Docs: http://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/teaper/hexoblog.git
  branch: gh-pages

# Google Analytics
ga: UA-140493383-1 # GA code UA-XXXXXXXX-X

#marked setting for markdown
marked:
  gfm: true
  pedantic: false
  sanitize: false
  tables: true
  breaks: true
  smartLists: true
  smartypants: true

gcs: 014633199185561276043:bpv9wnr4qhc # GOOGLE CUSTOM SEARCH
baidutongji:  # BAIDU TONGJI CODE
disqus: teaperdev

location: 广州
qq: 2066786347
qqgroup: 787979167
wechat: fvh2014
email: www@teaper.dev

avatar: https://i.loli.net/2019/06/04/5cf683cea837456459.jpeg
social:
  github: https://github.com/teaper
  gitlab: https://gitlab.com/teaper
  bitbucket: https://bitbucket.org/TEAPER/
  stackoverflow: https://stackoverflow.com/story/teaper
  instagram: https://www.instagram.com/teapers/
  weibo: https://www.weibo.com/5806191772
  twitter: https://twitter.com/TEAPERS
  facebook: https://www.facebook.com/teapers
  steam: http://steamcommunity.com/id/teaper
  twitch: https://www.twitch.tv/teapers
  youtube: https://studio.youtube.com/channel/UC06PQb5ClUGdtNgYSEtM2Tg			
  bilibili: https://space.bilibili.com/259649933
  docker: https://hub.docker.com/u/teaper
  npm: https://www.npmjs.com/settings/teaper/packages
  csdn: https://blog.csdn.net/qq_27170897
  telegram: https://t.me/teaper
  slack: https://teaper.herokuapp.com
  coding: https://coding.net/u/TEAPER

# flagcounter
flagcounter_href: https://info.flagcounter.com/MrmG # https://info.flagcounter.com/xxxx
flagcounter_img_src: https://s04.flagcounter.com/count2/MrmG/bg_FFFFFF/txt_6A737D/border_FFFFFF/columns_7/maxflags_14/viewers_3/labels_1/pageviews_1/flags_0/percent_0/ # https://s01.flagcounter.com/xxxx

# RSS
feed:
    type: atom
    path: atom.xml
    limit: 20
    hub:
    content:
    content_limit:
    content_limit_delim: ' '

# Nofollow Config
nofollow:
     enable: true
     exclude: https://github.com/teaper 

# SiteMap
sitemap:
    path: sitemap.xml
baidusitemap:
    path: baidusitemap.xml

# gitalk
gitalk:
  enable: true      
  client_id: 79a82d93fcd761032f45        
  client_secret: b784392d66d81a991565a56598f2d369e71e21ad    
  repo: hexoblog	     
  owner: teaper    
```
</details>

## Available Widgets
~~多说~~ (Duoshuo stopped the service since June, 2017)  
百度统计  
Disqus  
Google Analytics  
Google Custom Search Engine[^1]

## FAQ
#### Q: How can I use category and tag?
A: Create below files under `source` folder:

`blog_root/source/categories/index.md`:

```
---
title: categories
date: 2016-01-21 18:46:15
---
```

`blog_root/source/tags/index.md`:

```
---
title: tags
date: 2016-01-21 18:45:55
---
```

## License
The MIT License[^2]

Copyright (c) 2015-2019 Hiitea <luohaojing@gmail.com>

[^1]: https://cse.google.com/
[^2]: https://opensource.org/licenses/MIT

## Buy me coffee :yum:
BTC: 19U6USzi7WaFmY3DTkgn67EzYpTqZPNwRG  

