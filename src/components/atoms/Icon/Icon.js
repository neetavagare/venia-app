import React from 'react';

// Reusable Icons

export default function Icon(props) {
    var labelName = props.name

    return (

        <span>
            {labelName === 'Search' &&
                <span className='searchI'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26.414 26.414" >
                        <g id="search" transform="translate(-2 -2)">
                            <circle id="Ellipse_153" data-name="Ellipse 153" cx="11" cy="11" r="11" transform="translate(3 3)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_547" data-name="Line 547" x1="4.35" y1="4.35" transform="translate(22.65 22.65)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>

            }

            {labelName === 'User' &&
                <span className='user'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23.333 24">
                        <g id="user" transform="translate(-3 -2)">
                            <path id="Path_38138" data-name="Path 38138" d="M25.333,23V20.333A5.333,5.333,0,0,0,20,15H9.333A5.333,5.333,0,0,0,4,20.333V23" transform="translate(0 2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <circle id="Ellipse_176" data-name="Ellipse 176" cx="5" cy="5" r="5" transform="translate(9.333 3)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>

            }
            {labelName === 'ShopBag' &&
                <span className='shoppingbag'>
                    {/* <h1>{count}</h1> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 22">
                        <g id="shopping-bag" transform="translate(-2 -1)">
                            <path id="Path_38093" data-name="Path 38093" d="M6,2,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_555" data-name="Line 555" x2="18" transform="translate(3 6)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_38094" data-name="Path 38094" d="M16,10a4,4,0,0,1-8,0" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'minus' &&
                <span className='circle'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                        <g id="minus-circle" transform="translate(-1 -1)">
                            <circle id="Ellipse_134" data-name="Ellipse 134" cx="10" cy="10" r="10" transform="translate(2 2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_520" data-name="Line 520" x2="8" transform="translate(8 12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'plus' &&
                <span className='circle'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                        <g id="plus-circle" transform="translate(-1 -1)">
                            <circle id="Ellipse_148" data-name="Ellipse 148" cx="10" cy="10" r="10" transform="translate(2 2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_537" data-name="Line 537" y2="8" transform="translate(12 8)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_538" data-name="Line 538" x2="8" transform="translate(8 12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'Edit2' &&
                <span className='edit2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.061" height="21.828" viewBox="0 0 22.061 21.828">
                        <path id="edit-2" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </span>
            }
            {labelName === 'trash2' &&
                <span className='edit2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                        <g id="trash-2" transform="translate(-2 -1)">
                            <path id="Path_38115" data-name="Path 38115" d="M3,6H21" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_38116" data-name="Path 38116" d="M19,6V20a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_599" data-name="Line 599" y2="6" transform="translate(10 11)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_600" data-name="Line 600" y2="6" transform="translate(14 11)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'hurt' &&
                <span className='edit2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.903" height="20.232" viewBox="0 0 22.903 20.232">
                        <path id="heart" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z" transform="translate(-0.549 -1.998)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </span>
            }
            {labelName === 'downarrow' &&
                <span className='downarrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.828" height="8.414" viewBox="0 0 14.828 8.414">
                        <path id="chevron-down" d="M6,9l6,6,6-6" transform="translate(-4.586 -7.586)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </span>
            }
            {labelName === 'insta' &&
                <span className='ficon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                        <g id="instagram" transform="translate(1 1)">
                            <rect id="Rectangle_1587" data-name="Rectangle 1587" width="20" height="20" rx="5" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_38012" data-name="Path 38012" d="M16,11.37A4,4,0,1,1,12.63,8,4,4,0,0,1,16,11.37Z" transform="translate(-2 -2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_475" data-name="Line 475" x2="0.01" transform="translate(15.5 4.5)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'facebook' &&
                <span className='ficon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22">
                        <path id="facebook" d="M18,2H15a5,5,0,0,0-5,5v3H7v4h3v8h4V14h3l1-4H14V7a1,1,0,0,1,1-1h3Z" transform="translate(-6 -1)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </span>
            }
            {labelName === 'twitter' &&
                <span className='ficon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20.142" viewBox="0 0 24 20.142">
                        <path id="twitter" d="M23,3a10.9,10.9,0,0,1-3.14,1.53,4.48,4.48,0,0,0-7.86,3v1A10.66,10.66,0,0,1,3,4s-4,9,5,13a11.64,11.64,0,0,1-7,2c9,5,20,0,20-11.5a4.5,4.5,0,0,0-.08-.83A7.72,7.72,0,0,0,23,3Z" transform="translate(0 -1.912)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </span>
            }
            {labelName === 'lock' &&
                <span className='lock'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 20 22">
                        <g id="lock" transform="translate(-2 -1)">
                            <rect id="Rectangle_1590" data-name="Rectangle 1590" width="18" height="11" rx="2" transform="translate(3 11)" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_38020" data-name="Path 38020" d="M7,11V7A5,5,0,1,1,17,7v4" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'square' &&
                <spna className='square'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className='square'>
                        <rect id="square" width="18" height="18" rx="2" transform="translate(1 1)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </spna>
            }
            {labelName === 'alignjustify' &&
                <span className='alignjustify'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14">
                        <g id="align-justify" transform="translate(-2 -5)">
                            <line id="Line_347" data-name="Line 347" x1="18" transform="translate(3 10)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_348" data-name="Line 348" x1="18" transform="translate(3 6)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_349" data-name="Line 349" x1="18" transform="translate(3 14)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_350" data-name="Line 350" x1="18" transform="translate(3 18)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'star' &&
                <span className='star'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21.02" viewBox="0 0 22 21.02">
                        <path id="star" d="M12,2l3.09,6.26L22,9.27l-5,4.87,1.18,6.88L12,17.77,5.82,21.02,7,14.14,2,9.27,8.91,8.26Z" transform="translate(-1 -1)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </span>
            }
            {labelName === 'share-2' &&
                <span className='share-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                        <g id="share-2" transform="translate(-2 -1)">
                            <circle id="Ellipse_155" data-name="Ellipse 155" cx="3" cy="3" r="3" transform="translate(15 2)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <circle id="Ellipse_156" data-name="Ellipse 156" cx="3" cy="3" r="3" transform="translate(3 9)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <circle id="Ellipse_157" data-name="Ellipse 157" cx="3" cy="3" r="3" transform="translate(15 16)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_551" data-name="Line 551" x2="6.83" y2="3.98" transform="translate(8.59 13.51)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_552" data-name="Line 552" x1="6.82" y2="3.98" transform="translate(8.59 6.51)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'menu' &&
                <span className='menu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14">
                        <g id="menu" transform="translate(-2 -5)">
                            <line id="Line_510" data-name="Line 510" x2="18" transform="translate(3 12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_511" data-name="Line 511" x2="18" transform="translate(3 6)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_512" data-name="Line 512" x2="18" transform="translate(3 18)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'slider' &&
                <span className='slider'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <g id="sliders" transform="translate(0 -2)">
                            <line id="Line_563" data-name="Line 563" y1="6" transform="translate(3 13)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_564" data-name="Line 564" y1="6" transform="translate(3 3)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_565" data-name="Line 565" y1="8" transform="translate(9 11)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_566" data-name="Line 566" y1="4" transform="translate(9 3)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_567" data-name="Line 567" y1="4" transform="translate(15 15)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_568" data-name="Line 568" y1="8" transform="translate(15 3)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_569" data-name="Line 569" x2="4" transform="translate(1 12.778)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_570" data-name="Line 570" x2="4" transform="translate(7 7.444)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line id="Line_571" data-name="Line 571" x2="4" transform="translate(13 14.556)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName === 'uparrow' &&
                <span className='uparrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10.802" height="15.287" viewBox="0 0 10.802 15.287">
                        <g id="arrow-up" transform="translate(1.8 1)">
                            <path id="Path_38196" data-name="Path 38196" d="M0,13V0" transform="translate(3.601 0.287)" fill="none" stroke="#172026" stroke-linecap="round" stroke-width="2" />
                            <path id="Path_37884" data-name="Path 37884" d="M5,10.287,9,5l4,5.287" transform="translate(-5.399 -5)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
            {labelName ==='down-arrow' &&
                <span className='down-arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10.802" height="15.287" viewBox="0 0 10.802 15.287">
                        <g id="arrow-down" transform="translate(1.401)">
                            <path id="Path_38195" data-name="Path 38195" d="M0,1V14" transform="translate(4)" fill="none" stroke="#172026" stroke-linecap="round" stroke-width="2" />
                            <path id="Path_37884" data-name="Path 37884" d="M5,5l4,5.287L13,5" transform="translate(-5 4)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </span>
            }
        </span>
    );
}