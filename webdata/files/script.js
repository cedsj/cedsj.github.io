// 修复后的代码复制功能
function copyCode(button) {
    // 保存原始按钮文本和样式
    const originalText = button.textContent;
    const originalColor = button.style.color;
    
    try {
        // 查找代码块元素
        const codeContainer = button.closest('.code-container');
        if (!codeContainer) {
            throw new Error('未找到代码容器');
        }
        
        const codeBlock = codeContainer.querySelector('.code-block');
        if (!codeBlock) {
            throw new Error('未找到代码块');
        }
        
        // 获取代码内容
        const codeContent = codeBlock.textContent;
        
        // 执行复制操作
        navigator.clipboard.writeText(codeContent).then(() => {
            // 复制成功反馈
            button.textContent = '已复制';
            button.style.color = '#27ae60'; // 成功绿色
            
            // 2秒后恢复原状
            setTimeout(() => {
                button.textContent = originalText;
                button.style.color = originalColor;
            }, 2000);
        }).catch(err => {
            console.error('剪贴板API失败:', err);
            // 降级方案: 使用textarea模拟复制
            fallbackCopyText(codeContent, button, originalText, originalColor);
        });
    } catch (err) {
        console.error('复制功能出错:', err);
        // 显示错误信息
        button.textContent = '复制失败';
        button.style.color = '#e74c3c'; // 错误红色
        
        // 2秒后恢复原状
        setTimeout(() => {
            button.textContent = originalText;
            button.style.color = originalColor;
        }, 2000);
    }
}

// 复制功能降级方案
function fallbackCopyText(text, button, originalText, originalColor) {
    try {
        // 创建临时textarea元素
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed'; // 确保不在视口中
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        // 复制成功反馈
        button.textContent = '已复制';
        button.style.color = '#27ae60';
        
        // 5秒后恢复原状
        setTimeout(() => {
            button.textContent = originalText;
            button.style.color = originalColor;
        }, 5000);
    } catch (err) {
        console.error('降级复制方案失败:', err);
        button.textContent = '复制失败';
        button.style.color = '#e74c3c';
        
        // 2秒后恢复原状
        setTimeout(() => {
            button.textContent = originalText;
            button.style.color = originalColor;
        }, 2000);
    }
}

// 导航栏滚动效果
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#fff";
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.background = "#fff";
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
});

// 汉堡菜单切换
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function() {
    this.classList.toggle("open");
    navLinks.classList.toggle("active");
});

// 点击导航链接关闭菜单
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("active");
    });
});

// 平滑滚动
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

// 切换侧边栏显示/隐藏
const toggleSidebarBtn = document.getElementById('toggleSidebar');
const contentWrapper = document.getElementById('contentWrapper');
const sidebarTooltip = toggleSidebarBtn.querySelector('.tooltip');

toggleSidebarBtn.addEventListener('click', function() {
    contentWrapper.classList.toggle('sidebar-hidden');
    
    // 更新工具提示文本
    if (contentWrapper.classList.contains('sidebar-hidden')) {
        sidebarTooltip.textContent = '显示边栏';
    } else {
        sidebarTooltip.textContent = '隐藏边栏';
    }
});

// 客服按钮点击事件
document.getElementById('customerService').addEventListener('click', function(e) {
    e.preventDefault();
    alert('联系我们\n邮箱：ceworld@yeah.net\n微信号：vivian821018');
});

// 返回顶部功能
const backToTopBtn = document.getElementById('backToTop');

// 监听滚动事件
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 返回顶部点击事件
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});