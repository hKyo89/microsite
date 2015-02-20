



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>louisremi/jquery.backgroundSize.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="louisremi/jquery.backgroundSize.js" name="twitter:title" /><meta content="jquery.backgroundSize.js - DEPRECATED, please use its successor: background-size polyfill" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/39374?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/39374?v=3&amp;s=400" property="og:image" /><meta content="louisremi/jquery.backgroundSize.js" property="og:title" /><meta content="https://github.com/louisremi/jquery.backgroundSize.js" property="og:url" /><meta content="jquery.backgroundSize.js - DEPRECATED, please use its successor: background-size polyfill" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="B6FDF245:5D0E:20DF743:5487BF48" name="octolytics-dimension-request_id" /><meta content="410900" name="octolytics-actor-id" /><meta content="nugjagoan" name="octolytics-actor-login" /><meta content="458ff7607a563834da6fdd851fdfeb2c307fd709bde70fbf7be4e69290e85037" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, files#disambiguate" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="beVmf1Y0dvFqOz/TojZUoE96kPq3K6hAg8maYLk7okN04AAUXC9aBGpdZnYgUGPuVI5yWQ1Qs+VsPO6wG7SUFg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-2514c56ae64a8843e76b3c8e3f303e514e7ad11fc5d095089e47079a1da014db.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-faa666e38dec0c944d41a457d4bc97a0b26b11790da3901d656a41772db660c6.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="bb7757e5f707d0b5ea3fc1b1b215def6">

      
  <meta name="description" content="jquery.backgroundSize.js - DEPRECATED, please use its successor: background-size polyfill">
  <meta name="go-import" content="github.com/louisremi/jquery.backgroundSize.js git https://github.com/louisremi/jquery.backgroundSize.js.git">

  <meta content="39374" name="octolytics-dimension-user_id" /><meta content="louisremi" name="octolytics-dimension-user_login" /><meta content="4004586" name="octolytics-dimension-repository_id" /><meta content="louisremi/jquery.backgroundSize.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4004586" name="octolytics-dimension-repository_network_root_id" /><meta content="louisremi/jquery.backgroundSize.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/louisremi/jquery.backgroundSize.js/commits/master.atom" rel="alternate" title="Recent Commits to jquery.backgroundSize.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/louisremi/jquery.backgroundSize.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/louisremi/jquery.backgroundSize.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/nugjagoan" data-ga-click="Header, go to profile, text:username">
      <img alt="nugjagoan" class="avatar" data-user="410900" height="20" src="https://avatars0.githubusercontent.com/u/410900?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">nugjagoan</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="louisremi/jquery.backgroundSize.js">This repository</span>
    </li>
      <li>
        <a href="/louisremi/jquery.backgroundSize.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/tzH+q1HPdYKcp4iBE4OJSVk+tLgWCRmRn7j2o7NBnNjfDycznfp96+uo5+r2iDgfZjgquNmg44Vub8WakUjiA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ngvaOfTz+MNNQfoKW7ipbnQkjCk2oAlWM7sJ3yNMibfJanA/W7pdYfvorN7up5x70JfzPz3MGFrYoxSEgd0DiQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="4004586" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/louisremi/jquery.backgroundSize.js/watchers">
        19
      </a>
      <a href="/louisremi/jquery.backgroundSize.js/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/louisremi/jquery.backgroundSize.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jl0Fkj+GsVzzvumy2fn21hiKzA/xiWC2Ac1dEN8U7KLORggt2v7yfvMUD13N1KE3Vkf8h8JNU5r4BJRBkLf0Xw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar louisremi/jquery.backgroundSize.js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/louisremi/jquery.backgroundSize.js/stargazers">
          237
        </a>
</form>
    <form accept-charset="UTF-8" action="/louisremi/jquery.backgroundSize.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="i4n7+vcsuMnrl6U1pR8sMao0Hyh+t70ZXnJddgY2+9uSZ4jTiSCn75h0/9FbQxxCT2EOBX5Dph0ZZRxUxfQHAA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star louisremi/jquery.backgroundSize.js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/louisremi/jquery.backgroundSize.js/stargazers">
          237
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/louisremi/jquery.backgroundSize.js/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of louisremi/jquery.backgroundSize.js to your account" aria-label="Fork your own copy of louisremi/jquery.backgroundSize.js to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/louisremi/jquery.backgroundSize.js/network" class="social-count">112</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/louisremi" class="url fn" itemprop="url" rel="author"><span itemprop="title">louisremi</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/louisremi/jquery.backgroundSize.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">jquery.backgroundSize.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/louisremi/jquery.backgroundSize.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/louisremi/jquery.backgroundSize.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /louisremi/jquery.backgroundSize.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/louisremi/jquery.backgroundSize.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /louisremi/jquery.backgroundSize.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/louisremi/jquery.backgroundSize.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /louisremi/jquery.backgroundSize.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/louisremi/jquery.backgroundSize.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /louisremi/jquery.backgroundSize.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/louisremi/jquery.backgroundSize.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /louisremi/jquery.backgroundSize.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/louisremi/jquery.backgroundSize.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /louisremi/jquery.backgroundSize.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/louisremi/jquery.backgroundSize.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:louisremi/jquery.backgroundSize.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/louisremi/jquery.backgroundSize.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save louisremi/jquery.backgroundSize.js to your computer and use it in GitHub Desktop." aria-label="Save louisremi/jquery.backgroundSize.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/louisremi/jquery.backgroundSize.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of louisremi/jquery.backgroundSize.js as a zip file"
                   title="Download the contents of louisremi/jquery.backgroundSize.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      DEPRECATED, please use its successor: background-size polyfill
    </div>

    <div class="repository-website">
      <p><a href="https://github.com/louisremi/background-size-polyfill" rel="nofollow">https://github.com/louisremi/background-size-polyfill</a></p>
    </div>


</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/louisremi/jquery.backgroundSize.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              9
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/louisremi/jquery.backgroundSize.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            2
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/louisremi/jquery.backgroundSize.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            0
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/louisremi/jquery.backgroundSize.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      1
    </span>
    contributor
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/louisremi/jquery.backgroundSize.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="tooltipped tooltipped-s" aria-label="Show language statistics">
    <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats"
     style="background-color:#f1e05a">
  <span class="language-color" style="width:100%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    </a>
  </div>

<include-fragment src="/louisremi/jquery.backgroundSize.js/show_partial?partial=recently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">
  <a href="/louisremi/jquery.backgroundSize.js/find/master"
        class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/louisremi/jquery.backgroundSize.js/compare" aria-label="Compare, review, create a pull request" class="minibutton primary tooltipped tooltipped-s left compare-button" aria-label="Compare &amp; review" data-pjax>
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/louisremi/jquery.backgroundSize.js/tree/gh-pages"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/louisremi/jquery.backgroundSize.js/tree/master"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->



  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/louisremi/jquery.backgroundSize.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.backgroundSize.js</span></a></span></span><span class="separator">/</span><form action="/louisremi/jquery.backgroundSize.js/new/master" aria-label="Fork this project and create a new file" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Fork this project and create a new file" class="js-new-blob-submit octicon octicon-plus" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>



  
  <div class="commit commit-tease js-details-container" >
      <a href="/louisremi/jquery.backgroundSize.js/commit/98b2559eb27a0c532ae3b64a2c457588884a2075" class="comment-count" anchor="comments" data-pjax>
        2 comments <span class='octicon octicon-comment'></span>
      </a>
    <p class="commit-title ">
        <a href="/louisremi/jquery.backgroundSize.js/commit/98b2559eb27a0c532ae3b64a2c457588884a2075" class="message" data-pjax="true" title="Mark plugin as deprecated">Mark plugin as deprecated</a>
        
    </p>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="98b2559eb27a0c532ae3b64a2c457588884a2075" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/louisremi/jquery.backgroundSize.js/commit/98b2559eb27a0c532ae3b64a2c457588884a2075" class="sha-block" data-pjax>latest commit <span class="sha">98b2559eb2</span></a>

      <div class="authorship">
        <img alt="Louis-Rémi Babé" class="avatar" data-user="39374" height="20" src="https://avatars1.githubusercontent.com/u/39374?v=2&amp;s=40" width="20" />
        <span class="author-name"><a href="/louisremi" rel="author">louisremi</a></span>
        authored <time class="updated" datetime="2012-12-04T23:57:52+01:00" is="relative-time">December 04, 2012</time>

      </div>
    </div>
  </div>

  
<div class="file-wrap">

  <table class="files" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/louisremi/jquery.backgroundSize.js/tree/master/demo" class="js-directory-link" id="fe01ce2a7fbac8fafaed7c982a04e229-443837e386c2b121185c0969ac0c5e406167bd3d" title="demo">demo</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/louisremi/jquery.backgroundSize.js/commit/312901ae6886bb8103e005ca949699778dbf258f" class="message" data-pjax="true" title="add a small condition to accomodate binpress">add a small condition to accomodate binpress</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2012-04-14T15:19:27Z" is="time-ago">Apr 14, 2012</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/louisremi/jquery.backgroundSize.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-5bc923952c2144d320d16a11765e0488c3cdd9f3" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/louisremi/jquery.backgroundSize.js/commit/98b2559eb27a0c532ae3b64a2c457588884a2075" class="message" data-pjax="true" title="Mark plugin as deprecated">Mark plugin as deprecated</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2012-12-04T22:57:52Z" is="time-ago">Dec 4, 2012</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/louisremi/jquery.backgroundSize.js/blob/master/jquery.backgroundSize.js" class="js-directory-link" id="6b20ae9e60b2e6f44ae8902378c7e0d2-741763292d1d65f650e9d73c91cbfc5a3ac9ea1c" title="jquery.backgroundSize.js">jquery.backgroundSize.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/louisremi/jquery.backgroundSize.js/commit/2c3265616294877e3a60bbd986e258fec3b683fb" class="message" data-pjax="true" title="Tune the backgroundImage hook to save some bytes">Tune the backgroundImage hook to save some bytes</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2012-06-03T14:30:58Z" is="time-ago">Jun 3, 2012</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-jquerybackgroundsizejs-deprecated" class="anchor" href="#jquerybackgroundsizejs-deprecated" aria-hidden="true"><span class="octicon octicon-link"></span></a>jquery.backgroundSize.js <strong>DEPRECATED</strong>
</h1>

<p><strong>This plugin has been deprecated</strong>, please use its <a href="https://github.com/louisremi/background-size-polyfill">background-size polyfill</a> successor.</p>

<p>A jQuery cssHook adding support for "cover" and "contain" to IE6-7-8, in 1.5K</p>

<h2>
<a id="user-content-introduction" class="anchor" href="#introduction" aria-hidden="true"><span class="octicon octicon-link"></span></a>Introduction</h2>

<p><a href="http://louisremi.github.com/jquery.backgroundSize.js/demo/">Demo</a></p>

<p><strong>Progressive Enhancement</strong> is the mantra I live by. It means <em>"Have fun with CSS3 and don't worry about IE6-7-8 users; they'll never notice they're missing out on your gorgeous text-shadows and gradients, anyway"</em>.</p>

<p>All was well until I discovered the elegance of <code>background-size: cover;</code> and <code>background-size: contain;</code>.
The first one, for instance, allows an image to completely cover a background, 
<strong>without</strong> having to send a 1920x1080 background image down the pipes.</p>

<p>Unfortunately, they don't degrade gracefully: websites would likely appear broken to IE6-7-8 users :-( 
...unless you use this cssHook!</p>

<h2>
<a id="user-content-how-does-it-work" class="anchor" href="#how-does-it-work" aria-hidden="true"><span class="octicon octicon-link"></span></a>How does it work?</h2>

<p>Set the <code>background-size</code> just like any other style property with jQuery:</p>

<div class="highlight highlight-javascript"><pre>$(elem).css( <span class="pl-s1"><span class="pl-pds">"</span>background-size<span class="pl-pds">"</span></span>, <span class="pl-s1"><span class="pl-pds">"</span>cover<span class="pl-pds">"</span></span> );</pre></div>

<p>In browsers that don't implement it natively, an <code>&lt;img/&gt;</code> will be inserted in the background of <code>elem</code> and emulate the <code>cover</code> or <code>contain</code> value.</p>

<h2>
<a id="user-content-limitations" class="anchor" href="#limitations" aria-hidden="true"><span class="octicon octicon-link"></span></a>Limitations</h2>

<p>Calculating the displayed position and size of the background-image of an element is quite complex and function of numerous parameters:  </p>

<ul class="task-list">
<li>the size of the element itself<br>
</li>
<li>the size of the image<br>
</li>
<li>the values of background-[size/position/clip/origin/attachment/scroll]</li>
</ul>

<p>It is thus impossible to emulate <code>background-size</code> completely and perfectly. But it's still possible to enjoy the main features:  </p>

<ul class="task-list">
<li>correct position and size of the background image<br>
</li>
<li>updated position and size on browser resize<br>
</li>
<li>updated image, position and size when the background-image is modified using <code>$(elem).css("background-image", "differentImage.jpg");</code>
</li>
</ul>

<p>The following style properties, values or behavior aren't supported:  </p>

<ul class="task-list">
<li>values other than <code>cover</code> or <code>contain</code> in <code>background-size</code><br>
</li>
<li>multiple backgrounds (although the :after trick can still be used)<br>
</li>
<li>4 values syntax of <code>background-position</code><br>
</li>
<li>lengths (px, em, etc.) in <code>background-position</code> (only percentages and keywords such as <code>center</code> work)<br>
</li>
<li>any <code>repeat</code> value in <code>background-repeat</code><br>
</li>
<li>non-default values of background-[clip/origin/attachment/scroll]<br>
</li>
<li>updated image size when the size of the element is modified</li>
</ul>

<p>Removing any of these limitations is probably just one fork away...</p>

<h2>
<a id="user-content-development-vs-production" class="anchor" href="#development-vs-production" aria-hidden="true"><span class="octicon octicon-link"></span></a>Development vs. Production</h2>

<p>The elements targeted by this plugin should be positionned (<code>position: relative/absolute/fixed;</code> but not <code>static</code>) and have a z-index. 
If not, they will be given a <code>position: relative;</code> and <code>z-index: 0;</code>.</p>

<p>In some cases this could potentially alter the layout of your page in IE6-7-8.
To help you spot problems earlier, you can use a flag that will turn ON emulation of <code>background-size</code> in all browsers:</p>

<div class="highlight highlight-html"><pre><span class="pl-c">&lt;!-- The flag should be inserted before loading the script --&gt;</span>
<span class="pl-s2">&lt;<span class="pl-ent">script</span>&gt;$.debugBGS <span class="pl-k">=</span> <span class="pl-c1">true</span>;&lt;/<span class="pl-ent">script</span>&gt;</span>
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s1"><span class="pl-pds">"</span>/path/to/jquery.backgroundSize.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>

<p>Switch to the following snippet before deploying your code to a production environment:</p>

<div class="highlight highlight-html"><pre><span class="pl-c">&lt;!--[if lt IE 9]&gt; &lt;script src="/path/to/jquery.backgroundSize.min.js"&gt;&lt;/script&gt; &lt;![endif]--&gt;</span></pre></div>

<h2>
<a id="user-content-refreshing-a-background" class="anchor" href="#refreshing-a-background" aria-hidden="true"><span class="octicon octicon-link"></span></a>Refreshing a background</h2>

<p>There are several cases that can cause an element to be resized and require its background to be refreshed
(e.g. modifying the size of its content or animating it).
This plugin includes a helper for that purpose: <code>$.refreshBackgroundDimensions( elem );</code>. Here's how to use it during an animation:</p>

<div class="highlight highlight-javascript"><pre>$(elem).animate({ height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">"</span>+=100<span class="pl-pds">"</span></span> }, {
    <span class="pl-en">step</span>: <span class="pl-st">function</span>() { $.refreshBackgroundDimensions( <span class="pl-v">this</span> ); }
});</pre></div>

<h2>
<a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><span class="octicon octicon-link"></span></a>License</h2>

<p>MIT Licensed <a href="http://louisremi.mit-license.org/">http://louisremi.mit-license.org/</a>, by <a href="http://twitter.com/louis_remi">@louis_remi</a></p>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05629s from github-fe135-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-153d6254b838872c8db73c8bd92905913f6f5b2164b7e40e5292286bd5a39403.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-341533e826e8eda6352720e2a6edded2591cc74f9a9a250fc1f9f2ded364ebee.js" type="text/javascript"></script>
      
      
  </body>
</html>

