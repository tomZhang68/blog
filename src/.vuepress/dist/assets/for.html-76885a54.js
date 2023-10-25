import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as p}from"./app-f1b20077.js";const t={},e=p(`<h1 id="for循环语句的执行顺序和优化" tabindex="-1"><a class="header-anchor" href="#for循环语句的执行顺序和优化" aria-hidden="true">#</a> for循环语句的执行顺序和优化</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span>为循环做的准备工作<span class="token punctuation">;</span> 循环可以执行的条件<span class="token punctuation">;</span> 代码主体执行后做的工作<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 代码主体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> array<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">+=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 9</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span> <span class="token comment">// 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for循环语句的执行顺序简单介绍，图示如下：<br><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230730/01for.jpg" alt="图一" loading="lazy"></p><p>按照语法结构对代码进行一下分析：</p><p>（1）.首先做循环准备工作，声明变量i并赋值为0，声明变量len并赋值为9，这个工作只做一次即可。<br> （2）.然后判断循环执行的条件是否满足，i&lt;9，没问题，可以执行。<br> （3）.这里要注意了，执行条件满足后，并不是执行的i++，而是执行代码主体部分。<br> （4）.当执行完代码主体之后，才是去执行i++。<br> （5）.上面结束了一次完整的循环，这时候再来判断循环执行的条件是否成立，再执行代码主体，然后再执行代码主体执行后做的工作，如此往复下去，再强调一遍，准备工作只需要做一次即可。</p><p>for知识点补充：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 9，可以发现在“为循环做的准备工作”中定义的变量变成了全局变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为“为循环做的准备工作”中定义的变量变为全局变量，因此准备工作部分没有必要非要在小括号中完成</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特别说明</strong>：for后面的小括号中，分号有且只能有两个。</p>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","for.html.vue"]]);export{k as default};
