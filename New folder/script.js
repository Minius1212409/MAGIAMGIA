<script>
    let discountCode = ''; // Biến để lưu mã giảm giá
    let timeoutId; // Biến lưu timeout cho 15 phút

    // Hàm hiển thị mã giảm giá mới
    function showDiscountCode() {
        discountCode 'Chưa có'; // Mã giảm giá bạn muốn hiển thị
        document.getElementById('code').innerText = `Mã code: ${discountCode}`;
        // Sau 15 phút sẽ quay lại trạng thái ban đầu
        timeoutId = setTimeout(resetDiscountCode, 15 * 60 * 1000); // 15 phút = 900.000ms
    }

    // Hàm reset lại mã giảm giá về trạng thái ban đầu
    function resetDiscountCode() {
        discountCode = ''; // Xóa mã giảm giá
        document.getElementById('code').innerText = 'Mã code: Hiện chưa có. (Tuy nhiên mã sẽ xuất hiện bất ngờ ở bất cứ thời gian nào và sẽ mất sau 15 phút xuất hiện.)';
    }

    // Xử lý sự kiện khi bấm nút "Reset"
    document.getElementById('resetBtn').addEventListener('click', function() {
        clearTimeout(timeoutId); // Xóa bỏ timeout cũ nếu có (nếu đã reset mà mã cũ chưa hết hạn)
        resetDiscountCode(); // Đặt về trạng thái ban đầu (xóa mã hiện tại)
        showDiscountCode(); // Hiển thị mã mới (hiển thị lại mã 0194029140)
    });
</script>
