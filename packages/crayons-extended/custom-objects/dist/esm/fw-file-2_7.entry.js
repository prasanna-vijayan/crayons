import { r as registerInstance, c as createEvent, h, i as Host, g as getElement } from './index-f435cf58.js';
import { h as handleKeyDown, r as renderHiddenField, f as findCheckedOption, w as watchForOptions, a as hasSlot, d as debounce } from './index-1063dee9.js';
import { T as TranslationController } from './Translation-1d30aa87.js';
import { K as KB_TO_BYTE, M as MB_TO_KB } from './index-5e4b8ca2.js';
import { F as FieldControl } from './field-control-a8116841.js';
import './index-fb937839.js';

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

const File2 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get host() { return getElement(this); }
};
File2.style = file2Css;

class UploaderFile {
  constructor(id, file, progress, lastServerResponse, error) {
    this.id = id;
    this.name = file.name;
    this.progress = progress || 0;
    this.size = file.size;
    this.type = file.type;
    this.file = file;
    this.error = error || '';
    this.lastServerResponse = lastServerResponse || null;
  }
  get state() {
    let state = 'normal';
    if (this.progress === 0 || this.progress === 100) {
      state = 'normal';
    }
    else if (this.progress < 0) {
      state = 'error';
    }
    else {
      state = 'loading';
    }
    return state;
  }
}

const fileUploader2Css = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;--max-attachment-block-width:320px;--max-attachment-block-height:auto}.file-uploader{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px;min-width:360px}.file-uploader__header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.file-uploader__header__block{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;line-height:24px}.file-uploader__header__block__title{font-weight:600;font-size:16px;letter-spacing:-0.32px;color:#12344d;-ms-flex-positive:0;flex-grow:0}.file-uploader__header__block__title--uniform{font-size:12px;color:#475867}.file-uploader__header__block__title.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.file-uploader__header__block__option{-ms-flex-positive:0;flex-grow:0}.file-uploader__header__block__option a{text-decoration:none;color:#2c5cc5;font-size:12px;letter-spacing:0.07px}.file-uploader__header__block__option a:hover,.file-uploader__header__block__option a:focus{cursor:pointer}.file-uploader__body{display:-ms-flexbox;display:flex;width:100%;min-width:320px;min-height:153px;background:#fff;-ms-flex-pack:center;justify-content:center;border-radius:8px}.file-uploader__body--uniform{-webkit-margin-before:-12px;margin-block-start:-12px}.file-uploader__body--hide{display:none}.file-uploader__body__dropzone,.file-uploader__body__files{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;-ms-flex-pack:center;justify-content:center}.file-uploader__body__dropzone{-ms-flex-align:center;align-items:center;cursor:pointer;border:1px dashed var(--fw-file-uploader-border, #b1bdc8);border-radius:8px}.file-uploader__body__dropzone--disabled{opacity:0.8}.file-uploader__body__dropzone--error{border:1px dashed var(--fw-file-uploader-error-border, #d72d30);}.file-uploader__body__dropzone--error:hover,.file-uploader__body__dropzone--error:focus{border:1px solid var(--fw-file-uploader-error-border, #d72d30)}.file-uploader__body__dropzone--error:focus-visible{outline:0}.file-uploader__body__dropzone:hover,.file-uploader__body__dropzone:focus{position:cursor}.file-uploader__body__dropzone__center{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;-ms-flex-pack:justify;justify-content:space-between}.file-uploader__body__dropzone__center__clickable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-inline:0;margin-block:auto;-webkit-padding-before:28px;padding-block-start:28px;-webkit-padding-after:32px;padding-block-end:32px}.file-uploader__body__dropzone__center__clickable__icon{-webkit-margin-after:7px;margin-block-end:7px}.file-uploader__body__dropzone__center__clickable__text,.file-uploader__body__dropzone__center__clickable__error{line-height:20px;font-size:14px;font-weight:500;color:#12344d;-webkit-margin-before:9px;margin-block-start:9px;-webkit-margin-after:3px;margin-block-end:3px}.file-uploader__body__dropzone__center__clickable__text .highlight,.file-uploader__body__dropzone__center__clickable__error .highlight{color:#2c5cc5}.file-uploader__body__dropzone__center__clickable__text .highlight:hover,.file-uploader__body__dropzone__center__clickable__text .highlight:focus,.file-uploader__body__dropzone__center__clickable__error .highlight:hover,.file-uploader__body__dropzone__center__clickable__error .highlight:focus{cursor:pointer}.file-uploader__body__dropzone__center__clickable__error{color:#c82124}.file-uploader__body__dropzone__center__clickable__description{line-height:20px;font-size:12px;color:#92a2b1}.file-uploader__body__files{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center}.file-uploader__body__files__center{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:12px}.file-uploader__body__files__restrict{max-width:var(--max-attachment-block-width);max-height:var(--max-attachment-block-height);overflow-y:auto}.file-uploader__body--on-drag{border:1px dashed var(--fw-file-uploader-border, #2c5cc5);background:#e5f2fd}";

let fileCount = 0;
const FileUploader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwChange = createEvent(this, "fwChange", 7);
    this.fwFileChange = createEvent(this, "fwFileChange", 7);
    this.fwFilesUploaded = createEvent(this, "fwFilesUploaded", 7);
    this.fwFileUploaded = createEvent(this, "fwFileUploaded", 7);
    this.fwFileReuploaded = createEvent(this, "fwFileReuploaded", 7);
    /**
     * name - field name
     */
    this.name = '';
    /**
     * Inline information text, hint text.
     */
    this.hintText = '';
    /**
     * accept - comma separated string. tells us what file formats file uploader should accept.
     */
    this.accept = '';
    /**
     * maxFileSize - maximum file size the file uploader must accept.
     */
    this.maxFileSize = 0;
    /**
     * acceptError - Error message to display when format is invalid.
     */
    // @i18n({ keyName: 'fileUploader2.acceptError' })
    this.acceptError = TranslationController.t('fileUploader2.acceptError');
    /**
     * maxFileSizeError - Error message to display when file size exceeds limit
     */
    // @i18n({ keyName: 'fileUploader2.maxFileSizeError' })
    this.maxFileSizeError = TranslationController.t('fileUploader2.maxFileSizeError');
    /**
     * totalFileSizeAllowedError - Total file size (combination of all files) allowed for upload.
     */
    this.totalFileSizeAllowedError = TranslationController.t('fileUploader2.totalFileSizeAllowedError');
    /**
     * maxFilesLimitError - Error message when going beyond files limit.
     */
    // @i18n({ keyName: 'fileUploader2.maxFilesLimitError' })
    this.maxFilesLimitError = TranslationController.t('fileUploader2.maxFilesLimitError');
    /**
     * actionURL - URL to make server call.
     */
    this.actionURL = '';
    /**
     * actionParams - additional information to send to server other than the file.
     */
    this.actionParams = {};
    /**
     * multiple - upload multiple files.
     */
    this.multiple = false;
    /**
     * Max files allowed to upload.
     */
    this.filesLimit = 10;
    /**
     * Max total size allowed for upload
     */
    this.totalFileSizeAllowed = 0;
    /**
     * Upload all files in one single shot
     */
    this.isBatchUpload = false;
    /**
     * modify request
     * @param xhr
     * @returns xhr
     */
    this.modifyRequest = (xhr) => xhr;
    /**
     * to load default values in file uploader component.
     */
    this.initialFiles = [];
    /**
     * restrict the width of the attachment in the file uploader
     */
    this.restrictAttachmentBlock = false;
    /**
     * Use this prop to show the label on the component.
     */
    this.hideLabel = true;
    /**
     * Use a simple interface for the single file mode.
     */
    this.simpleInterfaceForSingleMode = false;
    /**
     * field acts as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * To maintain the same label styling as other form elements.
     */
    this.isFormLabel = false;
    /**
     * errorText - errorText collection.
     * Mutable as this can be set from form control too based on form validations.
     */
    this.errorText = '';
    /**
     * files - files collection.
     */
    this.files = [];
    /**
     * private
     * fileInputElement
     */
    this.fileInputElement = null;
    /**
     * private
     * dropzoneContainer
     */
    this.dropzoneContainer = null;
    /**
     * private
     * fileUploadPromises
     */
    this.fileUploadPromises = {};
    /**
     * private
     * formDataCollection
     */
    this.formDataCollection = {};
    /**
     * private
     * isBatchUploadInProgress
     */
    this.isBatchUploadInProgress = false; /**
  
    * private
    * isInitialFilesChange Denotes if this is initial files change.
    */
    this.isInitialFilesChange = false;
  }
  /**
   * watcher filesChangeHandler
   * @param files files modified
   */
  filesChangeHandler(files) {
    if (!this.isInitialFilesChange) {
      this.fwChange.emit({
        name: this.name,
        files: files,
      });
    }
  }
  /**
   * componentWillLoad life cycle event
   */
  componentWillLoad() {
    this.handleInitialFilesChange(this.initialFiles);
  }
  handleInitialFilesChange(changedFiles) {
    this.isInitialFilesChange = true;
    this._reset(false, false);
    if (this.multiple) {
      changedFiles.forEach((initialFile) => this.setLocalFile(initialFile));
    }
    else {
      if (changedFiles.length) {
        this.setLocalFile(changedFiles[0]);
      }
    }
    this.isInitialFilesChange = false;
  }
  setLocalFile(initialFile) {
    this.addFileToFiles(initialFile.file, initialFile.progress, initialFile.lastServerResponse, initialFile.error);
    this.addFileToFormDataCollection(initialFile.file);
  }
  /**
   * private
   * isBatchAllow - will determine if this is a batch upload
   * @returns {boolean} isBatchAllow
   */
  isBatchAllow() {
    return this.isBatchUpload || !this.actionURL ? true : false;
  }
  /**
   * private
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  _getFiles() {
    return this.files;
  }
  /**
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  async getFiles() {
    return this._getFiles();
  }
  _getFilesList() {
    const data = new DataTransfer();
    this.files.forEach((file) => {
      const formDataFile = this.formDataCollection[file.id].get('file');
      data.items.add(formDataFile);
    });
    return data.files;
  }
  async getFilesList() {
    return this._getFilesList();
  }
  async setFocus() {
    this.dropzoneContainer.focus();
  }
  /**
   * private
   * reset file uploader
   */
  _reset(resetInput = true, resetErrors = true) {
    this.files = [];
    this.formDataCollection = {};
    this.fileUploadPromises = {};
    if (resetInput && this.fileInputElement) {
      this.fileInputElement.value = '';
    }
    if (resetErrors) {
      this.errorText = '';
    }
  }
  /**
   * reset file uploader
   */
  async reset() {
    this._reset();
  }
  /**
   * private
   * filesValidation validate collection of files
   * @param files files to be validated
   * @returns filesValidation
   */
  filesValidation(files) {
    let passed = true;
    const totalFiles = [...this.files, ...Array.from(files)];
    const totalSize = totalFiles.reduce((acc, obj) => acc + obj.size, 0);
    this.errorText = '';
    if (totalFiles.length > this.filesLimit) {
      this.errorText = this.maxFilesLimitError;
      passed = false;
    }
    else if (this.totalFileSizeAllowed !== 0 &&
      totalSize > this.totalFileSizeAllowed * MB_TO_KB * KB_TO_BYTE) {
      this.errorText = this.totalFileSizeAllowedError;
      passed = false;
    }
    else {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        passed = this.fileValidation(file);
        if (!passed) {
          break;
        }
      }
    }
    return passed;
  }
  /**
   * private
   * fileValidation validate a file for upload
   * @param file
   * @returns
   */
  fileValidation(file) {
    let isPassed = true;
    const fileExtension = file.name;
    const fileSize = file.size;
    const errors = [];
    if (this.accept) {
      isPassed = this.accept
        .split(',')
        .filter((fileType) => fileType !== '')
        .some((fileType) => fileExtension.includes(fileType.trim()));
      if (!isPassed) {
        errors.push(this.acceptError);
      }
    }
    if (this.maxFileSize !== 0) {
      if (fileSize > this.maxFileSize * MB_TO_KB * KB_TO_BYTE) {
        isPassed = false;
        errors.push(this.maxFileSizeError);
      }
    }
    this.errorText = errors.length ? errors[0] : '';
    return isPassed;
  }
  /**
   * private
   * addFileToFormDataCollection - add a file to formDataCollection state
   * @param file file to add in formDataCollection
   */
  addFileToFormDataCollection(file) {
    const formData = new FormData();
    formData.append('file', file);
    this.formDataCollection[fileCount] = formData;
  }
  /**
   * private
   * removeFileFromFormDataCollection - remove a file from the formDataCollection state
   * @param fileId id of the file
   */
  removeFileFromFormDataCollection(fileId) {
    delete this.formDataCollection[fileId];
  }
  /**
   * private
   * findFileIndex - find the index of file in files state
   * @param fileId if of the file
   * @returns fileIndex
   */
  findFileIndex(fileId) {
    return this.files.findIndex((file) => file.id === parseInt(fileId));
  }
  /**
   * private
   * addFileToFiles - Add the file to the files state
   * @param file file to add to the files state
   * @param progress current upload progress state of the file
   * @param lastServerResponse last response from the server
   * @param error error message from the upload
   * @returns
   */
  addFileToFiles(file, progress, lastServerResponse, error) {
    const uploaderFile = new UploaderFile(++fileCount, file, progress, lastServerResponse, error);
    this.files = [...this.files, uploaderFile];
    return uploaderFile;
  }
  /**
   * private
   * removeFileFromFiles - remove file from the files state
   * @param fileId id of the file
   */
  removeFileFromFiles(fileId) {
    const fileIndex = this.findFileIndex(fileId);
    const removedFile = this.files[fileIndex];
    if (fileIndex >= 0) {
      const beforeFiles = this.files.slice(0, fileIndex);
      const afterFiles = this.files.slice(fileIndex + 1, this.files.length + 1);
      this.files = [...beforeFiles, ...afterFiles];
    }
    return removedFile;
  }
  /**
   * private
   * updateFileInFiles - update the file object in the files state
   */
  updateFileInFiles(fileId, updateObject, updateAction) {
    const fileIndex = this.findFileIndex(fileId);
    if (fileIndex >= 0) {
      this.files = [
        ...this.files.slice(0, fileIndex),
        Object.assign(this.files[fileIndex], updateObject),
        ...this.files.slice(fileIndex + 1, this.files.length),
      ];
    }
    this.fwFileChange.emit({
      name: this.name,
      file: this.files[fileId],
      action: updateAction ? updateAction : 'unknown',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
  }
  /**
   * private
   * uploadFileLocally - upload the files locally to files and formDataCollection
   * @param file file to upload locally
   * @returns localFile local file state
   */
  uploadFileLocally(file) {
    const localFile = this.addFileToFiles(file);
    this.addFileToFormDataCollection(file);
    this.fwFileChange.emit({
      name: this.name,
      file: localFile,
      action: 'local-upload',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
    return localFile;
  }
  /**
   * private
   * removeFileLocally - remove the file from the local states files and formDataCollection
   * @param fileId id of the file
   */
  removeFileLocally(fileId) {
    const removedFile = this.removeFileFromFiles(fileId);
    this.removeFileFromFormDataCollection(fileId);
    if (this.files.length === 0) {
      this._reset();
    }
    return removedFile;
  }
  /**
   * removeFileByUser remove file action is taken by the user
   * @param fileId file ID to remove from files collection
   */
  removeFileLocallyByUser(fileId) {
    const removedFile = this.removeFileLocally(fileId);
    this.fwFileChange.emit({
      name: this.name,
      file: removedFile,
      action: 'local-remove',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
  }
  /**
   * private
   * uploadFile - upload file to the remote server.
   * @param fileId id of the file
   * @returns fileUploadPromise promise from the file upload that will return server response
   */
  uploadFile(fileId) {
    const formData = this.formDataCollection[fileId];
    this.updateFileInFiles(fileId, { progress: 1 }, 'remote-upload-progress');
    // adding extra information to formData before uploading
    for (const key in this.actionParams) {
      if (Object.prototype.hasOwnProperty.call(this.actionParams, key)) {
        formData.append(key, this.actionParams[key]);
      }
    }
    // creating and sending xhr requests
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (event) => this.updateFileInFiles(fileId, {
      progress: (event.loaded / event.total) * 100,
    }, 'remote-upload-progress'), false);
    const fileUploadPromise = new Promise((resolve, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          const serverResponse = {
            uploadStatus: xhr.status,
            response: xhr.response,
          };
          if (xhr.status === 200) {
            this.updateFileInFiles(fileId, { lastServerResponse: serverResponse }, 'remote-upload');
            resolve(Object.assign(Object.assign({}, serverResponse), { fileId: fileId }));
          }
          else {
            this.updateFileInFiles(fileId, {
              error: this.fileUploadError ||
                TranslationController.t('fileUploader2.fileUploadError'),
              progress: -1,
              lastServerResponse: serverResponse,
            }, 'remote-upload');
            reject(Object.assign(Object.assign({}, serverResponse), { fileId: fileId }));
          }
        }
      };
    });
    xhr.open('POST', this.actionURL);
    const modifiedRequest = this.modifyRequest(xhr);
    modifiedRequest.send(formData);
    return fileUploadPromise;
  }
  /**
   * uploadFile
   * @param fileId
   * @returns fileUploadPromise
   */
  async uploadFiles() {
    if (this.files.length &&
      this.isBatchAllow() &&
      !this.isBatchUploadInProgress) {
      this.isBatchUploadInProgress = true;
      for (const fileId in this.formDataCollection) {
        if (Object.prototype.hasOwnProperty.call(this.formDataCollection, fileId)) {
          const uploadPromise = this.uploadFile(fileId);
          this.fileUploadPromises[fileId] = uploadPromise;
        }
      }
      Promise.allSettled(Object.values(this.fileUploadPromises)).then((responses) => {
        let hasErrorFiles = false;
        this.fileUploadPromises = {};
        const responseValues = responses.map((response) => {
          var _a, _b;
          if (((_a = response.value) === null || _a === void 0 ? void 0 : _a.uploadStatus) === 200) {
            this.removeFileLocally((_b = response.value) === null || _b === void 0 ? void 0 : _b.fileId);
          }
          else {
            hasErrorFiles = true;
          }
          return response.value;
        });
        const responseValue = this.multiple
          ? responseValues
          : responseValues[0];
        this.fwFilesUploaded.emit(responseValue);
        if (!hasErrorFiles) {
          this.isBatchUploadInProgress = false;
        }
      });
    }
    else {
      console.log('uploadFiles is for batch upload');
    }
  }
  /**
   * retryFileUpload
   * @param fileId file ID to retry uploading to server
   */
  retryFileUpload(fileId) {
    this.updateFileInFiles(fileId, { error: '' }, 'remote-retry');
    const uploadPromise = this.uploadFile(fileId);
    uploadPromise.then((serverResponse) => {
      if (this.isBatchAllow()) {
        this.removeFileLocally(fileId);
        if (Object.keys(this.formDataCollection).length === 0) {
          this.isBatchUploadInProgress = false;
        }
      }
      this.fwFileReuploaded.emit(serverResponse);
    });
  }
  /**
   * private
   * fileHandler - handler for both drop and input change
   * @param event
   */
  fileHandler(event) {
    if (!this.multiple && this.files.length === 1) {
      this._reset(false);
    }
    const tempFiles = event.target.files || event.dataTransfer.files;
    let files = [];
    if (tempFiles.length) {
      files = this.multiple ? tempFiles : [tempFiles[0]];
    }
    if (files.length) {
      const passed = this.filesValidation(files);
      if (passed) {
        for (let index = 0; index < files.length; index++) {
          const file = files[index];
          const localFile = this.uploadFileLocally(file);
          if (!this.isBatchAllow()) {
            this.uploadFile(localFile.id).then((serverResponse) => {
              this.fwFileUploaded.emit(serverResponse);
            });
          }
        }
      }
    }
  }
  showSimpleInterface() {
    return (!this.multiple &&
      this.simpleInterfaceForSingleMode &&
      this.files.length === 1);
  }
  /**
   * private
   * drag and drop handler
   * @param event
   */
  dropHandler(event) {
    event.preventDefault();
    this.fileHandler(event);
  }
  /**
   * renderDropzone
   * @returns {JSX.Element}
   */
  renderDropzone() {
    return (h("div", { class: {
        'file-uploader__body__dropzone': true,
        'file-uploader__body__dropzone--disabled': this.isBatchUploadInProgress,
        'file-uploader__body__dropzone--error': !!this.errorText.length,
      }, key: 'dropzone', part: 'fw-file-uploader-dropzone', tabIndex: 0, onDrop: (event) => !this.isBatchUploadInProgress && this.dropHandler(event), onDragOver: (event) => event.preventDefault(), onClick: () => !this.isBatchUploadInProgress && this.fileInputElement.click(), onKeyUp: (event) => {
        if (event.key === 'Enter' || event.key === 'Space') {
          !this.isBatchUploadInProgress && this.fileInputElement.click();
        }
      }, ref: (el) => (this.dropzoneContainer = el), role: 'button' }, h("div", { class: 'file-uploader__body__dropzone__center' }, h("div", { class: 'file-uploader__body__dropzone__center__clickable', part: 'fw-file-uploader-clickable' }, h("div", { class: 'file-uploader__body__dropzone__center__clickable__icon' }, !this.errorText.length ? (h("div", { innerHTML: new DOMParser().parseFromString(fileDragSVG, 'text/html')
        .body.innerHTML })) : (h("div", { innerHTML: new DOMParser().parseFromString(fileErrorSVG, 'text/html')
        .body.innerHTML }))), !this.errorText.length ? (h("div", { class: 'file-uploader__body__dropzone__center__clickable__text', part: 'fw-file-uploader-text', innerHTML: this.text || TranslationController.t('fileUploader2.text') })) : (h("div", { class: 'file-uploader__body__dropzone__center__clickable__error', part: 'fw-file-uploader-error' }, this.errorText, ".", ' ', h("span", { class: 'highlight' }, TranslationController.t('fileUploader2.retry')))), this.description && (h("div", { class: 'file-uploader__body__dropzone__center__clickable__description', part: 'fw-file-uploader-desc' }, h("span", null, this.description)))))));
  }
  /**
   * renderFiles
   * @returns {JSX.Element}
   */
  renderFiles() {
    return this.files.length ? (h("div", { class: 'file-uploader__body__files', key: 'files' }, h("div", { class: {
        'file-uploader__body__files__restrict': this.restrictAttachmentBlock,
      } }, h("div", { class: 'file-uploader__body__files__center', part: 'fw-file-uploader-attachments-block' }, this.files.map((file) => {
      return (h("fw-file-2", { index: file.id, label: file.name, size: file.size, state: file.state, type: file.type, errorMessage: file.error, onFwDelete: (event) => {
          event.stopPropagation();
          this.removeFileLocallyByUser(event.detail.index);
        }, onFwReupload: (event) => {
          event.stopPropagation();
          this.retryFileUpload(event.detail.index);
        } }));
    }))))) : null;
  }
  /**
   * render
   * @returns {JSX.Element}
   */
  render() {
    const multipleFiles = this.multiple ? { multiple: true } : {};
    renderHiddenField(this.host, this.name, null, this._getFilesList());
    return (h("div", { class: 'file-uploader' }, (this.hintText.trim() !== '' || !this.hideLabel || this.required) && (h("div", { class: 'file-uploader__header' }, h("div", { class: 'file-uploader__header__block' }, (!this.hideLabel || this.required) && (h("div", { class: {
        'file-uploader__header__block__title': true,
        'file-uploader__header__block__title--uniform': this.isFormLabel,
        'required': this.required,
      } }, TranslationController.t('fileUploader2.attachFiles'))), h("div", { class: 'file-uploader__header__block__option' }, this.showSimpleInterface() && (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    h("a", { role: 'button', tabIndex: 0, onClick: () => this.fileInputElement.click(), onKeyDown: (ev) => ev.key === 'Enter' && this.fileInputElement.click() }, TranslationController.t('fileUploader2.uploadDifferentFile'))))), this.hintText.trim() !== '' ? (h("fw-inline-message", { open: true, type: 'info' }, this.hintText)) : null)), h("div", { class: {
        'file-uploader__body': true,
        'file-uploader__body--uniform': this.isFormLabel,
        'file-uploader__body--error': !!this.errorText.length,
        'file-uploader__body--hide': this.showSimpleInterface(),
      }, onDragOver: (ev) => {
        ev.currentTarget.classList.add('file-uploader__body--on-drag');
      }, onDragLeave: (ev) => {
        ev.currentTarget.classList.remove('file-uploader__body--on-drag');
      }, onDrop: (ev) => {
        ev.currentTarget.classList.remove('file-uploader__body--on-drag');
      } }, h("input", Object.assign({ type: 'file', name: this.name, hidden: true }, multipleFiles, { onChange: (ev) => {
        this.fileHandler(ev);
      }, accept: this.accept, ref: (el) => (this.fileInputElement = el) })), this.renderDropzone()), this.renderFiles()));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "files": ["filesChangeHandler"],
    "initialFiles": ["handleInitialFilesChange"]
  }; }
};
FileUploader.style = fileUploader2Css;

const nestedSelectCss$1 = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.nest_indent{-webkit-border-start:1px solid #cfd7df;border-inline-start:1px solid #cfd7df;padding-block:10px 0px;padding-inline:10px 0px}";

const NestedNode = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * State to maintain selectedOption
     */
    this.selectedOption = null;
    /**
     * Options to pass through and loop
     */
    this.options = [];
    /**
     * level to keep track of selected options and
     * reset on parent option changes
     */
    this.level = 0;
    /**
     * Name of the field value gets updated to
     */
    this.name = '';
    /**
     * Current selected value if passed from initialvalues
     */
    this.value = '';
    /**
     * label
     */
    this.label = '';
    /**
     * OptionValue path
     */
    this.optionValuePath = 'id';
    /**
     * optionLabelPath
     */
    this.optionLabelPath = 'value';
  }
  optionsChanged() {
    this.selectedOption = null;
    this.selectRef.setSelectedValues('');
  }
  changed(event) {
    var _a;
    console.log('IN CHANGE in Level' + this.level, event.target.level);
    if (!event.detail.level) {
      event.detail.level = this.level;
      if ((_a = event.detail.meta.selectedOptions[0]) === null || _a === void 0 ? void 0 : _a.choices) {
        this.selectedOption = event.detail.meta.selectedOptions[0];
      }
    }
  }
  componentWillLoad() {
    if (this.value) {
      this.selectedOption = this.options.find((item) => item[this.optionValuePath] === this.value);
    }
  }
  getFirstlevelNestedSelect() {
    if (!this.selectedOption) {
      return null;
    }
    const { value } = this.selectProps(this.selectedOption.name);
    return (h("div", { class: 'nest_indent' }, h("fw-nested-node", { options: this.selectedOption.choices, name: this.selectedOption.name, label: this.selectedOption.label, value: value, level: this.level + 1, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps })));
  }
  getNestedSelect() {
    if (!this.selectedOption || !this.selectedOption.choices) {
      return null;
    }
    const { value } = this.selectProps(this.selectedOption.name);
    return (h("fw-nested-node", { options: this.selectedOption.choices, name: this.selectedOption.name, label: this.selectedOption.label, value: value, level: this.level + 1, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps }));
  }
  render() {
    return (h("div", { class: 'nest' }, h("fw-select", { label: this.label, options: this.options, name: this.name, value: this.value, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, ref: (select) => (this.selectRef = select) }), this.level === 0
      ? this.getFirstlevelNestedSelect()
      : this.getNestedSelect()));
  }
  static get watchers() { return {
    "options": ["optionsChanged"]
  }; }
};
NestedNode.style = nestedSelectCss$1;

const nestedSelectCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.nest_indent{-webkit-border-start:1px solid #cfd7df;border-inline-start:1px solid #cfd7df;padding-block:10px 0px;padding-inline:10px 0px}";

const NestedSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwChange = createEvent(this, "fwChange", 7);
    this.selections = [];
    this.selectedItems = {};
    /**
     * Options to display
     */
    this.options = [];
    /**
     * Name of first level field
     */
    this.name = '';
    /**
     * label
     */
    this.label = '';
    /**
     * Initial value from first level choices
     */
    this.value = '';
    /**
     * OptionValuePath referred from field
     */
    this.optionValuePath = 'id';
    /**
     * OptionLabelPath referred from field
     */
    this.optionLabelPath = 'value';
  }
  changed(event) {
    if (!event.detail.meta) {
      return;
    }
    this.selections[event.detail.level] = event.detail.meta.selectedOptions[0];
    const itemsToRemove = this.selections.length - (event.detail.level + 1);
    if (itemsToRemove > 0) {
      this.selections = this.selections.slice(0, event.detail.level + 1);
    }
    this.getSelectedId(this.selections[event.detail.level], event.detail.name);
    if (!this.selections[event.detail.level].choices) {
      this.fwChange.emit(Object.assign({}, this.selectedItems));
    }
  }
  getSelectedId(selectedValues, name) {
    const id = selectedValues[this.optionValuePath];
    if (id) {
      this.selectedItems = Object.assign(Object.assign({}, this.selectedItems), { [name]: selectedValues[this.optionValuePath] });
    }
    else {
      delete this.selectedItems[name];
    }
  }
  render() {
    return (h("fw-nested-node", { options: this.options, name: this.name, value: this.value, label: this.label, optionValuePath: this.optionValuePath, optionLabelPath: this.optionLabelPath, selectProps: this.selectProps }));
  }
};
NestedSelect.style = nestedSelectCss;

const radioCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.radio-container{display:inline-block;position:relative;-webkit-padding-start:22px;padding-inline-start:22px;-webkit-margin-end:10px;margin-inline-end:10px;max-width:80ch;word-wrap:break-word}:host(:focus) input[type=radio]+label::before{border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5;border-color:#081824}:host(:focus) input[type=radio][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}:host(:hover) input[type=radio]+label::before{-webkit-box-shadow:0 0 0 5px #ebeff3;box-shadow:0 0 0 5px #ebeff3;border-color:#081824}:host(:hover) input[type=radio][disabled]+label{cursor:not-allowed}:host(:hover) input[type=radio][disabled]+label::before{-webkit-box-shadow:none;box-shadow:none;border:1px solid #dadfe3}#description{font-size:12px;color:#475867;letter-spacing:0;line-height:20px;position:relative;font-weight:400}input[type=radio]{display:none}input[type=radio]+label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;-webkit-margin-after:4px;margin-block-end:4px;vertical-align:middle;font-size:14px;line-height:20px;font-weight:400;color:#12344d}input[type=radio]+label .with-description{font-weight:600}input[type=radio]+label::before,input[type=radio]+label::after{content:\"\";display:block;position:absolute;inset-block-start:0;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (prefers-reduced-motion: reduce){input[type=radio]+label::before{-webkit-transition:none;transition:none}}input[type=radio]+label::before{inset-inline-start:0;border:1px solid #cfd7df;border-radius:50px;inset-block-start:4px;width:14px;height:14px;background:#fff;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}@media screen and (prefers-reduced-motion: reduce){input[type=radio]+label.error::before{-webkit-transition:none;transition:none}}input[type=radio]+label.error::before{inset-inline-start:0;border:1px solid #d72d30;border-radius:50px;inset-block-start:4px;width:14px;height:14px;background:#fff;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}@media screen and (prefers-reduced-motion: reduce){input[type=radio]+label::after{-webkit-transition:none;transition:none}}input[type=radio]+label::after{inset-inline-start:3px;border-radius:100%;width:8px;height:8px;opacity:0;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box}input[type=radio]:checked+label::before{background:#fff;border-color:#2c5cc5;-webkit-box-shadow:none;box-shadow:none}input[type=radio]:checked+label::after{border-radius:50%;background-color:#2c5cc5;opacity:1;inset-block-start:7px}input[type=radio]:checked:focus+label::before{border-color:#3868d3;-webkit-box-shadow:0 0 4px 1px rgba(44, 92, 197, 0.6);box-shadow:0 0 4px 1px rgba(44, 92, 197, 0.6)}input[type=radio]:checked:focus+label::after{background-color:#3868d3}input[type=radio][disabled]+label{color:#92a2b1}input[type=radio][disabled]+label .label-field{color:#92a2b1}input[type=radio][disabled]+label::before{border-color:#dadfe3;background-color:#ebeff3}input[type=radio][disabled]+label::after{border-color:#ebeff3;background-color:#dadfe3}input[type=radio][disabled]:checked+label{color:#92a2b1}:host(.fw-radio-group__radio){-webkit-margin-after:8px;margin-block-end:8px}:host(.fw-radio-group__radio--last){-webkit-margin-after:0px;margin-block-end:0px}";

const Radio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwSelect = createEvent(this, "fwSelect", 7);
    this.fwDeselect = createEvent(this, "fwDeselect", 7);
    this.fwFocus = createEvent(this, "fwFocus", 7);
    this.fwBlur = createEvent(this, "fwBlur", 7);
    this.fwChange = createEvent(this, "fwChange", 7);
    /**
     * Sets the state to selected. If the attribute’s value is undefined, the value is set to false.
     */
    this.checked = false;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Description to be displayed for the checkbox.
     */
    this.description = '';
    /**
     * @deprecated Use `description` instead.
     * Label displayed on the interface, for the check box.
     */
    this.label = '';
    /**
     * Identifier corresponding to the component, that is saved when the form data is saved.
     */
    this.value = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Theme based on which the radio button is styled.
     */
    this.state = 'normal';
  }
  componentDidLoad() {
    this.radio.checked = this.checked;
    this.radio.disabled = this.disabled;
  }
  checkChanged(isChecked) {
    if (!this.disabled) {
      if (isChecked) {
        this.fwSelect.emit({
          value: this.value,
          checked: true,
        });
      }
      else {
        this.fwDeselect.emit({
          value: this.value,
          checked: false,
        });
      }
    }
    this.radio.checked = isChecked;
  }
  disabledChanged(isDisabled) {
    this.radio.disabled = isDisabled;
  }
  onFocus() {
    this.fwFocus.emit();
  }
  onBlur(e) {
    this.fwBlur.emit({
      event: e,
      name: this.name,
    });
  }
  toggle(e) {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
    this.fwChange.emit({
      event: e,
      name: this.name,
      value: this.checked ? this.value : undefined,
    });
  }
  /**
   * Sets focus on a specific `fw-radio`.
   */
  async setFocus() {
    var _a;
    (_a = this.host) === null || _a === void 0 ? void 0 : _a.focus();
  }
  render() {
    return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    h(Host, { onClick: (e) => this.toggle(e), role: 'radio', tabIndex: '-1', "aria-labelledby": 'label', "aria-describedby": `description`, "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": this.checked ? 'true' : 'false', onFocus: () => this.onFocus(), onBlur: (e) => this.onBlur(e), "aria-invalid": this.state === 'error' }, h("div", { class: 'radio-container' }, h("input", { type: 'radio', ref: (el) => (this.radio = el), name: this.name }), h("label", { class: { error: this.state === 'error' } }, h("span", { id: 'label', class: {
        'with-description': this.description !== '',
      } }, h("slot", null)), this.description !== '' || this.label !== '' ? (h("div", { id: 'description' }, this.description ? this.description : this.label)) : ('')))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "checked": ["checkChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
Radio.style = radioCss;

const radioGroupCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}";

const RadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwChange = createEvent(this, "fwChange", 7);
    this.selectedIndex = 0;
    /**
     * If true, a radio group can be saved without selecting any option. If an option is selected, the selection can be cleared. If the attribute’s value is undefined, the value is set to false.
     */
    this.allowEmpty = false;
    /**
     * Label for the component
     */
    this.label = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Indicates the direction of the radio buttons alignment, defaults to vertical alignment.
     */
    this.orientation = 'column';
    /**
     * Specifies the input radio group as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Hint text displayed below the radio group.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the radio group.
     */
    this.warningText = '';
    /**
     * Error text displayed below the radio group.
     */
    this.errorText = '';
    /**
     * Theme based on which the radio group is styled.
     */
    this.state = 'normal';
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    this.onSelect = (ev) => {
      const selectedRadio = ev.target;
      if (selectedRadio) {
        this.value = selectedRadio.value;
      }
    };
    this.onDeselect = async (ev) => {
      const selectedRadio = ev.target;
      if (this.allowEmpty && selectedRadio.value === this.value) {
        this.value = undefined;
      }
      await this.updateRadios();
    };
  }
  async valueChanged() {
    await this.updateRadios();
  }
  handleKeydown(ev) {
    if (ev.code === 'ArrowDown' ||
      ev.code === 'ArrowRight' ||
      ev.code === 'ArrowLeft' ||
      ev.code === 'ArrowUp' ||
      ev.code === 'Space') {
      ev.preventDefault();
    }
  }
  handleKeyup(event) {
    const radios = this.radios;
    const supportedKeyStrokes = [
      'ArrowDown',
      'ArrowRight',
      'ArrowUp',
      'ArrowLeft',
      'Space',
    ];
    const previousSelected = this.selectedIndex;
    switch (event.code) {
      case 'ArrowDown':
      case 'ArrowRight':
        radios[previousSelected].setAttribute('tabindex', '-1');
        radios[previousSelected].checked = false;
        // set currently selectedIndex using roving tabindex technique
        this.selectedIndex = ++this.selectedIndex % radios.length;
        radios[this.selectedIndex].setAttribute('tabindex', '0');
        radios[this.selectedIndex].checked = true;
        radios[this.selectedIndex].focus();
        this.value = radios[this.selectedIndex].value;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        radios[previousSelected].setAttribute('tabindex', '-1');
        radios[previousSelected].checked = false;
        // set currently selectedIndex using roving tabindex technique
        this.selectedIndex =
          this.selectedIndex === 0 ? radios.length - 1 : --this.selectedIndex;
        radios[this.selectedIndex].setAttribute('tabindex', '0');
        radios[this.selectedIndex].checked = true;
        radios[this.selectedIndex].focus();
        this.value = radios[this.selectedIndex].value;
        break;
      case 'Space':
        /**
         * This case is executed only when none of the radios are checked
         * and we first tab into the radio group.
         */
        radios[0].checked = true;
        radios[0].focus();
        this.value = radios[0].value;
        break;
    }
    if (supportedKeyStrokes.includes(event.code)) {
      this.fwChange.emit({
        event,
        name: this.name,
        value: this.value,
      });
    }
  }
  async connectedCallback() {
    const el = this.host;
    this.radios = Array.from(this.host.querySelectorAll('fw-radio')).filter((radio) => !radio.disabled);
    if (this.value === undefined) {
      const radio = findCheckedOption(el, 'fw-radio');
      if (radio !== undefined) {
        await radio.componentOnReady();
        if (this.value === undefined) {
          this.value = radio.value;
        }
      }
    }
    this.mutationO = watchForOptions(el, 'fw-radio', async (newOption) => {
      if (newOption !== undefined) {
        newOption
          .componentOnReady()
          .then(() => {
          this.value = newOption.value;
        })
          .catch();
      }
      else {
        await this.updateRadios();
      }
    });
  }
  componentDidLoad() {
    const fieldControl = this.host.querySelector('.field-input');
    if (fieldControl) {
      fieldControl.style.display = 'flex';
      fieldControl.style.flexDirection = this.orientation;
    }
    const slottedElements = this.host.querySelectorAll('fw-radio');
    slottedElements.forEach((radio, index) => {
      if (this.orientation === 'column') {
        radio.classList.add('fw-radio-group__radio');
        radio.classList.toggle('fw-radio-group__radio--last', index === slottedElements.length - 1);
      }
    });
  }
  componentWillLoad() {
    this.checkSlotContent();
  }
  checkSlotContent() {
    this.hasHintTextSlot = hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }
  async updateRadios() {
    /**
     * Make sure we get all radios first
     * so values are up to date prior
     * to caching the radio group value
     */
    const radios = await this.radios;
    const { value } = this;
    let hasChecked = false;
    radios.forEach((radio, index) => {
      if (!hasChecked && radio.value === value) {
        // correct value for this radio
        // but this radio isn't checked yet
        // and we haven't found a checked yet
        hasChecked = true;
        radio.checked = true;
        radio.setAttribute('tabindex', '0');
        this.selectedIndex = index;
      }
      else {
        // this radio doesn't have the correct value
        // or the radio group has been already checked
        radio.setAttribute('tabindex', '-1');
        radio.checked = false;
      }
    });
    // Reset value if
    if (!hasChecked) {
      radios.length !== 0 && radios[0].setAttribute('tabindex', '0');
      this.selectedIndex = 0;
      this.value = undefined;
    }
  }
  getAriaDescribedBy() {
    if (this.state === 'normal')
      return `hint-${this.name}`;
    else if (this.state === 'error')
      return `error-${this.name}`;
    else if (this.state === 'warning')
      return `warning-${this.name}`;
    return null;
  }
  /**
   * Sets focus on a specific `fw-radio`.
   */
  async setFocus() {
    var _a, _b;
    const radios = this.radios;
    (_b = (_a = radios[0]) === null || _a === void 0 ? void 0 : _a.setFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  render() {
    const { host, name, value } = this;
    const hasLabel = !!this.label;
    const hasHintText = this.hintText ? true : this.hasHintTextSlot;
    const hasErrorText = this.errorText ? true : this.hasErrorTextSlot;
    const hasWarningText = this.warningText ? true : this.hasWarningTextSlot;
    const showHintText = this.state === 'normal' ? true : false;
    const showErrorText = this.state === 'error' ? true : false;
    const showWarningText = this.state === 'warning' ? true : false;
    const labelId = this.label && this.name
      ? `${this.label}-${this.name}`
      : this.label
        ? this.label
        : this.name && this.name;
    const hintTextId = `hint-${this.name}`;
    const warningTextId = `warning-${this.name}`;
    const errorTextId = `error-${this.name}`;
    renderHiddenField(host, name, value);
    return (h(Host, { role: 'radiogroup', "aria-labelledby": labelId, onFwSelect: this.onSelect, onFwDeselect: this.onDeselect, "aria-describedby": this.getAriaDescribedBy() }, h("div", { class: {
        'field-control': true,
      } }, hasLabel && (h("label", { id: labelId, class: {
        'field-control-label': true,
        'required': this.required,
      }, "aria-hidden": hasLabel ? 'false' : 'true' }, this.label)), h("div", { class: 'field-input' }, h("slot", null)), showHintText && hasHintText && (h("div", { id: hintTextId, class: 'field-control-hint-text', "aria-hidden": hasHintText ? 'false' : 'true' }, h("slot", { name: 'hint-text' }, this.hintText))), showErrorText && hasErrorText && (h("div", { id: errorTextId, class: 'field-control-error-text', "aria-hidden": hasErrorText ? 'false' : 'true' }, h("slot", { name: 'error-text' }, this.errorText))), showWarningText && hasWarningText && (h("div", { id: warningTextId, class: 'field-control-warning-text', "aria-hidden": hasWarningText ? 'false' : 'true' }, h("slot", { name: 'warning-text' }, this.warningText))))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
RadioGroup.style = radioGroupCss;

const textareaCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.field-control{position:relative}.field-control-label{display:block;font-size:12px;color:var(--fw-label-color, #475867);font-weight:600;-webkit-margin-after:4px;margin-block-end:4px;-webkit-padding-start:2px;padding-inline-start:2px;line-height:20px}.field-control-label.required::after{content:\"*\";position:relative;display:inline-block;inset-block-start:2px;font-size:14px;color:#d72d30;-webkit-padding-start:2px;padding-inline-start:2px;font-weight:700}.field-control-hint-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-hint-color, #acb6be);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-error-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-error-color, #d72d30);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.field-control-warning-text{font-family:-apple-system, blinkmacsystemfont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", arial, sans-serif;font-size:12px;line-height:20px;-webkit-margin-before:4px;margin-block-start:4px;-webkit-margin-after:0;margin-block-end:0;color:var(--fw-warning-color, #f8ab59);position:inherit;display:block;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.textarea-container{-webkit-margin-after:var(--fw-textarea-margin-bottom, 0px);margin-block-end:var(--fw-textarea-margin-bottom, 0px);width:inherit}.textarea-container-inner{display:block;width:var(--fw-textarea-width, 100%);position:relative}.textarea-container-inner textarea{border:0;border:1px solid #cfd7df;border-radius:4px;-webkit-padding-after:5px;padding-block-end:5px;padding-inline:12px;-webkit-padding-before:4px;padding-block-start:4px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;min-height:var(--fw-textarea-min-height, 24px);font-size:14px;font-weight:500;letter-spacing:0;line-height:20px;font-family:inherit;cursor:text;display:inline-block;color:var(--fw-textarea-input-color, #12344d);}@media screen and (prefers-reduced-motion: reduce){.textarea-container-inner textarea:hover,.textarea-container-inner textarea:focus{-webkit-transition:none;transition:none}}.textarea-container-inner textarea:hover{border:1px #475867 solid;-webkit-transition:0.2s linear;transition:0.2s linear}.textarea-container-inner textarea:focus{outline:none;background:#fff;border:1px solid transparent;-webkit-box-shadow:0 0 0 2px #2c5cc5;box-shadow:0 0 0 2px #2c5cc5}.textarea-container-inner textarea[disabled]{color:#92a2b1;background-color:#f5f7f9;border-style:solid}.textarea-container-inner textarea[disabled]:hover,.textarea-container-inner textarea[disabled]:focus{border:1px solid #cfd7df;cursor:not-allowed}.textarea-container-inner+.help-block{font-size:12px;-webkit-margin-before:3px;margin-block-start:3px;color:#92a2b1;position:inherit;-webkit-margin-after:0;margin-block-end:0;display:block;-webkit-padding-start:2px;padding-inline-start:2px}.textarea-container-inner.error>textarea{border-color:#d72d30}.textarea-container-inner.error>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:#d72d30}.textarea-container-inner.error>textarea:hover{border-color:#d72d30}.textarea-container-inner.error+.help-block{color:#d72d30}.textarea-container-inner.warning>textarea{border-color:#f8ab59}.textarea-container-inner.warning>textarea:focus{-webkit-box-shadow:none;box-shadow:none;border-color:#f8ab59}.textarea-container-inner.warning>textarea:hover{border-color:#f8ab59}.textarea-container-inner.warning+.help-block{color:#f8ab59}::-webkit-input-placeholder{color:#92a2b1;opacity:1}::-moz-placeholder{color:#92a2b1;opacity:1}:-ms-input-placeholder{color:#92a2b1;opacity:1}::-ms-input-placeholder{color:#92a2b1;opacity:1}::placeholder{color:#92a2b1;opacity:1}::-webkit-input-placeholder{color:#92a2b1}::-moz-placeholder{color:#92a2b1}:-ms-input-placeholder{color:#92a2b1}:-moz-placeholder{color:#92a2b1}.responsive{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}";

const Textarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fwFocus = createEvent(this, "fwFocus", 7);
    this.fwBlur = createEvent(this, "fwBlur", 7);
    this.fwInput = createEvent(this, "fwInput", 7);
    this.hasFocus = false;
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    /**
     * Label displayed on the interface, for the component.
     */
    this.label = '';
    /**
     * Default value displayed in the input box.
     */
    this.value = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Theme based on which the input box is styled.
     */
    this.state = 'normal';
    /**
     * Type of text wrapping used by the input box. If the value is hard, the text in the textarea is wrapped (contains line breaks) when the form data is saved. If the value is soft, the text in the textarea is saved as a single line, when the form data is saved.
     */
    this.wrap = 'soft';
    /**
     * Specifies the way in which the text area can be resized
     */
    this.resize = 'both';
    /**
     * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to false.
     */
    this.readonly = false;
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Disables the text area on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Hint text displayed below the text box.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the text box.
     */
    this.warningText = '';
    /**
     * Error text displayed below the text box.
     */
    this.errorText = '';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.fwInput.emit({
        event: ev,
        name: this.name,
        value: this.getValue(),
      });
    };
    this.onFocus = () => {
      this.hasFocus = true;
      this.fwFocus.emit();
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.fwBlur.emit({
        event: ev,
        name: this.name,
      });
    };
    this.debouncedResizeTextArea = debounce((_e) => {
      const lineBreaksCount = this.nativeInput.value.split('\n').length + 1;
      const rows = this.rows ? this.rows : 2;
      const isLineBreakBetweenRange = lineBreaksCount >= rows && lineBreaksCount <= this.maxRows;
      if (isLineBreakBetweenRange) {
        this.nativeInput.rows = lineBreaksCount;
      }
      if (lineBreaksCount <= rows) {
        this.nativeInput.rows = rows;
      }
      if (lineBreaksCount > this.maxRows) {
        this.nativeInput.rows = this.maxRows;
      }
    }, this, this.maxRowsDebounceTimer ? this.maxRowsDebounceTimer : 200);
  }
  getValue() {
    return this.value || '';
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  /**
   * Sets focus on a specific `fw-textarea`. Use this method instead of the global `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  rowsChangeHandler() {
    if (this.maxRows) {
      this.removeListeners();
      this.addListeners();
    }
  }
  maxRowsChangeHandler() {
    this.removeListeners();
    this.addListeners();
  }
  componentWillLoad() {
    this.checkSlotContent();
  }
  checkSlotContent() {
    this.hasHintTextSlot = hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  }
  getAriaDescribedBy() {
    if (this.state === 'normal')
      return `hint-${this.name}`;
    else if (this.state === 'error')
      return `error-${this.name}`;
    else if (this.state === 'warning')
      return `warning-${this.name}`;
    return null;
  }
  componentDidLoad() {
    if (this.maxRows) {
      this.addListeners();
    }
  }
  addListeners() {
    this.nativeInput.addEventListener('change', this.debouncedResizeTextArea);
    this.nativeInput.addEventListener('keydown', this.debouncedResizeTextArea);
  }
  removeListeners() {
    this.nativeInput.removeEventListener('change', this.debouncedResizeTextArea);
    this.nativeInput.removeEventListener('keydown', this.debouncedResizeTextArea);
  }
  render() {
    const { host, name, value } = this;
    const styleResizeTextArea = { resize: this.resize };
    renderHiddenField(host, name, value);
    return (h(FieldControl, { inputId: this.name, label: this.label, labelId: `${this.label}-${this.name}`, state: this.state, hintTextId: `hint-${this.name}`, hintText: this.hintText, hasHintTextSlot: this.hasHintTextSlot, errorTextId: `error-${this.name}`, errorText: this.errorText, hasErrorTextSlot: this.hasErrorTextSlot, warningTextId: `warning-${this.name}`, warningText: this.warningText, hasWarningTextSlot: this.hasWarningTextSlot, required: this.required }, h("div", { "aria-disabled": this.disabled, class: {
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
      } }, h("div", { class: 'textarea-container' }, h("div", { class: {
        'textarea-container-inner': true,
        [this.state]: true,
      } }, h("textarea", { class: {
        responsive: this.cols === undefined,
      }, style: styleResizeTextArea, ref: (input) => (this.nativeInput = input), disabled: this.disabled, name: this.name, placeholder: this.placeholder || '', minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, required: this.required, value: this.value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, rows: this.rows, "data-max-rows": this.maxRows, cols: this.cols, wrap: this.wrap, id: this.name, "aria-invalid": this.state === 'error', "aria-describedby": this.getAriaDescribedBy() }))))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "rows": ["rowsChangeHandler"],
    "maxRows": ["maxRowsChangeHandler"]
  }; }
};
Textarea.style = textareaCss;

export { File2 as fw_file_2, FileUploader as fw_file_uploader_2, NestedNode as fw_nested_node, NestedSelect as fw_nested_select, Radio as fw_radio, RadioGroup as fw_radio_group, Textarea as fw_textarea };
