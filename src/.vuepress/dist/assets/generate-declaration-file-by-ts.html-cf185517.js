import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-f1b20077.js";const t={},p=e(`<h1 id="由-ts-生成申明文件" tabindex="-1"><a class="header-anchor" href="#由-ts-生成申明文件" aria-hidden="true">#</a> 由 TS 生成申明文件</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">|</span><span class="token operator">--</span> ts<span class="token operator">-</span>test
    <span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json
    <span class="token operator">|</span><span class="token operator">--</span> tsconfig<span class="token punctuation">.</span>json
    <span class="token operator">|</span><span class="token operator">--</span> src
        <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>index.ts</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> ReactiveFlags <span class="token punctuation">{</span>
  <span class="token constant">SKIP</span> <span class="token operator">=</span> <span class="token string">&#39;__v_skip&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">IS_REACTIVE</span> <span class="token operator">=</span> <span class="token string">&#39;__v_isReactive&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">IS_READONLY</span> <span class="token operator">=</span> <span class="token string">&#39;__v_isReadonly&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">RAW</span> <span class="token operator">=</span> <span class="token string">&#39;__v_raw&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token keyword">enum</span> ReactiveFlags1 <span class="token punctuation">{</span>
  <span class="token constant">SKIP</span> <span class="token operator">=</span> <span class="token string">&#39;__v_skip&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">IS_REACTIVE</span> <span class="token operator">=</span> <span class="token string">&#39;__v_isReactive&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">IS_READONLY</span> <span class="token operator">=</span> <span class="token string">&#39;__v_isReadonly&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">RAW</span> <span class="token operator">=</span> <span class="token string">&#39;__v_raw&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">add1</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>tsconfig.json</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令 tsc，生成 dist/index.js、dist/index.d.ts，内容如下</p><p><strong>index.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>__esModule <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>add <span class="token operator">=</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
exports<span class="token punctuation">.</span>add <span class="token operator">=</span> add<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add1</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>index.d.ts</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> ReactiveFlags <span class="token punctuation">{</span>
    <span class="token constant">SKIP</span> <span class="token operator">=</span> <span class="token string">&quot;__v_skip&quot;</span><span class="token punctuation">,</span>
    <span class="token constant">IS_REACTIVE</span> <span class="token operator">=</span> <span class="token string">&quot;__v_isReactive&quot;</span><span class="token punctuation">,</span>
    <span class="token constant">IS_READONLY</span> <span class="token operator">=</span> <span class="token string">&quot;__v_isReadonly&quot;</span><span class="token punctuation">,</span>
    <span class="token constant">RAW</span> <span class="token operator">=</span> <span class="token string">&quot;__v_raw&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出</p><ul><li>只有 index.ts 中对外导出的部分才会在 index.d.ts 中生成类型声明</li><li>index.ts 中的类型声明在 index.js 中会被删除</li></ul><p>修改 package.json:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.d.ts&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若将库 ts-test 发布到 npm，当其他项目依赖该库时：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ts-test&#39;</span> <span class="token comment">// 当编辑器输入a、d、d时会有语法提示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","generate-declaration-file-by-ts.html.vue"]]);export{d as default};
