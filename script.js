// Get API

var main = {
    getDataFromAPI: function(keyword) {
        var url = encodeURI("https://gnews.io/api/v4/search?token=692f6a87642fc553d3e45194ecba4d4a&max=10&q=" + keyword)
        $.ajax({
            url: url,
            method: "GET",
            // Các hàm và sự kiện phục thuộc vào dữ liệu Ajax được trả về
            success: function(response) {
                //todo
                main.renderHTML(response);
                alert("API Không trả về")
            },
        });
    },
    // render response tra ve
    //  render là việc hiển thị nội dung lên trình duyệt
    renderHTML: function(response) {
        var boxContent = $("#boxContent");
        var html = "";
        for (var i = 0; i < response.articles.length; i++) {
            var item = response.articles[i];
            html +=
                `<div class="news-item">
            <div class="news-images">
                <a target="_blank" href="` +
                item.url +
                `">
                    <img src="` +
                item.image +
                `" />
                </a>
            </div>
            <div class="news-content">
                <h2>
                    <a target="_blank" href="` +
                item.url +
                `">
                        ` +
                item.title +
                `
                    </a>
                </h2>
                <p>` +
                item.publishedAt +
                `</p>
                <p>
                ` +
                item.description +
                `
                </p>
            </div>
        </div>`;
        }

        boxContent.html(html);
    },
    // Search
    // val() lấy giá trị hiện tại của thành phần, hoặc thay đổi giá trị cho thành phần. 
    search: function() {
        var keyword = $("#txtKeyword").val();
        main.getDataFromAPI(keyword);
    },
};
$(document).ready(function() {
    main.getDataFromAPI();
});