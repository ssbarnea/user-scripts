// Copyright 2018-2020 Sorin Sbarnea
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ==UserScript==
// @name        Gerrit 2 Facelift
// @description Makes outdated gerrit interface easier to use, especially for narrow screen size.
// @author      Sorin Sbarnea
// @icon        https://upload.wikimedia.org/wikipedia/commons/4/4d/Gerrit_icon.svg
// @version     7
// @grant       GM_addStyle
// @run-at      document-idle
// @include     https://review.opendev.org/*
// @include     https://review.rdoproject.org/*
// @include     https://code.engineering.redhat.com/*
// @downloadURL https://github.com/ssbarnea/user-scripts/raw/master/src/gerrit2-facelift.user.js
// @homepageURL https://github.com/ssbarnea/user-scripts
// @updateURL https://github.com/ssbarnea/user-scripts/raw/master/src/gerrit2-facelift.user.js
// ==/UserScript==


function GM_addStyle (cssStr) {
    var D               = document;
    var newNode         = D.createElement ('style');
    newNode.textContent = cssStr;

    var targ    = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    //targ.prepend(newNode);
    targ.appendChild (newNode);
};


// Hides branding logo to better fix the menu which can be much
// longer if user adds his own menu items, avoids getting the search
// box out of screen.
GM_addStyle(`

#openstack-logo {
    width: 100px;
}

#gerrit_header {
    z-index: -1;
    width: 100px;
}

#openstack-logo img {
	width: 40px;
	height: auto;
	max-width: none;
}

#gerrit_topmenu {	left: 42px; }

a {
    color: blue !important;
}

a:visited {
    color: purple !important;
}

/* pre-wrap is needed in order to avoid horizontal-scrolling issues with
long console/log lines or task output (like tox display of installed packages). */
pre {
    white-space: pre-wrap;
}

.changeTable {
  /* avoids horizontal scroll on table */
  word-break: break-all;
}

.cOWNER {
  max-width: 8ch;
	overflow: hidden;
}

.cLastUpdate {
	max-width: 6ch;
  overflow: hidden;
}

.cSTATUS {
	max-width: 8ch;
  overflow: hidden;
}


.changeTable .cSIZE {
  max-width: 20px;
}


/* id */
.changeTable tbody tr td:nth-child(3) {
	width: 6ch;
}


/* project */
.changeTable tbody tr td:nth-child(7) {
	max-width: 16ch;
  white-space: nowrap;
	overflow: hidden;
	direction: rtl;
  text-align: left;
	text-overflow: ellipsis;
}



/* branch/topic */
.changeTable tbody tr td:nth-child(8) {
	max-width: 6ch;
  white-space: nowrap;
	overflow: hidden;
}

/* votes */
.changeTable tbody tr td:nth-child(11),
.changeTable tbody tr td:nth-child(12),
.changeTable tbody tr td:nth-child(13) {
	max-width: 4ch;
	overflow: hidden;
}

`);
