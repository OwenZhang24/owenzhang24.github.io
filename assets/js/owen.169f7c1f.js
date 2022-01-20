<script>
    var oBtn = document.getElementById("btn_svg_header");

    oBtn.onclick = function () {
        var menuClass = document.getElementById('show_menu').className;
        if(menuClass=='mobile-menu-wrapper'){
             oBtn.className ='mobile-menu-wrapper open';
        }else{
            oBtn.className ='mobile-menu-wrapper';
        }
    }
</script>