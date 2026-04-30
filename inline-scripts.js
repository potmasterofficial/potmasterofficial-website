/* =============================================
   PotMaster 煲仔宗师 — Inline Scripts
   用于百度推送、QR模态框等关键功能
   ============================================= */

// ── 百度自动推送 (HTTPS only) ──────────────────────
(function(){
    var bp = document.createElement('script');
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bp, s);
})();

// ── QR Code Modal Functions ───────────────────────
function showQRCode() {
    var titleEl = document.getElementById('qrTitle');
    var imageEl = document.getElementById('qrImage');
    var modal = document.getElementById('qrModal');
    if (titleEl) titleEl.textContent = '煲仔宗师官方账号';
    if (imageEl) imageEl.src = 'dishes/xiaohongshu-qr.jpg';
    if (modal) modal.style.display = 'flex';
}

function showWechatQR() {
    var titleEl = document.getElementById('qrTitle');
    var imageEl = document.getElementById('qrImage');
    var modal = document.getElementById('qrModal');
    if (titleEl) titleEl.textContent = '煲仔宗师 PotMaster';
    if (imageEl) imageEl.src = 'dishes/wechat-qr.jpg';
    if (modal) modal.style.display = 'flex';
}

function closeQRCode() {
    var modal = document.getElementById('qrModal');
    if (modal) modal.style.display = 'none';
}

// 点击模态框外部关闭
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('qrModal');
    var closeBtn = document.getElementById('closeQRCode');
    
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) modal.style.display = 'none';
        });
    }
});
