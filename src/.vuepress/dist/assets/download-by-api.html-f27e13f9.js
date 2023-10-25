import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as c,f as i,d as s}from"./app-f1b20077.js";const l={},u=s(`<h1 id="js调用后台接口下载excel" tabindex="-1"><a class="header-anchor" href="#js调用后台接口下载excel" aria-hidden="true">#</a> js调用后台接口下载Excel</h1><p>XMLHttpRequest Level 2 可以用于获取服务器端的二进制数据。</p><p>调用接口，通过流下载Excel，此处使用了 FileReader</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#download&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 其他请求方式也可以</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;url&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token comment">// 把 responseType 设为 blob，表示服务器传回的是二进制对象</span>
  xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&#39;blob&#39;</span>
  <span class="token comment">// 定义请求完成的处理函数，请求前也可以增加loading、禁用下载按钮逻辑</span>
  xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果想要关闭loading，可以放在这里</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> blob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>response
      <span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
      reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
        a<span class="token punctuation">.</span>href <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result
        <span class="token comment">// 文件名称也可以由接口设置</span>
        a<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">&#39;导出表格名字.xls&#39;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
        a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">$</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用接口，通过流展示图片。此处使用了 URL.createObjectURL(blob)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&quot;blob&quot;</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;client_type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DESKTOP_WEB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;desktop_web_access_key&quot;</span><span class="token punctuation">,</span> _desktop_web_access_key<span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> blob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">;</span>
        <span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//释放。</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        img<span class="token punctuation">.</span>src <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将blob加载到img中 由于blob太大 会有性能影响 应该在加载之后释放</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#imgcontainer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 jQuery 无法实现上述功能，因为 jQuery 将返回的数据转换为了 string，不支持 blob 类型。</p>`,7),k={href:"https://www.jianshu.com/p/cbd0ce4d9665",target:"_blank",rel:"noopener noreferrer"},r=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Cookies <span class="token keyword">from</span> <span class="token string">&#39;js-cookie&#39;</span>

<span class="token keyword">const</span> TokenKey <span class="token operator">=</span> <span class="token string">&#39;ny-street-token&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getToken</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>TokenKey<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/auth&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">download</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;blob&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> contentDisposition <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;content-disposition&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>response<span class="token punctuation">.</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
  a<span class="token punctuation">.</span>href <span class="token operator">=</span> url
  a<span class="token punctuation">.</span>download <span class="token operator">=</span> contentDisposition<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取文件名" tabindex="-1"><a class="header-anchor" href="#获取文件名" aria-hidden="true">#</a> 获取文件名</h2><p>后端设置 Content-Disposition 方式不同，前端获取文件名方式也不一样：</p><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230802/04.png" alt="04" tabindex="0" loading="lazy"><figcaption>04</figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> contentDisposition <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;content-disposition&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> fileName <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>contentDisposition<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://blog-1320825986.cos.ap-nanjing.myqcloud.com/20230802/05.png" alt="05" tabindex="0" loading="lazy"><figcaption>05</figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> contentDisposition <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;content-disposition&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&quot;(.+)&quot;$</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> fileName <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>contentDisposition<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",k,[c("Vue使用axios下载文件"),i(a)])]),r])}const f=t(l,[["render",d],["__file","download-by-api.html.vue"]]);export{f as default};
