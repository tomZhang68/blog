import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as o,a as s,b as a,f as t,d as p}from"./app-f1b20077.js";const l={},d=s("h1",{id:"width、flex-basis、min-widht、max-width的区别",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#width、flex-basis、min-widht、max-width的区别","aria-hidden":"true"},"#"),a(" width、flex-basis、min-widht、max-width的区别")],-1),r={href:"https://www.jianshu.com/p/17b1b445ecd4",target:"_blank",rel:"noopener noreferrer"},u=p(`<p>Flex 项目默认在容器中不换行水平排列，项目的 <code>flex-basis</code> 表示项目在被放进一个 flex 容器之前的宽度，即项目不伸缩时的初始宽度。</p><p>当所有项目的初始宽度之和小于容器宽度时，如果项目 <code>flex-grow</code> 不为 <code>0</code>，项目就会伸长。项目最终的宽度 = 初始宽度 + 伸长的宽度。</p><p>当所有项目的初始宽度之和大于容器宽度时，如果项目 <code>flex-shrink</code> 不为 <code>0</code>，项目就会收缩。项目最终的宽度 = 初始宽度 - 收缩的宽度。</p><p>所以知道项目的初始宽度很重要，因为项目的最终宽度跟其有关。</p><p>如何确定项目的初始宽度（即 <code>flex-basis</code>）呢？</p><ul><li><p>显式的设置了项目的 <code>flex-basis</code> 属性，属性值可以为带单位的长度值，或者百分数，如<code>100px</code>、<code>50%</code>。</p></li><li><p>如果没有显式设置项目的 <code>flex-basis</code> 属性，但设置了项目的 <code>width</code> 属性，那么初始宽度就是 <code>width</code> 属性的大小。</p></li><li><p>如果 <code>flex-basis</code>、<code>width</code> 都没设置，初始宽度就是项目内容（<code>content</code>）的宽度。</p></li><li><p>如果同时设置 flex-basis、width，初始宽度取 flex-basis 值。</p></li></ul><p>即下面从左至右，优先级逐渐增大：</p><p>content –&gt; width –&gt; flex-basis (limted by max|min-width)</p><p>下面通过给一个 <code>1000px</code> 的 <code>flex</code> 容器来添加一些 <code>flex</code> 项目来说明一下 Flex Items 的应用准则：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/01.webp" alt="01" tabindex="0" loading="lazy"><figcaption>01</figcaption></figure><h2 id="设置宽度-width" tabindex="-1"><a class="header-anchor" href="#设置宽度-width" aria-hidden="true">#</a> 设置宽度(Width)</h2><p>添加四个 200x200 像素的项目到 flex 容器中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/02.webp" alt="02" tabindex="0" loading="lazy"><figcaption>02</figcaption></figure><p>因为 flex 容器有足够多的空间，所以项目可以很好的填充在容器内部，最终：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/03.webp" alt="03" tabindex="0" loading="lazy"><figcaption>03</figcaption></figure><p>上面的示例就是当 <code>flex-basis</code> 没有被指定，默认值是 <code>flex-basis: auto</code>，也就意味着项目以宽度 width(200px) 为准。</p><h2 id="设置一个flex-basis值" tabindex="-1"><a class="header-anchor" href="#设置一个flex-basis值" aria-hidden="true">#</a> 设置一个Flex Basis值</h2><p>让我们看看当给这些已经设置固定宽度 <code>width</code> 的项目设置一个 <code>flex-basis</code> 值会发生什么。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/04.webp" alt="04" tabindex="0" loading="lazy"><figcaption>04</figcaption></figure><p>就像你所看到的，当指定一个 <code>flex-basis</code> 值的时候，盒子的宽度属性被忽略了，所以我们就不需要指定盒子的宽度 <code>width</code> 属性了</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>items 完全填充了flex 容器：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/05.webp" alt="05" tabindex="0" loading="lazy"><figcaption>05</figcaption></figure><p>因此项目的宽度关键在于最终的 <code>flex-basis</code>。最佳的方法是只使用 <code>flex-basis</code> 而不是 <code>width</code> 或 <code>height</code> 属性。特别是 Safari 10 之前的版本的浏览器有一个 flexbox bug，在给项目应用 <code>flex-shrink</code> 属性的时候，浏览器会使用 <code>height</code> 属性而不是 <code>flex-basis</code>。</p><h2 id="使用max-width来限制flex-basis" tabindex="-1"><a class="header-anchor" href="#使用max-width来限制flex-basis" aria-hidden="true">#</a> 使用max-width来限制flex-basis</h2><p><code>min-width</code> 和 <code>max-width</code> 会限制 <code>flex-basis</code> 值。下面是给 flex 项目设置 <code>max-width</code> 的结果：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/06.webp" alt="06" tabindex="0" loading="lazy"><figcaption>06</figcaption></figure><p>可以看到即使我们将 <code>flex-basis</code> 设置为 250px，项目的宽度还是被限制在了 100px。所以在这个示例中最终的 <code>flex-basis</code> 是100px：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/07.webp" alt="07" tabindex="0" loading="lazy"><figcaption>07</figcaption></figure><p>接着试试 <code>min-width</code> 来看看最终的 <code>flex-basis</code> 有什么不同：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">min-width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/08.webp" alt="08" tabindex="0" loading="lazy"><figcaption>08</figcaption></figure><p>可以看到最终项目的宽度是 250px 而不是 100px：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/09.webp" alt="09" tabindex="0" loading="lazy"><figcaption>09</figcaption></figure><h2 id="flex-basis-到底是什么" tabindex="-1"><a class="header-anchor" href="#flex-basis-到底是什么" aria-hidden="true">#</a> Flex-basis 到底是什么？</h2><p>现在我们知道了 width 属性只是一个当 flex-basis 没有被设置时的回退选项。min-width 和 max-width 则是 flex-basis 的下限和上限。那么 flex-basis 到底是什么呢？</p><p>也许你注意到了上面我们所有的示例在将 flex 项目放入 flex 容器之前都直观地列出了 flex 项目的大小。之所以这么做是因为这就是 flex-basis 的含义：flex 项目在被放进一个flex容器之前的大小。也就是项目理想或假设的大小。但是 flex-basis 不能保证其大小！一旦将项目放入flex容器中，flex-basis的值就无法保证了。在上面的示例中，你可以看到 flex 项目完美地填充了容器，那是因为容器的大小正好等于项目最终的 <code>flex-basis</code> 之和。但是如果容器没有足够的空间来容纳或者有多余的空间呢？下面就分别讲解一下这两种情况。</p><h2 id="当没有足够空间的时候" tabindex="-1"><a class="header-anchor" href="#当没有足够空间的时候" aria-hidden="true">#</a> 当没有足够空间的时候</h2><p>比方说我们想要放更多的 <code>flex-basis：200px</code> 的项目到我们的容器：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/10.webp" alt="10" tabindex="0" loading="lazy"><figcaption>10</figcaption></figure><p>在项目被放进容器之前，每个项目会占据 200px，所有的项目会占据 1600px。但是容器只有 1000px。当容器没有足够大的空间来存放所有的项目的时候，flex 项目会按照压缩率（shrink rate）被压缩（shrink）其大小来填充容器，这个压缩率就是 <code>flex-shrink</code> 来设置的，默认情况下每个项目的压缩率都是一样的：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/11.webp" alt="11" tabindex="0" loading="lazy"><figcaption>11</figcaption></figure><h2 id="当有额外的空间的时候" tabindex="-1"><a class="header-anchor" href="#当有额外的空间的时候" aria-hidden="true">#</a> 当有额外的空间的时候</h2><p>通常我们会有额外的空间剩余当所有的项目都添加进容器后：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/12.webp" alt="12" tabindex="0" loading="lazy"><figcaption>12</figcaption></figure><p>我们可以控制 flex 项目的增长来填充可用的空间，这也就是 <code>flex-grow</code> 属性的作用。默认值为0，意味着项目不会增长。如果将每个项目设置 <code>flex-grow: 1</code>，那么所有的项目都会等比例的增长来填充剩余的空间：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230725/13.webp" alt="13" tabindex="0" loading="lazy"><figcaption>13</figcaption></figure><p>以上这些设置同样适用于 <code>height</code> 属性，当你将 <code>flex-direction</code> 设置为 <code>column</code> 或者<code>column-reverse</code> 的时候。</p>`,54);function g(x,b){const e=i("ExternalLinkIcon");return c(),o("div",null,[d,s("p",null,[s("a",r,[a("Flex Basis与Width的区别"),t(e)])]),u])}const h=n(l,[["render",g],["__file","flex-basis.html.vue"]]);export{h as default};
