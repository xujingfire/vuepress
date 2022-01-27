---
title: Unity里常用的矩阵
date: 2022-1-26
sidebar: 'auto'
tags:
 - Shader
 - Matrix
 - 矩阵
categories: 
 - Shader
---


在Unity里，矩阵的作用是对向量进行变换，主要的变换有三种形式，旋转、平移、缩放，以下为主要的几种矩阵的具体公式：

#### 旋转矩阵

​	2D坐标旋转矩阵
$$
M = \left[

       \begin{matrix}
         \cos\theta & \sin\theta \\
         -\sin\theta & \cos\theta 
        \end{matrix}
        \right]
$$



​	具体计算
$$
\left[

       \begin{matrix}
         x & y
        \end{matrix}
        \right]
        
        \times
        
        \left[
       \begin{matrix}
         \cos\theta & \sin\theta \\
         -\sin\theta & \cos\theta 
        \end{matrix}
        \right]
        
        = 
        
        \left[
       \begin{matrix}
         x\times\cos\theta - y\times\sin\theta & x\sin\theta + y\times\cos\theta
        \end{matrix}
        \right]
$$

​	3D坐标旋转矩阵
​	绕x轴旋转：
$$
\left[
      \begin{matrix}
      1 & 0 & 0\\
      0 & \cos\theta & \sin\theta\\
      0 & -\sin\theta & \cos\theta
      \end{matrix}
      \right]
$$
   	绕y轴旋转：
$$
\left[
      \begin{matrix}
      \cos\theta & 0 & \sin\theta\\
      0 & 1 &  0\\
      -\sin\theta & 0 &  \cos\theta
      \end{matrix}
      \right]
$$
   	绕z轴旋转：
$$
      \left[
      \begin{matrix}
      \cos\theta &  \sin\theta & 0 \\
      -\sin\theta &  \cos\theta & 0 \\
      0 & 0 & 1
      \end{matrix}
      \right]
$$

​	具体计算与2D相同，具体思想:
​	绕x旋转，x不变，用矩阵改变y,z的坐标；
​	绕y旋转，y不变，用矩阵改变x,z的坐标；
​	绕z旋转，z不变，用矩阵改变x,y的坐标；

#### 平移矩阵

​	2D平移矩阵
$$
\left[
\begin{matrix}
1 & 0 & 0\\
0 & 1 & 0\\
d_x & d_y & 1
\end{matrix}
\right]
$$
​	(d_x 为 x方向增量，d_y 为 y方向增量)

​	具体计算
$$
\left[
\begin{matrix}
x & y & 1\\
\end{matrix}
\right]

\times

\left[
\begin{matrix}
1 & 0 & 0\\
0 & 1 & 0\\
d_x & d_y & 1
\end{matrix}
\right] = 

\left[
\begin{matrix}
x+d_x & y+d_y & 1\\
\end{matrix}
\right]
$$
​	计算结果与分别在x、y坐标上增加增量一致

​	3D平移矩阵
$$
\left[
\begin{matrix}
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0\\
d_x & d_y & d_z & 1\\
\end{matrix}
\right]
$$
​	(d_x 为 x方向增量，d_y 为 y方向增量，d_z 为 z方向增量)
​	计算方式与2D相同，不再赘述

#### 投影矩阵

$$
\left[
\begin{matrix}
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & \frac{1}{d}\\
0 & 0 & 0 & 0
\end{matrix}
\right]
$$

​	计算
$$
\left[
\begin{matrix}
x & y & z & 1
\end{matrix}
\right]

\times

\left[
\begin{matrix}
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & \frac{1}{d}\\
0 & 0 & 0 & 0
\end{matrix}
\right]

= 
\left[
\begin{matrix}
x & y & z & \frac{z}{d}
\end{matrix}
\right]
$$

​	d是摄像机到视椎体前平面的距离，最终的x、y需要除以第4个分量，得到最终值

#### 缩放矩阵

$$
\left[
\begin{matrix}
s_x & 0 & 0 & 0\\
0 & s_y & 0 & 0\\
0 & 0 & s_z & 0\\
0 & 0 & 0 & 1

\end{matrix}
\right]
$$

​	缩放矩阵具体计算
$$
\left[
\begin{matrix}
x & y & z & 1
\end{matrix}
\right]

\times

\left[
\begin{matrix}
s_x & 0 & 0 & 0\\
0 & s_y & 0 & 0\\
0 & 0 & s_z & 0\\
0 & 0 & 0 & 1
\end{matrix}
\right]
= 
\left[
\begin{matrix}
xs_x & ys_y & zs_z & 1
\end{matrix}
\right]
$$
​	矩阵的效果可以通过相乘进行叠加，比如把平移和旋转的矩阵相乘，得到的新矩阵，就同时具有这两个功能，也可以多个矩阵相乘
$$
\left[
\begin{matrix}
\cos\theta & 0 & \sin\theta & 0\\
0 & 1 &  0 & 0\\
-\sin\theta & 0 & \cos\theta & 0\\
0 & 0 &  0 & 1
\end{matrix}
\right]

\times

\left[
\begin{matrix}
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0\\
d_x & d_y & d_z & 1\\
\end{matrix}
\right] 

=
\left[
\begin{matrix}
\cos\theta & 0 & \sin\theta & 0\\
0 & 1 &  0 & 0\\
-\sin\theta & 0 & \cos\theta & 0\\
d_x & d_y & d_z  & 1
\end{matrix}
\right]
$$