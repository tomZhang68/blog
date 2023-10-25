import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,d as a}from"./app-f1b20077.js";const p={},t=a(`<h1 id="peerdependencies" tabindex="-1"><a class="header-anchor" href="#peerdependencies" aria-hidden="true">#</a> peerDependencies</h1><blockquote><p>主要用于告诉使用者, npm 包本身依赖哪些模块, 并且需要安装它</p></blockquote><h2 id="_1-为什么使用-peerdependencies-而不是-dependencies" tabindex="-1"><a class="header-anchor" href="#_1-为什么使用-peerdependencies-而不是-dependencies" aria-hidden="true">#</a> 1 为什么使用 peerDependencies 而不是 dependencies？</h2><p>新建一个 npm 项目 test，安装依赖 element-ui <code>npm i element-ui</code>，控制台给出如下警告：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/12.png" alt="12" tabindex="0" loading="lazy"><figcaption>12</figcaption></figure><p>意思是项目 test 需要提前安装 <code>vue@^2.5.17</code>，通俗的讲就是“如果你安装我，那么你最好也安装X”，确实，使用库 element-ui 的项目本身也是 Vue 项目。</p><p>element-ui/package.json：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peerDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.5.17&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;async-validator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~1.8.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-helper-vue-jsx-merge-props&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;deepmerge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;normalize-wheel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;resize-observer-polyfill&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.5.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;throttle-debounce&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在 element-ui/package.json 中使用 dependencies 而不是 peerDependencies 来声明 Vue，即执行完 <code>npm i vue@2.4.4 element-ui</code> 后的依赖图是这样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|-- test
    |-- node_modules
        |-- vue
        |-- element-ui
            |-- node_modules
                |-- vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 element-ui 的 dependencies（假设的）中声明了 <code>vue@^2.5.17</code>，与主工程 test 本身声明的 <code>vue@2.4.4</code> 有冲突，导致 Vue 会被安装2次，产生冗余安装。</p><p>而 peerDependency 就可以<strong>避免类似的核心依赖库被重复下载的问题，减少项目最终打包后的体积</strong>。</p><h2 id="_2-peerdependency-的常见使用场景" tabindex="-1"><a class="header-anchor" href="#_2-peerdependency-的常见使用场景" aria-hidden="true">#</a> 2 peerDependency 的常见使用场景</h2><ul><li>自动化工具（如 Rollup、Webpack等）的相关插件，如 plugin-node-resolve</li><li>基于某个框架的 UI 组件库，如 element-ui</li></ul>`,14),o=[t];function i(c,l){return n(),s("div",null,o)}const u=e(p,[["render",i],["__file","peerDependencies.html.vue"]]);export{u as default};
