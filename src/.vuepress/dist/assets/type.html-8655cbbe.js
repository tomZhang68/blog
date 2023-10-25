import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c as o,a as n,b as c,f as p,d as i}from"./app-f1b20077.js";const l={},d={href:"https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_determining_module_system",target:"_blank",rel:"noopener noreferrer"},r=i(`<p>默认情况下，Node.js 将 JavaScript 代码视为 CommonJS 模块。可以通过下面方式告诉 Node.js 将 JavaScript 代码视为 ECMAScript 模块：</p><ul><li>文件扩展名为 <code>.mjs </code>。</li><li>文件扩展名为 <code>.js </code>，但最近的父 package.json 文件包含值为 <code>module</code> 的 <code>type</code> 字段。</li><li>当设置<code>--input-type=module</code> 标志时，作为参数传入 --eval 的字符串将被视为 ES 模块。</li></ul><p>新建一个 Node 项目 execa:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- execa
    |-- package-lock.json
    |-- package.json
    |-- src
        |-- index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> execa <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;execa&#39;</span>

<span class="token function">execa</span><span class="token punctuation">(</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>stdout<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> execa
<span class="token function">node</span> src/index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台报错，提示 SyntaxError: Cannot use import statement outside a module。要想执行成功，可以通过下列三种方式：</p><p>方式一：</p><p>将文件后缀改成 <code>.mjs</code>，index.js -&gt; index.mjs</p><p>方式二</p><p>package.json 中添加 <code>type</code> 字段，并设置值为 <code>module</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式三：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> --input-type<span class="token operator">=</span>module <span class="token parameter variable">--eval</span> <span class="token string">&quot;import { execa } from &#39;execa&#39;;execa(&#39;ls&#39;).then(res =&gt; { console.log(res);console.log(res.stdout) })&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16);function u(m,v){const s=a("ExternalLinkIcon");return t(),o("div",null,[n("p",null,[n("a",d,[c("Determining module system"),p(s)])]),r])}const b=e(l,[["render",u],["__file","type.html.vue"]]);export{b as default};
