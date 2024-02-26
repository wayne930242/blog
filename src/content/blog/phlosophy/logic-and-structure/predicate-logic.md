---
title: 「van Dalen，邏輯與結構」筆記：述詞邏輯
tags:
  - 哲學
  - 邏輯學
  - van Dalen，邏輯與結構
pubDatetime: 2024-02-21 21:25:00
description: 我的邏輯學閱讀筆記。
postSlug: logic-and-structure/predicate-logic
---

# 目錄

# 結構

## 定義 1.1 結構 structure

結構是一個序列 $\mathfrak{A} = \langle A, R_1, ..., R_n, F_1, ...,F_m, \{ c_i|i\in I \} \rangle$，其中 $A$ 是非空集合、$R_1, ..., R_n$ 是 $A$ 的關係、$F_1, ..., F_m$ 是 $A$ 的函數、$c_i(i \in I)$ 是 $A$ 的（常數）元素。

## 定義 1.2 相似性類型 similarity type

$\mathfrak{A} = \langle A, R_1, ..., R_n, F_1, ...,F_m, \{ c_i|i\in I \} \rangle$ 的相似性類型是一個序列 $\langle r_1, ..., r_n; a_1, ..., a_m; \kappa \rangle$，其中 $R_i \subset A^{r_i}, F_j: A^{a_j} \rightarrow A, \kappa=| I |$。

# 相似性類型的語言

給定 $\langle r_1, ..., r_n; a_1, ..., a_m; \kappa \rangle$ 是 $\langle A, R_1, ..., R_n, F_1, ...,F_m, \{ c_i|i\in I \} \rangle$ 的相似性類型。

## 定義 2.1 語詞集

$TERM$（語詞集）是滿足下述性質的最小集合 $X$：

1. 常元 $Const$：$\bar{c_i}\in X(i\in I)$；
2. 變元 $Var$：$x_i \in X(i \in N)$；
3. 函數封閉性：若 $t_1, ..., t_{a_i} \in X$，則 $f_i(t_1, ..., t_{a_i}) \in X$。

## 定義 2.2 構句集

$FORM$（構句集）是滿足下述性質的最小集合 $X$：

1. $\bot \in X$；
2. 若 $r_i = 0$則 $\pi_i\in X$（即 $\pi$ 是命題符號）；
3. 若 $t_1,...,t_{r_i} \in TERM$，則 $\pi_i(t_1,...,t_{r_i}) \in X$；
4. 若 $t_1, t_2 \in TERM$，則 $(t_1 = t_2) \in X$；
5. 若 $\phi,\psi \in X$，則 $(\phi \land \psi), (\phi \lor \psi), (\phi \rightarrow \psi), (\phi \leftrightarrow \psi) \in X$（寫作 $(\phi \square \psi)$）；
6. 若 $\phi \in X$，則 $(\neg \phi) \in X$；
7. 若 $\phi \in X$，則 $\forall x_i \phi, \exists x_i \phi \in X$。

## 定理 2.3 歸納法與遞迴性

參考命題邏輯的[定理 1.3](/posts/logic-and-structurepropositional-logic#%E5%AE%9A%E7%90%86-13-%E6%AD%B8%E7%B4%8D%E6%B3%95%E5%8E%9F%E7%90%86)與[1.6](/posts/logic-and-structurepropositional-logic#%E5%AE%9A%E7%90%86-16-%E9%81%9E%E8%BF%B4%E6%80%A7%E5%AE%9A%E7%BE%A9-recursive-definition)，不難證明 $TERM$ 和 $FORM$ 都滿足一般與遞迴的歸納法原理。

一般歸納法原理過於繁瑣，這裡不再贅述。

### 語詞集的遞迴性

令 $H_0: Var \cup Const \rightarrow A$，$H_1: A^{a_i} \rightarrow A$，則存在唯一的函數 $H: TERM \rightarrow A$ 使得：

1. 對於所有的變元或常元 $t$，$H(t) = H_0(t)$；
2. $H(f_i(t_1, ..., t_{a_i})) = H_1(H(t_1), ..., H(t_{a_i}))$。

### 構句集的遞迴性

令 $H_{at}: At \rightarrow A$，$H_\square : A^2\rightarrow A$，$H_{\neg}: A \rightarrow A$，$H_{\forall}: A \rightarrow A$，$H_{\exists}: A \rightarrow A$，則存在唯一的函數 $H: FORM \rightarrow A$ 使得：

1. 對於所有的原子式 $t$，$H(t) = H_{at}(t)$；
2. $H(t_1 \square t_2) = H_\square(H(t_1), H(t_2))$；
3. $H(\neg \phi) = H_{\neg}(H(\phi))$；
4. $H(\forall x_i \phi) = H_{\forall}(H(\phi))$；
5. $H(\exists x_i \phi) = H_{\exists}(H(\phi))$。

## 定義 2.4 自由變元

$TERM$:

1. $FV(\bar{c_i}) = \emptyset$；
2. $FV(x_i) = \{ x_i \}$；
3. $FV(f_i(t_1, ..., t_{a_i})) = FV(t_1) \cup ... \cup FV(t_{a_i})$。

$FORM$:

1. $FV(\bot) = \emptyset$；
2. 若 $\pi$ 是命題符號，則 $FV(\pi) = \emptyset$；
3. $FV(t_1 = t_2) = FV(t_1) \cup FV(t_2)$；
4. $FV(\pi_i(t_1, ..., t_{r_i})) = FV(t_1) \cup ... \cup FV(t_{r_i})$；
5. $FV(\phi \square \psi) = FV(\phi) \cup FV(\psi)$；
6. $FV(\neg \phi) = FV(\phi)$；
7. $FV(\forall x_i \phi) = FV(\phi) \setminus \{ x_i \}$；
8. $FV(\exists x_i \phi) = FV(\phi) \setminus \{ x_i \}$。

## 定義 2.5 封閉語詞和封閉構句

1. 若 $FV(t) = \emptyset$，則 $t$ 稱為封閉語詞。封閉語詞集合寫作 $TERM_c$。
2. 若 $FV(\phi) = \emptyset$，則 $\phi$ 稱為封閉構句或語句。語句集合寫作 $SENT$。
3. 無量詞的構句稱為開放構句。

## 定義 2.6 拘束變元

$TERM$:

1. $BV(\bar{c_i}) = \emptyset$；
2. $BV(x_i) = \emptyset$；
3. $BV(f_i(t_1, ..., t_{a_i})) = BV(t_1) \cup ... \cup BV(t_{a_i})$。

$FORM$:

1. $BV(\bot) = \emptyset$；
2. 若 $\pi$ 是命題符號，則 $BV(\pi) = \emptyset$；
3. $BV(t_1 = t_2) = BV(t_1) \cup BV(t_2)$；
4. $BV(\pi_i(t_1, ..., t_{r_i})) = BV(t_1) \cup ... \cup BV(t_{r_i})$；
5. $BV(\phi \square \psi) = BV(\phi) \cup BV(\psi)$；
6. $BV(\neg \phi) = BV(\phi)$；
7. $BV(\forall x_i \phi) = BV(\phi) \cup \{ x_i \}$；
8. $BV(\exists x_i \phi) = BV(\phi) \cup \{ x_i \}$。

## 定義 2.7 替代

$TERM$：

令 $s$ 和 $t$ 是兩個語詞，則 $s[t/x]$ 定義如下：

1. $c[t/x] = c$；
2. 若 $y$ 不是 $x$，則 $y[t/x] = y$；
3. 若 $y$ 即是 $x$，則 $y[t/x] = t$；
4. $(f(t_1, ..., t_{a_i}))[t/x] = f(t_1[t/x], ..., t_{a_i}[t/x])$。

$FORM$ 的語詞替代：

令 $\phi$ 是一個構句，$t$ 是一個語詞，則 $\phi[t/x]$ 定義如下：

1. $\bot[t/x] = \bot$；
2. 若 $\pi$ 是命題符號，則 $\pi[t/x] = \pi$；
3. $(t_1 = t_2)[t/x] = t_1[t/x] = t_2[t/x]$；
4. $(\pi_i(t_1, ..., t_{r_i}))[t/x] = \pi_i(t_1[t/x], ..., t_{r_i}[t/x])$；
5. $(\phi \square \psi)[t/x] = \phi[t/x] \square \psi[t/x]$；
6. $(\neg \phi)[t/x] = \neg \phi[t/x]$；
7. 若 $y$ 不是 $x$，則 $(\forall y \phi)[t/x] = \forall y \phi[t/x]$；
8. 若 $y$ 即是 $x$，則 $(\forall y \phi)[t/x] = \forall y \phi$；
9. 若 $y$ 不是 $x$，則 $(\exists y \phi)[t/x] = \exists y \phi[t/x]$；
10. 若 $y$ 即是 $x$，則 $(\exists y \phi)[t/x] = \exists y \phi$。

$FORM$ 的構句替代：

令 $\phi$ 和 $\psi$ 是兩個構句，則 $\phi[\psi/ \pi]$ 定義如下：

1. 若 $\phi$ 即是 $\pi$，則 $\phi[\psi/ \pi] = \psi$；
2. 若 $\phi$ 不是 $\pi$，但 $\phi$ 是原子語句，則 $\phi[\psi/ \pi] = \phi$。
3. 若 $\phi = \phi_1 \square \phi_2$，則 $\phi[\psi/ \pi] = \phi_1[\psi/ \pi] \square \phi_2[\psi/ \pi]$；
4. 若 $\phi = \neg \phi_1$，則 $\phi[\psi/ \pi] = \neg \phi_1[\psi/ \pi]$；
5. 若 $\phi = \forall x_i \phi_1$，則 $\phi[\psi/ \pi] = \forall x_i \phi_1[\psi/ \pi]$；
6. 若 $\phi = \exists x_i \phi_1$，則 $\phi[\psi/ \pi] = \exists x_i \phi_1[\psi/ \pi]$。

## 定義 2.8 自由語詞

在 $\phi$ 中，$t$ 對 $x$ 是自由的，代表下述性質之一被滿足：

1. $\phi$ 是原子的，
2. $\phi = \phi_1 \square \phi_2$，且 $t$ 對 $x$ 在 $\phi_1$ 或 $\phi_2$ 中是自由的，
3. $\phi = \neg \phi_1$，且 $t$ 對 $x$ 在 $\phi_1$ 中是自由的，
4. $\phi = \exists y \psi$，且若 $x\in FV(\phi)$，則 $y \not\in FV(t)$ 而 $t$ 對 $x$ 在 $\psi$ 中是自由的。
5. $\phi = \forall y \psi$，且若 $x\in FV(\phi)$，則 $y \not\in FV(t)$ 而 $t$ 對 $x$ 在 $\psi$ 中是自由的。

## 引理 2.9

在 $\phi$ 中，$t$ 對 $x$ 是自由的，當且僅當 $\phi[t/x]$ 的變數 $t$ 未被量詞拘束。

> 證明：對 $\phi$ 做歸納法。

## 定義 2.10 自由構句

在 $\sigma$ 中，$\phi$ 對 $\pi$ 是自由的，代表下述性質之一被滿足：

1. $\sigma$ 是原子的，
2. $\sigma = \sigma_1 \square \sigma_2$，且 $\phi$ 對 $\pi$ 在 $\sigma_1$ 或 $\sigma_2$ 中是自由的，
3. $\sigma = \neg \sigma_1$，且 $\phi$ 對 $\pi$ 在 $\sigma_1$ 中是自由的，
4. $\sigma = \exists y \psi$，且若 $\pi$ 在 $\sigma$ 中出現，則 $y \not\in FV(\phi)$ 而 $\phi$ 對 $\pi$ 在 $\psi$ 中是自由的。
5. $\sigma = \forall y \psi$，且若 $\pi$ 在 $\sigma$ 中出現，則 $y \not\in FV(\phi)$ 而 $\phi$ 對 $\pi$ 在 $\psi$ 中是自由的。

## 引理 2.11

在 $\sigma$ 中，$\phi$ 對 $\pi$ 是自由的，當且僅當 $\sigma[\phi/\pi]$ 的變數 $\phi$ 未被量詞拘束。

## 定義 2.12 擴充語言

$\mathfrak{A}$ 的擴充語言 $L(\mathfrak{A})$ 由語言 $L$、$\mathfrak{A}$ 的類型加上 $|\mathfrak{A}|$ 中的常元所構成。我們將屬於 $|\mathfrak{A}|$ 的 $a$ 的常元符號標註為 $\bar{a}$。

# 語義學

## 定義 2.13 封閉語詞與構句的詮釋

$TERM_c$：

$L(\mathfrak{A})$ 在 $\mathfrak{A}$ 的封閉語詞的詮釋是一個函數 $(.)^{\mathfrak{A}}: TERM_c \rightarrow |\mathfrak{A}|$ 滿足（使用 Scott brackets 標記）：

1. $\llbracket \bar{c_i} \rrbracket_{\mathfrak{A}} = c_i$；
2. $\llbracket a \rrbracket_{\mathfrak{A}} = a$；
3. $\llbracket F_i(t_1, ..., t_{a_i}) \rrbracket_{\mathfrak{A}} = F_i(\llbracket t_1 \rrbracket_{\mathfrak{A}}, ..., \llbracket t_{a_i} \rrbracket_{\mathfrak{A}})$。

$SENT$：

$L(\mathfrak{A})$ 在 $\mathfrak{A}$ 的語句的詮釋是一個函數 $(.)^{\mathfrak{A}}: SENT \rightarrow \{ 0, 1 \}$ 滿足：

1. $\llbracket \bot \rrbracket_{\mathfrak{A}} = 0$；
2. $\llbracket \bar{R} \rrbracket_{\mathfrak{A}} = R$；
3. $\llbracket \bar{R}_i(t_1, ..., t_{r_i}) \rrbracket_{\mathfrak{A}} = 1$ 當且僅當 $\llbracket t_1 \rrbracket_{\mathfrak{A}}, ..., \llbracket t_{r_i} \rrbracket_{\mathfrak{A}} \in R_i$；
4. $\llbracket t_1 = t_2 \rrbracket_{\mathfrak{A}} = 1$ 當且僅當 $\llbracket t_1 \rrbracket_{\mathfrak{A}} = \llbracket t_2 \rrbracket_{\mathfrak{A}}$；
5. $\llbracket \phi \land \psi \rrbracket_{\mathfrak{A}} = \min(\llbracket \phi \rrbracket_{\mathfrak{A}}, \llbracket \psi \rrbracket_{\mathfrak{A}})$；
6. $\llbracket \phi \lor \psi \rrbracket_{\mathfrak{A}} = \max(\llbracket \phi \rrbracket_{\mathfrak{A}}, \llbracket \psi \rrbracket_{\mathfrak{A}})$；
7. $\llbracket \phi \rightarrow \psi \rrbracket_{\mathfrak{A}} = \max(1, 1 - \llbracket \phi \rrbracket_{\mathfrak{A}} + \llbracket \psi \rrbracket_{\mathfrak{A}})$；
8. $\llbracket \phi \leftrightarrow \psi \rrbracket_{\mathfrak{A}} = 1 - |\llbracket \phi \rrbracket_{\mathfrak{A}} - \llbracket \psi \rrbracket_{\mathfrak{A}}|$；
9. $\llbracket \neg \phi \rrbracket_{\mathfrak{A}} = 1 - \llbracket \phi \rrbracket_{\mathfrak{A}}$；
10. $\llbracket \forall x_i \phi \rrbracket_{\mathfrak{A}} = \min_{a \in |\mathfrak{A}|} \llbracket \phi[a/x_i] \rrbracket_{\mathfrak{A}}$；
11. $\llbracket \exists x_i \phi \rrbracket_{\mathfrak{A}} = \max_{a \in |\mathfrak{A}|} \llbracket \phi[a/x_i] \rrbracket_{\mathfrak{A}}$。

## 定義 2.14 $\models$

$\mathfrak{A}\models \phi$ 當且僅當 $\llbracket \phi \rrbracket_{\mathfrak{A}} = 1$。

## 定義 2.15 宇封閉句 universal closure

令 $FV(\phi)={z_1, ..., z_n}$，則 $Cl(\phi):= \forall z_1...z_k \phi$ 是 $\phi$ 的宇封閉句。

---

透過宇封閉句，我們可以將詮釋從封閉語句擴展到所有構句，由於對於所有的封閉構句 $\psi$，$Cl(\psi) = \psi$，因此這個定義是合法的：

## 定義 2.16

$\mathfrak{A}\models \phi$ 當且僅當 $\mathfrak{A}\models Cl(\phi)$。

## 定義 2.17

1. $\models \phi$ 當且僅當 $\mathfrak{A}\models \phi$ 對所有的 $\mathfrak{A}$ 成立。
2. $\mathfrak{A}\models \Sigma$ 當且僅當 $\mathfrak{A}\models \phi$ 對所有的 $\phi \in \Sigma$ 成立。
3. $\Gamma \models \phi$ 當且僅當若 $\mathfrak{A}\models \Gamma$，則 $\mathfrak{A}\models \phi$。

## 引理 2.18 構句的邏輯意涵

對於語句 $\phi$ 和 $\psi$，下列等價性成立：

1. $\mathfrak{A}\models \phi \land \psi$ 當且僅當 $\mathfrak{A}\models \phi$ 和 $\mathfrak{A}\models \psi$；
2. $\mathfrak{A}\models \phi \lor \psi$ 當且僅當 $\mathfrak{A}\models \phi$ 或 $\mathfrak{A}\models \psi$；
3. $\mathfrak{A}\models \neg \phi$ 當且僅當 $\mathfrak{A}\not\models \phi$；
4. $\mathfrak{A}\models \phi \rightarrow \psi$ 當且僅當 $\mathfrak{A}\models \phi$ 蘊含 $\mathfrak{A}\models \psi$；
5. $\mathfrak{A}\models \phi \leftrightarrow \psi$ 當且僅當 $\mathfrak{A}\models \phi$ 等價於 $\mathfrak{A}\models \psi$；
6. $\mathfrak{A}\models \forall x_i \phi$ 當且僅當 $\mathfrak{A}\models \phi[\bar{a}/x_i]$ 對所有的 $a \in |\mathfrak{A}|$；
7. $\mathfrak{A}\models \exists x_i \phi$ 當且僅當 $\mathfrak{A}\models \phi[\bar{a}/x_i]$ 對某個 $a \in |\mathfrak{A}|$。

# 述詞邏輯

## 定理 2.19 量詞拘束構句的等價性

1. $\models \neg \forall x \neg \phi \leftrightarrow \exists x \phi$；
2. $\models \neg \exists x \neg \phi \leftrightarrow \forall x \phi$。

## 定理 2.20 量詞的結構規則

1. $\models \forall x \forall y \phi \leftrightarrow \forall y \forall x \phi$；
2. $\models \exists x \exists y \phi \leftrightarrow \exists y \exists x \phi$；
3. $\models \forall x \phi \leftrightarrow \phi$，當 $x \not\in FV(\phi)$；
4. $\models \exists x \phi \leftrightarrow \phi$，當 $x \not\in FV(\phi)$。

## 定理 2.21 量詞的分配規則

1. $\models \forall x (\phi \land \psi) \leftrightarrow (\forall x \phi \land \forall x \psi)$；
2. $\models \exists x (\phi \lor \psi) \leftrightarrow (\exists x \phi \lor \exists x \psi)$；
3. $\models \forall x (\phi \lor \psi) \leftrightarrow (\forall x \phi \lor \psi)$，當 $x \not\in FV(\psi)$；
4. $\models \exists x (\phi \land \psi) \leftrightarrow (\exists x \phi \land \psi)$，當 $x \not\in FV(\psi)$。

## 引理 2.22 替代的交換律

1. $x\not\in FV(r)$ 和 $y$ 是相異變數，則 $(t[s/x])[r/y]=(t[r/y])[s[r/y]/x]$；
2. $x\not\in FV(s)$ 和 $y$ 是相異變數，且 $t$ 和 $s$ 對於 $x$ 和 $y$ 在 $\phi$ 是自由的，則 $(\phi[t/x])[s/y]=(\phi[s/y])[t[s/y]/x]$；
3. $\psi$ 對於 $\pi$ 在 $\phi$ 是自由的，並且 $t$ 對於 $x$ 在 $\phi$ 和 $\psi$ 中是自由的，則 $(\phi[\psi/\pi])[t/x]=(\phi[t/x])[\psi[t/x]/\pi]$；
4. $\phi$ 和 $\psi$ 對於 $\pi_1$、$\pi_2$ 在 $\sigma$ 是自由的，$\psi$ 對於 $\pi_2$ 在 $\phi$ 中是自由的，並且 $\pi_1$ 在 $\psi$ 中沒有出現，則 $(\sigma[\phi/\pi_1])[\psi/\pi_2]=(\sigma[\psi/\pi_2])[\phi[\psi/\pi_2]/\pi_1]$。

## 推論 2.23

1. $z\not\in FV(t)$，則 $t[\bar{a}/x] = (t[z/x])[\bar{a}/z]$；
2. $z\not\in FV(\phi)$ 且 $z$ 對於 $x$ 在 $\phi$ 中是自由的，則 $\phi[\bar{a}/x] = (\phi[z/x])[\bar{a}/z]$。

## 定理 2.24 拘束變數的變換

若 $x$ 和 $y$ 對於 $z$ 在 $\phi$ 中是自由的，且 $x, y \not\in FV(\phi)$，則 $\models\exists x \phi [x/z]  \leftrightarrow \exists y \phi [y/z]$ 且 $\models\forall x \phi [x/z]  \leftrightarrow \forall y \phi [y/z]$。

## 推論 2.25

所有構句都等價一個沒有變元同時是自由又拘束的構句。

## 定理 2.26 替代定理

1. $\models t_1 = t_2 \rightarrow s[t_1/x] = s[t_2/x]$；
2. $\models t_1 = t_2 \rightarrow (\phi[t_1/x] \leftrightarrow \phi[t_2/x])$；
3. $\models(\phi \leftrightarrow \psi) \rightarrow (\sigma[\phi/\pi] \leftrightarrow \sigma[\psi/\pi])$。

## 推論 2.27

1. $\llbracket s[t/x] \rrbracket = \llbracket s [\bar{ \llbracket t \rrbracket } / x] \rrbracket$；
2. $\llbracket \phi[t/x] \rrbracket = \llbracket \phi [\bar{ \llbracket t \rrbracket } / x] \rrbracket$。

## 定義 2.28 前束標準句 prenex normal form

一個構句 $\phi$ 是前束標準式，當且僅當 $\phi = Q_1 x_1 ... Q_n x_n \psi$，其中 $Q_i$ 是量詞，$\{ Q_i \}$ 可以是 $\emptyset$，$\psi$ 是開放構句，且 $x_1, ..., x_n$ 是互異的變數。

## 定理 2.29 前束標準句的存在

對於每一個構句 $\phi$，存在一個等價的前束標準句。

## 定義 2.30 一元述詞與量詞作用域 unary predicate and scope of quantifier

若 $P$ 是一個一元述詞符號，則 $(\forall x \in P)\phi := \forall x (P(x) \rightarrow \phi)$，$(\exists x \in P)\phi := \exists x (P(x) \land \phi)$。
