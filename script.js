document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-intro").addEventListener("click", function() {
        alert("Hello! I'm Yashkumar Rokade, the About Me section is currently under development. Check back soon for more information about my journey and work!.");
    });

    document.querySelector(".business").addEventListener("click", function() {
        window.open("https://www.instagram.com/ioversized/");
    });

    document.querySelector(".insta").addEventListener("click", function() {
        window.open("https://www.instagram.com/yash_ui_figma/");
    });

    document.querySelector(".download").addEventListener("click", function() {
        window.open("https://drive.google.com/drive/folders/1C2wPu5xBqLXqoHfW1V0CfKBSqM7mOJme");
    });

    document.querySelector(".email-btn").addEventListener("click", function() {
        window.location.href = "mailto:rokadeyashkumar@gmail.com";
    });
    document.querySelector(".instagram").addEventListener("click", function() {
        window.open("https://www.instagram.com/rokadeyashkumar/?hl=en");
    });
    document.querySelector(".twitter").addEventListener("click", function() {
        window.open("https://x.com/YashkumarRokade/");
    });
    document.querySelector(".linkedin").addEventListener("click", function() {
        window.open("https://www.linkedin.com/in/yashkumar-rokade-004478225/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in");
    });
});
