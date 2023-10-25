import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as s,a as e,b as a,f as n,d}from"./app-f1b20077.js";const l={},c=e("h1",{id:"git-flow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-flow","aria-hidden":"true"},"#"),a(" git flow")],-1),p={href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"},h=d('<h2 id="_1-主要分支" tabindex="-1"><a class="header-anchor" href="#_1-主要分支" aria-hidden="true">#</a> 1 主要分支</h2><h3 id="_1-1-master" tabindex="-1"><a class="header-anchor" href="#_1-1-master" aria-hidden="true">#</a> 1.1 master</h3><p>永远处在即将分布的状态，永远是“正确”的代码。</p><p>该分支上的 commit 都有对应的 tag。该分支跟线上版本一直，也就是该分支用于<strong>生产环境</strong>。</p><h3 id="_1-2-develop" tabindex="-1"><a class="header-anchor" href="#_1-2-develop" aria-hidden="true">#</a> 1.2 develop</h3><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230809/01.webp" alt="01" tabindex="0" loading="lazy"><figcaption>01</figcaption></figure><p>不能直接在 master 分支上进行开发，否则很危险，develop 基于 master 分支创建而来，也不能直接在该分支上开发，当有新功能来了，可以从 master 分支创建 <code>feat-*</code> 分支，然后在<code>feat-*</code> 分支上进行开发，当开发完成后将 <code>feat-*</code> 分支 merge 到 develop 分支（此后，<code>feat-*</code> 分支可以删除也可以不删除）。</p><p>develop 不能直接合并到 master 分支，而是通过 release 分支合并到 master 分支。</p><p>由此可以看出，develop 相当于 master 和 功能分支之间的一个缓冲分支。</p><h2 id="_2-辅助分支" tabindex="-1"><a class="header-anchor" href="#_2-辅助分支" aria-hidden="true">#</a> 2 辅助分支</h2><h3 id="_2-1-feature" tabindex="-1"><a class="header-anchor" href="#_2-1-feature" aria-hidden="true">#</a> 2.1 feature</h3><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230809/02.webp" alt="02" tabindex="0" loading="lazy"><figcaption>02</figcaption></figure><p>开发新功能的分支, 基于 develop, 完成后 merge 回 develop。</p><p><strong>开发环境</strong>使用的是该分支，如在本地启动一个 Vue 项目，在浏览器通过 <code>http://localhost:8080/**</code> 进行访问前端页面。</p><h3 id="_2-2-release" tabindex="-1"><a class="header-anchor" href="#_2-2-release" aria-hidden="true">#</a> 2.2 release</h3><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230809/03.webp" alt="03" tabindex="0" loading="lazy"><figcaption>03</figcaption></figure><p>基于 develop 分支，用来测试、修复 bug，完成后 merge 回 develop 和 master。同时在 master 分支上打个 tag 记住 release 版本号，删除Release分支（不删也行）</p><p>该分支可以用来打包发布<strong>测试环境</strong>。</p><p>merge 回 develop 分支的原因：因为 release 基于 develop 分支，如果测试时在 release 分支发现了bug，并在该分支上对 bug 进行了修改，说明 develop 分支也存在相同的 bug，所以需要把修复后的 release 分支合并到 develop 分支。</p><p>merge 回 master 分支的原因：一个新功能经过开发（在 feature 分支上进行）、测试（在 release 分支上进行）后，已经是“正确”的代码，可以合并到 master 分支</p><p>当新功能开发完成后（feature 分支合并到 develop 分支），我们需要测试新开发的功能，和修复 bug。</p><p><strong>注意</strong>：release 分支创建后，不要从 develop 分支上合并新的改动到 release 分支上。</p><h3 id="_2-3-hotfix" tabindex="-1"><a class="header-anchor" href="#_2-3-hotfix" aria-hidden="true">#</a> 2.3 hotfix</h3><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230809/04.webp" alt="04" tabindex="0" loading="lazy"><figcaption>04</figcaption></figure><p>修复 master 上的问题，情况比较紧急，完成后 merge 回 master 和 develop</p>',25);function g(f,m){const r=o("ExternalLinkIcon");return i(),s("div",null,[c,e("p",null,[e("a",p,[a("A successful Git branching model"),n(r)])]),h])}const b=t(l,[["render",g],["__file","git-flow.html.vue"]]);export{b as default};
