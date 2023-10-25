import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-f1b20077.js";const e={},p=t(`<h1 id="object-keys-的顺序问题及参数解析" tabindex="-1"><a class="header-anchor" href="#object-keys-的顺序问题及参数解析" aria-hidden="true">#</a> Object.keys()的顺序问题及参数解析</h1><h2 id="_1-参数为对象" tabindex="-1"><a class="header-anchor" href="#_1-参数为对象" aria-hidden="true">#</a> 1 参数为对象</h2><p>先提取 Number 的 key，按升序排列，再提取 String 类型的 key，按定义顺序排列</p><p>注意事项：前一类需满足<code>0&lt;number&lt;2^32-1</code>，否则按字符串处理（见特殊示例）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 属性为字符（串）</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">bb</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">33</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// output: [&quot;c&quot;, &quot;bb&quot;, &quot;a&quot;]</span>

<span class="token comment">// 属性为数字</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> 
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;cc&#39;</span><span class="token punctuation">,</span> 
  <span class="token number">3</span><span class="token operator">:</span> <span class="token string">&#39;bb&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// output: [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;]</span>

<span class="token comment">// 属性有字符串、数字</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> 
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;cc&#39;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 
  <span class="token number">3</span><span class="token operator">:</span> <span class="token string">&#39;bb&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// output: [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;f&quot;, &quot;d&quot;]</span>

<span class="token comment">// 特殊示例：属性有字符串、负数、正数、大于2^32-1的数</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> 
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span>
  <span class="token number">4294967295</span><span class="token operator">:</span> <span class="token string">&#39;cc&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 2^32 - 1</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> 
  <span class="token string-property property">&#39;-3&#39;</span><span class="token operator">:</span> <span class="token string">&#39;bb&#39;</span><span class="token punctuation">,</span>
  <span class="token number">4294967294</span><span class="token operator">:</span> <span class="token string">&#39;cc&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 2^32 - 2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// output: [&quot;1&quot;, &quot;2&quot;, &quot;4294967294&quot;, &quot;f&quot;, &quot;4294967295&quot;, &quot;d&quot;, &quot;-3&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-参数为数组" tabindex="-1"><a class="header-anchor" href="#_2-参数为数组" aria-hidden="true">#</a> 2 参数为数组</h2><p>按顺序返回数组元素索引字符串</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">d+</span><span class="token regex-delimiter">/</span></span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// output: [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-参数为字符串" tabindex="-1"><a class="header-anchor" href="#_3-参数为字符串" aria-hidden="true">#</a> 3 参数为字符串</h2><p>按顺序返回字符串字符下标</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token string">&#39;ghjgvjh&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// output: [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;5&quot;, &quot;6&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-参数为布尔、数字、bigint、symbol" tabindex="-1"><a class="header-anchor" href="#_4-参数为布尔、数字、bigint、symbol" aria-hidden="true">#</a> 4 参数为布尔、数字、BigInt、Symbol</h2><p>返回空数组，因为不可迭代</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>			<span class="token comment">// output: []</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span>			<span class="token comment">// output: []</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">546</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// output: []</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;sa54&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// output: []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-参数为null、undefined时" tabindex="-1"><a class="header-anchor" href="#_5-参数为null、undefined时" aria-hidden="true">#</a> 5 参数为null、undefined时</h2><p>抛出错误，因为它们无法转换成对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// output: Uncaught TypeError: Cannot convert undefined or null to object</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>
<span class="token comment">// output: Uncaught TypeError: Cannot convert undefined or null to object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","object-keys.html.vue"]]);export{d as default};
