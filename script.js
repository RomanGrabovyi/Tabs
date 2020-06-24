window.addEventListener('DOMContentLoaded', function() {

    const tabs = document.querySelectorAll('.tabs-item'),
          tabContent = document.querySelectorAll('.tabs-content'),
          tabParent = document.querySelector('.tab-items');

    function hideTabsContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    hideTabsContent();

    function showTabsContent(i = 0) {
        tabContent[i].classList.add('show');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('active');
    }

    showTabsContent();

    tabParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('tabs-item')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
});