---
title: 「van Dalen，邏輯與結構」筆記：命題邏輯
tags:
  - 哲學
  - 邏輯學
  - van Dalen，邏輯與結構
pubDatetime: 2024-01-28 16:29:00
description: 我的邏輯學閱讀筆記。
postSlug: logic-and-structure/propositional-logic
---

# 目錄

# 命題與連接詞

## 定義 1.1 命題邏輯的語言

命題邏輯的語言由下列符號組成：

1. 命題符號：$p_0$, $p_1$, $p_2$, ...，
2. 連詞：$\vee$, $\wedge$, $\rightarrow$, $\neg$, $\leftrightarrow$, $\bot$，
3. 輔助符號：$($, $)$。

## 定義 1.2 命題集合 $PROP$

命題集合 $PROP$ 是符合下述性質的最小集合 $X$：

1. $p_i \in X(i \in N)$ 且 $\bot\in X$，
2. $\phi,\psi \in X \Rightarrow (\phi\vee\psi), (\phi\wedge\psi), (\phi\rightarrow\psi), (\phi\leftrightarrow\psi) \in X$，
3. $\phi\in X\Rightarrow(\neg\phi)\in X$。

> 註：
>
> 1. $p_i$ 和 $\bot$ 稱為**原子命題（atomic proposition）**，構成的集合定義為 $ATOM$。
> 2. 「$\Rightarrow$」是表達「若...則...」的後設邏輯語言，$\phi, \psi$ 也是。
> 3. 這裡「最小」的意義是集合上最小的，保證了 $PROP$ 的唯一性。
> 4. $\bot$ 為這個集合中的**邏輯常數（logic constant）**。
> 5. 輔助符號不可省略。
> 6. 這三項性質定義了三種顯然排他的形式。

## 定理 1.3 歸納法原理

令 $A$ 是一個性質，若下述條件成立，則：若 $\phi \in PROP$，$A(\phi)$ 成立。

1. 對任意 $i$，$A(p_i)$；以及$A(\bot)$，
2. $A(\phi), A(\psi) \Rightarrow A((\phi \square \psi))$，
3. $A(\phi) \Rightarrow A((\neg \phi))$。

> 證明：
>
> 1. $X = \{ \phi \in PROP | A(\phi)\}$，$X \subset PROP$。
> 2. $X$ 滿足 1.2 的所有定義，因此 $PROP \subset X$。
> 3. 因此，$X = PROP$。

> 註：
> $\square$ 是所有二元連接詞的統稱。

## 定義 1.4 構成序列 formation sequence

序列 $\langle \phi_i | i \leq n \rangle (\phi_n = \phi)$ 稱為 $\phi$ 的構成序列，若對於所有 $i$，滿足下述條件：

1. $\phi_i$ 是原子命題，或
2. $\phi_i = (\phi_j \square \phi_k)$，$j,k<i$，或
3. $\phi_i = (\neg \phi_j)$，$j<i$。

## 定理 1.5 構成序列與命題的充要條件

$PROP$ 是所有有構成序列的命題的集合。

> 證明：以 1.3 歸納法原理證明這個集合滿足 1.2 定義的所有性質。

## 定理 1.6 遞迴性定義 recursive definition

令 $H_\square: A^2 \rightarrow A$、$H_\neg: A \rightarrow A$、$H_{at}: A|_{ATOM} \rightarrow A|_{ATOM}$，則存在唯一的 $F: PROP \rightarrow A$，滿足下述條件：

1. $F(\phi) = H_{at}(\phi)$，對所有 $\phi \in ATOM$，
2. $F((\phi \square \psi)) = H_\square(F(\phi), F(\psi))$，
3. $F((\neg \phi)) = H_\neg(F(\phi))$。

> 證明：
>
> 1. 存在性證明：以 1.3 歸納法原理證明對於所有的命題 $F$ 都有定義。
> 2. 唯一性證明：以 1.3 歸納法原理證明，對於任一滿足上述條件的 $G: PROP \rightarrow A$，則 $G = F$。

> 例子：
>
> ### 1. 語句的剖析樹（parsing tree）因此是合法且唯一的。
>
> ### 2. 語句 $\phi$ 的秩（rank） $r(\phi)$ 因此也是合法且唯一的：
>
> 1. $r(\phi) = 0$，若 $\phi \in ATOM$，
> 2. $r((\phi \square \psi)) = \max(r(\phi), r(\psi)) + 1$，
> 3. $r((\neg \phi)) = r(\phi) + 1$。
>
> ### 3. 語句 $\phi$ 的子構句（subformula）的集合 $Sub(\phi)$ 因此也是合法且唯一的：
>
> 1. $Sub(\phi) = \{ \phi \}$，若 $\phi \in ATOM$，
> 2. $Sub((\phi \square \psi)) = Sub(\phi) \cup Sub(\psi) \cup \{ (\phi \square \psi) \}$，
> 3. $Sub((\neg \phi)) = Sub(\phi) \cup \{ (\neg \phi) \}$。

## 定理 1.7 秩的歸納法原理

對於所有 $\phi \in PROP$與性質 A，若滿足下述條件，則 $A(\phi)$ 成立：

- 若所有 $\psi, r(\psi) < r(\phi)$，$A(\psi)$ 成立，則 $A(\phi)$ 成立，

> 證明：1.7 的歸納法原理與 1.3 歸納法原理等價。

# 語義學 semantics

## 定義 2.1 賦值函數

$v: PROP \rightarrow \{0,1\}$ 稱為賦值函數（valuation function），若對於所有 $\phi, \psi \in PROP$，滿足下述條件：

1. $v(\phi \wedge \psi) = \min(v(\phi), v(\psi))$，
2. $v(\phi \vee \psi) = \max(v(\phi), v(\psi))$，
3. $v(\phi \rightarrow \psi) = \max(1 - v(\phi), v(\psi))$，
4. $v(\phi \leftrightarrow \psi) = 1 - |v(\phi) - v(\psi)|$，
5. $v(\neg \phi) = 1 - v(\phi)$。
6. $v(\bot) = 0$。

> 註：我們開始省略輔助符號。

## 定理 2.2 賦值函數的唯一性

對原子命題賦值相同的賦值函數是唯一的。

> 證明：根據定理 1.6。

> 註：
>
> 1. 由於定義 2.1 是遞迴的，也就是說 $v$ 可以只定義在 $ATOM$ 上，然後擴展到 $PROP$ 上。
> 2. 若 $v$ 是一個賦值，對於一個語句 $v$，它的值可以寫作 $\llbracket \phi \rrbracket_v$。

## 定義 2.3 模型

1. $\phi$ 是恆真句（tautology），若對於所有 $v$，$v(\phi) = 1$。寫作 $\models \phi$，
2. 若 $\Gamma$ 是命題集合，$\Gamma\models \phi$ 表示對於所有 $v$，若 $v(\psi) = 1, \psi\in\Gamma$，則 $v(\phi) = 1$。

> 註：可以寫作 $\llbracket \phi \rrbracket = 1$。

## 定義 2.4 取代

$\phi[\psi / p] (p \in ATOM)$ 表示：

1. 若 $\phi \in ATOM$ 且 $\phi \neq p$，則 $\phi[\psi / p] = \phi$，
2. 若 $\phi = p$，則 $\phi[\psi / p] = \psi$，
3. $(\phi_1 \square \phi_2)[\psi / p] = \phi_1[\psi / p] \square \phi_2[\psi / p]$，
4. $(\neg \phi)[\psi / p] = \neg \phi[\psi / p]$。

## 定理 2.5 取代定理

若 $\models \phi_1 \leftrightarrow \phi_2$，則 $\models \phi_1[\psi / p] \leftrightarrow \phi_2[\psi / p]$。

## 引理 2.6 取代定理的推廣

1. $\llbracket \phi_1 \leftrightarrow \phi_2 \rrbracket _v \leq \llbracket \psi[\phi_1 / p] \leftrightarrow \psi[\phi_2 / p] \rrbracket _v$。
2. $\models (\phi_1 \leftrightarrow \phi_2) \rightarrow (\psi[\phi_1 / p] \leftrightarrow \psi[\phi_2 / p])$。

> 證明：歸納法原理。

# 命題邏輯的諸性質

沒寫的證明都是歸納法。

## 性質 3.1

結合律：

1. $\models (\phi \lor \psi) \lor \sigma \leftrightarrow \phi \lor (\psi \lor \sigma)$
2. $\models (\phi \land \psi) \land \sigma \leftrightarrow \phi \land (\psi \land \sigma)$

交換律：

1. $\models (\phi \lor \psi) \leftrightarrow (\psi \lor \phi)$
2. $\models (\phi \land \psi) \leftrightarrow (\psi \land \phi)$

分配律：

1. $\models (\phi \lor (\psi \land \sigma)) \leftrightarrow ((\phi \lor \psi) \land (\phi \lor \sigma))$
2. $\models (\phi \land (\psi \lor \sigma)) \leftrightarrow ((\phi \land \psi) \lor (\phi \land \sigma))$

笛摩根律：

1. $\models \neg (\phi \lor \psi) \leftrightarrow (\neg \phi \land \neg \psi)$
2. $\models \neg (\phi \land \psi) \leftrightarrow (\neg \phi \lor \neg \psi)$

冪等律：

1. $\models \phi \lor \phi \leftrightarrow \phi$
2. $\models \phi \land \phi \leftrightarrow \phi$

雙重否定：

- $\models \neg \neg \phi \leftrightarrow \phi$

## 性質 3.2

若 $\models \phi \rightarrow \phi$，則：

1. $\models \phi \land \psi \leftrightarrow \phi$
2. $\models \phi \lor \psi \leftrightarrow \phi$

## 性質 3.3

1. $\models \phi \Rightarrow \models \phi \land \psi \leftrightarrow \psi$，
2. $\models \phi \Rightarrow \models \phi \lor \psi \leftrightarrow \psi$，
3. $\models \bot \lor \phi \leftrightarrow \phi$，
4. $\models \top \land \phi \leftrightarrow \phi$。

## 性質 3.4

1. $\models (\phi \leftrightarrow \psi) \leftrightarrow (\phi \rightarrow \psi) \land (\psi \rightarrow \phi)$，
2. $\models (\phi \rightarrow \psi) \leftrightarrow (\neg \phi \lor \psi)$，
3. $\neg \phi \leftrightarrow (\phi \rightarrow \bot)$，
4. $\models \bot \leftrightarrow \phi \land \neg \phi$。

## 引理 3.5 等同關係 $\approx$

$\phi\approx\phi$ 是在 $PROP$ 上的等同關係，$\phi\approx\psi$ 表示 $\models \phi \leftrightarrow \psi$。

## 定理 3.6 $\neg, \lor$ 的語義完備性

若 $\delta$ 是一個 n 元邏輯連詞，$f$ 是一個函數，使得 $\llbracket\delta(p_1,...,p_n)\rrbracket = f(\llbracket p_1 \rrbracket,...,\llbracket p_n \rrbracket)$，則我們說 $\delta$ 是由其賦值函數所定義的。

對於由其賦值函數所定義的 n-元邏輯連詞 $\delta$，存在只由 $p_1,...,p_n, \neg, \lor$ 構成的語句 $\phi$，使得 $\models \phi \leftrightarrow \delta(p_1,...,p_n)$。

> 註：奇怪的是 van Dalen 的「由其賦值函數所定義」的這個定義不包含 $f$，我看來這不符合定義規範。這裡的 $f$ 實際上也不是一個賦值函數，它的定義域是 $\{0,1\}^n$，而值域是 $\{0,1\}$，也就是說 $f$ 是一個（有限）布林函數。

### 定理 3.6 修正

給定一個 $n$ 維布林函數 $f$，存在只包含 $\lor, \neg$ 連詞的語句 $\phi$，使得對於所有賦值 $v$，$v(\phi(p_1,...,p_n)) = f(v(p_1),...,v(p_n))$。

## 定義 3.7 連續連詞

### 1 選言

$\bigvee_{i=0}^0 \phi_i = \phi_0$

$\bigvee_{i \leq 0}^{n+1} \phi_i = (\bigvee_{i \leq 0}^n \phi_i) \lor \phi_{n+1}$

### 2 連言

$\bigwedge_{i = 0}^n \phi_i = \phi_0$

$\bigwedge_{i \leq 0}^{n+1} \phi_i = (\bigwedge_{i \leq 0}^n \phi_i) \land \phi_{n+1}$

## 定義 3.8 標準式

$\phi = \bigwedge_j\bigvee_i\phi_{i,j}$，其中 $\phi_{i,j}$ 是原子命題或帶 $\neg$ 連詞的原子命題，稱為連言標準式（conjunctive normal form）。

$\phi = \bigvee_j\bigwedge_i\phi_{i,j}$，其中 $\phi_{i,j}$ 是原子命題或帶 $\neg$ 連詞的原子命題，稱為選言標準式（disjunctive normal form）。

## 定理 3.9 標準式的存在性

對於任意語句 $\phi$，存在連言標準式 $\phi^\land$ 與選言標準式 $\phi^\lor$，使得 $\models \phi \leftrightarrow \phi^\land \leftrightarrow \phi^\lor$。

## 定義 3.10 否定函數

$\star: PROP \rightarrow PROP$ 遞迴定義如下：

1. $\phi^\star = \neg \phi$，若 $\phi \in ATOM$，
2. $(\phi \lor \psi)^\star = (\phi^\star \land \psi^\star)$，
3. $(\phi \land \psi)^\star = (\phi^\star \lor \psi^\star)$。
4. $(\neg \phi)^\star = \neg \phi^\star$。

## 性質 3.11 否定函數的性質

$\phi^{\star} \approx \neg \phi$。

## 定義 3.12 共軛函數 duality function

共軛函數 $d: PROP \rightarrow PROP$ 遞迴定義如下：

1. $\phi^d = \phi$，若 $\phi \in ATOM$，
2. $(\phi \lor \psi)^d = \phi^d \land \psi^d$，
3. $(\phi \land \psi)^d = \phi^d \lor \psi^d$。
4. $(\neg \phi)^d = \neg \phi^d$。

## 定理 3.13 共軛定理

若 $\models \phi \leftrightarrow \psi$，則 $\models \phi^d \leftrightarrow \psi^d$。

# 自然演繹法

## 定義 4.1 自然演繹法的演繹集合

演繹集合是最小的滿足下面性質的樹的集合 $(X, <)$（$x(\phi)$ 表示 $x$ 是一棵以 $\phi$ 為根的樹）：

1. 對於任何 $\phi \in PROPS$，樹 ${\phi} \in X$。
2. 若 $x_1(\phi), x_2(\psi) \in X$，則 $x(\phi \land \psi) \in X$，其中 $x$ 是使得 $x_1, x_2 < x$ 的最小樹，為了簡化，我們將這關係表述為 $x_1, x_2 <_s x$。
3. 若 $x(\phi \land \psi) \in X$，則存在樹 $x^+_1(\phi) \in X$ 和 $x^+_2(\psi) \in X$（滿足 $x <_s x^+_1, x^+_2$）。
4. 若所有葉節點均為 $\phi$ 的樹 $x(\psi) \in X$，則令 $x^+(\phi \rightarrow \psi)$（滿足 $x <_s x^{+}$），將 $x^+$ 的所有葉節點標記為 $[\phi]$ 的樹 $x^* \in X$。
5. 若 $x_1(\phi), x_2(\phi \rightarrow \psi) \in X$，則 $x(\psi) \in X$（滿足 $x_1, x_2 <_s x$）。
6. 若 $x(\bot) \in X$，則 $x^{+}(\phi) \in X$（滿足 $x <_s x^{+}$）。
7. 若根是 $\bot$ 的樹 $x \in X$ 的所有葉節點均為 $\neg \phi$，則令 $x^+(\phi)$（滿足 $x <_s x^{+}$），將 $x^+$ 的所有葉節點標記為 $[\neg \phi]$ 的樹 $x^* \in X$。

> 註：
>
> - $[\phi]$ 的標記表示 $\phi$ 是一個可消除的假設。
> - 給定任意一棵演繹樹，我們可以定義前提集合 $\Gamma$：所有不可消除的葉節點的集合。而結論則是樹的根節點。

## 定義 4.2 可推導性

- $\Gamma \vdash \phi$ 代表存在一個推導的結論是 $\phi$，前提集合是 $\Gamma$。
- 若 $\Gamma = \varnothing$，我們寫成 $\vdash \phi$，這時我們稱 $\phi$ 是一個定理。

## 引理 4.3 可推導性的性質

- 若 $\phi \in \Gamma$ 則 $\Gamma \vdash \phi$。
- $\Gamma \vdash \phi, \Gamma' \vdash \phi \Rightarrow \Gamma \cup \Gamma' \vdash \phi$。
- $\Gamma \vdash \phi \land \psi \Rightarrow \Gamma \vdash \phi$ 和 $\Gamma \vdash \psi$。
- $\Gamma \cup \{ \phi \} \vdash \psi \Rightarrow \Gamma \vdash \phi \rightarrow \psi$。
- $\Gamma \vdash \phi, \Gamma' \vdash \phi \rightarrow \psi \Rightarrow \Gamma \cup \Gamma' \vdash \psi$。
- $\Gamma \vdash \bot \Rightarrow \Gamma \vdash \phi$。
- $\Gamma \cup \{ \neg \phi \} \vdash \bot \Rightarrow \Gamma \vdash \phi$。

> 證明：由自然演繹法直接證明。

## 定理 4.4 一些定理

- $\vdash \phi \rightarrow (\psi \rightarrow \phi)$
- $\vdash \phi \rightarrow (\neg \phi \rightarrow \psi)$
- $\vdash (\phi \rightarrow \psi) \rightarrow [\psi\rightarrow\chi] \rightarrow [\phi\rightarrow\chi]$
- $\vdash (\phi \rightarrow \psi) \leftrightarrow (\neg\psi\rightarrow\neg\phi)$
- $\vdash \neg\neg\phi \rightarrow \phi$
- $\vdash [\phi\rightarrow(\psi\rightarrow\chi)]\leftrightarrow[(\phi\land\psi)\rightarrow\chi]$
- $\vdash \bot \leftrightarrow (\phi \land \neg \phi)$

> 證明：由自然演繹法直接證明。

# 完備性

證明沒寫的代表太瑣碎了。

## 引理 5.1 健全性

若 $\Gamma \vdash \phi$，則 $\Gamma \models \phi$。

> 證明：以歸納法直接證明。

## 定義 5.2 一致性

$\Gamma$ 是一致的，若 $\Gamma \not\vdash \bot$。

## 引理 5.3 等價性質

以下條件是等價的：

1. $\Gamma$ 不是一致的。
2. 存在 $\phi$ 使得 $\Gamma \vdash \phi$ 與 $\Gamma \vdash \neg \phi$。
3. 對於所有 $\phi$，$\Gamma \vdash \phi$。

## 引理 5.4 等價性質

以下條件是等價的：

1. $\Gamma$ 是一致的。
2. 不存在 $\phi$ 使得 $\Gamma \not\vdash \phi$ 與 $\Gamma \not\vdash \neg \phi$。
3. 存在 $\phi$ 使得 $\Gamma \not\vdash \phi$。

## 引理 5.5

若存在賦值 $v$ 使得 $\llbracket \phi \rrbracket_v = 1, \forall \phi \in \Gamma$，則 $\Gamma \not \vdash \bot$。

## 定理 5.6

$\Gamma \cup \{ \phi \} \vdash \bot \Rightarrow \Gamma \vdash \neg \phi$。

> 證明：根據引理 5.1。

## 定義 5.7 最大一致集合

$\Gamma$ 是最大一致的，若且唯若

- $\Gamma$ 是一致的，
- 若 $\Gamma \subset \Delta$ 且 $\Delta$ 是一致的，則 $\Delta = \Gamma$。

## 引理 5.8 最大一致集存在引理

對於任意的 $\Gamma \not \vdash \bot$，存在 $\Gamma^\star$ 是最大一致的，且 $\Gamma\subset\Gamma^\star$。

> 證明：定義 $\langle \Gamma_i \rangle$ 序列如下：
>
> - $\Gamma_0 = \Gamma$，
> - 若 $\Gamma_i \cup \{ \phi_i \} \not \vdash \bot$，$\Gamma_{i+1} = \Gamma_i \cup \{ \phi_i \}$，否則 $\Gamma_{i+1} = \Gamma_i$。
> - $\Gamma^\star = \bigcup_i \Gamma_i$。
>
> 其中 $\langle \phi_i \rangle$ 是給所有的命題語句的一個排序。
>
> 可以證明 $\Gamma^\star$ 是最大一致的。

## 引理 5.9

若 $\Gamma$ 是最大一致的，則 $\Gamma$ 是演繹封閉的。

## 定理 5.10

若 $\Gamma$ 是最大一致的，則：

1. 對於所有 $\phi$ 要嘛 $\phi\in\Gamma$ 要嘛 $\neg\phi\in\Gamma$。
2. 對於所有 $\phi, \psi$，$\phi\rightarrow\psi\in\Gamma$ 若且唯若 $\phi\in\Gamma\Rightarrow\psi\in\Gamma$。
3. $\phi\in\Gamma$ 若且唯若 $\neg\phi\not\in\Gamma$。
4. $\neg\phi\in\Gamma$ 若且唯若 $\phi\not\in\Gamma$。

## 引理 5.11 模型存在引理

若 $\Gamma$ 是一致的，存在賦值 $v$ 使得 $\llbracket \phi \rrbracket_v = 1, \forall \phi \in \Gamma$。

> 證明：
>
> 定義 $\Gamma^\star$ 是最大一致的，且 $\Gamma\in\Gamma^\star$。
>
> 定義 $v(p_i) = 1, p_i\in\Gamma^\star$ 與 $v(p_i) = 0, p_i\not\in\Gamma^\star$，並遞迴地擴充成賦值函數。
>
> 以歸納法證明：$\llbracket \phi \rrbracket_v = 1$ 若且唯若 $\phi \in \Gamma^\star$。

## 推論 5.12

若 $\Gamma\not\vdash\phi$，存在賦值 $v$ 使得 $\llbracket \psi \rrbracket_v = 1, \forall \psi \in \Gamma$ 且 $\llbracket \phi \rrbracket_v = 0$。

亦即：若 $\Gamma\not\vdash\phi$，則 $\Gamma\not\models\phi$。

## 定理 5.13 完備性定理

$\Gamma \models \phi$ 若且唯若 $\Gamma \vdash \phi$。

# 其他連接詞

## 定義 6.1 三個連接詞

- $\phi\lor\phi:=\neg(\neg\phi\land\neg\phi)$
- $\phi:=\phi\rightarrow\bot$
- $\phi\leftrightarrow\psi:=(\phi\rightarrow\psi)\land(\psi\rightarrow\phi)$

## 引理 6.2 諸性質

- $\phi\vdash\phi\lor\psi, \psi\vdash\phi\lor\psi$
- 若 $\Gamma, \phi\vdash\sigma$ 且 $\Gamma, \psi\vdash\sigma$ 則 $\Gamma, \phi\lor\psi\vdash\sigma$
- $\phi,\neg\phi\vdash\bot$
- $\Gamma,\phi\vdash\bot\Rightarrow\Gamma\vdash\neg\phi$
- $\phi\leftrightarrow\psi,\phi\vdash\psi$ 且 $\phi\leftrightarrow\psi,\psi\vdash\phi$
- $\Gamma,\phi\vdash\psi$ 且 $\Gamma,\psi\vdash\phi$ 若且唯若 $\Gamma\vdash\phi\leftrightarrow\psi$

## 定理 6.3

- $\vdash\phi\lor\psi\leftrightarrow\neg(\neg\phi\land\neg\psi)$
- $\vdash\neg\phi\leftrightarrow\phi\rightarrow\bot$
- $\vdash\phi\leftrightarrow\psi\leftrightarrow(\phi\rightarrow\psi)\land(\psi\rightarrow\phi)$

到此為止。
