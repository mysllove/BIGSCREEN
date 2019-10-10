(function() {
    let tabs = document.getElementsByClassName('tabs');
    let contents = document.getElementsByClassName('tabs-content');
    let lens = tabs.length;

    if (lens >= 1) {
        let i;
        for (i = 0; i <= lens - 1; i++) {
            let tab = tabs[i];
            let content = contents[i];
            bindClick(tab, content);
            initTab(tab, content);
        }
    }

    function bindClick(tab, content) {
        tab.addEventListener('click', function(e) {
            let event = e || window.event;
            let target = event.target || event.srcElement;
            if (target.nodeName.toLocaleLowerCase() == 'li') {
                tabToggle(target, tab, content);
            }
        })
    }

    function tabToggle(target, tab, content) {
        let index, i;
        let tabsList = tab.children;
        let contentsList = content.children;

        for (i = 0; i <= tabsList.length - 1; i++) {
            if (target === tabsList[i]) {
                index = i;
            }
            let menu = tabsList[i];
            let panel = contentsList[i];
            menu.className = menu.className.replace(' active', '');
            panel.className = panel.className.replace(' active', '');
        }

        tabsList[index].className += ' active';
        contentsList[index].className += ' active';
    }

    function initTab(tab, content) {
        let tabsList = tab.children;
        let contentsList = content.children;

        tabsList[0].className += ' active';
        contentsList[0].className += ' active';
    }
})()