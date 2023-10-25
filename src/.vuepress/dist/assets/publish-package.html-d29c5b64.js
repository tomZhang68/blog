import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as t,a as e,b as n,f as p,d}from"./app-f1b20077.js";const c={},r=e("h1",{id:"发布npm包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#发布npm包","aria-hidden":"true"},"#"),n(" 发布npm包")],-1),l={href:"https://github.com/QuellingBlade/lib-flexible-for-dashboard",target:"_blank",rel:"noopener noreferrer"},m=d(`<blockquote><p>将自己封装好的代码、方法发布到 npm 上供他人和自己使用，这样可以避免重复造轮子，提高开发效率，因此要熟练使用 node 的 module（模块）</p></blockquote><h2 id="_1-步骤" tabindex="-1"><a class="header-anchor" href="#_1-步骤" aria-hidden="true">#</a> 1 步骤</h2><p>1 前置条件，安装 node 环境，注册 npm 账号</p><p>2 新建一个文件夹 npm-demo，进入后执行 npm init，接下来是一长串表单</p><ul><li>name: 填写你这个包的名字，默认是你这个文件夹的名字。不过这里要着重说一下，最好先去 npm 上找一下有没有同名的包，否则发布会因为同名而报错。这里包名叫 npm-demo-zbx，初始化完成后也可以直接修改 package.json 文件</li><li>version: 这个包的版本，默认 1.0.0</li><li>description: 描述包时干嘛的，如 &quot;my first npm package, just for test&quot;</li><li>entry point：入口文件，默认是 index.js，<strong>即暴露包接口的文件</strong></li><li>test command：测试命令，这个直接回车就好了，因为目前还不需要这个</li><li>git repository：这个是 git 仓库地址，<strong>如果你的包是先放到github上或者其他git仓库里</strong>，这时候你的文件夹里面会存在一个隐藏的 <code>.git</code> 目录，npm 会读到这个目录作为这一项的默认值。如果没有的话，直接回车继续。</li><li>keyword：这个是一个重点，这个关系到有多少人会搜到你的 npm 包。尽量使用贴切的关键字作为这个包的索引。如 &quot;test,package&quot;</li><li>author：写你的账号或者你的 github 账号</li><li>license：这个直接回车，开源文件来着</li></ul><p>初始化完成后也可以直接修改 package.json 文件</p><p>3 然后再根目录下新建 index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">&#39;123456&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4 <code>npm login</code>，登录npm（确保此时是在npm源下，若不是可以通过nrm切换）</p><p>5 <code>npm publish</code>，发布包，ok，此时在其他项目中就可以通过<code>npm i npm-demo-zbx -S</code>或<code>npm i npm-demo-zbx -D</code>来安装该包</p><h2 id="_2-发布后如何迭代" tabindex="-1"><a class="header-anchor" href="#_2-发布后如何迭代" aria-hidden="true">#</a> 2 发布后如何迭代</h2><p>当更改了包内容后，应该修改 package.json 中 version，然后重新发布<code>npm publish</code>，否则发布会报错</p><ul><li><code>npm version patch</code>: 升级修订版本号</li><li><code>npm version minor</code>: 升级次版本号</li><li><code>npm version major</code>: 升级主版本号</li></ul><p>注意：<strong>执行 <code>npm version xxx</code> 命令前需要先 commit Git 当前工作目录，否则命令执行不成功</strong>：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230719/11.png" alt="11" tabindex="0" loading="lazy"><figcaption>11</figcaption></figure><p>执行完命令 <code>npm version xx</code> 后，会自动修改 package.json 至相应版本。并且会在 git 中打上相应的 tag</p><p>在其他项目更新生产环境依赖包，<code>npm update npm-demo-zbx -S</code>； 更新开发环境依赖包，<code>npm update npm-demo-zbx -D</code></p><h1 id="_3-如何给-npm-包添加-repository、homepage-等信息" tabindex="-1"><a class="header-anchor" href="#_3-如何给-npm-包添加-repository、homepage-等信息" aria-hidden="true">#</a> 3 如何给 npm 包添加 Repository、Homepage 等信息</h1><p>将项目初始化为一个 Git 项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 github 上新建一个仓库，仓库名最好和 npm 包名相同，然后将本地项目和远程仓库关联，并将本地项目推送至远程仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/stormzhangbx/npm-demo-zbx.git
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> push <span class="token parameter variable">-u</span> orgin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时再在本地执行 <code>npm init</code>，根据提示重新生成 package.json 文件。</p>`,23);function u(g,h){const a=o("ExternalLinkIcon");return s(),t("div",null,[r,e("p",null,[n("可以参考"),e("a",l,[n("lib-flexible-for-dashboard"),p(a)])]),m])}const x=i(c,[["render",u],["__file","publish-package.html.vue"]]);export{x as default};
