---
title: 3D基础数学
date: 2022-1-17
sidebar: 'auto'
tags:
- Shader
- Unity
- ShaderLab
categories:
- Shader
---
余弦定理：
对于任意三角形，任何一边的平方等于其他两边平方的和减去这两边与它们夹角的余弦的积的两倍。

![img](ta.png)

$$
c^2 = a^2 + b^2 - 2ab\cos\gamma
$$
余弦定理，可以用来推导向量的点积

向量的点积（点乘）公式：
$$
a\cdot b = (a_x,a_y,a_z)\cdot(b_x,b_y,b_z) = a_xb_x + a_yb_y + a_zb_z
$$
点积的结果是一个标量，两个向量的夹角小于90度，结果为正，等于90度，结果为0，大于90度，结果为负；可以用计算结果来判断两个向量的方向的一致性；

点积的几何意义为b向量在a向量方向上的投影
