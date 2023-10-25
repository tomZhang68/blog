import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c,a as n,b as s,f as t,d as l}from"./app-f1b20077.js";const i={},u=n("h1",{id:"使用对象或数组的值或键创建联合类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用对象或数组的值或键创建联合类型","aria-hidden":"true"},"#"),s(" 使用对象或数组的值或键创建联合类型")],-1),r=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),d=n("p",null,"实际开发中我需要用到太多的键值对，并且有相当一部分情况下，键名是一个联合，而且还是某个数组的联合，然而早期 TS 对这样的联合实现并不是很理想。",-1),k=n("p",null,"这几天又翻了翻 Stack Overflow，发现很多新答案，对此整理一下。",-1),v={href:"https://github.com/Microsoft/TypeScript/pull/29510",target:"_blank",rel:"noopener noreferrer"},b=n("strong",null,"常量字面量。",-1),m=l(`<p><strong>常量字面量确定了一个对象或数组的所有子级是只读的，也就是不可修改。</strong></p><p>比如声明一个常量：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，这个对象的类型如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Obj</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  bar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为常量是只读的，所以一般会这么做：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Obj</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">;</span>
  bar<span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj<span class="token operator">:</span> Obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重复再写一遍，累死个人啦。</p><p>TS 把上面的这种完全常量的类型断言为常量字面量，可以使用 <code>const</code> 关键字来断言，比如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token keyword">const</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两种方式都可以把对象或者数组断言为常量字面量。</p><p>对象或者数组通过断言为常量字面量后，所有内部属性都是只读的，上面的类型为：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> foo<span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> bar<span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个东西和联合有什么关系？</p><p>因为这些数据都是只读的，所以这些对象或者数组的值都会被定义为字面量，就比如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// type is : string[]</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// type is : readonly [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中， <code>arr</code> 的类型是 <code>string[]</code>，但是 <code>arr2</code> 的类型就变为了一个只读元组 <code>readonly [&quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot;]</code>，此时它的值是常量，并且元组本身只读。</p><p>好玩的来了，那么拿这个只读元组的值作为类型如何，比如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>

<span class="token comment">// type is : &quot;foo&quot; | &quot;bar&quot; | &quot;baz&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">Values</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> arr2<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时 <code>Values</code> 的类型将会成为只读元组 <code>arr2</code> 的值的联合。</p><p>接下来分析下常量字面量断言的应用。</p><h2 id="使用字符串数组的值创建联合" tabindex="-1"><a class="header-anchor" href="#使用字符串数组的值创建联合" aria-hidden="true">#</a> 使用字符串数组的值创建联合</h2><p>比如现在有一个字符串数组如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//现在我们需要根据数组的值来创建一个这样的联合：</span>
<span class="token keyword">type</span> <span class="token class-name">Keys</span> <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;bar&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以这样定义这个联合：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token keyword">const</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Keys</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> arr<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用对象的键创建联合" tabindex="-1"><a class="header-anchor" href="#使用对象的键创建联合" aria-hidden="true">#</a> 使用对象的键创建联合</h2><p>使用对象的键创建联合：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  baz<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>

<span class="token comment">// 同上一节需要得到使用键名生成的联合，那么可以这样编写类型：</span>
<span class="token comment">// type si : &quot;foo&quot; | &quot;bar&quot; | &quot;baz&quot;;</span>
<span class="token keyword">type</span> <span class="token class-name">Keys</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用对象的值作为联合" tabindex="-1"><a class="header-anchor" href="#使用对象的值作为联合" aria-hidden="true">#</a> 使用对象的值作为联合</h2><p>有时候我们希望把对象的值作为一个联合，可以使用以下方法：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  k1<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
  k2<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
  k3<span class="token operator">:</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>

<span class="token comment">// type Keys = &quot;foo&quot; | &quot;bar&quot; | &quot;baz&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">Keys</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">[</span><span class="token keyword">keyof</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有的特殊情况是辨识联合，比如一个对象数组如下</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> objs <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> other<span class="token operator">:</span> <span class="token string">&quot;something&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> other<span class="token operator">:</span> <span class="token string">&quot;something&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">,</span> other<span class="token operator">:</span> <span class="token string">&quot;something&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们需要使用这个对象数组中每项的 <code>name</code> 创建一个联合，那么可以这样实现：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> objs <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> other<span class="token operator">:</span> <span class="token string">&quot;something&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> other<span class="token operator">:</span> <span class="token string">&quot;something&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">,</span> other<span class="token operator">:</span> <span class="token string">&quot;something&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>

<span class="token comment">// type Keys = &quot;foo&quot; | &quot;bar&quot; | &quot;baz&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">Keys</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> objs<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用联合作为对象的键名" tabindex="-1"><a class="header-anchor" href="#使用联合作为对象的键名" aria-hidden="true">#</a> 使用联合作为对象的键名</h2><p>有时候需要反向操作，把一个联合作为一个对象的键名，比如以下需求：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时 <code>obj</code> 的类型是 <code>string[]</code>，这明显不是我们预期的，因为程序运行结束 <code>obj</code> 的键名都是由 <code>keys</code> 数组的值映射的。</p><p>不过可以使用以下方式解决这个问题：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index <span class="token keyword">in</span> <span class="token keyword">typeof</span> keys<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 此时 \`obj\` 的类型为：</span>
<span class="token comment">// const obj: {</span>
<span class="token comment">//   foo?: boolean;</span>
<span class="token comment">//   bar?: boolean;</span>
<span class="token comment">//   baz?: boolean;</span>
<span class="token comment">// };</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,43),y={href:"https://stackoverflow.com/questions/52173855/convert-array-of-strings-to-typescript-type",target:"_blank",rel:"noopener noreferrer"},q={href:"https://stackoverflow.com/questions/60496276/typescript-derive-union-type-from-array-of-objects",target:"_blank",rel:"noopener noreferrer"},g={href:"https://stackoverflow.com/questions/45251664/typescript-derive-union-type-from-tuple-array-values",target:"_blank",rel:"noopener noreferrer"};function h(f,w){const a=o("ExternalLinkIcon");return p(),c("div",null,[u,r,d,k,n("p",null,[n("em",null,[s("后面的内容最主要的是针对 TS 增加了 "),n("a",v,[s("字面量常量上下文表达式(Const contexts for literal expressions)"),t(a)]),s(" 而展开的，所以需了解下它，为了简化，后面简称为 "),b])]),m,n("p",null,[n("a",y,[s("Convert array of strings to TypeScript type"),t(a)])]),n("p",null,[n("a",q,[s("Typescript: derive union type from array of objects"),t(a)])]),n("p",null,[n("a",g,[s("Typescript derive union type from tuple/array values"),t(a)])])])}const j=e(i,[["render",h],["__file","create-union-type-use-array-object.html.vue"]]);export{j as default};
