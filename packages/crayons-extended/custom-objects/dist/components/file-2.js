import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as handleKeyDown } from './index2.js';
import { T as TranslationController } from './Translation2.js';
import { K as KB_TO_BYTE } from './index3.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './popover.js';
import { d as defineCustomElement$2 } from './spinner.js';
import { d as defineCustomElement$1 } from './tooltip.js';

const fileDragSVG = `
  <svg
    width='124'
    height='80'
    viewBox='0 0 124 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_12_6038)'>
      <path
        d='M70.4518 53.4547C46.6447 55.596 24.2534 55.4552 3.01624 53.4547C2.74717 53.4547 2.48073 53.4015 2.23214 53.298C1.98355 53.1945 1.75767 53.0429 1.56741 52.8517C1.37715 52.6604 1.22622 52.4334 1.12325 52.1836C1.02028 51.9338 0.967285 51.666 0.967285 51.3956V3.99145C0.967285 3.44534 1.18316 2.9216 1.56741 2.53544C1.95166 2.14928 2.47282 1.93234 3.01624 1.93234C25.4523 -0.0305071 48.0157 -0.0305071 70.4518 1.93234C70.7209 1.93234 70.9873 1.9856 71.2359 2.08908C71.4845 2.19256 71.7104 2.34424 71.9006 2.53544C72.0909 2.72665 72.2418 2.95364 72.3448 3.20347C72.4478 3.45329 72.5007 3.72105 72.5007 3.99145V51.3956C72.5007 51.9417 72.2849 52.4655 71.9006 52.8517C71.5164 53.2378 70.9952 53.4547 70.4518 53.4547Z'
        fill='white'
      />
      <path
        d='M70.4518 53.4547C46.6447 55.596 24.2534 55.4552 3.01624 53.4547C2.74717 53.4547 2.48073 53.4015 2.23214 53.298C1.98355 53.1945 1.75767 53.0429 1.56741 52.8516C1.37715 52.6604 1.22622 52.4334 1.12325 52.1836C1.02028 51.9338 0.967285 51.666 0.967285 51.3956V3.99145C0.967285 3.44534 1.18316 2.9216 1.56741 2.53544C1.95166 2.14928 2.47282 1.93234 3.01624 1.93234C25.4523 -0.0305071 48.0157 -0.0305071 70.4518 1.93234C70.7209 1.93234 70.9873 1.9856 71.2359 2.08908C71.4845 2.19256 71.7104 2.34424 71.9006 2.53544C72.0909 2.72665 72.2418 2.95364 72.3448 3.20347C72.4478 3.45329 72.5007 3.72105 72.5007 3.99145V51.3956C72.5007 51.9417 72.2849 52.4655 71.9006 52.8516C71.5164 53.2378 70.9952 53.4547 70.4518 53.4547V53.4547Z'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-dasharray='1.88 1.88'
      />
      <path
        d='M67.0595 6.59031C47.0075 4.78077 26.8344 4.78077 6.7824 6.59031C6.40629 6.59031 6.04558 6.74046 5.77962 7.00774C5.51367 7.27501 5.36426 7.63751 5.36426 8.01549V48.0167C5.36426 48.3947 5.51367 48.7572 5.77962 49.0245C6.04558 49.2918 6.40629 49.4419 6.7824 49.4419C26.8447 51.1019 47.0089 51.1019 67.0712 49.4419C67.4473 49.4419 67.808 49.2918 68.0739 49.0245C68.3399 48.7572 68.4893 48.3947 68.4893 48.0167V8.01549C68.4893 7.82734 68.4522 7.64105 68.3802 7.46737C68.3083 7.29369 68.2027 7.13606 68.0698 7.00356C67.9369 6.87107 67.7792 6.76634 67.6058 6.69541C67.4324 6.62448 67.2467 6.58876 67.0595 6.59031Z'
        fill='#EBEFF3'
      />
      <path
        d='M66.3682 22.3049C84.9623 25.567 103.23 30.4865 120.956 37.0052C121.699 37.2793 122.313 37.8229 122.677 38.529C123.041 39.2351 123.129 40.0525 122.923 40.8205L113.859 74.8182'
        fill='white'
      />
      <path
        d='M66.3682 22.3049C84.9623 25.567 103.23 30.4865 120.956 37.0052C121.699 37.2793 122.313 37.8229 122.677 38.529C123.041 39.2351 123.129 40.0525 122.923 40.8205L113.859 74.8182'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M109.728 77.03C91.374 73.5823 73.3138 68.7091 55.7098 62.4542C54.956 62.188 54.3299 61.6458 53.9565 60.9359C53.5832 60.2259 53.4901 59.4006 53.6959 58.6247L62.1394 26.9539'
        fill='white'
      />
      <path
        d='M109.728 77.03C91.374 73.5823 73.3138 68.7091 55.7098 62.4542C54.956 62.188 54.3299 61.6458 53.9565 60.9359C53.5832 60.2259 53.4901 59.4006 53.6959 58.6247L62.1394 26.9539'
        stroke='#767477'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M79.9347 47.4746C79.4214 49.3754 79.5681 51.3953 80.3506 53.2011L75.3812 55.6453C74.2783 53.2121 73.8777 50.5165 74.2251 47.8657C74.5726 45.2148 75.6541 42.7154 77.3464 40.6522C79.0387 38.5891 81.2737 37.0452 83.7967 36.1966C86.3197 35.348 89.0292 35.2287 91.6163 35.8525L90.1841 41.2245C88.0034 40.7372 85.7197 41.1154 83.8099 42.28C81.9 43.4447 80.5116 45.3057 79.9347 47.4746Z'
        fill='#85BEFF'
      />
      <path
        d='M100.322 57.3452C99.3041 58.9425 97.981 60.3207 96.4292 61.4L93.392 56.8028C94.6954 55.8554 95.7111 54.5625 96.3257 53.0686C96.9404 51.5748 97.1299 49.9386 96.873 48.3428C96.6162 46.7469 95.9231 45.2543 94.8711 44.0313C93.8191 42.8083 92.4496 41.9032 90.9155 41.417L92.3477 36.0474C93.5949 36.4209 94.7863 36.9619 95.8896 37.6557C96.1232 37.813 96.3685 37.9773 96.6091 38.1511C98.231 39.3423 99.588 40.8601 100.594 42.6077C101.599 44.3553 102.231 46.2943 102.45 48.3011C102.478 48.5969 102.504 48.8834 102.511 49.1745C102.63 52.0574 101.87 54.9082 100.333 57.3452H100.322Z'
        fill='#1479EB'
      />
      <path
        d='M93.6956 62.9236C93.2251 63.1198 92.7447 63.2914 92.2565 63.4378L92.0742 63.4824C91.7355 63.5693 91.385 63.6632 91.0322 63.7383C90.7706 63.7923 90.5042 63.8299 90.2472 63.8698L89.7963 63.9262C89.7375 63.9302 89.679 63.9381 89.6211 63.9496C89.5792 63.9449 89.5369 63.9449 89.4949 63.9496C89.2894 63.9731 89.0861 63.9802 88.8828 63.9872C88.8828 63.9872 88.8828 63.9872 88.8641 63.9872C88.844 63.9837 88.8235 63.9837 88.8034 63.9872C88.6001 63.9872 88.3829 63.9872 88.1796 63.999H88.1656C87.932 63.999 87.6983 63.999 87.4647 63.9778C86.9974 63.9496 86.5138 63.891 86.0349 63.8252C85.5559 63.7595 85.1003 63.6421 84.6331 63.5153C84.1658 63.3885 83.6985 63.2406 83.25 63.0715C83.028 62.9729 82.7967 62.8884 82.5888 62.7945C82.3808 62.7006 82.1612 62.5996 81.958 62.4916H81.937C81.7711 62.4165 81.6099 62.3202 81.4557 62.231C81.3015 62.1418 81.0982 62.0338 80.9347 61.9258C80.8062 61.859 80.6842 61.7804 80.5702 61.691C80.517 61.6628 80.4655 61.6314 80.416 61.5971C80.2318 61.4807 80.054 61.3545 79.8833 61.219C79.7385 61.1181 79.5936 61.0007 79.4534 60.8856C79.3237 60.7888 79.1989 60.6853 79.0796 60.5757C78.9324 60.4583 78.7899 60.3268 78.6474 60.193C78.5049 60.0592 78.3203 59.8807 78.1685 59.7234C77.4896 59.0312 76.8858 58.2686 76.3672 57.4483C76.2903 57.3403 76.2193 57.2283 76.1546 57.1126L75.9209 56.7064C75.8555 56.5702 75.7807 56.4434 75.7153 56.3166L80.6824 53.8818C81.2401 54.9184 82.0012 55.8307 82.9195 56.5636C83.8378 57.2964 84.8943 57.8347 86.0254 58.1458C87.1564 58.457 88.3384 58.5346 89.5001 58.3739C90.6618 58.2133 91.7791 57.8177 92.7845 57.2112L95.8077 61.8131C95.1365 62.2431 94.4299 62.6147 93.6956 62.9236Z'
        fill='#EB8321'
      />
      <path
        d='M106.253 79.4622C87.7371 75.9806 69.5146 71.0731 51.7471 64.7831C50.9925 64.5179 50.3655 63.9759 49.9916 63.2658C49.6178 62.5557 49.5246 61.7299 49.7309 60.9537L58.7958 26.9561C59.0031 26.1873 59.4893 25.5245 60.1588 25.0982C60.8282 24.6718 61.6322 24.5129 62.4124 24.6528C81.0065 27.9152 99.2747 32.8347 117.001 39.353C117.745 39.6263 118.361 40.1697 118.726 40.8762C119.092 41.5827 119.182 42.4012 118.977 43.1707L109.912 77.166C109.702 77.9414 109.209 78.6087 108.53 79.0343C107.852 79.46 107.039 79.6129 106.253 79.4622Z'
        fill='white'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M74.1198 69.8194L74.4679 68.1759C74.5324 67.9122 74.4899 67.6335 74.3499 67.4013C74.2099 67.169 73.9839 67.0021 73.7215 66.9374C73.459 66.8726 73.1818 66.9152 72.9507 67.0559C72.7195 67.1966 72.5535 67.4238 72.4891 67.6875L72.6596 66.8775C72.6991 66.7218 72.7069 66.5597 72.6826 66.4008C72.6582 66.242 72.6022 66.0898 72.5178 65.9533C72.4334 65.8168 72.3225 65.6988 72.1916 65.6065C72.0608 65.5142 71.9127 65.4493 71.7563 65.4159C71.5999 65.3825 71.4384 65.3812 71.2814 65.4121C71.1245 65.443 70.9754 65.5055 70.8431 65.5957C70.7108 65.6859 70.598 65.8021 70.5115 65.9372C70.425 66.0724 70.3665 66.2237 70.3396 66.3821L70.1901 67.0865C70.2296 66.9307 70.2375 66.7686 70.2131 66.6098C70.1887 66.451 70.1327 66.2988 70.0483 66.1623C69.9639 66.0258 69.853 65.9078 69.7221 65.8155C69.5913 65.7231 69.4432 65.6583 69.2868 65.6249C69.1304 65.5915 68.9689 65.5902 68.8119 65.6211C68.655 65.652 68.5059 65.7144 68.3736 65.8047C68.2413 65.8949 68.1285 66.0111 68.042 66.1462C67.9555 66.2813 67.897 66.4326 67.8701 66.591L67.5828 67.9458L65.2815 69.1878L64.6227 72.3152C64.5239 72.781 64.5174 73.2617 64.6036 73.73C64.6898 74.1982 64.8669 74.6448 65.1249 75.0443C65.3828 75.4437 65.7166 75.7882 66.1071 76.0579C66.4975 76.3277 66.9371 76.5176 67.4005 76.6166L70.9284 77.3703C71.3918 77.4695 71.8702 77.476 72.3361 77.3894C72.8021 77.3028 73.2465 77.1248 73.644 76.8656C74.0414 76.6063 74.3842 76.2709 74.6526 75.8785C74.9211 75.4861 75.11 75.0444 75.2085 74.5786L75.9094 71.2704'
        fill='white'
      />
      <path
        d='M74.1198 69.8194L74.4679 68.1759C74.5324 67.9122 74.4899 67.6335 74.3499 67.4013C74.2099 67.169 73.9839 67.0021 73.7215 66.9374C73.459 66.8726 73.1818 66.9152 72.9507 67.0559C72.7195 67.1966 72.5535 67.4238 72.4891 67.6875L72.6596 66.8775C72.6991 66.7218 72.7069 66.5597 72.6826 66.4008C72.6582 66.242 72.6022 66.0898 72.5178 65.9533C72.4334 65.8168 72.3225 65.6988 72.1916 65.6065C72.0608 65.5142 71.9127 65.4493 71.7563 65.4159C71.5999 65.3825 71.4384 65.3812 71.2814 65.4121C71.1245 65.443 70.9754 65.5055 70.8431 65.5957C70.7108 65.6859 70.598 65.8021 70.5115 65.9372C70.425 66.0724 70.3665 66.2237 70.3396 66.3821L70.1901 67.0865C70.2296 66.9307 70.2375 66.7686 70.2131 66.6098C70.1887 66.451 70.1327 66.2988 70.0483 66.1623C69.9639 66.0258 69.853 65.9078 69.7221 65.8155C69.5913 65.7231 69.4432 65.6583 69.2868 65.6249C69.1304 65.5915 68.9689 65.5902 68.8119 65.6211C68.655 65.652 68.5059 65.7144 68.3736 65.8047C68.2413 65.8949 68.1285 66.0111 68.042 66.1462C67.9555 66.2813 67.897 66.4326 67.8701 66.591L67.5828 67.9458L65.2815 69.1878L64.6227 72.3152C64.5239 72.781 64.5174 73.2617 64.6036 73.73C64.6898 74.1982 64.8669 74.6448 65.1249 75.0443C65.3828 75.4437 65.7166 75.7882 66.1071 76.0579C66.4975 76.3277 66.9371 76.5176 67.4005 76.6166L70.9284 77.3703C71.3918 77.4695 71.8702 77.476 72.3361 77.3894C72.8021 77.3028 73.2465 77.1248 73.644 76.8656C74.0414 76.6063 74.3842 76.2709 74.6526 75.8785C74.9211 75.4861 75.11 75.0444 75.2085 74.5786L75.9094 71.2704'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M75.9045 71.2586L76.2572 69.5963C76.2919 69.4619 76.2992 69.3218 76.2786 69.1844C76.2579 69.0471 76.2098 68.9154 76.1372 68.7972C76.0645 68.6791 75.9688 68.5769 75.8558 68.497C75.7427 68.4171 75.6148 68.3609 75.4796 68.3321C75.3444 68.3032 75.2048 68.3021 75.0692 68.3289C74.9336 68.3557 74.8048 68.4099 74.6906 68.4881C74.5764 68.5663 74.4791 68.667 74.4047 68.784C74.3303 68.901 74.2802 69.032 74.2575 69.169L74.1196 69.8194'
        fill='white'
      />
      <path
        d='M75.9045 71.2586L76.2572 69.5963C76.2919 69.4619 76.2992 69.3218 76.2786 69.1844C76.2579 69.0471 76.2098 68.9154 76.1372 68.7972C76.0645 68.6791 75.9688 68.5769 75.8558 68.497C75.7427 68.4171 75.6148 68.3609 75.4796 68.3321C75.3444 68.3032 75.2048 68.3021 75.0692 68.3289C74.9336 68.3557 74.8048 68.4099 74.6906 68.4881C74.5764 68.5663 74.4791 68.667 74.4047 68.784C74.3303 68.901 74.2802 69.032 74.2575 69.169L74.1196 69.8194'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M75.9045 71.2587L75.2036 74.5669C75.1051 75.0327 74.9162 75.4744 74.6478 75.8668C74.3793 76.2592 74.0365 76.5946 73.6391 76.8538C73.2416 77.1131 72.7972 77.2911 72.3313 77.3777C71.8653 77.4643 71.387 77.4578 70.9235 77.3585L67.3957 76.6049C66.463 76.4037 65.6475 75.8394 65.1278 75.0355C64.6081 74.2315 64.4264 73.2534 64.6225 72.3152L65.2813 69.1996L67.5826 67.9575'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M67.0151 70.6295L67.8702 66.5911C67.9359 66.2831 68.1201 66.0137 68.3828 65.8417C68.6454 65.6697 68.9651 65.6091 69.272 65.6731V65.6731C69.5785 65.7391 69.8467 65.9243 70.0178 66.1882C70.189 66.4521 70.2492 66.7734 70.1855 67.0818L69.8281 68.7935'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M69.8281 68.7934L70.3397 66.3751C70.4054 66.067 70.5896 65.7976 70.8522 65.6256C71.1149 65.4536 71.4345 65.393 71.7414 65.457V65.457C72.0479 65.523 72.316 65.7082 72.4872 65.9721C72.6583 66.2361 72.7186 66.5573 72.6549 66.8658L72.1432 69.2841'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M72.1201 69.3921L72.4682 67.7486C72.5248 67.4822 72.6843 67.2493 72.9116 67.1009C73.1389 66.9526 73.4155 66.901 73.6807 66.9573V66.9573C73.8121 66.9852 73.9367 67.0389 74.0474 67.1153C74.1581 67.1917 74.2527 67.2893 74.3259 67.4024C74.399 67.5156 74.4492 67.6422 74.4736 67.7749C74.498 67.9077 74.496 68.0439 74.4679 68.1759L74.1199 69.8194'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M74.1196 69.8194L74.2575 69.169C74.3141 68.9026 74.4736 68.6697 74.7009 68.5213C74.9282 68.373 75.2048 68.3214 75.4699 68.3777V68.3777C75.735 68.4347 75.9667 68.5949 76.1143 68.8234C76.2619 69.0518 76.3133 69.3298 76.2572 69.5963L75.9044 71.2586'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M42.7663 26.8741H38.7011V22.7887C38.7011 22.5671 38.6135 22.3545 38.4575 22.1977C38.3015 22.0409 38.09 21.9529 37.8694 21.9529C37.6488 21.9529 37.4372 22.0409 37.2813 22.1977C37.1253 22.3545 37.0377 22.5671 37.0377 22.7887V26.8741H32.9748C32.7542 26.8741 32.5427 26.9622 32.3867 27.1189C32.2307 27.2757 32.1431 27.4883 32.1431 27.7099C32.1431 27.9316 32.2307 28.1442 32.3867 28.301C32.5427 28.4577 32.7542 28.5458 32.9748 28.5458H37.04V32.6358C37.04 32.8575 37.1276 33.0701 37.2836 33.2269C37.4396 33.3836 37.6511 33.4717 37.8717 33.4717C38.0923 33.4717 38.3039 33.3836 38.4598 33.2269C38.6158 33.0701 38.7035 32.8575 38.7035 32.6358V28.5505H42.7687C42.9891 28.5499 43.2002 28.4616 43.3561 28.305C43.5119 28.1484 43.5998 27.9361 43.6004 27.7146C43.601 27.6043 43.5799 27.4949 43.5382 27.3928C43.4965 27.2907 43.4352 27.1979 43.3576 27.1197C43.2801 27.0416 43.1879 26.9796 43.0864 26.9375C42.9849 26.8953 42.8761 26.8738 42.7663 26.8741Z'
        fill='#91A2B2'
      />
      <path
        d='M20.6416 36.519C20.6416 36.519 15.9689 63.1889 47.5934 63.7383'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-dasharray='1.88 1.88'
      />
      <path
        d='M15.6675 39.8719L20.8845 36.127L26.1108 41.0129'
        stroke='#7A8EA0'
        stroke-width='0.941176'
        stroke-miterlimit='10'
        stroke-dasharray='1.41 1.41'
      />
    </g>
    <defs>
      <clipPath id='clip0_12_6038'>
        <rect width='123' height='80' fill='white' transform='translate(0.5)' />
      </clipPath>
    </defs>
  </svg>
`;
const fileErrorSVG = `
  <svg
    width='102'
    height='80'
    viewBox='0 0 102 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_12_6329)'>
      <path
        opacity='0.2'
        d='M50.707 71.634C69.4847 71.634 84.707 56.4572 84.707 37.7357C84.707 19.0142 69.4847 3.8374 50.707 3.8374C31.9293 3.8374 16.707 19.0142 16.707 37.7357C16.707 56.4572 31.9293 71.634 50.707 71.634Z'
        fill='#BFC7D3'
      />
      <path
        d='M21.3174 68.5423H72.7526V10.2373C72.7526 8.73895 71.5354 7.52539 70.0326 7.52539H27.8726C26.3698 7.52539 25.1526 8.73895 25.1526 10.2373V64.5762C25.1526 65.6745 24.697 66.7254 23.8878 67.4712C23.3506 67.9661 22.8066 68.1966 22.6502 68.2576C22.1198 68.4745 21.6438 68.5288 21.3174 68.5423Z'
        fill='white'
      />
      <path
        d='M73.1605 68.9492H21.3173L21.3037 68.1356C21.7185 68.122 22.1197 68.0339 22.5005 67.878C22.6841 67.8034 23.1601 67.5865 23.6089 67.1729C24.3297 66.5085 24.7445 65.5593 24.7445 64.5763V10.2373C24.7445 8.51526 26.1453 7.11865 27.8725 7.11865H70.0325C71.7597 7.11865 73.1605 8.51526 73.1605 10.2373V68.9492ZM23.7109 68.1356H72.3445V10.2373C72.3445 8.96272 71.3041 7.93221 70.0325 7.93221H27.8725C26.5941 7.93221 25.5605 8.9695 25.5605 10.2373V64.5763C25.5605 65.7831 25.0505 66.9492 24.1665 67.7695C24.0101 67.9119 23.8605 68.0339 23.7109 68.1356Z'
        fill='#92A2B1'
      />
      <path
        d='M17.1699 51.8848H25.1531V64.5627C25.1531 66.7593 23.3647 68.5424 21.1615 68.5424C18.9583 68.5424 17.1699 66.7593 17.1699 64.5627V51.8848Z'
        fill='white'
      />
      <path
        d='M21.1613 68.9492C18.7337 68.9492 16.7617 66.9831 16.7617 64.5628V51.478H25.5609V64.5628C25.5609 66.9831 23.5889 68.9492 21.1613 68.9492ZM17.5777 52.2848V64.5628C17.5777 66.5357 19.1825 68.1357 21.1613 68.1357C23.1401 68.1357 24.7449 66.5357 24.7449 64.5628V52.2848H17.5777Z'
        fill='#92A2B1'
      />
      <path
        d='M77.835 68.7102L81.3435 63.7108L89.0156 69.0628C90.3973 70.0267 90.7353 71.9339 89.7685 73.3115C88.8017 74.6891 86.8888 75.0261 85.507 74.0622L77.835 68.7102Z'
        fill='white'
      />
      <path
        d='M87.2567 75.0237C86.5699 75.0237 85.8763 74.8203 85.2711 74.4L77.2607 68.8135L81.2387 63.1458L89.2491 68.7322C90.8131 69.8237 91.2007 71.9864 90.0991 73.5458C89.4259 74.5085 88.3447 75.0169 87.2499 75.0169L87.2567 75.0237ZM78.4031 68.6102L85.7403 73.7288C86.9371 74.5627 88.5963 74.2712 89.4327 73.078C90.2691 71.8847 89.9767 70.2305 88.7799 69.3966L81.4427 64.278L78.4031 68.6102Z'
        fill='#92A2B1'
      />
      <path
        d='M77.9116 63.2195L76.1924 65.6692L78.6495 67.3832L80.3686 64.9335L77.9116 63.2195Z'
        fill='white'
      />
      <path
        d='M78.7501 67.9457L75.6221 65.7627L77.8117 62.644L80.9397 64.8271L78.7501 67.9457ZM76.7577 65.5661L78.5461 66.8135L79.7973 65.0305L78.0089 63.783L76.7577 65.5661Z'
        fill='#92A2B1'
      />
      <path
        d='M63.1172 71.8103C72.4046 71.8103 79.9336 64.3038 79.9336 55.0442C79.9336 45.7845 72.4046 38.2781 63.1172 38.2781C53.8297 38.2781 46.3008 45.7845 46.3008 55.0442C46.3008 64.3038 53.8297 71.8103 63.1172 71.8103Z'
        fill='white'
      />
      <path
        d='M63.117 72.2171C53.6174 72.2171 45.8926 64.5154 45.8926 55.0442C45.8926 45.573 53.6174 37.8713 63.117 37.8713C72.6166 37.8713 80.3414 45.573 80.3414 55.0442C80.3414 64.5154 72.6166 72.2171 63.117 72.2171ZM63.117 38.6849C54.0662 38.6849 46.7086 46.0273 46.7086 55.0442C46.7086 64.0612 54.073 71.4035 63.117 71.4035C72.161 71.4035 79.5254 64.0612 79.5254 55.0442C79.5254 46.0273 72.161 38.6849 63.117 38.6849Z'
        fill='#92A2B1'
      />
      <path
        d='M63.1173 68.6508C70.6547 68.6508 76.7649 62.5589 76.7649 55.044C76.7649 47.5292 70.6547 41.4373 63.1173 41.4373C55.58 41.4373 49.4697 47.5292 49.4697 55.044C49.4697 62.5589 55.58 68.6508 63.1173 68.6508Z'
        fill='white'
      />
      <path
        d='M63.1171 69.0645C55.3651 69.0645 49.0615 62.7797 49.0615 55.0509C49.0615 47.3221 55.3651 41.0374 63.1171 41.0374C70.8691 41.0374 77.1727 47.3221 77.1727 55.0509C77.1727 62.7797 70.8691 69.0645 63.1171 69.0645ZM63.1171 41.8441C55.8139 41.8441 49.8775 47.7696 49.8775 55.0509C49.8775 62.3323 55.8207 68.2509 63.1171 68.2509C70.4135 68.2509 76.3567 62.3255 76.3567 55.0509C76.3567 47.7763 70.4135 41.8441 63.1171 41.8441Z'
        fill='#92A2B1'
      />
      <path
        d='M61.8252 57.512V57.2001C61.8252 56.0747 62.24 55.1798 63.6204 53.9595C64.4704 53.1934 64.6813 52.5967 64.6813 51.9188C64.6813 51.1662 64.2325 50.4544 63.1785 50.4544C62.0497 50.4544 61.6008 51.2001 61.4716 52.2035H59.248C59.3296 50.8205 60.2204 48.6713 63.2192 48.6849C66.0888 48.6984 66.9661 50.59 66.9661 51.9866C66.9661 53.1662 66.5784 53.9662 65.2592 55.1798C64.4364 55.9391 64.1644 56.5425 64.1644 57.3357V57.512H61.8185H61.8252ZM61.8252 61.4035V58.5764H64.1713V61.4035H61.8252Z'
        fill='#CFD7DF'
      />
      <path
        d='M46.3007 32.9492C46.1715 32.9492 46.0423 32.8882 45.9675 32.7797C45.8383 32.5967 45.8859 32.3391 46.0695 32.2102C46.6951 31.7763 48.0007 31.0441 49.7687 31.078C51.4279 31.1052 52.6519 31.7967 53.2367 32.2102C53.4203 32.3391 53.4679 32.5967 53.3387 32.7797C53.2095 32.9628 52.9579 33.0102 52.7675 32.8814C52.2575 32.5221 51.1899 31.9255 49.7551 31.8984C48.2115 31.8713 47.0827 32.5018 46.5455 32.8814C46.4707 32.9289 46.3891 32.956 46.3143 32.956L46.3007 32.9492Z'
        fill='#CFD7DF'
      />
      <path
        d='M38.9778 25.9798C38.8758 25.9798 38.7738 25.9459 38.6922 25.8646C38.529 25.7086 38.5222 25.451 38.6786 25.2883L42.8946 20.9086C43.051 20.7459 43.3094 20.7391 43.4726 20.8951C43.6358 21.051 43.6426 21.3086 43.4862 21.4713L39.2702 25.851C39.1886 25.9323 39.0798 25.973 38.9778 25.973V25.9798Z'
        fill='#CFD7DF'
      />
      <path
        d='M43.2817 25.8917C43.1797 25.8917 43.0777 25.8578 42.9961 25.7764L38.6033 21.573C38.4401 21.4171 38.4333 21.1595 38.5897 20.9968C38.7461 20.834 39.0045 20.8273 39.1677 20.9832L43.5605 25.1866C43.7237 25.3425 43.7305 25.6001 43.5741 25.7629C43.4925 25.8442 43.3837 25.8849 43.2817 25.8849V25.8917Z'
        fill='#CFD7DF'
      />
      <path
        d='M55.386 25.9798C55.284 25.9798 55.182 25.9459 55.1004 25.8646C54.9372 25.7086 54.9304 25.451 55.0868 25.2883L59.3028 20.9086C59.4592 20.7459 59.7176 20.7391 59.8808 20.8951C60.044 21.051 60.0508 21.3086 59.8944 21.4713L55.6784 25.851C55.5968 25.9323 55.488 25.973 55.386 25.973V25.9798Z'
        fill='#CFD7DF'
      />
      <path
        d='M59.6899 25.8917C59.5879 25.8917 59.4859 25.8578 59.4043 25.7764L55.0115 21.573C54.8483 21.4171 54.8415 21.1595 54.9979 20.9968C55.1543 20.834 55.4127 20.8273 55.5759 20.9832L59.9687 25.1866C60.1319 25.3425 60.1387 25.6001 59.9823 25.7629C59.9007 25.8442 59.7919 25.8849 59.6899 25.8849V25.8917Z'
        fill='#CFD7DF'
      />
      <path
        d='M95.1997 80.2305H91.4393C91.2149 80.2305 91.0312 80.0475 91.0312 79.8238C91.0312 79.6 91.2149 79.417 91.4393 79.417H95.1997C95.4241 79.417 95.6077 79.6 95.6077 79.8238C95.6077 80.0475 95.4241 80.2305 95.1997 80.2305Z'
        fill='#92A2B1'
      />
      <path
        d='M87.3522 80.2305H70.8826C70.6582 80.2305 70.4746 80.0475 70.4746 79.8238C70.4746 79.6 70.6582 79.417 70.8826 79.417H87.3522C87.5766 79.417 87.7602 79.6 87.7602 79.8238C87.7602 80.0475 87.5766 80.2305 87.3522 80.2305Z'
        fill='#92A2B1'
      />
      <path
        d='M66.9796 80.2305H6.7996C6.5752 80.2305 6.3916 80.0475 6.3916 79.8238C6.3916 79.6 6.5752 79.417 6.7996 79.417H66.9796C67.204 79.417 67.3876 79.6 67.3876 79.8238C67.3876 80.0475 67.204 80.2305 66.9796 80.2305Z'
        fill='#92A2B1'
      />
      <path
        d='M17.7611 11.9188H12.8855C12.6611 11.9188 12.4775 11.7357 12.4775 11.512C12.4775 11.2883 12.6611 11.1052 12.8855 11.1052H17.7611C17.9855 11.1052 18.1691 11.2883 18.1691 11.512C18.1691 11.7357 17.9855 11.9188 17.7611 11.9188Z'
        fill='#92A2B1'
      />
      <path
        d='M23.534 5.45089C23.3096 5.45089 23.126 5.26784 23.126 5.04411V0.176311C23.126 -0.0474177 23.3096 -0.230469 23.534 -0.230469C23.7584 -0.230469 23.942 -0.0474177 23.942 0.176311V5.04411C23.942 5.26784 23.7584 5.45089 23.534 5.45089Z'
        fill='#92A2B1'
      />
      <path
        d='M18.822 7.02376C18.7336 7.02376 18.6452 6.99664 18.5704 6.9424L14.7012 3.97969C14.5244 3.8441 14.4904 3.58647 14.6264 3.4102C14.7624 3.23393 15.0208 3.20003 15.1976 3.33562L19.0668 6.29833C19.2436 6.43393 19.2776 6.69155 19.1416 6.86782C19.06 6.96952 18.9376 7.02376 18.8152 7.02376H18.822Z'
        fill='#92A2B1'
      />
    </g>
    <defs>
      <clipPath id='clip0_12_6329'>
        <rect width='102' height='80' fill='white' />
      </clipPath>
    </defs>
  </svg>
`;
const iconImageType = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.96 2.5H5.04002C3.63722 2.5 2.50002 3.6372 2.50002 5.04V14.96C2.49735 15.6345 2.7641 16.2821 3.24102 16.759C3.71794 17.2359 4.36556 17.5027 5.04002 17.5H14.96C15.6345 17.5027 16.2821 17.2359 16.759 16.759C17.2359 16.2821 17.5027 15.6345 17.5 14.96V5.04C17.5 3.6372 16.3628 2.5 14.96 2.5ZM5.04002 3.9H14.96C15.5896 3.9 16.1 4.41039 16.1 5.04V10.34L13.97 8.21C13.6932 7.93544 13.2468 7.93544 12.97 8.21L8.75002 12.44L6.75002 10.44C6.61977 10.303 6.43903 10.2255 6.25002 10.2255C6.06101 10.2255 5.88028 10.303 5.75002 10.44L3.90002 12.34V5.04C3.90002 4.41039 4.41042 3.9 5.04002 3.9ZM4.04002 15.4C4.20983 15.8072 4.59932 16.0798 5.04002 16.1H15.01C15.4507 16.0798 15.8402 15.8072 16.01 15.4C16.073 15.2621 16.1038 15.1116 16.1 14.96V12.32L13.5 9.7L9.28002 13.94C9.14977 14.077 8.96903 14.1545 8.78002 14.1545C8.59101 14.1545 8.41027 14.077 8.28002 13.94L6.28002 11.94L3.95002 14.32V14.96C3.94627 15.1116 3.97705 15.2621 4.04002 15.4Z" fill="currentColor"/>
  </svg>  
`;
const iconFileType = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.49 6.42C16.4995 6.47962 16.4995 6.54038 16.49 6.6C16.49 6.62 16.5 6.65 16.5 6.65V15.3C16.5 16.7912 15.2912 18 13.8 18H6.2C4.70883 18 3.5 16.7912 3.5 15.3V4.7C3.5 3.20883 4.70883 2 6.2 2H11.9C11.967 2.01181 12.0314 2.03551 12.09 2.07H12.16C12.2348 2.10382 12.3026 2.1513 12.36 2.21L16.36 6.15C16.4182 6.20966 16.4625 6.28134 16.49 6.36V6.42ZM14.11 6L12.56 4.39V6H14.11ZM6.2 16.6H13.8C14.4989 16.6005 15.0731 16.0484 15.1 15.35V7.35001H11.9C11.5134 7.35001 11.2 7.0366 11.2 6.65001V3.40001H6.2C5.48203 3.40001 4.9 3.98204 4.9 4.70001V15.3C4.9 15.6448 5.03696 15.9754 5.28076 16.2192C5.52456 16.463 5.85522 16.6 6.2 16.6ZM7 9.34H13.05H13.1C13.4866 9.34 13.8 9.6534 13.8 10.04C13.8 10.4266 13.4866 10.74 13.1 10.74H7C6.6134 10.74 6.3 10.4266 6.3 10.04C6.3 9.6534 6.6134 9.34 7 9.34ZM13.05 13H7C6.6134 13 6.3 13.3134 6.3 13.7C6.3 14.0866 6.6134 14.4 7 14.4H13.1C13.3501 14.4 13.5812 14.2666 13.7062 14.05C13.8313 13.8334 13.8313 13.5666 13.7062 13.35C13.5812 13.1334 13.3501 13 13.1 13H13.05ZM9.11 7.09H7C6.6134 7.09 6.3 6.7766 6.3 6.39001C6.3 6.00341 6.6134 5.69001 7 5.69001H9.11C9.4966 5.69001 9.81 6.00341 9.81 6.39001C9.81 6.7766 9.4966 7.09 9.11 7.09Z" fill="currentColor"/>
  </svg>
`;
const iconAddedLibrary = '<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1875 2.7334C1.1875 1.62883 2.08293 0.733398 3.1875 0.733398H10.8131C11.9177 0.733398 12.8131 1.62883 12.8131 2.7334V14.518C12.8131 14.8375 12.4571 15.0281 12.1913 14.8509L7.2222 11.5382C7.08784 11.4486 6.9128 11.4486 6.77844 11.5382L1.80938 14.8509C1.54356 15.0281 1.1875 14.8375 1.1875 14.518V2.7334Z" fill="currentColor" stroke="currentColor" stroke-width="1.4"/></svg>';
const iconAddLibrary = '<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1875 2.7334C1.1875 1.62883 2.08293 0.733398 3.1875 0.733398H10.8131C11.9177 0.733398 12.8131 1.62883 12.8131 2.7334V14.518C12.8131 14.8375 12.4571 15.0281 12.1913 14.8509L7.2222 11.5382C7.08784 11.4486 6.9128 11.4486 6.77844 11.5382L1.80938 14.8509C1.54356 15.0281 1.1875 14.8375 1.1875 14.518V2.7334Z" stroke="currentColor" stroke-width="1.4"/></svg>';

const file2Css = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{width:100%;min-width:80px;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.fw-attachment{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-direction:column;flex-direction:column}.fw-attachment .fw-attachment-content{width:100%;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px;background-color:#f5f7f9;border-radius:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px);width:auto;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-icon{--fw-icon-size:18px;-webkit-margin-end:6px;margin-inline-end:6px}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-icon fw-icon{vertical-align:text-top}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-name{width:auto;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;color:#12344d;font-size:12px;font-weight:400;line-height:20px;word-break:break-word;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-file-extension{display:inline-block;width:auto;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;white-space:nowrap;color:#12344d;font-size:12px;font-weight:400;line-height:20px}.fw-attachment .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-size{display:inline-block;width:auto;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;margin:0;-webkit-margin-start:4px;margin-inline-start:4px;white-space:nowrap;color:#475867;font-size:12px;font-weight:400;line-height:20px;font-style:italic}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel{position:relative;width:16px;height:16px;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-spinner{position:absolute;inset-inline-end:-8px;pointer-events:none;line-height:0;-webkit-transform:scale(0.6);transform:scale(0.6)}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn{height:16px;width:16px;opacity:0;position:absolute;inset-inline-end:24px;inset-block-start:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:transparent}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn:hover,.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn:focus{cursor:pointer;pointer-events:initial}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn .fw-attachment-content-add-library-btn-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:12px;height:12px;--fw-icon-color:#fff}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{height:16px;width:16px;position:absolute;inset-inline-end:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:#92a2b1;border-radius:50%}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn:hover,.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn:focus{cursor:pointer;pointer-events:initial}.fw-attachment .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn .fw-attachment-content-delete-btn-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:12px;height:12px;--fw-icon-color:#fff}.fw-attachment .fw-attachment-content:hover .fw-attachment-content-left-panel,.fw-attachment .fw-attachment-content:focus .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px - 16px - 8px)}.fw-attachment .fw-attachment-content:hover .fw-attachment-content-right-panel,.fw-attachment .fw-attachment-content:focus .fw-attachment-content-right-panel{width:40px}.fw-attachment .fw-attachment-content:hover .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn,.fw-attachment .fw-attachment-content:focus .fw-attachment-content-right-panel .fw-attachment-content-add-library-btn{opacity:1}.fw-attachment .fw-attachment-content-error{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding-inline:8px;padding-block:4px;display:-ms-flexbox;display:flex;gap:8px}.fw-attachment .fw-attachment-content-error .fw-attachment-content-error-icon{height:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.fw-attachment .fw-attachment-content-error .fw-attachment-content-error-message{width:auto;margin:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start;white-space:nowrap;color:#c82124;font-size:12px;font-weight:400;line-height:20px}.fw-attachment .fw-attachment-content-error .fw-attachment-content-reupload-btn{display:inline-block;width:auto;cursor:pointer;height:18px;padding:0;border:none;font-weight:500;font-family:inherit;font-size:12px;background-color:transparent;background-image:none;color:#2c5cc5}.fw-attachment--error-state .fw-attachment-content{background-color:#ffecf0}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px) !important}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-name{color:#c82124}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-file-extension{color:#c82124}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-size{color:#c82124}.fw-attachment--error-state .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{background-color:#c82124}.fw-attachment--failed-state .fw-attachment-content{background-color:#ffecf0}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px) !important}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-name{color:#c82124}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-file-extension{color:#c82124}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-left-panel .fw-attachment-content-size{color:#c82124}.fw-attachment--failed-state .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{background-color:#c82124}.fw-attachment--loading-state .fw-attachment-content .fw-attachment-content-left-panel{max-width:calc(100% - 16px - 8px) !important}.fw-attachment--loading-state .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{background-color:transparent}.fw-attachment--loading-state .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn .fw-attachment-content-delete-btn-icon{--fw-icon-color:#2c5cc5}.fw-attachment--private-mode .fw-attachment-content{background-color:rgba(254, 220, 179, 0.5)}.fw-attachment--private-mode .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn{background-color:#e86f25}.fw-attachment--private-mode .fw-attachment-content .fw-attachment-content-right-panel .fw-attachment-content-delete-btn .fw-attachment-content-delete-btn-icon{--fw-icon-color:#fff}";

const File2 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.fwDelete = createEvent(this, "fwDelete", 7);
    this.fwModifyLibrary = createEvent(this, "fwModifyLibrary", 7);
    this.fwReupload = createEvent(this, "fwReupload", 7);
    /**
     * Name of the attachment file to be displayed (including the file extension)
     */
    this.label = '';
    /**
     * File type
     */
    this.type = null;
    /**
     * Size of the attachment in bytes
     */
    this.size = 0;
    /**
     * Boolean used to display size as passed or convert them to relatives like KB, MB etc...
     */
    this.parseSize = true;
    /**
     * Set private mode for different styles
     */
    this.isPrivateMode = false;
    /**
     * Error message text to display below the attachment
     */
    this.errorMessage = '';
    /**
     * Boolean value to set if the attachment is added in library or not
     */
    this.addedToLibrary = false;
    /**
     * State of the attachment for styling
     */
    this.state = 'normal';
    /**
     * Index order of the attachment file starting from 0
     */
    this.index = -1;
    /**
     * To enable library adding related feature
     */
    this.enableLibraryAdding = false;
    this.modifyLibraryHandler = async (event) => {
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      this.fwModifyLibrary.emit({
        index: this.index,
        value: this.value,
        state: this.state,
        type: this.addedToLibrary ? 'REMOVE_FROM_LIBRARY' : 'ADD_TO_LIBRARY',
      });
    };
    this.deleteHandler = async (event) => {
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      this.fwDelete.emit({
        index: this.index,
        value: this.value,
        state: this.state,
      });
    };
    this.reUploadHandler = async (event) => {
      if (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
      }
      this.fwReupload.emit({
        index: this.index,
        value: this.value,
        state: this.state,
      });
    };
  }
  componentDidRender() {
    const elSize = this.spanSize;
    if (elSize && !this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        const sizeW = elSize.clientWidth;
        const extensionW = this.spanExtension.clientWidth;
        if (sizeW > 0 || extensionW > 0) {
          this.spanName.style.maxWidth = `calc(100% - ${sizeW}px - 4px - ${extensionW})`;
        }
      });
      this.resizeObserver.observe(elSize);
    }
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  getFileSize() {
    const bytes = this.size;
    if (bytes === 0) {
      return ' (0 B)';
    }
    const k = KB_TO_BYTE;
    const dm = 2;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return ` (${parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]})`;
  }
  getFilenameAndExtension() {
    if (!this.label || this.label === '') {
      return ['', ''];
    }
    const numLastIndex = this.label.lastIndexOf('.');
    if (numLastIndex > -1) {
      const strFileExtension = this.label.substring(numLastIndex + 1);
      return [
        this.label.substring(0, numLastIndex),
        strFileExtension && strFileExtension !== ''
          ? `.${strFileExtension}`
          : '',
      ];
    }
    else {
      return [this.label, ''];
    }
  }
  render() {
    var _a;
    const strClassName = 'fw-attachment';
    const boolErrorState = this.state === 'error';
    const boolFailedState = this.state === 'failed';
    const boolLoadingState = this.state === 'loading';
    const boolNormalState = this.state === 'normal';
    let strBaseClassName = strClassName;
    if (!boolNormalState) {
      strBaseClassName += ` ${strClassName}--${this.state}-state`;
    }
    else if (this.isPrivateMode) {
      strBaseClassName += ` ${strClassName}--private-mode`;
    }
    const strSize = this.parseSize ? this.getFileSize() : this.size;
    const arrFilebreak = this.getFilenameAndExtension();
    const strFileName = arrFilebreak && arrFilebreak.length > 0 ? arrFilebreak[0] : '';
    const strFileExtension = arrFilebreak && arrFilebreak.length > 1 ? arrFilebreak[1] : '';
    return (h(Host, null, h("div", { class: strBaseClassName }, h("div", { class: `${strClassName}-content` }, h("div", { class: `${strClassName}-content-left-panel` }, h("span", { class: `${strClassName}-content-icon` }, h("fw-icon", { dataSvg: ((_a = this.type) === null || _a === void 0 ? void 0 : _a.startsWith('image/')) === true
        ? iconImageType
        : iconFileType, color: boolErrorState || boolFailedState ? '#d72d30' : '#264966' })), h("span", { class: `${strClassName}-content-name`, ref: (el) => (this.spanName = el) }, strFileName), h("span", { class: `${strClassName}-content-file-extension`, ref: (el) => (this.spanExtension = el) }, strFileExtension), h("span", { class: `${strClassName}-content-size`, ref: (el) => (this.spanSize = el) }, strSize)), h("div", { class: `${strClassName}-content-right-panel` }, this.enableLibraryAdding && boolNormalState && (h("fw-tooltip", { trigger: 'hover', content: this.addedToLibrary
        ? TranslationController.t('fileUploader.removeFromLibrary')
        : TranslationController.t('fileUploader.saveInLibrary'), hoist: true }, h("div", { id: this.addedToLibrary
        ? 'removeFromLibraryBtn'
        : 'addToLibraryBtn', class: `${strClassName}-content-add-library-btn`, role: 'button', tabindex: '-1', onClick: this.modifyLibraryHandler, onKeyDown: handleKeyDown(this.modifyLibraryHandler) }, h("fw-icon", { id: this.addedToLibrary
        ? 'removeFromLibraryBtnIcon'
        : 'addToLibraryBtnIcon', class: `${strClassName}-content-add-library-btn-icon`, dataSvg: this.addedToLibrary ? iconAddedLibrary : iconAddLibrary, color: this.addedToLibrary ? '#2C5CC5' : '#475867' })))), !boolLoadingState && (h("div", { class: `${strClassName}-content-delete-btn`, role: 'button', tabindex: '0', onClick: this.deleteHandler, onKeyDown: handleKeyDown(this.deleteHandler) }, h("fw-icon", { class: `${strClassName}-content-delete-btn-icon`, name: 'cross', size: 6, library: 'system' }))), boolLoadingState && (h("fw-spinner", { size: 'large', class: `${strClassName}-content-spinner` })))), (boolErrorState || boolFailedState) && (h("div", { class: `${strClassName}-content-error` }, h("span", { class: `${strClassName}-content-error-icon` }, h("fw-icon", { name: 'error', size: 12, color: '#d72d30' })), h("span", { class: `${strClassName}-content-error-message` }, this.errorMessage), (boolErrorState || boolFailedState) && (h("button", { class: `${strClassName}-content-reupload-btn`, onClick: this.reUploadHandler }, TranslationController.t('fileUploader2.retry'))))))));
  }
  get host() { return this; }
  static get style() { return file2Css; }
}, [1, "fw-file-2", {
    "label": [1],
    "type": [1],
    "size": [2],
    "parseSize": [4, "parse-size"],
    "isPrivateMode": [4, "is-private-mode"],
    "errorMessage": [1, "error-message"],
    "addedToLibrary": [1028, "added-to-library"],
    "state": [1025],
    "index": [2],
    "value": [8],
    "enableLibraryAdding": [4, "enable-library-adding"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-file-2", "fw-icon", "fw-popover", "fw-spinner", "fw-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-file-2":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, File2);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "fw-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "fw-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "fw-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { File2 as F, fileErrorSVG as a, defineCustomElement as d, fileDragSVG as f };
