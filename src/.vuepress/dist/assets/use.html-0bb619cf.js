import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,d as e}from"./app-f1b20077.js";const c={},t=e(`<h1 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> @use</h1><p>每一个 Sass 文件称作为一个模块（分为自定义模块和 Sass 内置模块），不同的模块可能会用到一些相同的变量、混合、函数，能否在一个模块中使用另一个模块中定义的变量、混合、函数呢，答案是可以的，<code>@use</code> 就是做这个事情的。</p><p><code>@use</code> 不仅可以导入变量、混合、函数，还可以导入样式规则。所以项目中通常按不同作用将样式分散到多个 Sass 文件中。</p><p>注意，虽然通过 <code>@use</code> 导入了变量、混合、函数和样式规则，但最终生成的 CSS 文件中只包含样式规则。</p><blockquote><p><code>@import</code> 将逐渐废弃，推荐更多使用 <code>@use</code>。</p></blockquote><blockquote><p><code>@use</code> 规则必须位于 <code>@forward</code> 之外的任何规则之前。</p></blockquote><h2 id="_1-私有成员" tabindex="-1"><a class="header-anchor" href="#_1-私有成员" aria-hidden="true">#</a> 1 私有成员</h2><p>模块内的变量、混合、函数默认都是对位暴露的，如果像让某个成员变成私有的，只需在成员名称前加上 <code>-</code> 或者 <code>_</code> 即可。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$-radius</span></span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token selector">rounded </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$-radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-入口模块-索引模块" tabindex="-1"><a class="header-anchor" href="#_2-入口模块-索引模块" aria-hidden="true">#</a> 2 入口模块（索引模块）</h2><p>如果在文件夹中写入 index.scss 或 _index.scss，导入时的 URL 只写 index.scss 或 _index.scss 所在的目录也是可以的。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230727/02.png" alt="02" tabindex="0" loading="lazy"><figcaption>02</figcaption></figure><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// test.scss</span>
<span class="token keyword">@use</span> <span class="token string">&quot;./style&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-部分-partials" tabindex="-1"><a class="header-anchor" href="#_3-部分-partials" aria-hidden="true">#</a> 3 部分（Partials）</h2><p>按照惯例，仅打算作为模块加载而不是自行编译的 Sass 文件以 <code>_</code> 开头。当导入模块时，可以省略 <code>_</code>。</p><p>如果编辑器开启了自动编译功能，正常情况下会自动编译 Sass 文件，而以 <code>_</code> 开头的 Sass 文件不会被编译。</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230727/01.png" alt="01" tabindex="0" loading="lazy"><figcaption>01</figcaption></figure><h2 id="_4-加载成员" tabindex="-1"><a class="header-anchor" href="#_4-加载成员" aria-hidden="true">#</a> 4 加载成员</h2><ul><li>访问变量 <code>&lt;namespace&gt;.&lt;variable&gt;</code></li><li>访问混合 <code>&lt;namespace&gt;.&lt;function&gt;()</code></li><li>访问函数 <code>@include &lt;namespace&gt;.&lt;mixin&gt;()</code></li></ul><p>默认情况下 namespace 为 URL 的最后组成部分，也可以在导入时对<strong>namespace 进行重命名</strong>。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// _corners.scss</span>
<span class="token property"><span class="token variable">$radius</span></span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token selector">rounded </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// _box.scss</span>
<span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// style.scss</span>
<span class="token keyword">@use</span> <span class="token string">&quot;corners&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@use</span> <span class="token string">&quot;box&quot;</span> <span class="token module-modifier keyword">as</span> b<span class="token punctuation">;</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> corners.rounded<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px <span class="token operator">+</span> corners.<span class="token variable">$radius</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> b.<span class="token variable">$width</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-配置" tabindex="-1"><a class="header-anchor" href="#_5-配置" aria-hidden="true">#</a> 5 配置</h2><p>模块中的变量可以使用 <code>!default</code> 标志使其可配置，当导入该模块时，使用 <code>@use &lt;url&gt; with (&lt;variable&gt;: &lt;value&gt;, &lt;variable&gt;: &lt;value&gt;)</code> 对变量进行配置。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>SCSS SYNTAX
<span class="token comment">// _library.scss</span>
<span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #000 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> 0.25rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$box-shadow</span></span><span class="token punctuation">:</span> 0 0.5rem 1rem <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$black</span><span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token selector">code </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$border-radius</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$box-shadow</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// style.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;library&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #222<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> 0.1rem
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>style.scss 编译后：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">code</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.1rem<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.5rem 1rem <span class="token function">rgba</span><span class="token punctuation">(</span>34<span class="token punctuation">,</span> 34<span class="token punctuation">,</span> 34<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),p=[t];function i(o,l){return n(),a("div",null,p)}const u=s(c,[["render",i],["__file","use.html.vue"]]);export{u as default};
