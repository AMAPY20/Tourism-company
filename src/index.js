import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import "@laylazi/bootstrap-rtl-scss/scss/bootstrap-rtl.scss";
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all';
import "../src/sass/style.scss";
import "animate.css";

$(document).on("ready",function () {
    $("a.scroll").on('click', function (event) {

        var hash = this.hash;

        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function () { });
    
    });


    // التأكد من أن كلمة المرور هي نفسها في الحقلين
    let password = document.getElementById("password"),
        confirm_password = document.getElementById("confirm_password");
    /*بعد جلب المعرفين ووضعهما في متغيرين
    تعريف دالة ووضع بداخلة شرط انه اذا الكلمة الاولى لا تساوي الثانية وجلب قيمتيهم ،أظهر رسالة بعدم التطابق وذلك العكس عند التطابق
    */
    function validatePassword() {
        if (password.value != confirm_password.value) {
            // تعيين رسالة خطا واظهارها
            confirm_password.setCustomValidity("كلمات المرور غير متطابقة");
        } else {
            confirm_password.setCustomValidity("");
        }
    }
    // ارسال امر الى الحدث عند تغيير القيمة
    password.onchange = validatePassword;
    // تطبيق الشيفرة عند الضغط على مفتاح لوحة المفاتيح
    confirm_password.onkeyup = validatePassword;
});

$(function () {
    $("#icon").on("click", function () {
        $(".search-icon").toggleClass("active");
    });
});