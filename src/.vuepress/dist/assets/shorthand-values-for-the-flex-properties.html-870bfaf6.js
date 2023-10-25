import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c,a as n,b as s,f as l,d as o}from"./app-f1b20077.js";const i={},u=n("h1",{id:"理解css属性flex值为1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#理解css属性flex值为1","aria-hidden":"true"},"#"),s(" 理解CSS属性flex值为1")],-1),d={href:"https://blog.csdn.net/u013451157/article/details/79011679",target:"_blank",rel:"noopener noreferrer"},r=o(`<p><code>flex</code> 属性是 <code>flex-grow</code>、<code>flex-shrink</code> 和 <code>flex-basis</code> 的简写，flex 属性值可以由一部分组成，也可以由两部分组成，或者是三部分组成，其中</p><ul><li><code>flex-grow</code>、<code>flex-shrink</code> 是非负整数，<code>0</code>、<code>2</code></li><li><code>flex-basis</code> 带单位的长度值、百分数、<code>auto</code>，如 <code>100px</code>、<code>0%</code>、<code>auto</code></li></ul><p><code>flex</code> 属性值最多有两个非负整数、最多有一个带单位的长度值或百分数，否则就是无效的 <code>flex</code> 属性值，即使设置了也不起作用。</p><p><code>flex</code> 属性值中如果出现带单位的长度值或者百分数，则一定是 <code>flex-basis</code> 的值；如果有一个非负整数值，则是 <code>flex-grow</code> 的值；如果有两个非负整数值，则是依次是 <code>flex-grow</code>、<code>flex-shrink</code> 的值。</p><p><code>flex-basis</code> 的值（带单位的长度值或者百分数）不一定只能出现再最后，出现在任意顺序都可以。</p><p><code>flex-basis</code> 值为 auto， 如果元素设置了width（即 width 不为 auto），那么元素不伸缩时的初始大小就是 width；如果元素没有设置 width，那么元素不伸缩时的初始大小就是内容（content）的大小。</p><h2 id="_1-flex-取值情况说明" tabindex="-1"><a class="header-anchor" href="#_1-flex-取值情况说明" aria-hidden="true">#</a> 1 flex 取值情况说明</h2><h3 id="_1-1-flex-none" tabindex="-1"><a class="header-anchor" href="#_1-1-flex-none" aria-hidden="true">#</a> 1.1 <code>flex: none;</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-flex-auto" tabindex="-1"><a class="header-anchor" href="#_1-2-flex-auto" aria-hidden="true">#</a> 1.2 <code>flex: auto;</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-当-flex-取值为一个非负整数-则该数值为-flex-grow-值-另外-flex-shrink-1-flex-basis-0" tabindex="-1"><a class="header-anchor" href="#_1-3-当-flex-取值为一个非负整数-则该数值为-flex-grow-值-另外-flex-shrink-1-flex-basis-0" aria-hidden="true">#</a> 1.3 当 <code>flex</code> 取值为一个非负整数，则该数值为 <code>flex-grow</code> 值，另外，<code>flex-shrink: 1; flex-basis: 0%;</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span> <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span> <span class="token property">flex</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-当-flex-取值为一个长度值或百分比-则该值为-flex-basis-值-另外-flex-grow-1-flex-shrink-1" tabindex="-1"><a class="header-anchor" href="#_1-4-当-flex-取值为一个长度值或百分比-则该值为-flex-basis-值-另外-flex-grow-1-flex-shrink-1" aria-hidden="true">#</a> 1.4 当 <code>flex</code> 取值为一个长度值或百分比，则该值为 <code>flex-basis</code> 值，另外，<code>flex-grow: 1; flex-shrink: 1;</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span><span class="token property">flex</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span><span class="token property">flex</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-当-flex-取值为两个非负数字-则分别视为-flex-grow-和-flex-shrink-的值-另外-flex-basis-0" tabindex="-1"><a class="header-anchor" href="#_1-5-当-flex-取值为两个非负数字-则分别视为-flex-grow-和-flex-shrink-的值-另外-flex-basis-0" aria-hidden="true">#</a> 1.5 当 <code>flex</code> 取值为两个非负数字，则分别视为 <code>flex-grow</code> 和 <code>flex-shrink</code> 的值，另外，<code>flex-basis: 0%;</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span><span class="token property">flex</span><span class="token punctuation">:</span> 2 3<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-flex-1-和-flex-auto-的区别" tabindex="-1"><a class="header-anchor" href="#_2-flex-1-和-flex-auto-的区别" aria-hidden="true">#</a> 2 <code>flex: 1</code> 和 <code>flex: auto</code> 的区别</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item0</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item1</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-1</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1
<span class="token punctuation">}</span>
<span class="token selector">.flex-auto</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item0 flex-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item1 flex-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230728/01.png" alt="01" tabindex="0" loading="lazy"><figcaption>01</figcaption></figure><p>↑ <code>flex: 1;</code>，则 <code>flex-basis: 0%;</code>，表示初始宽度为 0，且 <code>flex-grow</code> 为 1，所以两个项目将均分容器宽度。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item0 flex-auto<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item1 flex-auto<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230728/02.png" alt="02" tabindex="0" loading="lazy"><figcaption>02</figcaption></figure><p>↑ <code>flex: auto;</code>，则 <code>flex-basis: auto;</code>，表示初始宽度为项目内容宽度，虽然<code>flex-grow</code> 为 1，两个项目放大宽度一样，但初始宽度不一样，所以最终宽度也不一样。</p><h2 id="_3-例子" tabindex="-1"><a class="header-anchor" href="#_3-例子" aria-hidden="true">#</a> 3 例子</h2><p>举一个不同的值之间的区别：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent &gt; div</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item-1</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 2 1 0%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item-2</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 2 1 auto<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> darkblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item-3</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1 1 200px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主轴上父容器总尺寸为 600px，子元素的总基准值是：0% + auto + 200px = 300px，其中</p><ul><li>0% 即 0 宽度</li><li>auto 对应取主尺寸即 100px</li></ul><p>主轴上有剩余空间，剩余空间为600px - 300px = 300px</p><p>各子元素放大系数为：2、2、1</p><p>剩余空间分配如下：</p><ul><li>item-1 和 item-2 各分配 2/5，各得 120px</li><li>item-3 分配 1/5，得 60px</li></ul><p>各项目最终宽度为：</p><ul><li>item-1 = 0% + 120px = 120px</li><li>item-2 = auto + 120px = 220px</li><li>item-3 = 200px + 60px = 260px</li></ul><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/01.png" alt="01" tabindex="0" loading="lazy"><figcaption>01</figcaption></figure><p>当 item-1 基准值取 <code>0%</code> 的时候，是把该项目视为零尺寸的，故即便声明其尺寸为 <code>140px</code>，也并没有什么用，形同虚设</p><p>而 item-2 基准值取 <code>auto</code> 的时候，根据规则基准值使用值是主尺寸值即 <code>100px</code>，故这 100px 不会纳入剩余空间</p><h2 id="_4-flex-1-搭配-min-width-0" tabindex="-1"><a class="header-anchor" href="#_4-flex-1-搭配-min-width-0" aria-hidden="true">#</a> 4 flex:1 搭配 min-width:0</h2><p>在一个 flex 布局中，对于一个设置了 <code>flex:1</code> 的div容器，再对其设置 <code>min-width: 0</code>，可以保证内容不超出该div。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item1</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">p</span> <span class="token punctuation">{</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
        <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>在一个flex布局中，对于一个设置了flex属性设置为1的div容器，再对其设置min-width：0，对这个div有啥影响？或者这种做法是为了解决什么问题？谢谢大佬指点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/02.png" alt="02" tabindex="0" loading="lazy"><figcaption>02</figcaption></figure><p>当 div.item 样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item1</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">min-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面效果：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/03.png" alt="03" tabindex="0" loading="lazy"><figcaption>03</figcaption></figure>`,49);function k(v,m){const a=e("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",d,[s("【CSS】由 flex: 1; 引发的思考"),l(a)])]),r])}const x=t(i,[["render",k],["__file","shorthand-values-for-the-flex-properties.html.vue"]]);export{x as default};
