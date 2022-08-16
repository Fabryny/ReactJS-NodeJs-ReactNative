
import { useEffect } from 'react';
import './NavBar.css'
/* import {$, jQuery} from 'jquery'; */
const $ = require( "jquery" );
// ---------Responsive-navbar-active-animation-----------








// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });


function NavBar(){



    



    useEffect( ()  => {
        function test(){
            var tabsNewAnim = $('#navbarSupportedContent');
            var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
            var activeItemNewAnim = tabsNewAnim.find('.active');
            var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
            var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
            var itemPosNewAnimTop = activeItemNewAnim.position();
            var itemPosNewAnimLeft = activeItemNewAnim.position();
            $(".hori-selector").css({
                "top":itemPosNewAnimTop.top + "px", 
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
            $("#navbarSupportedContent").on("click","li",function(e){
                $('#navbarSupportedContent ul li').removeClass("active");
                $(this).addClass('active');
                var activeWidthNewAnimHeight = $(this).innerHeight();
                var activeWidthNewAnimWidth = $(this).innerWidth();
                var itemPosNewAnimTop = $(this).position();
                var itemPosNewAnimLeft = $(this).position();
                $(".hori-selector").css({
                    "top":itemPosNewAnimTop.top + "px", 
                    "left":itemPosNewAnimLeft.left + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            });
        }
        $(document).ready(function(){
            setTimeout(function(){ test(); });
        });
        $(window).on('resize', function(){
            setTimeout(function(){ test(); }, 500);
        });
        $(".navbar-toggler").click(function(){
            $(".navbar-collapse").slideToggle(300);
            setTimeout(function(){ test(); });
        });
        
        
        
        // --------------add active class-on another-page move----------
        $(document).ready(function($){ /* era jQuery no lugar do $ do inicio */
            // Get current path and find target link
            var path = window.location.pathname.split("/").pop();
        
            // Account for home page with empty path
            if ( path == '' ) {
                path = 'index.html';
            }
        
            var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
            // Add active class to target link
            target.parent().addClass('active');
        });
        
        
        
    },[])








    return ( 
    <>
        <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fas fa-tachometer-alt"></i>Dashboard</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#"><i className="far fa-address-book"></i>Address Book</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="far fa-clone"></i>Components</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="far fa-calendar-alt"></i>Calendar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/a"><i className="far fa-chart-bar"></i>Charts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="far fa-copy"></i>Documents</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
        
    )
}

export default NavBar