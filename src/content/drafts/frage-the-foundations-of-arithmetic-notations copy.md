---
title: Frage 在 The Foundations of Arithmetic 中使用的邏輯學記號
tags:
  - 哲學
  - 邏輯學
pubDatetime: 2024-02-26 13:40:00
description: 一個閱讀筆記。
postSlug: frage-the-foundations-of-arithmetic-notations
---

import FrageConditionStroke from "./components/FrageConditionStroke.tsx";

### $\vdash$

Frage 將 $\vdash$ 加到「真值的指稱（name of the truth value）」之前來表達對此思想的真的承認的斷言，這即為「**判斷**」，使**判斷**與**思想**有所區別。

如此一來，$\vdash \phi$ 表示類似對「$\phi$ 等同於**真**」的表達（粗體表示的**真**為 the True，**假** 為 the False）。

### $-$

Frage 的 $\vdash$ 中的水平線 $-$ 可以單獨理解為附加給（任意）對象 $\Delta$ 之指稱的一元函數符號（使用方式如同 $\vdash$），該函數會在 $\Delta$ 為**真**的時候為**真**，不為**真**時為**假**。

$\vdash$ 即為 $-$ 加上 $|$ 所組成。

### $_{\top}$

$_{\top}$ 表示否定符。$_{\top}\Delta$ 的意思就是倒轉 $-\Delta$ 的真值，同樣是一個附加在任意對象上的一元函數。

可以加上 $|$ 組合成 $|_{\top}$。$_{\top} \Delta$ 表達 $\Delta$ 不指稱**真**。

### 條件記號

Frage 的條件記號是二元函數。

<FrageConditionStroke params={["Γ", "Δ"]} />

的意思是只有在 $-\Delta$ 為**真**且 $-\Gamma$ 為**假**的時候，此條件式才為**假**，否則為**真**。

其中 $\Delta$ 稱之為條件式的下組件（subcomponent）而 $\Gamma$ 稱之為上組件（supercomponent）。

如同否定符一樣，我們可以在條件符的左邊加上 $|$ 來表示這是一個判斷。

我們可以如此表示條件符函數的合成：

<FrageConditionStroke params={["Γ", "Δ", "Σ"]} />

### 等同

Frage 在此書中使用 $=$ 而非 $\equiv$ 來表示等同。$\Gamma = \Delta$ 在 $\Gamma$ 與 $\Delta$ 指稱同一個對象時指稱**真**，否則指稱**假**。

### 量詞

Frage 使用凹形（concavity，水平線，中間三分之一是凹陷的，這實在不好畫，所以我就以 $-\u{\Alpha}-$ 來表示）作為一元的二階函數來將一階函數對應到真值。

$-\u{\Alpha}-\phi(\Alpha)$ 指稱真，必須對於所有參數（argument），$\phi(\alpha)$ 都指稱真，否則指稱假。

量詞記號同樣能夠和上述的記號相結合，這裡的考量如同我們考慮在現代邏輯中的構句。

Frage 使用凹形引入二階量詞符號，此時，量詞是三階函數，而 $F_\beta$ 是二階函數名稱：

$-\u{f}-F_\beta(f(\beta))$。

### 定義記號

Frage 使用 $\Vdash$ 來表示定義以引入新的名稱，新的名稱由已知符號所組成，兩方有相同的意思與指涉。
