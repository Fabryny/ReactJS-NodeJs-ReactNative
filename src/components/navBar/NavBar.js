
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
/* import {$, jQuery} from 'jquery'; */
const $ = require( "jquery" );
// ---------Responsive-navbar-active-animation-----------



function NavBar(){

 let current = window.location.pathname;  
    



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
        

       
            $('#navbarSupportedContent ul li a').each(function(){
                var $this = $(this);
                // if the current path is like this link, make it active
                if($this.attr('href') === current){
                    $this.parent().addClass('active');
                    $this.parents('.menu-submenu').addClass('show-dropdown');
                    $this.parents('.menu-submenu').parent().addClass('active');
                }else{
                    $this.parent().removeClass('active');
                }
            })
   
        
        
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
                    <Link className="nav-link " to="/"><i className="fas fa-tachometer-alt"></i>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favoritos"><i className="fas fa-tachometer-alt"></i>Meus filmes</Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
        
    )
}

export default NavBar