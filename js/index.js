
// 计算当前商品的小计值
function calculateSubTotal(item){
    var priceStr = item.find(".price").find(".priceSpan").text();
    var price = parseFloat(priceStr);

    var numStr = item.find(".quantityBox").find(".box").find("input").val();
    var num = parseInt(numStr);

    //计算商品的小计：价格*数量
    //toFixed(2)：保留2位小数
    var totalPrice = (price * num).toFixed(2);

    item.find(".totalPrice").find(".finalPrice").text(totalPrice);
}



//计算总计：全部商品小计的累加
function calculateTotal() {
    var total = 0;

    //对每个商品行的小计进行累加
    $(".checked").each(function() {
        var subTotalStr = $(this).find(".totalPrice").find(".finalPrice").text();
        total = total + parseFloat(subTotalStr);
    });

    $(".bottomBar").find(".finalDetial").find(".finalTotalPrice").text(total.toFixed(2));
}


//设置“-”的状态
//当“数量”文本框的值<=1时，数量不能减1（点击“-”无反应，并清除文本“-”)
function setMinusLinkState(row) {

    var minus = row.find(".minus");
    var numberStr = row.find(".numberInput").val();
    var number = parseInt(numberStr);
    
    if(number <=1) {
        minus.addClass("disableLink");
        minus.text("");
    }
    else {
        minus.removeClass("disableLink");
        minus.text("-");
    }
}


// 计算选中的商品数量
function calculateSelectedNum (){
    var num = $(".checked").length;
    $(".selectedNum")[0].innerText = num;
}

// 重新计算选中的商品数量
function calculateTotalGoods (){
    var num = $(".items").length;
    $(".allGoods>span")[0].innerText = num;
}

// 判断是否全选了
function judueSelected (){
    var itemsNum = $(".items").length;
    var selectedNum = $(".checked").length;
    var allcheckboxList = $(".allcheckbox");
    
    var state = (itemsNum == selectedNum && itemsNum != 0);
    allcheckboxList.each(function() {
        $(this).prop('checked',state);
    });
}

// 删除选中商品
function deleteSelected(){
    var selectedList = $(".checked");
    selectedList.each(function() {
        $(this).remove();
    });
}


// 搜索商品,根据商品名字搜索
function search(){
    // 获取输入的信息
    var info = $(".itxt").val();
    if(info == undefined || info.length == 0){
        alert("请输入搜索信息！");
        return
    }
    var itemsList = $(".items");
    itemsList.each(function() {
        let bookname = $(this).find(".bookName")[0].innerText;
        console.log(bookname);
        if(bookname.indexOf(info) > -1){
            $(this).addClass("hidden")
            $(this).removeClass("checked");
            // $(this).removeClass("items");

            console.log(info);
        }else{
            $(this).addClass("items")
            $(this).removeClass("hidden");
        }
    });

    
}
