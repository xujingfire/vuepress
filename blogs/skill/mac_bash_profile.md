---
title: Mac解决重启终端后bash_profile配置失效问题
date: 2022-01-18
tags:
 - Mac
---

因为zsh加载的是 ~/.zshrc文件，而 ‘.zshrc’ 文件中并没有定义任务环境变量。

解决办法

在~/.zshrc文件最后，增加一行：
source ~/.bash_profile


<a href="tuyoogamespoker://cm/v1/verify_account?ott=sdfsdfsdfsdfsdf_sdfsdfsdf">tuyoogamespoker://cm/v1/verify_account?ott=sdfsdfsdfsdfsdf_sdfsdfsdf</a>

<a href="tuyoogamespoker://cm/v1/launch_game?gameId=sdfsdfsdfsdfsdf>tuyoogamespoker://cm/v1/launch_game?gameId=sdfsdfsdfsdfsdf</a>