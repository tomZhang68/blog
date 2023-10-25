import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,d as s}from"./app-f1b20077.js";const i={},t=s(`<h1 id="npm-link" tabindex="-1"><a class="header-anchor" href="#npm-link" aria-hidden="true">#</a> npm link</h1><p>在发布 npm 包前最好进行本地测试</p><p><code>npm link</code> 将需要被测试的包软连接到全局 nmp 中</p><p><strong>全局 nmp 的位置可以通过 <code>npm config ls -l</code> 来查看</strong></p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/05.png" alt="05" tabindex="0" loading="lazy"><figcaption>05</figcaption></figure><p>或者通过 <code>npm root -g</code> 来查看</p><h2 id="_1-将包-npm-test-zbx-软连接到全局-npm-中" tabindex="-1"><a class="header-anchor" href="#_1-将包-npm-test-zbx-软连接到全局-npm-中" aria-hidden="true">#</a> 1 将包 npm-test-zbx 软连接到全局 npm 中</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> npm-test-zbx
<span class="token function">npm</span> <span class="token function">link</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/02.png" alt="02" tabindex="0" loading="lazy"><figcaption>02</figcaption></figure><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/03.png" alt="03" tabindex="0" loading="lazy"><figcaption>03</figcaption></figure><h2 id="_2-在项目-test-中使用-npm-test-zbx" tabindex="-1"><a class="header-anchor" href="#_2-在项目-test-中使用-npm-test-zbx" aria-hidden="true">#</a> 2 在项目 test 中使用 npm-test-zbx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
<span class="token function">npm</span> <span class="token function">link</span> npm-test-zbx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/04.png" alt="04" tabindex="0" loading="lazy"><figcaption>04</figcaption></figure><h2 id="_3-从项目-test-中卸载-npm-test-zbx" tabindex="-1"><a class="header-anchor" href="#_3-从项目-test-中卸载-npm-test-zbx" aria-hidden="true">#</a> 3 从项目 test 中卸载 npm-test-zbx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
<span class="token function">npm</span> unlink npm-test-zbx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/06.png" alt="06" tabindex="0" loading="lazy"><figcaption>06</figcaption></figure><h2 id="_4-将包-npm-test-zbx-从全局-npm-中卸载" tabindex="-1"><a class="header-anchor" href="#_4-将包-npm-test-zbx-从全局-npm-中卸载" aria-hidden="true">#</a> 4 将包 npm-test-zbx 从全局 npm 中卸载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> npm-test-zbx
<span class="token function">npm</span> unlink
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[t];function l(d,p){return a(),e("div",null,c)}const m=n(i,[["render",l],["__file","npm-link.html.vue"]]);export{m as default};
