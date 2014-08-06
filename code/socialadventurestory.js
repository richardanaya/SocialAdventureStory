var SocialAdventureStory = {};

SocialAdventureStory.parseBook = function(){
    var book = {};
    var root = $('book').get(0);
    book.title = $('title',root).html();
    book.author = $('author',root).html();
    book.pages = [];
    var pagesElement = $('pages',root).get(0);
    $('page',pagesElement).each(function(idx,pageElement){
        var page = {};
        page.name = $(pageElement).attr('name');
        page.text = $('text',pageElement).html();
        page.actions = [];
        $('action',pageElement).each(function(idx,actionElement){
            var action = {};
            action.page = $(actionElement).attr('page');
            action.text = $('text',actionElement).html();
            page.actions.push(action);
        });
        book.pages.push(page);
    });
    $('book').remove();
    return book;
};

SocialAdventureStory.createBook = function (book) {
    document.title = book.title;
    $('#bookTitle').html(book.title);
    for (var i in book.pages) {
        var page = book.pages[i];
        var name = page.name;
        if (name == 'COVER') {
            SocialAdventureStory.loadPage(book, page);
        }
    }
    for (var i in book.pages) {
        var page = book.pages[i];
        var name = page.name;
        if (name != 'COVER') {
            SocialAdventureStory.loadPage(book, page);
        }
    }

};

SocialAdventureStory.loadPage = function (book, page) {
    var name = page.name;
    var pageElement = $('<div data-role="page" id="page_' + name.toLowerCase() + '"><br><div data-role="content">' + SocialAdventureStory.getStats(page) + '<div>' + page.text + '</div><br><div class="pageActions"></div></div>' + SocialAdventureStory.getAuthor(book) + '</div>').get(0);
    for (var i in page.actions) {
        var action = page.actions[i];
        var actionElement = $('<a data-role="button" data-transition="slide" href="#page_' + action.page.toLowerCase() + '">' + action.text + '</a>').get(0);
        $('.pageActions', pageElement).append(actionElement);
    }
    $(document.body).append(pageElement);
};

SocialAdventureStory.getStats = function (page) {
    return '';
};

SocialAdventureStory.getAuthor = function (book) {
    return '<div data-role="content" class="pageAuthor"><center><h6>' + book.title + ' written by ' + book.author + '</h6></center>'
};